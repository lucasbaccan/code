#!/bin/bash
# Gerar build do site
npm run build

# Enviar
surge --project "./build/" --domain "demo.code.lucasbaccan.com.br"

# Remover
# surge teardown "http://demo.code.lucasbaccan.com.br"