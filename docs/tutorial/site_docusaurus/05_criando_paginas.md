---
id: criando_paginas
title: Criando páginas
---

## Criando uma página

Para criar uma página, você precisa criar um arquivo `.md` dentro da pasta `docs` e dentro dessa pasta você precisa criar uma pasta com o nome da página, por exemplo, se você quiser criar uma página chamada `sobre`, você precisa criar uma pasta chamada `sobre` dentro da pasta `docs` e dentro dessa pasta você precisa criar um arquivo chamado `index.md`, o conteúdo do arquivo `index.md` vai ser o conteúdo da página.

```md title="docs/sobre/index.md"
---
id: sobre
title: Sobre
---

# Sobre

Conteúdo da página sobre.
```

Por padrão, o Docusaurus vai criar uma página para cada arquivo `.md` que estiver dentro da pasta `docs`. Mas o que é o conteúdo do arquivo `.md`?

O conteúdo do arquivo `.md` é escrito em [Markdown](https://pt.wikipedia.org/wiki/Markdown), que é uma linguagem de marcação que permite escrever texto formatado usando uma sintaxe simples. O Docusaurus vai converter o conteúdo do arquivo `.md` para HTML e vai colocar esse HTML dentro de um template, então você não precisa se preocupar com a formatação do HTML.

Quando rodamos o comando `npm run build`, o Docusaurus vai analisar todos os arquivos `.md` dentro da pasta `docs` e vai criar uma página para cada arquivo `.md` que encontrar. Por exemplo, se você tiver um arquivo `docs/sobre/index.md`, o Docusaurus vai criar uma página com o conteúdo do arquivo `docs/sobre/index.md` e vai colocar esse conteúdo dentro do template `docs/sobre/index.html`.
