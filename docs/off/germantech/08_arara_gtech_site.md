---
id: arara_gtech_site
title: arara.gtech.site
---

**LINK:** [https://github.com/lucasbaccan/arara.gtech.site](https://github.com/lucasbaccan/arara.gtech.site)
:::

## Como clonar 

```
git clone URL
```

## Requisitos

Certifique-se que o servidor tenha os seguintes programas instalados:

* [Git](https://git-scm.com/)
* [Docker](https://www.docker.com/)
* [Docker-Compose](https://docs.docker.com/compose/)

## Containers

Esse projeto sobe alguns containers para o funcionamento do banco de dados. São eles:
- [PostgreSQL](https://www.postgresql.org/)
- [PgAdmin](https://www.pgadmin.org/) (opcional)
- [Grafana](https://grafana.com/)
- [Prometheus](https://prometheus.io/)
- [Postgres Exporter](https://github.com/prometheus-community/postgres_exporter)
- [Node Exporter](https://github.com/prometheus/node_exporter)


A imagem do PostgreSQL é a oficial do Docker Hub, na versão [postgres:11.16-alpine3.16](https://hub.docker.com/layers/library/postgres/11.16-alpine3.16/images/sha256-4ca9917323f3e0b0d9b721868a5af182040b840ab2968ab2439de546fa599024), o que significa que a versão do Postgres é a 11.16, que está rodando em um SO Alpine, que é extremamente robusto e minimalista. Já o PgAdmin é a imagem [dpage/pgadmin4:6.13](https://hub.docker.com/layers/dpage/pgadmin4/6.13/images/sha256-8f6a7197c89e4817669596b4edac8a21a8d087dadb2a7639ec99999b507f3052), que é a versão 6.13 do PgAdmin4, que está rodando em um SO Alpine.

### postgres_db

Esse container é o banco de dados em si, onde todos os bancos de dados vão rodar. Todos os dados são salvos em um volume, que é o `postgres-db-data:/var/lib/postgresql/data`, então caso o container seja removido, os dados não serão perdidos.
Para configurar, deve ser editado o arquivo `env.sh`, que contém as seguintes variáveis:
* `POSTGRES_USER`: usuário do banco de dados
* `POSTGRES_PASSWORD`: senha do usuário do banco de dados
* `POSTGRES_HOST`: host do banco de dados (deve ser `postgres_db`)
* `POSTGRES_PORT`: porta do banco de dados (deve ser `5432`)

### postgres_cron

Esse container utiliza a mesma imagem do `postgres_db`, mas é utilizado para rodar scripts que precisam dos binários do postgres, mas que não precisa ter o banco rodando. Então a rotina de backup, por exemplo, é rodada nesse container. Todos os dados são salvos em um volume do tipo *bind*, que é o `./backups/:/backups/`, que faz com que os arquivos gerados pelo container sejam salvos na pasta `backups` do host.
Para configurar, deve ser editado o arquivo `env.sh`, que contém as seguintes variáveis:
* `POSTGRES_USER`: usuário do banco de dados
* `POSTGRES_PASSWORD`: senha do usuário do banco de dados
* `POSTGRES_HOST`: host do banco de dados (deve ser `postgres_db`)
* `POSTGRES_PORT`: porta do banco de dados (deve ser `5432`)
* `S3_BUCKET_BACKUPS`: bucket do S3 onde os backups serão salvos
* `DIRETORIO_SAIDA_BACKUPS`: diretório onde os backups serão salvos no container
* `SSH_PASSWORD`: senha do usuário `root` do container `postgres_cron`

#### Rotinas

Todas as rotinas estão dentro da pasta `crontab` sendo o arquivo `crontab` o arquivo de configuração do cron. As rotinas são copiadas para o container, basta colocar em `crontab/jobs`.

- `/crontab/jobs/backup_todos_bancos.sh`: faz o backup de todos os bancos de dados do postgres.
    - Pode receber um parâmetro `true`ou `false`, que indica se o backup deve ser enviado para o S3 ou não. Por padrão não é enviado.
- `/crontab/jobs/drop_loop.sh`: verifica as conexões indevidas no banco de dados e mata elas.

### pgadmin (opcional)

Este container é opcional, e serve para facilitar a visualização dos bancos de dados. Ele é acessado através do endereço `http://IP-SERVIDOR:8080`, e o usuário e senha padrão são `admin@admin.com` e `admin`, respectivamente. 

### grafana

Esse container é o responsável por exibir os gráficos de métricas do Prometheus. Ele é acessado através do endereço `http://IP-SERVIDOR:3000`, e o usuário e senha padrão são `admin` e `admin`, respectivamente. No primeiro login da para alterar a senha.

### prometheus

Esse container é o responsável por coletar as métricas dos bancos de dados e dos containers. O padrão seria exportar a porta 9090, mas ela só é visível para os containers.

### postgres_exporter

Esse container é o responsável por exportar as métricas do banco de dados para o Prometheus. O padrão seria exportar a porta 9187, mas ela só é visível para os containers.

### node_exporter

Esse container é o responsável por exportar as métricas do servidor para o Prometheus. O padrão seria exportar a porta 9100, mas ela só é visível para os containers.

## Como instalar/iniciar o servidor

Após o clone do projeto, vai existir alguns arquivos `.sh`, basta executar eles:
* Configuração
    * `env.sh`: arquivo de configuração do ambiente do servidor
    * `ssh_key_generate.sh`: script para gerar a chave SSH para o container `postgres_cron`

* Status do servidor
    * `start.sh`: script para iniciar o servidor (pode passar o parâmetro `true` para ver o log
    * `stop.sh`: script para parar o servidor
    * `restart.sh`: script para reiniciar o servidor

* Restaurar backup
    * `restore.sh`: script para restaurar os backups do S3
    * `restore_stop.sh`: script para parar o script de restauração

