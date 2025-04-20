---
id: postgres
title: PostgreSQL
---

:::tip LINK
**LINK:** [https://www.postgresql.org/](https://www.postgresql.org/)
:::

PostgreSQL é um sistema de gerenciamento de banco de dados objeto relacional (SGBD), desenvolvido como projeto de código aberto. Ele suporta a maioria dos recursos SQL e oferece recursos adicionais como tabelas espaciais e JSON.

## Instalação

Cada sistema operacional possui uma forma diferente de instalar o PostgreSQL, para instalar no Windows, basta acessar o site [https://www.postgresql.org/download/windows/](https://www.postgresql.org/download/windows/) e baixar o instalador.

## Configuração

Quando é feita a instalação do PostgreSQL, é recomendado que seja modificado os arquivos de configuração, para que o banco de dados seja acessado de qualquer lugar.

:::warning Atenção
Não é recomendado deixar o banco de dados aberto para qualquer IP, apenas para o IP da sua máquina ou da sua rede.
:::

### Alterando o arquivo pg_hba.conf

O arquivo **pg_hba.conf** é responsável por definir quem pode acessar o banco de dados, por padrão, o arquivo é criado com o seguinte conteúdo:

```bash title="pg_hba.conf"
# TYPE  DATABASE  USER  ADDRESS METHOD
host all all 0.0.0.0/0 trust
```

### Alterando o arquivo postgresql.conf

O arquivo **postgresql.conf** é responsável por definir as configurações do banco de dados, por padrão, o arquivo é criado com o seguinte conteúdo:

```bash title="postgresql.conf"
# - Connection Settings -
listen_addresses = '*' # what IP address(es) to listen on;
port = 5432 # (change requires restart)
```

### Criando um usuário

Para criar um usuário, basta acessar o terminal do PostgreSQL e executar o comando abaixo:

```bash
CREATE USER usuario WITH PASSWORD 'senha';
```

Caso preferir, é possível utilizar o pgAdmin para criar o usuário, basta acessar o servidor e clicar com o botão direito em **Login/Group Roles** e selecionar a opção **Create > Login/Group Role**.
