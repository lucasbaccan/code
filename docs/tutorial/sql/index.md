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

Para fins de legibilidade, vamos utilizar a formatação com letras maiúsculas e comandos em várias linhas, mas você pode utilizar a formatação que preferir. O importante é que os comandos estejam corretos e sejam compreensíveis.

### Ponto e vírgula

Alguns bancos de dados requerem que os comandos SQL terminem com um ponto e vírgula `;`. Isso indica ao banco de dados que o comando terminou e que ele pode executá-lo. Alguns bancos de dados não requerem o ponto e vírgula, mas é uma boa prática sempre terminar os comandos com um ponto e vírgula.

Geralmente, se você não tem mais de um comando SQL em sequência, não precisa se preocupar com o ponto e vírgula, mas é uma boa prática sempre terminar os comandos com um ponto e vírgula.

Para fins de legibilidade, vamos utilizar o ponto e vírgula no final dos comandos, mas você pode utilizar a formatação que preferir.

### Comentários

Assim como em outras linguagens de programação, você pode adicionar comentários em SQL para documentar o código. Comentários são ignorados pelo banco de dados, e são utilizados para explicar o código e torná-lo mais compreensível.

Em SQL, você pode adicionar comentários de uma linha utilizando `--`, ou comentários de múltiplas linhas utilizando `/*` e `*/`.

Utilize sempre que achar necessário adicionar comentários ao seu código, para que outras pessoas possam entender o que você está fazendo ou para o seu eu do futuro.

```sql showLineNumbers
-- Este é um comentário de uma linha
SELECT
  *
FROM
  tabela;
/*
Este é um comentário
de múltiplas linhas
*/
```

## Comandos SQL

Agora que já sabemos o que é SQL e onde podemos utilizá-lo, vamos ver os comandos básicos de SQL que vamos utilizar para manipular e consultar os dados. Depois de aprender esses comandos, vamos ter uma area de prática para você testar seus conhecimentos.

### CREATE

O comando `CREATE` é utilizado para criar um banco de dados, uma tabela, ou um índice. Ele sozinho não faz nada, mas é utilizado em conjunto com outras palavras-chave para criar objetos no banco de dados.

### CREATE DATABASE

O comando `CREATE DATABASE` é utilizado para criar um novo banco de dados. Você precisa especificar o nome do banco de dados que deseja criar.

```sql showLineNumbers
CREATE DATABASE nome_do_banco_de_dados;
```

Uma vez que você criou um banco de dados, você pode começar a criar tabelas e inserir dados nele.

Vale notar que você pode ter vários bancos de dados em um servidor de banco de dados, e cada banco de dados pode ter várias tabelas. Cada banco de dados é isolado dos outros, então você pode ter diferentes bancos de dados para diferentes aplicações.

### CREATE TABLE

O comando `CREATE TABLE` é utilizado para criar uma nova tabela no banco de dados. Você precisa especificar o nome da tabela e as colunas que a tabela vai ter.

```sql showLineNumbers
CREATE TABLE nome_da_tabela (
  coluna1 tipo_da_coluna,
  coluna2 tipo_da_coluna,
  ...
);
```

Os tipos de dados variam de acordo com os bancos de dados, mas nessa documentação, vamos utilizar os tipos de dados do [SQLite](https://www.sqlite.org/datatype3.html), que são os seguintes:

- `INTEGER` para números inteiros positivos e negativos.
- `REAL` para números reais (números com casas decimais).
- `TEXT` para texto.
- `BLOB` para dados binários.
- `NULL` para valores nulos.

Mas sempre verifique a documentação do seu banco de dados para ver todos os tipos de dados disponíveis.

```sql showLineNumbers
CREATE TABLE usuarios (
  id INTEGER PRIMARY KEY,
  nome TEXT,
  email TEXT,
  idade INTEGER
);
```

### ALTER TABLE

O comando `ALTER TABLE` é utilizado para adicionar, modificar ou deletar colunas de uma tabela.

```sql showLineNumbers
-- Adiciona uma nova coluna à tabela
ALTER TABLE nome_da_tabela
ADD coluna tipo_da_coluna;

-- Modifica o tipo de uma coluna
ALTER TABLE nome_da_tabela
ALTER COLUMN coluna tipo_da_coluna;

-- Deleta uma coluna da tabela
ALTER TABLE nome_da_tabela
DROP COLUMN coluna;
```

Então você não precisa se preocupar se esqueceu de adicionar uma coluna à tabela, você pode adicionar, modificar ou deletar colunas a qualquer momento. Mas lembre-se de que isso pode afetar os dados que já estão na tabela, então tome cuidado ao modificar a estrutura da tabela.

### DROP

O comando `DROP` é utilizado para deletar um banco de dados, uma tabela, ou um índice. O comando `DROP` é irreversível, então tome cuidado ao utilizá-lo.

### DROP DATABASE

O comando `DROP DATABASE` é utilizado para deletar um banco de dados. Você precisa especificar o nome do banco de dados que deseja deletar.

```sql showLineNumbers
DROP DATABASE nome_do_banco_de_dados;
```

### DROP TABLE

O comando `DROP TABLE` é utilizado para deletar uma tabela. Você precisa especificar o nome da tabela que deseja deletar.

```sql showLineNumbers
DROP TABLE nome_da_tabela;
```

### INSERT

O comando `INSERT` é utilizado para inserir dados em uma tabela. Você precisa especificar o nome da tabela e os valores que deseja inserir.

```sql showLineNumbers
INSERT INTO nome_da_tabela (coluna1, coluna2, ...)
VALUES
(valor1, valor2, ...),
(valor3, valor4, ...);
```

### SELECT

O comando `SELECT` é utilizado para consultar dados de uma tabela. Com o comando `SELECT`, você pode selecionar todas as colunas de uma tabela, ou selecionar colunas específicas, ou até mesmo fazer cálculos com os dados.

```sql showLineNumbers
-- Seleciona todas as colunas da tabela
SELECT
  *
FROM
  tabela;

-- Seleciona colunas específicas da tabela
SELECT
  coluna1,
  coluna2
FROM
  tabela;
```

### UPDATE

O comando `UPDATE` é utilizado para atualizar dados em uma tabela. Você precisa especificar o nome da tabela, as colunas que deseja atualizar e os valores que deseja atualizar.

```sql showLineNumbers
UPDATE nome_da_tabela
SET
  coluna1 = valor1,
  coluna2 = valor2
WHERE
  condicao;
```

:::info Observação
Não se preocupe com as cláusulas no momento (WHERE). Elas serão vistas mais [adiante](#cláusulas).
:::

### DELETE

O comando `DELETE` é utilizado para deletar dados de uma tabela. Você precisa especificar o nome da tabela e a condição que deseja deletar.

```sql showLineNumbers
DELETE FROM nome_da_tabela
WHERE
  condicao;
```

## Cláusulas

Além dos comandos básicos de SQL, existem cláusulas que você pode utilizar para filtrar, ordenar e agrupar os dados. Vamos ver algumas cláusulas que você pode utilizar para consultar os dados.

### FROM

A cláusula `FROM` é utilizada para especificar a tabela da qual você deseja consultar os dados. Com a cláusula `FROM`, você pode especificar a tabela da qual deseja selecionar os dados.

```sql showLineNumbers
SELECT
  *
FROM
  tabela;
```

Você pode utilizar a cláusula `FROM` para especificar a tabela da qual deseja selecionar os dados, o que pode ser útil quando você tem várias tabelas e precisa consultar os dados de uma tabela específica.

### WHERE

A cláusula `WHERE` é utilizada para filtrar os dados de uma tabela. Com a cláusula `WHERE`, você pode especificar uma condição que os dados devem atender para serem retornados.

```sql showLineNumbers
SELECT
  *
FROM
  tabela
WHERE
  x > 10;
```

Você pode utilizar operadores lógicos para melhorar a condição de filtragem, como:

- `=` igual a um valor.
- `!=` diferente de um valor.
- `>` maior que um valor.
- `<` menor que um valor.
- `>=` maior ou igual a um valor.
- `<=` menor ou igual a um valor.
- `AND` e lógico. Retorna verdadeiro se ambas as condições forem verdadeiras.
- `OR` ou lógico. Retorna verdadeiro se uma das condições for verdadeira.
- `NOT` negação lógica. Retorna verdadeiro se a condição for falsa.

```sql showLineNumbers
SELECT
  *
FROM
  tabela
WHERE
  x > 10
  AND y < 20;
```

### ORDER BY

A cláusula `ORDER BY` é utilizada para ordenar os dados de uma tabela. Com a cláusula `ORDER BY`, você pode especificar a ordem em que os dados devem ser retornados.

```sql showLineNumbers
SELECT
  *
FROM
  tabela
ORDER BY
  x ASC;
```

Você pode ordenar os dados em ordem crescente (`ASC`) ou decrescente (`DESC`).

### GROUP BY

A cláusula `GROUP BY` é utilizada para agrupar os dados de uma tabela. Com a cláusula `GROUP BY`, você pode agrupar os dados por uma ou mais colunas.

```sql showLineNumbers
SELECT
  coluna1,
  COUNT(coluna2)
FROM
  tabela
GROUP BY
  coluna1;
```

:::info Observação
Não se preocupe com as funções no momento (COUNT). Elas serão vistas mais [adiante](#funções).
:::

### HAVING

A cláusula `HAVING` é utilizada para filtrar os dados agrupados de uma tabela. Com a cláusula `HAVING`, você pode especificar uma condição que os dados agrupados devem atender para serem retornados.

```sql showLineNumbers
SELECT
  coluna1,
  COUNT(coluna2)
FROM
  tabela
GROUP BY
  coluna1
HAVING
  COUNT(coluna2) > 10;
```

### LIMIT

A cláusula `LIMIT` é utilizada para limitar o número de linhas retornadas de uma tabela. Com a cláusula `LIMIT`, você pode especificar o número de linhas que deseja retornar.

```sql showLineNumbers
SELECT
  *
FROM
  tabela
LIMIT
  10;
```

Então você pode utilizar a cláusula `LIMIT` para limitar o número de linhas retornadas, o que pode ser útil quando você tem muitos dados e só precisa de uma parte deles.

## Joins (Junções)

A cláusula `JOIN` é utilizada para combinar os dados de duas ou mais tabelas. Com a cláusula `JOIN`, você pode combinar os dados de duas ou mais tabelas com base em uma condição.

É importante entender como as tabelas estão relacionadas entre si para utilizar a cláusula `JOIN` corretamente. Existem vários tipos de `JOIN`, como `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL JOIN`, que você pode utilizar para combinar os dados de duas ou mais tabelas.

### INNER JOIN (JOIN)

O `INNER JOIN` é utilizado para combinar os dados de duas ou mais tabelas onde a condição é verdadeira. O termo `JOIN` é equivalente a `INNER JOIN`, então você pode utilizar `JOIN` em vez de `INNER JOIN`.

<Center bgColorDark="#333" >

![INNER JOIN](./img_inner_join.png)  
https://www.w3schools.com/sql/img_innerjoin.gif

</Center>

```sql showLineNumbers
SELECT
  *
FROM
  tabela1
  INNER JOIN tabela2 ON tabela1.coluna = tabela2.coluna

-- Equivalente a
SELECT
  *
FROM
  tabela1
  JOIN tabela2 ON tabela1.coluna = tabela2.coluna
```

### LEFT JOIN

O `LEFT JOIN` é utilizado para combinar os dados da tabela da esquerda com os dados da tabela da direita, mesmo que a condição não seja verdadeira.

<Center bgColorDark="#333" >

![LEFT JOIN](./img_left_join.png)  
https://www.w3schools.com/sql/img_leftjoin.gif

</Center>

```sql showLineNumbers
SELECT
  *
FROM
  tabela1
  LEFT JOIN tabela2 ON tabela1.coluna = tabela2.coluna
```

### RIGHT JOIN

O `RIGHT JOIN` é utilizado para combinar os dados da tabela da direita com os dados da tabela da esquerda, mesmo que a condição não seja verdadeira.

<Center bgColorDark="#333" >

![RIGHT JOIN](./img_right_join.png)  
https://www.w3schools.com/sql/img_rightjoin.gif

</Center>

```sql showLineNumbers
SELECT
  *
FROM
  tabela1
  RIGHT JOIN tabela2 ON tabela1.coluna = tabela2.coluna
```

### FULL OUTER JOIN

O `FULL OUTER JOIN` é utilizado para combinar os dados da tabela da esquerda com os dados da tabela da direita, mesmo que a condição não seja verdadeira.

<Center bgColorDark="#333" >

![FULL OUTER JOIN](./img_full_outer_join.png)  
https://www.w3schools.com/sql/img_fulljoin.gif

</Center>

```sql showLineNumbers
SELECT
  *
FROM
  tabela1
  FULL OUTER JOIN tabela2 ON tabela1.coluna = tabela2.coluna
```

## Funções

Além dos comandos básicos de SQL e das cláusulas que você pode utilizar para consultar os dados, existem funções que você pode utilizar para fazer cálculos com os dados. Vamos ver algumas funções que você pode utilizar para fazer cálculos com os dados.

<Center>

![Funções](./sqlite-functions.png)  
[Lista de funções do SQLite](https://www.sqlite.org/lang_corefunc.html)

</Center>

Vamos ver algumas funções, as que acreditamos serem mais úteis para você começar a praticar SQL.

### COUNT

A função `COUNT` é utilizada para contar o número de linhas retornadas de uma consulta. Com a função `COUNT`, você pode contar o número de linhas retornadas de uma consulta.

```sql showLineNumbers
SELECT
  COUNT(*)
FROM
  tabela;
```

### SUM

A função `SUM` é utilizada para somar os valores de uma coluna. Com a função `SUM`, você pode somar os valores de uma coluna.

```sql showLineNumbers
SELECT
  SUM(coluna)
FROM
  tabela;
```

### LOWER

A função `LOWER` é utilizada para converter uma string para minúsculas. Com a função `LOWER`, você pode converter uma string para minúsculas.

```sql showLineNumbers
SELECT
  LOWER(coluna)
FROM
  tabela;
```

### UPPER

A função `UPPER` é utilizada para converter uma string para maiúsculas. Com a função `UPPER`, você pode converter uma string para maiúsculas.

```sql showLineNumbers
SELECT
  UPPER(coluna)
FROM
  tabela;
```

### ROUND

A função `ROUND` é utilizada para arredondar um número para um número específico de casas decimais. Com a função `ROUND`, você pode arredondar um número para um número específico de casas decimais.

```sql showLineNumbers
SELECT
  ROUND(coluna, casas_decimais)
FROM
  tabela;
```

### LENGTH

A função `LENGTH` é utilizada para retornar o número de caracteres de uma string. Com a função `LENGTH`, você pode retornar o número de caracteres de uma string.

```sql showLineNumbers
SELECT
  LENGTH(coluna)
FROM
  tabela;
```

### ...

Existem muitas outras funções que você pode utilizar para fazer cálculos com os dados. Você pode consultar a documentação do seu banco de dados para ver todas as funções disponíveis.

## Prática

Agora que você já aprendeu os conceitos básicos de SQL, vamos praticar o que aprendemos até agora. Vamos utilizar o site [SQLite Online](https://www.convertcsv.com/sqlite-online.htm) para praticar SQL.

### Item 1

Criar uma tabela chamada `livros` com as seguintes colunas:

- `id` do tipo `INTEGER` e chave primária.
- `titulo` do tipo `TEXT`.
- `autor` do tipo `TEXT`.

```sql showLineNumbers
DROP TABLE IF EXISTS livros;

CREATE TABLE livros (
  id INTEGER PRIMARY KEY,
  titulo TEXT,
  autor TEXT
);
```

Na linha 1, estamos deletando a tabela `livros` se ela já existir, para que possamos criar uma nova tabela. Na linha 3, estamos criando a tabela `livros` com as colunas `id`, `titulo` e `autor`. É feito um `DROP TABLE` para garantir que a tabela não exista antes de criá-la, para que não haja erros.

Ao executar, não vai aparecer nenhuma mensagem, mas no [item 2](#item-2) e [item 3](#item-3) vamos verificar se a tabela foi criada corretamente.

### Item 2

Vamos inserir um livro na tabela `livros` com os seguintes dados:

- `id` igual a `1`.
- `titulo` igual a `Harry Potter e a Pedra Filosofal`.
- `autor` igual a `J.K. Rowling`.

```sql showLineNumbers
INSERT INTO livros (id, titulo, autor)
VALUES
(1, 'Harry Potter e a Pedra Filosofal', 'J.K. Rowling');
```

Assim como no [item 1](#item-1), não vai aparecer nenhuma mensagem, mas no [item 3](#item-3) vamos verificar se o livro foi inserido corretamente.

### Item 3

Vamos consultar os livros da tabela `livros` e verificar se o livro foi inserido corretamente.

```sql showLineNumbers
SELECT
  *
FROM
  livros;
```

Se tudo estiver correto, vai aparecer uma tabela com os dados da tabela `livros`, e você vai ver o livro que inserimos no [item 2](#item-2).

<Center>

![Resultado](./sql_item_3.png)  
Resultado da consulta

</Center>

<!-- - [SQLZoo](https://sqlzoo.net/) -->
<!-- - [SQLBolt](https://sqlbolt.com/) -->
<!-- - [SQLFiddle](https://sqlfiddle.com/) -->
<!-- - [SQLPlayground](https://sqlplayground.app/) -->
<!-- - [W3Schools](https://www.w3schools.com/sql/) -->
<!-- - [Codecademy](https://www.codecademy.com/learn/learn-sql) -->

<!-- https://sqlbolt.com/ -->
<!-- https://sqlfiddle.com/ -->
<!-- https://sqlplayground.app/ -->

## Fontes

https://www.w3schools.com/sql/sql_syntax.asp
https://www.sqlitetutorial.net/
https://www.sqlite.org/datatype3.html
