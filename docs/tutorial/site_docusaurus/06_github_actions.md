---
id: github_actions
title: GitHub Actions
---

Durante o desenvolvimento de um projeto, é comum que seja necessário executar tarefas repetitivas, como por exemplo, executar testes unitários, fazer o build do projeto, fazer o deploy do projeto, etc. Quando pensamos em um projeto pequeno ou com poucas modificações, essas tarefas podem ser executadas manualmente, mas quando o projeto cresce e passa a ter várias modificações, essas tarefas podem ser executadas de forma automática, através de um processo de integração contínua (CI).

## GitHub Actions

Como eu utilizo o [GitHub](https://github.com) para salvar o código do projeto, eles disponibilizam uma ferramenta chamada GitHub Actions que permite executar os workflows no próprio GitHub. 

O [GitHub Actions](https://github.com/features/actions) é uma ferramenta de automação de processos que permite executar tarefas repetitivas de forma automatizada, através de um arquivo de configuração chamado workflow. O workflow é um arquivo de configuração que contém as instruções para executar as tarefas, e é escrito em YAML. O workflow pode ser executado em um determinado evento, como por exemplo, quando um *pull request* é criado, quando um *commit* é feito, quando um release é criada, etc.

## Meus workflows

Esse projeto utiliza quatro workflows, que facilitam no dia a dia do desenvolvimento do projeto.

### Build and Deploy

Esse workflow é executado quando um commit é feito na branch `main` ou `master`. Ele vai executar o comando `npm run build` e vai fazer o deploy do projeto no GitHub Pages.

### Pull Request - Deploy to Surge

Esse workflow é executado quando um *pull request* é criado. Ele vai executar o comando `npm run build` e vai fazer o deploy do projeto no [Surge](https://surge.sh). Eu utilizo o Surge para subir o site e poder visualizar as alterações que foram feitas no *pull request*.

### Pull Request - Close

Esse workflow é executado quando um *pull request* é fechado. Ele vai deletar o site que foi feito o deploy no Surge.

### Gource

Esse workflow é executado quando um commit é feito na branch `main` ou `master`. Ele vai executar o utilitário [Gource](https://gource.io) e vai gerar um vídeo com as alterações que foram feitas no projeto. O vídeo é gerado no formato `.mp4` e é salvo no repositório do projeto no branch `gource`.