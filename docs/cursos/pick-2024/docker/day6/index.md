---
id: index
title: Day 6
hide_title: false
hide_table_of_contents: false
sidebar_label: Day 6
---

import Center from "@site/src/components/Center";

## Sumário

- 🎥 Day6 - Intro - 03:47
- 🎥 Day6 - O meu primeiro Docker Compose - 12:49
- 🎥 Day6 - Criando e conectando mais de um container com o Compose - 11:18
- 🎥 Day6 - Utilizando Volumes com o Docker Compose - 09:26
- 🎥 Day6 - Buildando uma imagem de container com o Compose e aumentando o número de réplicas - 09:24
- 🎥 Day6 - Reservando e definindo recursos como CPU e memória - 08:29
- 📝 Teste teórico Day6 - 5 questões
- 🎥 Day6 - Usando Healthcheck no Docker Compose - 13:47
- 🎥 Day6 - Docker Compose review avançado - 48:16
- 🎥 Opa, esse Jeferson... - 00:52
- 🎥 Day6 - Encerramento - 01:51
- 📝 Exame Teórico do Day6 - 13 questões
- 📝 Desafio Day6 - Docker Compose
- ⌛ Feedback
- 🎙️ Sessão ao Vivo - 06/04/2024

**Legenda**  
🎙️ - Aula ao Vivo
🎥 - Aula gravada
📝 - Atividade
⌛ - Revisão/Reflexão

## Dia 6

Day 6 foi sobre Docker Compose, onde aprendemos a criar e conectar mais de um container com o Compose, utilizar Volumes com o Docker Compose, buildar uma imagem de container com o Compose e aumentar o número de réplicas, reservar e definir recursos como CPU e memória, usar Healthcheck no Docker Compose e revisão avançada do Docker Compose.

### O que é Docker Compose?

Docker Compose é um plugin do Docker que permite definir e executar aplicativos Docker multicontainer. Com ele, é possível definir os serviços, redes e volumes de um aplicativo em um arquivo YAML, e com um único comando, é possível criar e iniciar todos os serviços definidos no arquivo.

:::info
Página oficial do [Docker Compose](https://docs.docker.com/compose/)
:::

Vamos criar um arquivo de exemplo chamado `compose.yml`:

```yaml showLineNumbers
services:
  nginx:
    image: nginx:latest
    ports:
      - "8080:80"
```

E para rodar o arquivo, basta executar o comando:

```bash
docker-compose up
# ou
docker-compose up -d # para rodar em background
```

### Criando e conectando mais de um container com o Compose

Vamos criar um arquivo `compose.yml` com dois serviços: `giropops-senhas` e `redis`:

```yaml showLineNumbers
services:
  giropops-senhas:
    image: linuxtips/giropops-senhas:1.0
    ports:
      - "5000:5000"
    environment:
      - REDIS_HOST=redis
    networks:
      - giropops
  redis:
    image: redis
    ports:
      - "6379:6379"
    networks:
      - giropops

networks:
  giropops:
    driver: bridge
```

E para rodar o arquivo, basta executar o comando:

```bash
docker-compose up
```

Assim os containers `giropops-senhas` e `redis` estarão conectados em uma Network chamada `giropops`.

Por padrão, o Docker cria um DNS interno para os containers, então é possível acessar o container pelo nome do container, no caso acima, o `giropops-senhas` acessa o `redis` pelo nome `redis`.

### Utilizando Volumes com o Docker Compose

Vamos criar um arquivo `compose.yml` com um volume:

```yaml showLineNumbers
services:
  giropops-senhas:
    image: linuxtips/giropops-senhas:1.0
    ports:
      - "5000:5000"
    environment:
      - REDIS_HOST=redis
    volumes:
      - ./app:/app
      - app_data:/app_data

  redis:
    image: redis
    ports:
      - "6379:6379"

volumes:
  app_data:
```

E para rodar o arquivo, basta executar o comando:

```bash
docker-compose up
```

O volume `app_data` será criado automaticamente e o diretório `./app` será montado no container `giropops-senhas`. Esses volumes são persistentes, ou seja, os dados não serão perdidos quando o container for removido.

### Dockerfile + Docker Compose

Vamos criar um arquivo `Dockerfile` para buildar uma imagem de container:

```Dockerfile showLineNumbers
FROM nginx:latest
COPY index.html /usr/share/nginx/html/index.html
```

E um arquivo `compose.yml` para buildar a imagem e aumentar o número de réplicas:

```yaml showLineNumbers
services:
  web:
    build: .
    ports:
      - "8080:80"
```

E para rodar o arquivo, basta executar o comando:

```bash
docker-compose up 
```

Isso fará o build da imagem e rodará o container `web` com a imagem a partir do `Dockerfile`.

### Scale

Para aumentar o número de réplicas de um serviço, basta executar o comando:

```bash
docker-compose up --scale web=3
```

Isso criará 3 réplicas do serviço `web`. 

Você pode definir a quantidade de réplicas no arquivo `compose.yml`:

```yaml showLineNumbers
services:
  web:
    image: nginx:latest
    scale: 3
```

or 

```yaml showLineNumbers
services:
  web:
    image: nginx:latest
    deploy:
      replicas: 3
    update_config:
      parallelism: 2
      delay: 10s
```

### Reservando e definindo recursos como CPU e memória

Podemos definir um limite de CPU e memória para um container ou uma reserva de recursos:

```yaml showLineNumbers
services:
  giropops-senhas:
    image: linuxtips/giropops-senhas:1.0
    ports:
      - "5000:5000"
    environment:
      - REDIS_HOST=redis
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: '128m'
        reservations:
          cpus: '0.2'
          memory: '64m'
```

- **limits**: limita a quantidade de CPUs e memória que o container pode usar.
- **reservations**: define a quantidade de CPUs e memória que o container reserva.

### Dependências e Healthcheck

Podemos definir dependências entre os serviços e utilizar Healthcheck para verificar se o serviço está saudável:

```yaml showLineNumbers
services:
  giropops-senhas:
    image: linuxtips/giropops-senhas:1.0
    ports:
      - "5000:5000"
    environment:
      - REDIS_HOST=redis
    depends_on:
      - redis

  redis:
    image: redis
    ports:
      - "6379:6379"
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 1m
      timeout: 10s
      retries: 3
      start_period: 10s
```

- **depends_on**: define a ordem de inicialização dos serviços.
- **healthcheck**: define um comando para verificar se o serviço está saudável. Se o serviço não estiver saudável, os containers que dependem dele não serão iniciados.

:::info
Para mais informações sobre Healthcheck, acesse a [documentação oficial](https://docs.docker.com/compose/compose-file/compose-file-v3/#healthcheck).
:::

## Desafio

### Objetivo

Para tornar o desafio ainda mais interessante e educativo, vamos adicionar alguns "empecilhos" ao arquivo docker-compose.yml. Vocês terão que identificar e corrigir esses problemas para que a aplicação Giropops Senhas funcione corretamente.

### Solução

O arquivo docker file tinha vários erros, dentre eles:

- Serviço sem imagem
- Porta do serviço com espaço entre os valores
- Network com nome errado
- Volume com nome errado e tipo errado
- Não definido environment para o serviço giropops-senhas
- Driver de rede incorreto
- Typo de volume incorreto

Após realizar as correções, o comando `docker-compose up` foi executado e a aplicação Giropops Senhas funcionou corretamente.