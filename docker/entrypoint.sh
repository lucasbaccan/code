#!/bin/sh

chmod +x /app/docker/gerar_pdf.sh

git config --global --add safe.directory /app

npm install --no-progress -g wait-on

echo "BASE_URL=${BASE_URL}"

# # Iniciar o servidor e esperar ele subir e depois gerar o pdf
npm run serve &
wait-on ${BASE_URL} && ./docker/gerar_pdf.sh ${BASE_URL}

chmod -R 777 /app/build