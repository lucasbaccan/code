---
id: criando_projeto
title: Criando o projeto
--- 

## Requisitos

Para seguir o tutorial, você precisa ter o [Node.js](https://nodejs.org/en/) instalado em sua máquina.

## Documentação

A documentação do Docusaurus está disponível em [docusaurus.io/docs](https://docusaurus.io/docs), é uma ótima fonte de informações para quem está começando.

## Criando o projeto

Para criar o projeto, execute o seguinte comando:

```bash
npx @docusaurus/init@latest init tutorial-site classic
```

Onde `tutorial-site` é o nome do projeto, e você pode alterar para o nome que quiser, já o valor `classic` é o tema que será utilizado. Caso queira utilizar outro tema, veja a [documentação](https://docusaurus.io/docs/installation#selecting-the-theme-during-installation) para mais informações.

Esse comando irá criar uma pasta com o nome do projeto, e dentro dela terá o projeto criado. Caso queira ver o resultado, abra a pasta `tutorial-site` no seu editor de código e execute o comando `npm start` para iniciar o servidor de desenvolvimento.

```bash
cd tutorial-site
npm start
```

Se tudo ocorrer bem, você verá uma mensagem parecida com essa:

```bash
Docusaurus website started at http://localhost:3000
```

Acesse o endereço [http://localhost:3000](http://localhost:3000) no seu navegador e veja o resultado.

**É isso, ta pronto!** 

Bom, não é bem assim, mas já é um bom começo. Até aqui utilizamos o **Node.js** para criar o projeto, e o **npm** para instalar as dependências e executar o servidor de desenvolvimento, tudo o resto foi feito pelo Docusaurus.