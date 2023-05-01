#!/bin/bash

# Variaveis
BASE_URL=$1
CAMINHO_ARQUIVOS="../pdf"

# Se o BASE_URL não for passado, usar o localhost.
if [ -z "$BASE_URL" ]
then
  BASE_URL="http://localhost:3000"
fi

parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$parent_path"

mkdir -p $CAMINHO_ARQUIVOS

gerar_pdf () {
  TITULO=$1
  URL_PATH=$2
  FILE_NAME=$3

  gerar "$TITULO" "$BASE_URL" "$URL_PATH" "$FILE_NAME"
}

gerar () {
  TITULO=$1
  BASE_URL=$2
  URL_PATH=$3
  FILE_NAME=$4

  echo "========================"
  echo "TITULO: $TITULO"
  echo "BASE_URL: $BASE_URL"
  echo "URL_PATH: $URL_PATH"
  echo "FILE_NAME: $FILE_NAME"
  echo "========================"

  npx --yes mr-pdf-args \
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
    --outputPDFFilename="$CAMINHO_ARQUIVOS/$FILE_NAME.pdf" \
    --puppeteerArgs="--no-sandbox"

    echo "------------------------"
    echo "PDF gerado em $CAMINHO_ARQUIVOS/$FILE_NAME.pdf"
    echo "------------------------"

    # if folder "build" exists, copy the pdf to it
    # if [ -d "../build" ]
    # then
    #   mkdir -p "../build/pdf"
    #   cp "$CAMINHO_ARQUIVOS/$FILE_NAME.pdf" "../build/pdf/$FILE_NAME.pdf"
    # fi
}

# Gerar o PDF dos curso para a Germantech.
# gerar_pdf 'Titulo' 'URL' 'Nome do arquivo'
gerar_pdf 'Mini curso de DevOps' '/off/germantech' 'germantech'
