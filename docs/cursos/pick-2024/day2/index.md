---
id: index
title: Day 2
hide_title: false
hide_table_of_contents: false
sidebar_label: Day 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Sumário

- 🎥 Day2 - O que iremos ver no dia de hoje? - 01:23
- 🎥 Day2 - O que são imagens de container? - 07:24
- 🎥 Day2 - O meu primeiro Dockerfile - 13:47
- 📖 Dockerfile
- 🎥 Day2 - Conhecendo mais paramêtros no Dockerfile - 10:44
- 📖 Dockerfile
- 🎥 Day2 - Dockerfile e o EntryPoint - 10:13
- 📖 Dockerfile
- 🎥 Day2 - Adicionando HEALTHCHECK ao nosso Dockerfile - 12:07
- 📖 Dockerfile
- 🎥 Day2 - Utilizando o ADD para arquivos compactados - 03:31
- 📖 Dockerfile
- 📖 Descomplicando o Dockerfile
- 🎥 Day2 - Desafio prático do Day2 - 01:57
- 🎥 Day2 - Desafio
- 🎥 Day2 - O MultiStage no Dockerfile - 18:41
- 📖 MultiStage
- 🎥 Day2 - O ENV e o ARG no Dockerfile - 10:41
- 📖 Flash Cards - Dockerfile
- 🎥 Day2- Definindo Volume no Dockerfile - 14:09
- 🎥 Day2 - Pull, Push e o Dockerhub - 16:01
- 📖 Glossário de Dockerfile
- 📝 Exercicio de Fixação - Dockerfile - 5 questões
- 📖 Compartilhando nossas imagens e o DockerHub
- 🎥 Day2 - Docker Login - 04:58
- 🎥 Day2 - Encerramento - 00:53
- 📝 Exame teórico do Day-2 - 10 questões
- ⌛ Hora de Refletir sobre a sua resposta no Day2 - 1 questões
- 📖 Timeline: Criação de uma Imagem Docker
- 🎥 Day2 - Sobre o Segundo Desafio prático do Day2 - 01:46
- 📝 Day2 - Segundo Desafio prático do Day2
- ⌛ Seu diário do Day2 - 2 questões

**Legenda**  
🎥 - Aula gravada
📖 - Material complementar
📝 - Atividade
⌛ - Revisão/Reflexão

## Dia 2

Day 2, o treinamento continua com foco em Dockerfiles.

### Imagem de container

Imagem de container é um arquivo que contém todas as dependências e configurações necessárias para executar um container. É um arquivo de somente leitura, e é composto por camadas, onde cada camada é uma mudança no sistema de arquivos.

### Dockerfile

Dockerfile é um arquivo de texto que contém todas as instruções necessárias para construir uma imagem de container. Ele é composto por uma série de instruções, cada uma representando uma camada da imagem.

O arquivo tem que ter o nome `Dockerfile` e deve estar no diretório raiz do projeto. Tem que ser a primeira letra maiúscula e o restante minúscula.

- **FROM**: Indica a imagem base que será utilizada.
- **RUN**: Executa um comando no container.
- **EXPOSE**: Informa a porta que o container irá expor.
- **CMD**: Define o comando que será executado quando o container for iniciado.

#### Exemplo

```dockerfile
FROM ubuntu:22.04
RUN apt-get update && apt-get install -y nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Para construir uma imagem a partir de um Dockerfile, utilizamos o comando `docker build`. O comando cria uma imagem a partir de um Dockerfile e de um contexto.

```bash
docker build -t day2-nginx:1 .
# ou nesse projeto
docker build -t day2-nginx:1 -f docs/cursos/pick-2024/day2/Dockerfile.1 .
```

e para rodar o container

```bash
docker run -d -p 8080:80 day2-nginx:1
```

### Aprofundando no Dockerfile - 1 (COPY, WORKDIR, ENV e USER)

- **COPY**: Copia arquivos do host para o container.
- **WORKDIR**: Define o diretório de trabalho.
- **ENV**: Define variáveis de ambiente.
- **USER**: Define o usuário que executará os comandos.

#### Exemplo 2

```dockerfile
FROM ubuntu:22.04
RUN apt-get update && apt-get install -y nginx && rm -rf /var/lib/apt/lists/*
EXPOSE 80
COPY index.html /var/www/html/index.html
CMD ["nginx", "-g", "daemon off;"]
WORKDIR /var/www/html
ENV APP_VERSION=1.0.0
```

Para construir a imagem rodamos o comando `docker build`:

```bash
docker build -t day2-nginx:2 .
# ou nesse projeto
docker build -t day2-nginx:2 -f docs/cursos/pick-2024/day2/Dockerfile.2 ./docs/cursos/pick-2024/day2/
```

e para rodar o container

```bash
docker run -d -p 8080:80 day2-nginx:2
```

### Aprofundando no Dockerfile - 2 (ENTRYPOINT e CMD)

- **ENTRYPOINT**: Define o comando que será executado quando o container for iniciado.

:::note
O `ENTRYPOINT` é utilizado para definir o comando que será executado quando o container for iniciado. Ele é utilizado para definir o comando principal do container, e é possível passar argumentos para o comando. Já o `CMD` é utilizado para passar argumentos para o `ENTRYPOINT`.
:::

#### Exemplo 3

```dockerfile
FROM ubuntu:22.04
LABEL maintainer="@lucasbaccan.com.br"
RUN apt-get update && apt-get install -y nginx && rm -rf /var/lib/apt/lists/*
EXPOSE 80
COPY index.html /var/www/html/index.html
WORKDIR /var/www/html
ENV APP_VERSION=1.0.0
ENTRYPOINT [ "nginx" ]
CMD ["-g", "daemon off;"]
```

Para construir a imagem rodamos o comando `docker build`:

```bash
docker build -t day2-nginx:3 .
# ou nesse projeto
docker build -t day2-nginx:3 -f docs/cursos/pick-2024/day2/Dockerfile.3 ./docs/cursos/pick-2024/day2/
```

e para rodar o container

```bash
docker run -d -p 8080:80 day2-nginx:3
```

### Aprofundando no Dockerfile - 3 (ADD e HEALTHCHECK)

- **ADD**: Copia arquivos do host para o container, e também pode ser utilizado para copiar arquivos compactados e até mesmo URLs. Só que arquivos compactados em URLs não são descompactados automaticamente.
- **HEALTHCHECK**: Define um comando que será executado para verificar a saúde do container.

#### Exemplo 4

```dockerfile
FROM ubuntu:22.04
LABEL maintainer="@lucasbaccan.com.br"
RUN apt-get update && apt-get install -y nginx curl && rm -rf /var/lib/apt/lists/*
EXPOSE 80
COPY index.html /var/www/html/index.html
WORKDIR /var/www/html
ENV APP_VERSION=1.0.0
ENTRYPOINT [ "nginx" ]
CMD ["-g", "daemon off;"]
HEALTHCHECK --interval=5s --timeout=3s --start-period=5s --retries=3 CMD curl -f http://localhost/ || exit 1
```

Para construir a imagem rodamos o comando `docker build`:

```bash
docker build -t day2-nginx:4 .
# ou nesse projeto
docker build -t day2-nginx:4 -f docs/cursos/pick-2024/day2/Dockerfile.4 ./docs/cursos/pick-2024/day2/
```

e para rodar o container

```bash
docker run -d -p 8080:80 day2-nginx:4
```

### MultiStage

O MultiStage é uma funcionalidade do Docker que permite criar imagens mais leves e seguras. Com ele, é possível criar imagens intermediárias para compilar e gerar artefatos, e depois copiar esses artefatos para uma imagem final.

#### Exemplo 5

Sem o MultiStage

```dockerfile
FROM golang:1.18
WORKDIR /app
# COPY . ./
COPY ./hello.go ./
RUN go mod init hello
RUN go build -o /app/hello
CMD ["/app/hello"]
```

Agora para construir e rodar o container

```bash
docker build -t day2-golang:1 -f docs/cursos/pick-2024/day2/Dockerfile.5 ./docs/cursos/pick-2024/day2/
docker run -d day2-golang:1
```

Com o MultiStage

```dockerfile
FROM golang:1.18 AS builder
WORKDIR /app
COPY ./hello.go ./
RUN go mod init hello
RUN go build -o /app/hello

FROM alpine:3.19
COPY --from=builder /app/hello /app/hello
CMD ["/app/hello"]
```

Agora para construir e rodar o container

```bash
docker build -t day2-golang:2 -f docs/cursos/pick-2024/day2/Dockerfile.6 ./docs/cursos/pick-2024/day2/
docker run -d day2-golang:2
```

A imagem final é menor e mais segura.

```bash
$ docker image ls
REPOSITORY    TAG       IMAGE ID       CREATED              SIZE
day2-golang   2         b8ee72e1448b   30 seconds ago        9.14MB
day2-golang   1         f7e8f59cda1b   1 minute ago         967MB
```

### Aprofundando no Dockerfile - 4 (ENV e ARG)

- **ENV**: Define variáveis de ambiente.
- **ARG**: Define argumentos que podem ser passados durante a construção da imagem. Ele só é acessível durante a construção da imagem, e não durante a execução do container.

Você precisa passar o argumento na hora de construir a imagem.

#### Exemplo 6

```dockerfile
FROM alpine:3.19
ARG APP_VERSION
ENV APP_VERSION=${APP_VERSION}
CMD ["sh", "-c", "echo $APP_VERSION"]
```

Para construir a imagem rodamos o comando `docker build`:

```bash
docker build -t day2-alpine:1 --build-arg APP_VERSION=1.0.0 -f docs/cursos/pick-2024/day2/Dockerfile.7 ./docs/cursos/pick-2024/day2/
docker run day2-alpine:1
```

Podemos inspecionar a imagem para ver a variável de ambiente.

```bash
docker inspect day2-alpine:1
# ...
# "StdinOnce": false,
# "Env": [
#     "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
#     "APP_VERSION=1.0.0"
# ],
# "Cmd": [
# ...
```

### Aprofundando no Dockerfile - 5 (VOLUME e SHELL)

- **VOLUME**: Define um volume no container.
- **SHELL**: Define o shell que será utilizado para executar os comandos.

#### Exemplo 7

```dockerfile
FROM golang:1.18 AS builder
WORKDIR /app
COPY ./hello.go ./
RUN go mod init hello
RUN go build -o /app/hello

FROM alpine:3.19
COPY --from=builder /app/hello /app/hello
SHELL ["/bin/sh", "-c"]
CMD ["/app/hello"]
VOLUME /app/dados
```

Para construir e rodar o container

```bash
docker build -t day2-golang:3 -f docs/cursos/pick-2024/day2/Dockerfile.8 ./docs/cursos/pick-2024/day2/
docker run -d day2-golang:3
```

Agora sempre que rodar o container, o volume `/app/dados` será criado e poderá ser utilizado para armazenar dados, e se o mesmo container for rodado novamente, o volume será mantido.

### Pull, Push e o Dockerhub

O Dockerhub é um repositório de imagens Docker, onde é possível compartilhar imagens públicas e privadas. Para compartilhar uma imagem, é necessário fazer o login no Dockerhub.

```bash
docker login
```

Para compartilhar uma imagem, é necessário adicionar o nome do repositório ao nome da imagem.

```bash
docker tag day2-nginx:4 <USER>/day2-nginx:latest
docker push <USER>/day2-nginx:latest
```

### Glossário de Dockerfile

Glossário de Dockerfile

- **ADD**: Instrução utilizada no Dockerfile para copiar arquivos e diretórios para dentro do container.
- **CMD**: Instrução utilizada no Dockerfile para especificar o comando padrão a ser executado quando o container for iniciado.
- **COPY**: Instrução utilizada no Dockerfile para copiar arquivos e diretórios para dentro do container.
- **ENTRYPOINT**: Instrução utilizada no Dockerfile para especificar o comando padrão a ser executado quando o container for iniciado, porém não pode ser substituído ao iniciar o container.
- **ENV**: Instrução utilizada no Dockerfile para definir variáveis de ambiente que serão utilizadas durante a construção e execução do container.
- **EXPOSE**: Instrução utilizada no Dockerfile para definir as portas em que o container irá escutar, permitindo a comunicação com outros containers ou com o host.
- **FROM**: Instrução utilizada no Dockerfile para especificar a imagem base que será utilizada para construir o container.
- **LABEL**: Instrução utilizada no Dockerfile para adicionar metadados à imagem, como informações do autor e descrição.
- **MAINTAINER**: Instrução utilizada no Dockerfile para especificar o autor da imagem.
- **RUN**: Instrução utilizada no Dockerfile para executar comandos durante a construção do container.
- **USER**: Instrução utilizada no Dockerfile para especificar o usuário que será usado para executar os comandos dentro do container.
- **VOLUME**: Instrução utilizada no Dockerfile para definir um ponto de montagem de volume, permitindo o compartilhamento de dados entre o host e o container.
- **WORKDIR**: Instrução utilizada no Dockerfile para definir o diretório de trabalho dentro do container, onde os comandos serão executados.

Lembre-se de sempre consultar a documentação oficial do Docker para obter informações completas sobre cada termo.

## Desafio 1

### Objetivo

1. Construir uma imagem Docker do Nginx

A imagem base precisa ser o Alpine Linux, e claro, precisamos ter o Nginx rodando perfeitamente.

Algumas informações importantes:

O nome do container deve ser: giropops-web
A porta do container e do host deverão ser a porta 80
Use este comando para construir uma imagem Docker usando o Dockerfile neste diretório: docker build -t giropops-web .

2. Agora que você construiu uma imagem de contêiner, você pode executá-la.

Você já sabe como! \o/ Algumas informações importantes:

O nome do container deve ser: giropops-web
A porta do container e do host deverão ser a porta 80

Verifique se o contêiner está em execução usando a linha de comando.

### Solução

1. Construir uma imagem Docker do Nginx

```dockerfile
FROM alpine:3.19
RUN apk add --no-cache nginx
EXPOSE 80
ENTRYPOINT [ "nginx" ]
CMD ["-g", "daemon off;"]
```

2. Agora que você construiu uma imagem de contêiner, você pode executá-la.

```bash
docker build -t giropops-web .
docker run -d -p 80:80 giropops-web
```

## Desafio 2

### Objetivo

1. Como colocar a nossa Giropops-Senhas para rodar!

Essa é a primeira parte do desafio, do lado direito da tela tem todos os passos que você precisa para colocar a nossa App em execução.

Primeira parte:
Somente seguir os passos para saber como deixar a App funcionando, sem ser no container.
Anotar todos os detalhes importantes para transformar essa app em uma imagem de container.

```bash
git clone https://github.com/badtuxx/giropops-senhas.git
cd giropops-senhas/
apt-get update
apt-get install pip
pip install --no-cache-dir -r requirements.txt
apt-get install redis
systemctl start redis
systemctl status redis
export REDIS_HOST=localhost
flask run --host=0.0.0.0
```

2. Criando o nosso Dockerfile para a Giropops-Senhas

Agora que você já sabe como colocar a App para rodar, você precisa coloca-la em uma imagem de container! E para isso, você precisa criar um DockerFile e lá, adicionar todos os detalhes necessários!

Nessa atividade você não tem o passo a passo de como criar cada tarefa, afinal, aqui é um desafio! Hora de você estudar, se dedicar e concluir esse desafio!

Esse não é um teste fácil, então tenha paciência com você!

- Criar um conta no Docker Hub, caso ainda não possua uma.
- Criar uma conta no Github, caso ainda não possua uma.
- Criar um Dockerfile para criar uma imagem de container para a nossa App
- O nome da imagem deve ser SEU_USUARIO_NO_DOCKER_HUB/linuxtips-giropops-senhas:1.0
- Fazer o pucmsh da imagem para o Docker Hub, essa imagem deve ser pública
- Criar um repo no Github chamado LINUXtips-Giropops-Senhas, esse repo deve ser público
- Fazer o push do cógido da App e o Dockerfile
- Criar um container utilizando a imagem criada
- O nome do container deve ser giropops-senhas
- Você precisa deixar o container rodando
- O Redis precisa ser um container
- Dica: Preste atenção no uso de variável de ambiente, precisamos ter a variável REDIS_HOST no container. Use sua criatividade!

### Solução

1. Como colocar a nossa Giropops-Senhas para rodar!

Era só seguir os passos informados, mas deu erro por falta da biblioteca `Werkzeug==2.2.2`. Então coloquei ela no arquivo `requirements.txt` e rodei o comando `pip install --no-cache-dir -r requirements.txt`. Depois rodei o comando `flask run --host=0.0.0.0`.

2. Criando o nosso Dockerfile para a Giropops-Senhas

Para esse desafio, criei o Dockerfile e o Makefile para facilitar a execução dos comandos.

<Tabs>
  <TabItem value="dockerfile" label="Dockerfile" default>
    ```dockerfile showLineNumbers
    FROM alpine:3.19

    RUN apk add --no-cache python3 py3-pip git && \
    git clone https://github.com/badtuxx/giropops-senhas.git /app && \
    cd /app && git checkout 6bc55efe13dbafc38ee6c2ae4790d380f5f4c942 && \
    rm -rf /app/.git

    WORKDIR /app

    RUN pip3 install --break-system-packages --no-cache-dir -r /app/requirements.txt && \
    pip3 install --break-system-packages Werkzeug==2.2.2

    ARG REDIS_HOST=localhost
    ENV REDIS_HOST=$REDIS_HOST

    CMD ["flask", "run", "--host=0.0.0.0", "--port=80"]
    ```

  </TabItem>

  <TabItem value="makefile" label="Makefile">
    ```makefile showLineNumbers
    docker-login:
      docker login

    create-network:
      docker network create giropops-senhas || true

    redis-run: create-network redis-remove
      docker run -d --network giropops-senhas --name=giropops-senhas-redis -p 6379:6379 -P redis:7.2.4-alpine3.19

    redis-remove:
      docker container rm -f giropops-senhas-redis

    giropops-senhas-build:
      docker build -t giropops-senhas:latest --build-arg REDIS_HOST=giropops-senhas-redis .

    giropops-senhas-run: create-network giropops-senhas-remove
      docker run -d --network giropops-senhas --name=giropops-senhas -p 8080:80 -P giropops-senhas:latest

    giropops-senhas-tag:
      docker tag giropops-senhas:latest lucasbaccan/linuxtips-giropops-senhas:1.0

    giropops-senhas-remove:
      docker container rm -f giropops-senhas

    giropops-senhas-push: giropops-senhas-tag
      docker push lucasbaccan/linuxtips-giropops-senhas:1.0

    run-dev: redis-run giropops-senhas-build giropops-senhas-run

    run-prod: redis-run giropops-senhas-remove
      docker run -d --network giropops-senhas --name=giropops-senhas -p 8080:80 lucasbaccan/linuxtips-giropops-senhas:1.0
    ```

  </TabItem>
</Tabs>

No arquivo `Dockerfile`, eu utilizo a imagem `alpine:3.19` e instalo o Python3, o pip, o git e clono o repositório da aplicação. Depois instalo as dependências do projeto e a biblioteca `Werkzeug==2.2.2`. Por fim, defino a variável de ambiente `REDIS_HOST` e executo o comando `flask run --host=0.0.0.0 --port=80` para rodar a aplicação.

No arquivo `Makefile`, eu criei os comandos para facilitar a execução dos comandos. Para rodar a aplicação em ambiente de desenvolvimento, basta rodar o comando `make run-dev`. Para rodar a aplicação em ambiente de produção, basta rodar o comando `make run-prod`.

O ponto de atenção é que precisa fazer com que os containers se comuniquem, então é necessário criar uma rede para os containers. Para isso, criei o comando `create-network` para criar a rede `giropops-senhas`. Sem isso, você teria que passar o IP do container do Redis para o container da aplicação, o que tornaria o processo mais complexo, pois o IP do container pode mudar a cada reinicialização.