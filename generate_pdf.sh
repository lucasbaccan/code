#!/bin/bash

# "Atualizar" o diretorio de trabalho para a pasta onde está o script
# assim os caminhos relativos ao diretorio de trabalho não vão ter problema
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$parent_path"

# Get current branch
BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo "Branch atual: $BRANCH"

# Change branch to "gh-pages"
git checkout gh-pages

# Atualizar o repositório
git pull origin gh-pages
git reset --hard origin/gh-pages

CAMINHO_ARQUIVOS="./pdf"

mkdir -p $CAMINHO_ARQUIVOS

# Gerar curso de DevOps
gerar_pdf_producao () {
  TITULO=$1
  URL_PATH=$2
  FILE_NAME=$3

  echo "Gerar PDF do site em produção"

  gerar_pdf "$TITULO" "https://code.lucasbaccan.com.br" "$URL_PATH" "$FILE_NAME"
}

gerar_pdf_localhost () {
  TITULO=$1
  URL_PATH=$2
  FILE_NAME=$3

  echo "Gerar PDF do site em localhost"

  gerar_pdf "$TITULO" "http://localhost:3000" "$URL_PATH" "$FILE_NAME"
}

gerar_pdf () {
  TITULO=$1
  BASE_URL=$2
  URL_PATH=$3
  FILE_NAME=$4

  echo "Variaveis"
  echo "TITULO: $TITULO"
  echo "BASE_URL: $BASE_URL"
  echo "URL_PATH: $URL_PATH"
  echo "FILE_NAME: $FILE_NAME"

  npx mr-pdf \
    --initialDocURLs=$BASE_URL$URL_PATH \
    --contentSelector="main" \
    --paginationSelector="nav > a.pagination-nav__link.pagination-nav__link--next" \
    --excludeSelectors="header.navbar,aside.sidebar,footer,.global-ui,.page-nav,article > nav.theme-doc-breadcrumbs" \
    --coverImage="https://code.lucasbaccan.com.br/img/programmer.png" \
    --coverTitle="$TITULO" \
    --coverSub=" \
    <p><h4>Feito por <h2>Lucas Elias Baccan</h2></h4><p> \
    <a href='https://code.lucasbaccan.com.br$URL_PATH'>https://code.lucasbaccan.com.br$URL_PATH</a> \
    <br /> \
    " \
    --outputPDFFilename="$CAMINHO_ARQUIVOS/$FILE_NAME.pdf"
}

# Gerar o PDF dos curso para a Germantech.
gerar_pdf_producao 'Mini curso de DevOps' "/off/germantech" "germantech"

git add ./pdf/*.pdf
git commit -am "Generate PDF"
git push origin gh-pages

# Change branch to "$BRANCH"
git checkout $BRANCH