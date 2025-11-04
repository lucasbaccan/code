#!/bin/sh

chmod +x /app/docker/gerar_pdf.sh

dos2unix /app/docker/gerar_pdf.sh

git config --global --add safe.directory /app

npm ci mr-pdf-args

npm install --no-progress -g wait-on@7.2.0

echo "BASE_URL=${BASE_URL}"

# # Iniciar o servidor e esperar ele subir e depois gerar o pdf
npm run serve &
wait-on ${BASE_URL} && /app/docker/gerar_pdf.sh ${BASE_URL}

chmod -R 777 /app/pdf