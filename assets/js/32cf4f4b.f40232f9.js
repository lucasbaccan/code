"use strict";(self.webpackChunkcode=self.webpackChunkcode||[]).push([[9683],{3905:(e,o,a)=>{a.d(o,{Zo:()=>l,kt:()=>m});var t=a(7294);function i(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function n(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?n(Object(a),!0).forEach((function(o){i(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function s(e,o){if(null==e)return{};var a,t,i=function(e,o){if(null==e)return{};var a,t,i={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||(i[a]=e[a]);return i}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=t.createContext({}),u=function(e){var o=t.useContext(p),a=o;return e&&(a="function"==typeof e?e(o):r(r({},o),e)),a},l=function(e){var o=u(e.components);return t.createElement(p.Provider,{value:o},e.children)},c={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},d=t.forwardRef((function(e,o){var a=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=i,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||n;return a?t.createElement(g,r(r({ref:o},l),{},{components:a})):t.createElement(g,r({ref:o},l))}));function m(e,o){var a=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=d;var s={};for(var p in o)hasOwnProperty.call(o,p)&&(s[p]=o[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<n;u++)r[u]=a[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8499:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var t=a(7462),i=(a(7294),a(3905));const n={id:"publicando",title:"Publicando o site"},r=void 0,s={unversionedId:"site_docusaurus/publicando",id:"site_docusaurus/publicando",title:"Publicando o site",description:"Requisitos",source:"@site/docs/tutorial/site_docusaurus/04_publicando.md",sourceDirName:"site_docusaurus",slug:"/site_docusaurus/publicando",permalink:"/tutorial/site_docusaurus/publicando",draft:!1,editUrl:"https://github.com/lucasbaccan/code/tree/master/docs/tutorial/site_docusaurus/04_publicando.md",tags:[],version:"current",lastUpdatedBy:"Lucas Elias Baccan",lastUpdatedAt:1703270031,formattedLastUpdatedAt:"22 de dez. de 2023",sidebarPosition:4,frontMatter:{id:"publicando",title:"Publicando o site"},sidebar:"docs",previous:{title:"Personalizando o site",permalink:"/tutorial/site_docusaurus/personalizando_site"},next:{title:"Criando p\xe1ginas",permalink:"/tutorial/site_docusaurus/criando_paginas"}},p={},u=[{value:"Requisitos",id:"requisitos",level:2},{value:"Configurando o GitHub Actions",id:"configurando-o-github-actions",level:2},{value:"Criando o reposit\xf3rio",id:"criando-o-reposit\xf3rio",level:2},{value:"Fazendo o upload do projeto",id:"fazendo-o-upload-do-projeto",level:2},{value:"Configurando o GitHub Pages",id:"configurando-o-github-pages",level:2},{value:"Conclus\xe3o",id:"conclus\xe3o",level:2}],l={toc:u};function c(e){let{components:o,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},l,n,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"requisitos"},"Requisitos"),(0,i.kt)("p",null,"Para publicar o site, voc\xea precisa ter uma conta no ",(0,i.kt)("a",{parentName:"p",href:"https://github.com"},"GitHub")," e ter o ",(0,i.kt)("a",{parentName:"p",href:"https://git-scm.com"},"Git")," instalado na sua m\xe1quina."),(0,i.kt)("h2",{id:"configurando-o-github-actions"},"Configurando o GitHub Actions"),(0,i.kt)("p",null,"Para publicar o site, voc\xea precisa fazer o ",(0,i.kt)("strong",{parentName:"p"},"build")," do projeto e depois fazer o ",(0,i.kt)("strong",{parentName:"p"},"deploy")," para o GitHub Pages, para isso, voc\xea pode fazer manualmente, mas eu vou mostrar como fazer isso de forma autom\xe1tica com o ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/pt/actions"},"GitHub Actions"),"."),(0,i.kt)("p",null,"Antes de come\xe7ar, abra a pasta do projeto com um editor de texto, como o ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"Visual Studio Code"),". Depois crie uma pasta chamada ",(0,i.kt)("inlineCode",{parentName:"p"},".github")," e dentro dela crie outra pasta chamada ",(0,i.kt)("inlineCode",{parentName:"p"},"workflows"),", dentro dessa pasta crie um arquivo chamado ",(0,i.kt)("inlineCode",{parentName:"p"},"main.yml")," e cole o seguinte c\xf3digo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title=".github/workflows/main.yml"',title:'".github/workflows/main.yml"'},"name: Build and Deploy\n\non:\n  push:\n    branches:\n      - main\n      - master\n\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - uses: actions/setup-node@v2\n        with:\n          node-version: '16'\n      - run: npm install\n      - run: npm run build\n      - uses: peaceiris/actions-gh-pages@v3\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          publish_dir: ./build\n          branch: gh-pages\n")),(0,i.kt)("admonition",{title:"Aten\xe7\xe3o",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Voc\xea precisa criar a pasta ",(0,i.kt)("inlineCode",{parentName:"p"},".github")," e dentro dela a pasta ",(0,i.kt)("inlineCode",{parentName:"p"},"workflows")," para que o GitHub Actions funcione. A pasta ",(0,i.kt)("inlineCode",{parentName:"p"},".github")," \xe9 uma pasta oculta e voc\xea precisa habilitar a op\xe7\xe3o de mostrar pastas ocultas para que ela apare\xe7a no seu sistema operacional")),(0,i.kt)("p",null,"O c\xf3digo acima faz o seguinte:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Quando voc\xea fizer um ",(0,i.kt)("inlineCode",{parentName:"li"},"push")," para a branch ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," ou ",(0,i.kt)("inlineCode",{parentName:"li"},"master"),", o GitHub Actions vai executar o c\xf3digo."),(0,i.kt)("li",{parentName:"ul"},"Ele vai instalar o Node.js na vers\xe3o 16 e depois vai instalar as depend\xeancias do projeto."),(0,i.kt)("li",{parentName:"ul"},"Depois ele vai fazer o build do projeto e depois vai fazer o deploy para o GitHub Pages na branch ",(0,i.kt)("inlineCode",{parentName:"li"},"gh-pages"),".")),(0,i.kt)("h2",{id:"criando-o-reposit\xf3rio"},"Criando o reposit\xf3rio"),(0,i.kt)("p",null,"Primeiro, voc\xea precisa criar um reposit\xf3rio no GitHub, para isso, acesse o ",(0,i.kt)("a",{parentName:"p",href:"https://github.com"},"GitHub")," e crie um reposit\xf3rio com o nome que desejar, e deixe ele p\xfablico."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/new"},"Link para criar um reposit\xf3rio"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Criando um reposit\xf3rio no GitHub",src:a(5303).Z,width:"777",height:"221"})),(0,i.kt)("p",null,"Depois de criar o reposit\xf3rio, voc\xea vai ver uma p\xe1gina com instru\xe7\xf5es de como fazer o upload do seu projeto para o reposit\xf3rio, ent\xe3o vamos seguir essas instru\xe7\xf5es."),(0,i.kt)("h2",{id:"fazendo-o-upload-do-projeto"},"Fazendo o upload do projeto"),(0,i.kt)("p",null,"Vamos abrir o terminal na pasta onde voc\xea criou o projeto com o Docusaurus e executar os seguintes comandos:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Inicializa o reposit\xf3rio Git\ngit init\n\n# Adiciona todos os arquivos para o reposit\xf3rio\ngit add .\n\n# Faz o commit dos arquivos\ngit commit -m "Primeiro commit"\n\n# Adiciona o reposit\xf3rio remoto\ngit remote add origin <URL>\n# git remote add origin https://github.com/lucasbaccan/Teste.git\n\n# Faz o push para o reposit\xf3rio remoto\ngit push -u origin main\n')),(0,i.kt)("admonition",{title:"Observa\xe7\xe3o",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"O comando ",(0,i.kt)("inlineCode",{parentName:"p"},"git remote add origin <URL>")," deve ser executado com a URL do reposit\xf3rio que voc\xea criou no GitHub.")),(0,i.kt)("p",null,"Todos esses comandos v\xe3o fazer o upload do seu projeto para o reposit\xf3rio que voc\xea criou no GitHub."),(0,i.kt)("h2",{id:"configurando-o-github-pages"},"Configurando o GitHub Pages"),(0,i.kt)("p",null,"Agora que o projeto j\xe1 est\xe1 no GitHub, voc\xea precisa configurar o GitHub Pages para que ele possa publicar o site."),(0,i.kt)("p",null,"Vamos primeiro criar um token de acesso para o GitHub Pages, para isso, acesse o ",(0,i.kt)("a",{parentName:"p",href:"https://github.com"},"GitHub")," e v\xe1 at\xe9 a p\xe1gina de ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/settings/profile"},"configura\xe7\xf5es do seu perfil"),", depois v\xe1 at\xe9 a aba ",(0,i.kt)("inlineCode",{parentName:"p"},"Developer settings")," e depois clique em ",(0,i.kt)("inlineCode",{parentName:"p"},"Personal access tokens"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/settings/tokens/new"},"Link para criar um novo token de acesso diretamente"))),(0,i.kt)("p",null,"Lembre de marcar a op\xe7\xe3o ",(0,i.kt)("inlineCode",{parentName:"p"},"repo")," e ",(0,i.kt)("inlineCode",{parentName:"p"},"workflow")," depois clique em ",(0,i.kt)("inlineCode",{parentName:"p"},"Generate token"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Criando um novo token de acesso",src:a(345).Z,width:"784",height:"548"})),(0,i.kt)("p",null,"Copie o token gerado e salve em algum lugar, pois vamos precisar dele depois."),(0,i.kt)("p",null,"Depois de criar o token, vamos voltar para a p\xe1gina do reposit\xf3rio que voc\xea criou, e vamos clicar em ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings")," e depois em ",(0,i.kt)("inlineCode",{parentName:"p"},"Secrets")," e ",(0,i.kt)("inlineCode",{parentName:"p"},"Actions")," e depois em ",(0,i.kt)("inlineCode",{parentName:"p"},"New repository secret"),"."),(0,i.kt)("p",null,"Insira o nome ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_TOKEN")," e cole o token que voc\xea copiou no campo ",(0,i.kt)("inlineCode",{parentName:"p"},"Value")," e depois clique em ",(0,i.kt)("inlineCode",{parentName:"p"},"Add secret"),"."),(0,i.kt)("p",null,"Fizemos tudo isso para dar permiss\xe3o para o GitHub Actions fazer o deploy do site em nosso nome, sem precisarmos fazer isso manualmente."),(0,i.kt)("p",null,"Agora vamos voltar para a p\xe1gina do reposit\xf3rio e vamos clicar em ",(0,i.kt)("inlineCode",{parentName:"p"},"Settings")," e depois em ",(0,i.kt)("inlineCode",{parentName:"p"},"Pages")," e depois em ",(0,i.kt)("inlineCode",{parentName:"p"},"Source")," e selecione a op\xe7\xe3o ",(0,i.kt)("inlineCode",{parentName:"p"},"Deoloy from a branch")," e selecione a branch ",(0,i.kt)("inlineCode",{parentName:"p"},"gh-pages")," e depois clique em ",(0,i.kt)("inlineCode",{parentName:"p"},"Save"),"."),(0,i.kt)("p",null,"Se tudo deu certo, voc\xea vai ver uma mensagem dizendo que o site foi publicado com sucesso. Agora voc\xea pode acessar o site pelo link que aparece na p\xe1gina."),(0,i.kt)("p",null,"Vamos agora fazer um teste, vamos fazer uma altera\xe7\xe3o no projeto e fazer um novo ",(0,i.kt)("inlineCode",{parentName:"p"},"push")," para o reposit\xf3rio, para isso, vamos abrir o arquivo ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," e vamos alterar o t\xedtulo do site para ",(0,i.kt)("inlineCode",{parentName:"p"},"Teste")," e vamos salvar o arquivo."),(0,i.kt)("p",null,"Depois vamos abrir o terminal na pasta do projeto e vamos executar os seguintes comandos:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Adiciona todos os arquivos para o reposit\xf3rio\ngit add .\n\n# Faz o commit dos arquivos\ngit commit -m "Alterando o t\xedtulo do site"\n\n# Faz o push para o reposit\xf3rio remoto\ngit push\n')),(0,i.kt)("p",null,"Depois de fazer o ",(0,i.kt)("inlineCode",{parentName:"p"},"push")," do projeto, voc\xea vai ver que o GitHub Actions vai executar o c\xf3digo e vai fazer o deploy do site novamente, e voc\xea pode acessar o site pelo link que aparece na p\xe1gina do reposit\xf3rio."),(0,i.kt)("admonition",{title:"Informa\xe7\xe3o",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"O GitHub Pages pode demorar alguns minutos para atualizar o site, ent\xe3o se voc\xea n\xe3o conseguir acessar o site, tente novamente depois de alguns minutos.")),(0,i.kt)("h2",{id:"conclus\xe3o"},"Conclus\xe3o"),(0,i.kt)("p",null,"Nesse tutorial, voc\xea aprendeu como criar um site com o Docusaurus e como fazer o deploy do site para o GitHub Pages."))}c.isMDXComponent=!0},5303:(e,o,a)=>{a.d(o,{Z:()=>t});const t=a.p+"assets/images/04_img_01-310c21080385eccb47487378569af0ca.png"},345:(e,o,a)=>{a.d(o,{Z:()=>t});const t=a.p+"assets/images/04_img_02-8b551969ae6ec4b2732e8a7f993f0add.png"}}]);