---
id: personalizando_site
title: Personalizando o site
---

## Requisitos

Para seguir o tutorial, você precisa ter o [Node.js](https://nodejs.org/en/) instalado em sua máquina e ter criado o site anteriormente.

## Personalizando o site

Agora que você já tem o projeto criado, vamos começar a personalizar o projeto para que ele fique com a sua cara. Para isso, acesse o arquivo `docusaurus.config.js`, esse arquivo é responsável por configurar o projeto, e nele você pode alterar o título, descrição, tema, entre outras coisas.

Tome cuidado ao alterar o arquivo, pois se você fizer algo errado, o projeto pode parar de funcionar. Para evitar isso, sempre que fizer alguma alteração, execute o comando `npm start` para verificar se o projeto está funcionando corretamente.

**Observação**: Caso tenha rodado o comando `npm start`, o projeto atualizará automaticamente quando você salvar o arquivo, então não é necessário executar o comando novamente sempre que fizer uma alteração.

Mais informações sobre as configurações do arquivo `docusaurus.config.js` podem ser encontradas na [documentação](https://docusaurus.io/docs/docusaurus.config.js), mas vamos ver algumas configurações básicas.

### Alterando o título

O título do site é definido na propriedade `title` do objeto `themeConfig`, então vamos alterar o valor dessa propriedade para o nome do nosso site.

```js title="docusaurus.config.js"
module.exports = {
  const config = {
    title: 'Meu site'
  }
  ...
  themeConfig: {
    ...
    navbar: {
      title: 'Meu site'
    }
    ...
  }
```

:::info Atenção
O valor da propriedade `title` deve ser uma string, então não esqueça das aspas. Além disso, existe mais de uma propriedade `title`, você pode alterar todas.
:::

### Alterando a descrição

A descrição do site é definida na propriedade `tagline` do objeto `themeConfig`, então vamos alterar o valor dessa propriedade para a descrição do nosso site.

```js title="docusaurus.config.js"
module.exports = {
  const config = {
    tagline: 'Descrição do meu site'
  }
  ...
```

### Logo

O logo do site é definido na propriedade `logo` do objeto `themeConfig`, então vamos alterar o valor dessa propriedade para o logo do nosso site.

Para isso, você precisa ter o logo do seu site em formato `.svg` e colocar ele na pasta `static/img`, depois altere o valor da propriedade `logo` para o caminho do logo.

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      ...
      logo: {
        alt: 'Logo do meu site',
        src: 'img/logo.svg',
      },
      ...
    },
  }
  ...
```

### Itens do menu

Os itens do menu são definidos na propriedade `items` do objeto `navbar`, então caso queira adicionar ou remover algum item, basta alterar o valor dessa propriedade.

Para saber mais sobre os itens do menu, acesse a [documentação](https://docusaurus.io/docs/api/themes/configuration#navbar).

```js title="docusaurus.config.js"

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      ...
      items: [
        {
          to: 'docs/introducao',
          activeBasePath: 'docs',
          label: 'Documentação',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'}
      ],
      ...
    },
    ...
  }
  ...
```

### Alterando o tema

import ColorGenerator from '@site/src/components/ColorGenerator';

O tema do site é definido na propriedade `colorMode` do objeto `themeConfig`, então vamos alterar o valor dessa propriedade para o tema do nosso site.


```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: '🌙',
        darkIconStyle: {
          marginLeft: '2px',
        },
        lightIcon: '☀️',
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    ...
  }
  ...
```

Para alterar a cor do site, você pode utilizar o gerador de cores abaixo.

<ColorGenerator />

## Próximo passo

Agora que realizamos as configurações básicas do site, vamos colocar o site no ar, então acesse o próximo tutorial para saber como fazer isso.