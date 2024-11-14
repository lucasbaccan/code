---
id: index
title: SQL
---

import Center from '@site/src/components/Center';

:::caution Aviso
🚧 Em construção 🚧
:::

## Introdução

Seja bem vindo ao tutorial de SQL. Aqui você aprenderá os conceitos básicos de SQL, a linguagem de consulta estruturada, que é utilizada para manipular e consultar bancos de dados relacionais.

Vamos ver onde podemos utilizar SQL e o que é possível fazer com ele. Assim você poderá aplicar esses conhecimentos em seus projetos e trabalhos.

<Center>

![Parabéns](https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif)  
Boa sorte e bons estudos!

</Center>

## O que é SQL?

SQL (Structured Query Language) é uma linguagem de consulta estruturada que é utilizada para manipular e consultar bancos de dados relacionais. SQL é uma linguagem padrão para bancos de dados relacionais, e é utilizada para realizar operações como inserir, atualizar, deletar e consultar dados.

## O que é um banco de dados relacional?

Um banco de dados relacional é um banco de dados que armazena dados em tabelas. Cada tabela é composta por linhas e colunas, onde cada linha representa um registro e cada coluna representa um atributo do registro.

Em um banco de dados relacional, as tabelas são relacionadas entre si através de chaves estrangeiras. Isso permite que os dados sejam consultados e manipulados de forma eficiente. Pode parecer complicado, mas com a prática você verá que é bem simples.

## O que é um banco não relacional?

Não é o foco deste tutorial, mas existem outros tipos de bancos de dados, como os bancos de dados não relacionais, que armazenam dados de forma diferente dos bancos de dados relacionais. Bancos de dados não relacionais são utilizados para armazenar dados não estruturados ou semi-estruturados, e são utilizados em aplicações que requerem alta escalabilidade e flexibilidade.

:::info Observação
Se você está vendo bancos de dados pela primeira vez, não se preocupe qual tipo de banco de dados é melhor. Um banco de dados relacional é uma ótima escolha para a maioria dos casos, e é uma ótima forma de começar a aprender sobre bancos de dados.
:::

## Onde podemos utilizar SQL?

Toda aplicação que precisa armazenar e consultar dados pode utilizar SQL. Se você está em uma aplicação web, pode ser que não precise escrever SQL diretamente, mas no backend da aplicação, o banco de dados estará lá, e SQL será utilizado para consultar e manipular os dados.

Então toda aplicação que precisa armazenar e consultar dados, como um site de notícias, um sistema de gerenciamento de vendas, um aplicativo de delivery, entre outros, pode utilizar SQL em algum momento.

## Primeiros passos

Vamos utilizar um ambiente online para praticar SQL, e aprender os conceitos básicos da linguagem sem ter que instalar nada em sua máquina ou configurar um banco de dados.

Vamos utilizar o site [SQLite Online](https://www.convertcsv.com/sqlite-online.htm) para praticar SQL. Acesse o site e siga as instruções para começar a praticar SQL.

<Center>

![SQLite Online](./imagem1.png)  
Site SQLite Online

</Center>

:::info Observação
SQLite é um banco de dados relacional super leve e fácil de usar, e é uma ótima escolha para quem está começando a aprender SQL.
:::

## Recursos

Como já mencionamos, existem tabelas, linhas e colunas em um banco de dados relacional. Vamos ver alguns conceitos básicos de SQL para começar a praticar.

### Tabelas

Uma tabela é uma coleção de registros, onde cada registro é composto por um conjunto de atributos. Cada tabela é composta por colunas e linhas, onde cada coluna representa um atributo do registro e cada linha representa um registro.

### Linhas

Uma linha é um registro na tabela, e é composta por um conjunto de valores que representam os atributos do registro.

### Colunas

Uma coluna é um atributo do registro, e representa um campo de dados na tabela. Esses campos de dados podem ser de diferentes tipos, como texto, número, data, entre outros.

### Exemplo

Vamos ver um exemplo de uma tabela de usuários:

| id  | nome  | email           | idade |
| --- | ----- | --------------- | ----- |
| 1   | João  | joao@email.com  | 25    |
| 2   | Maria | maria@email.com | 30    |
| 3   | Pedro | pedro@email.com | 35    |

- A **tabela** é o conjunto de todos os registros, mesmo que a tabela esteja vazia, ela ainda é uma tabela.
- Cada **linha** é um registro na tabela, e representa um usuário, que contem dados.
- Cada **coluna** é um dado do registro, e representa um campo de dados na tabela.

## Próximos passos

Quando utilizamos um banco de dados relacional, precisamos ter uma preocupação com as colunas que vamos criar e seus tipos, para que os dados sejam armazenados corretamente. Os bancos de dados validam os dados antes de inseri-los, então se você tentar salvar um texto em uma coluna de número, o banco de dados irá retornar um erro. Fique atento a isso quando estiver criando suas tabelas.

Vamos então começar a ver como criar um banco de dados e quais comandos SQL podemos utilizar para manipular e consultar os dados.

## Formatação

SQL é uma linguagem sem diferenciação de maiúsculas e minúsculas, então você pode escrever os comandos em maiúsculas ou minúsculas, como preferir. Por exemplo, `SELECT`, `select`, `Select`, `SeLeCt` são equivalentes. O mesmo vale para os espaçamentos, você pode escrever tudo em uma linha ou separar os comandos em várias linhas, como preferir.

```sql showLineNumbers
select * From tabela;
```

é equivalente a

```sql showLineNumbers
SELECT
  *
FROM
  tabela;
```

<!-- - [SQLZoo](https://sqlzoo.net/) -->
<!-- - [SQLBolt](https://sqlbolt.com/) -->
<!-- - [SQLFiddle](https://sqlfiddle.com/) -->
<!-- - [SQLPlayground](https://sqlplayground.app/) -->
<!-- - [W3Schools](https://www.w3schools.com/sql/) -->
<!-- - [Codecademy](https://www.codecademy.com/learn/learn-sql) -->

<!-- https://sqlbolt.com/ -->
<!-- https://sqlfiddle.com/ -->
<!-- https://sqlplayground.app/ -->
