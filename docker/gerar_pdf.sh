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
  FIND_NEXT_PAGE=${4:-true}

  gerar "$TITULO" "$BASE_URL" "$URL_PATH" "$FILE_NAME" "$FIND_NEXT_PAGE"
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
  echo "FIND_NEXT_PAGE: $FIND_NEXT_PAGE"
  echo "========================"

  npx --yes docs-to-pdf docusaurus \
  --version=3 \
  --baseUrl="$BASE_URL" \
  --initialDocURLs="$BASE_URL$URL_PATH" \
  --excludeSelectors="header.navbar,aside.sidebar,footer,.global-ui,.page-nav,article > nav.theme-doc-breadcrumbs" \
  --restrictPaths \
  --coverImage="https://code.lucasbaccan.com.br/img/programmer.png" \
  --coverTitle="$TITULO" \
  --outputPDFFilename="$CAMINHO_ARQUIVOS/$FILE_NAME.pdf" \
  --puppeteerArgs="--no-sandbox" \
  --coverSub=" \
    <p><h4>Feito por <h2>Lucas Elias Baccan</h2></h4><p> \
    <a href='https://code.lucasbaccan.com.br$URL_PATH'>https://code.lucasbaccan.com.br$URL_PATH</a> \
    <br /> \
    " \
  --tocTitle="Sumário" 


    echo "------------------------"
    echo "PDF gerado em $CAMINHO_ARQUIVOS/$FILE_NAME.pdf"
    echo "------------------------"

}

# Gerar o PDF dos curso para a Germantech.
# gerar_pdf 'Titulo' 'URL' 'Nome do arquivo'
gerar_pdf 'Tutorial Docker' '/tutorial/docker/' 'curso-docker'

