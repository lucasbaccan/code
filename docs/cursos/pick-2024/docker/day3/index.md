---
id: index
title: Day 3
hide_title: false
hide_table_of_contents: false
sidebar_label: Day 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Sumário

- 🎥 Day3 - O que iremos ver no dia de hoje? - 02:16
- 🎥 Day3 - Conhecendo a App que precisamos transformar em container - 10:24
- 🎥 Day3 - Transformando a nossa aplicação em uma imagem de container - 17:07
- 🎥 Day3 - Trabalhando com o tamanho e o número de camadas da imagem - 07:37
- 🎥 Day3 - O que é Distroless e otimizando nossa imagem - 19:37
- 📖 Day3 - O que são imagens Distroless
- 🎥 Day3 - Utilizando o Trivy para verificar vulnerabilidades e como ter uma imagem com 0 vulnerabiliades - 13:09
- 🎥 Day3 - Utilizando o Docker Scout para checar o número de vulnerabilidades - 08:17
- 📖 Day3 - O que é o Docker Scout?
- 🎥 Day3 - Testando imagens Distroless - 02:08
- 🎥 Day3 - Conhecendo o Cosign e a importância de assinar as suas imagens de container - 06:53
- 🎥 Day3 - Assinando a nossa imagem e adicionando ao registry - 19:40
- 🎥 Day3 - Encerramento - 02:39
- 📝 Day3 - Exame teórico do Day-3 - 8 questões
- ⌛ Day3 - Hora de Refletir sobre a sua resposta no Day3 - 1 questões
- ⌛ Day3 - Seu diário do Day3 - 1 questões
- 🎥 Day3 - Vídeo sobre o desafio - 02:05
- 📝 Day3 - Desafio prático do Day3

**Legenda**  
🎥 - Aula gravada
📖 - Material complementar
📝 - Atividade
⌛ - Revisão/Reflexão

## Dia 3

Day 3, o treinamento continua com foco em otimizar a criação de imagens de container, verificando vulnerabilidades, assinando imagens, _1 layer images_ e _distroless_.

### Solução do desafio do dia 2

O [desafio do dia 2](../day2/index.md#desafio) era criar uma imagem da aplicação [giropops-senhas](https://github.com/badtuxx/giropops-senhas) e subir para o Docker Hub. A solução minha pode ser vista [aqui](../day2/index.md#solução).

#### Rodando a aplicação localmente

Jeferson começou fazendo o clone do repositório e explicando o que precisaria ser feito para rodar localmente. Ele tinha já o Python e o Redis instalados na maquina dele, só ficou faltando instalar o `requirements.txt`, criar a variavel de ambiente `REDIS_HOST` e rodar o comando `flask run --host=0.0.0.0`.

#### Dockerizando a aplicação

Agora seguimos para a criação do Dockerfile. Criamos um Dockerfile com a seguinte estrutura:

```dockerfile showLineNumbers title="Dockerfile"
FROM python:3.11
WORKDIR /app
COPY requirements.txt .
COPY app.py .
COPY templates templates/
COPY static static/
RUN pip install -r requirements.txt --no-cache-dir
EXPOSE 5000
CMD ["flask", "run", "--host=0.0.0.0"]
```

E para criar a imagem, rodamos o comando:

```bash
docker build --name giropops-senhas -t giropops-senhas:1.0 -f Dockerfile .
docker run -d -p 5000:5000 giropops-senhas:1.0
docker container logs giropops-senhas
### ler os logs e ver que a aplicação está rodando
# A aplicação não consegue se comunicar com o Redis
```

Essa versão vai dar erro, pois o Redis não está rodando. Para resolver isso, podemos rodar o Redis em um container separado e linkar os dois containers. Para isso, podemos rodar o comando:

```bash
docker run -d -p 6379:6379 --name redis redis
```

Isso ainda não faz funcionar, pois está faltando a variável de ambiente `REDIS_HOST`. Para resolver isso, podemos rodar o comando:

```bash
docker exec -it giropops-senhas bash
### dentro do container
export REDIS_HOST=<IP do computador atual>
### sair do container
docker container logs giropops-senhas
### ler os logs e ver que a aplicação está rodando
# Aplicação ainda não consegue se comunicar com o Redis
```

Isso quer dize que estamos com um problema de comunicação entre os containers. Vamos resolver isso passando a variável de ambiente `REDIS_HOST` para o container da aplicação. Para isso, podemos rodar o comando:

```bash
docker rm -f giropops-senhas
docker run -d -p 5000:5000 --name giropops-senhas -e REDIS_HOST=<IP do computador atual> giropops-senhas:1.0
docker container logs giropops-senhas
### ler os logs e ver que a aplicação está rodando
# Aplicação consegue se comunicar com o Redis, funcionando corretamente com o "-e REDIS_HOST=<IP do computador atual>"
```

Isso já seria uma solução para o problema, mas ainda não é a melhor solução, pois não podemos passar o IP do computador atual para o container.

### Melhorando a aplicação

Ao rodar o comando `docker images` ou `docker image ls`, podemos ver que a imagem que criamos tem 1GB. Isso é muito grande para uma aplicação tão simples. Vamos então trocar a imagem base para `python:3.11-slim`:

```dockerfile showLineNumbers title="Dockerfile"
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
COPY app.py .
COPY templates templates/
COPY static static/
RUN pip install -r requirements.txt --no-cache-dir
EXPOSE 5000
CMD ["flask", "run", "--host=0.0.0.0"]
```

e rodar o comando:

```bash
docker build --name giropops-senhas -t giropops-senhas:2.0 -f Dockerfile .
docker images
```

Só de trocar a imagem, a versão 2.0 cai para 168MB, uma redução de quase 90%. Por isso é importante conhecermos as imagens que estamos utilizando.

Vamos inspecionar as camadas da imagem e analisar o tamanho de cada uma delas:

```bash
docker history giropops-senhas:1.0
docker history giropops-senhas:2.0
```

Com isso você consegue verificar o tamanho de cada camada e ver o que está pesando mais na imagem, assim você consegue otimizar a imagem.

### Melhorando a aplicação 2

A imagem `python:3.11-slim` é menor, mas existe outra imagem menor ainda, que é a imagem baseada em `Alpine`. Vamos então trocar a imagem atual para a `python:3.11-alpine3.19`:

```dockerfile showLineNumbers title="Dockerfile"
FROM python:3.11-alpine3.19
WORKDIR /app
COPY requirements.txt .
COPY app.py .
COPY templates templates/
COPY static static/
RUN pip install -r requirements.txt --no-cache-dir
EXPOSE 5000
CMD ["flask", "run", "--host=0.0.0.0"]
```

e rodar o comando:

```bash
docker build --name giropops-senhas -t giropops-senhas:3.0 -f Dockerfile .
docker images
```

Com a imagem `Alpine`, o tamanho da imagem cai para 70MB, uma redução de 93% em relação a imagem baseada em `python:3.11`. Isso faz também cair o número de vulnerabilidades, pois quanto menor a imagem, menor a chance de ter vulnerabilidades, pois tem menos pacotes instalados.

### Distroless

Distroless é uma imagem que não tem sistema operacional, ela é uma imagem mínima, que só tem o necessário para rodar a aplicação, geralmente ela só tem 1 camada. Uma empresa que trabalha convertendo imagens para distroless é a [Chainguard](https://www.chainguard.dev/).

Vamos então trocar a imagem atual para a `gcr.io/distroless/python3-debian11`:

```dockerfile showLineNumbers title="Dockerfile"
FROM cgr.dev/chainguard/python:3.11
WORKDIR /app
COPY requirements.txt .
COPY app.py .
COPY templates templates/
COPY static static/
RUN pip install -r requirements.txt --no-cache-dir
EXPOSE 5000
CMD ["flask", "run", "--host=0.0.0.0"]
```

e rodar o comando:

```bash
docker build --name giropops-senhas -t giropops-senhas:4.0 -f Dockerfile .
# Error 'pip' not found
```

Vamos então corrigir esse erro, para isso, temos que usar a imagem com `-dev` no final e por ela como builder e copiar o resultado para a imagem final:

```dockerfile showLineNumbers title="Dockerfile"
# FROM cgr.dev/chainguard/python:3.11-dev as builder # Somente latest é publico
FROM cgr.dev/chainguard/python:latest-dev as builder
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt --no-cache-dir --user
# FROM cgr.dev/chainguard/python:3.11 # Somente latest é publico
FROM cgr.dev/chainguard/python:latest
WORKDIR /app
COPY --from=builder /home/nonroot/.local/lib/python3.11/site-packages /home/nonroot/.local/lib/python3.11/site-packages
COPY app.py .
COPY templates templates/
COPY static static/
EXPOSE 5000
ENTRYPOINT ["flask", "run", "--host=0.0.0.0"]
```

e rodar o comando:

```bash
docker build --name giropops-senhas -t giropops-senhas:4.0 -f Dockerfile .
docker images
```

Com a imagem `Distroless`, o tamanho da imagem cai para 60MB, uma redução de 94% em relação a imagem baseada em `python:3.11`. Mas ao rodar a aplicação, ela não funciona, pois não localiza o `flask`.

### Trivy

[Trivy](https://trivy.dev/) é uma ferramenta que verifica vulnerabilidades em imagens de container. Você pode rodar a ferramenta direto pelo binário ou pelo container. Vamos rodar pelo container:

```bash
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock ./cache:/root/.cache/aquasec/trivy image <IMAGEM>
```

Para rodar pelo binário, você pode baixar o binário [aqui](https://github.com/aquasecurity/trivy/releases/latest/) e rodar o comando:

```bash
trivy <IMAGEM>
```

Mais informações sobre a instalação podem ser encontrado [aqui](https://aquasecurity.github.io/trivy/v0.38/getting-started/installation/).

Se fizermos a verificação das imagens que criamos, veremos que conforme a imagem foi ficando menor, o número de vulnerabilidades foi diminuindo.

### Docker Scout

[Docker Scout](https://dockerscout.com/) é uma ferramenta que verifica vulnerabilidades que é da própria Docker. Se você já tem o Docker instalado, você pode rodar o comando:

```bash
docker scout cves <IMAGEM>
# ou
docker scout quickview <IMAGEM>
```

### Assinando imagens com Cosign

Assinar imagens é importante para garantir que a imagem não foi alterada, para garantir a integridade da imagem. Assim podemos garantir que a imagem que está rodando é a mesma que foi criada/baixada.

[Cosign](https://github.com/sigstore/cosign) é uma ferramenta que assina imagens de container. Para fazer a instalação, siga a documentação [aqui](https://docs.sigstore.dev/system_config/installation/).

Quando tiver tudo instalado, você pode rodar o comando:

```bash
# Antes de começar, precisamos gerar um par de chaves
cosign generate-key-pair
# Assinar a imagem
cosign sign -key cosign.pub lucasbaccan/linuxtips-giropops-senhas:2.0
# Verificar a assinatura
cosign verify --key cosign.pub lucasbaccan/linuxtips-giropops-senhas:2.0
```

Com isso, basta você compartilhar a chave pública (`cosign.pub`) para quem for baixar a imagem, para que ele possa verificar a assinatura da imagem. Assim você garante que a imagem não foi alterada.

Caso queira ver a assinatura, ela está no docker hub, você pode ver [aqui](https://hub.docker.com/repository/docker/lucasbaccan/linuxtips-giropops-senhas/tags?page=1&ordering=last_updated).

## Desafio

### Objetivo

Fazer a aplicação `giropops-senhas` funcionar com a imagem `Distroless` com a menor quantidade de vulnerabilidades possíveis.

### Solução

Eu optei por fazer o checkout dentro do container, mas não é recomendado, foi mais para para poder construir a imagem sem ter o código baixado na minha máquina.

<Tabs>
  <TabItem value="dockerfile" label="Dockerfile" default>

    ```dockerfile showLineNumbers
    FROM cgr.dev/chainguard/git:latest as source
    WORKDIR /app
    RUN git clone https://github.com/badtuxx/giropops-senhas.git /app && \
        cd /app && git checkout 6bc55efe13dbafc38ee6c2ae4790d380f5f4c942 && \
        rm -rf /app/.git

    # FROM cgr.dev/chainguard/python:3.11-dev as builder # Somente latest é publico
    FROM cgr.dev/chainguard/python:latest-dev as builder
    WORKDIR /app
    COPY --from=source /app/requirements.txt .
    RUN python -m venv /app/venv && \
        . /app/venv/bin/activate && \
        pip install -r requirements.txt --no-cache-dir && \
        pip install Werkzeug==2.2.2 --no-cache-dir

    # FROM cgr.dev/chainguard/python:3.11 # Somente latest é publico
    FROM cgr.dev/chainguard/python:latest
    WORKDIR /app
    COPY --from=builder /app/venv /app/venv
    COPY --from=source /app .
    ARG REDIS_HOST=localhost
    ENV REDIS_HOST=$REDIS_HOST
    ENV PATH="/app/venv/bin:$PATH"
    EXPOSE 5000
    ENTRYPOINT ["flask", "run", "--host=0.0.0.0"]
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
      docker build -f Dockerfile.desafio -t giropops-senhas:latest --build-arg REDIS_HOST=giropops-senhas-redis .

    giropops-senhas-run: create-network giropops-senhas-remove
      docker run -d --network giropops-senhas --name=giropops-senhas -p 8080:5000 -P giropops-senhas:latest

    giropops-senhas-tag: giropops-senhas-build
      docker tag giropops-senhas:latest lucasbaccan/linuxtips-giropops-senhas:2.0

    giropops-senhas-remove:
      docker container rm -f giropops-senhas

    giropops-senhas-push: giropops-senhas-tag
      docker push lucasbaccan/linuxtips-giropops-senhas:2.0

    trivy-scan: giropops-senhas-build
      docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy image giropops-senhas:latest > trivy-scan.txt

    docker-scout: giropops-senhas-build
      docker scout cves giropops-senhas:latest > docker-scout.txt

    run-dev: redis-run giropops-senhas-build giropops-senhas-run

    run-prod: redis-run giropops-senhas-remove
      docker run -d --network giropops-senhas --name=giropops-senhas -p 8080:5000 lucasbaccan/linuxtips-giropops-senhas:2.0
    ```

  </TabItem>
</Tabs>
