"use strict";(self.webpackChunkcode=self.webpackChunkcode||[]).push([[171],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?u(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},u=Object.keys(e);for(a=0;a<u.length;a++)o=u[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)o=u[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,u=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(o),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||u;return o?a.createElement(f,n(n({ref:t},c),{},{components:o})):a.createElement(f,n({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=o.length,n=new Array(u);n[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,n[1]=i;for(var l=2;l<u;l++)n[l]=o[l];return a.createElement.apply(null,n)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2643:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>p,frontMatter:()=>u,metadata:()=>i,toc:()=>l});var a=o(7462),r=(o(7294),o(3905));const u={id:"github_actions",title:"GitHub Actions"},n=void 0,i={unversionedId:"site_docusaurus/github_actions",id:"site_docusaurus/github_actions",title:"GitHub Actions",description:"Durante o desenvolvimento de um projeto, \xe9 comum que seja necess\xe1rio executar tarefas repetitivas, como por exemplo, executar testes unit\xe1rios, fazer o build do projeto, fazer o deploy do projeto, etc. Quando pensamos em um projeto pequeno ou com poucas modifica\xe7\xf5es, essas tarefas podem ser executadas manualmente, mas quando o projeto cresce e passa a ter v\xe1rias modifica\xe7\xf5es, essas tarefas podem ser executadas de forma autom\xe1tica, atrav\xe9s de um processo de integra\xe7\xe3o cont\xednua (CI).",source:"@site/docs/tutorial/site_docusaurus/06_github_actions.md",sourceDirName:"site_docusaurus",slug:"/site_docusaurus/github_actions",permalink:"/tutorial/site_docusaurus/github_actions",draft:!1,editUrl:"https://github.com/lucasbaccan/code/tree/master/docs/tutorial/site_docusaurus/06_github_actions.md",tags:[],version:"current",lastUpdatedBy:"Lucas Elias Baccan",lastUpdatedAt:1681086780,formattedLastUpdatedAt:"10 de abr. de 2023",sidebarPosition:6,frontMatter:{id:"github_actions",title:"GitHub Actions"},sidebar:"docs",previous:{title:"Criando p\xe1ginas",permalink:"/tutorial/site_docusaurus/criando_paginas"}},s={},l=[{value:"GitHub Actions",id:"github-actions",level:2},{value:"Meus workflows",id:"meus-workflows",level:2},{value:"Build and Deploy",id:"build-and-deploy",level:3},{value:"Pull Request - Deploy to Surge",id:"pull-request---deploy-to-surge",level:3},{value:"Pull Request - Close",id:"pull-request---close",level:3},{value:"Gource",id:"gource",level:3}],c={toc:l};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Durante o desenvolvimento de um projeto, \xe9 comum que seja necess\xe1rio executar tarefas repetitivas, como por exemplo, executar testes unit\xe1rios, fazer o build do projeto, fazer o deploy do projeto, etc. Quando pensamos em um projeto pequeno ou com poucas modifica\xe7\xf5es, essas tarefas podem ser executadas manualmente, mas quando o projeto cresce e passa a ter v\xe1rias modifica\xe7\xf5es, essas tarefas podem ser executadas de forma autom\xe1tica, atrav\xe9s de um processo de integra\xe7\xe3o cont\xednua (CI)."),(0,r.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,r.kt)("p",null,"Como eu utilizo o ",(0,r.kt)("a",{parentName:"p",href:"https://github.com"},"GitHub")," para salvar o c\xf3digo do projeto, eles disponibilizam uma ferramenta chamada GitHub Actions que permite executar os workflows no pr\xf3prio GitHub. "),(0,r.kt)("p",null,"O ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/features/actions"},"GitHub Actions")," \xe9 uma ferramenta de automa\xe7\xe3o de processos que permite executar tarefas repetitivas de forma automatizada, atrav\xe9s de um arquivo de configura\xe7\xe3o chamado workflow. O workflow \xe9 um arquivo de configura\xe7\xe3o que cont\xe9m as instru\xe7\xf5es para executar as tarefas, e \xe9 escrito em YAML. O workflow pode ser executado em um determinado evento, como por exemplo, quando um ",(0,r.kt)("em",{parentName:"p"},"pull request")," \xe9 criado, quando um ",(0,r.kt)("em",{parentName:"p"},"commit")," \xe9 feito, quando um release \xe9 criada, etc."),(0,r.kt)("h2",{id:"meus-workflows"},"Meus workflows"),(0,r.kt)("p",null,"Esse projeto utiliza quatro workflows, que facilitam no dia a dia do desenvolvimento do projeto."),(0,r.kt)("h3",{id:"build-and-deploy"},"Build and Deploy"),(0,r.kt)("p",null,"Esse workflow \xe9 executado quando um commit \xe9 feito na branch ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"master"),". Ele vai executar o comando ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build")," e vai fazer o deploy do projeto no GitHub Pages."),(0,r.kt)("h3",{id:"pull-request---deploy-to-surge"},"Pull Request - Deploy to Surge"),(0,r.kt)("p",null,"Esse workflow \xe9 executado quando um ",(0,r.kt)("em",{parentName:"p"},"pull request")," \xe9 criado. Ele vai executar o comando ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build")," e vai fazer o deploy do projeto no ",(0,r.kt)("a",{parentName:"p",href:"https://surge.sh"},"Surge"),". Eu utilizo o Surge para subir o site e poder visualizar as altera\xe7\xf5es que foram feitas no ",(0,r.kt)("em",{parentName:"p"},"pull request"),"."),(0,r.kt)("h3",{id:"pull-request---close"},"Pull Request - Close"),(0,r.kt)("p",null,"Esse workflow \xe9 executado quando um ",(0,r.kt)("em",{parentName:"p"},"pull request")," \xe9 fechado. Ele vai deletar o site que foi feito o deploy no Surge."),(0,r.kt)("h3",{id:"gource"},"Gource"),(0,r.kt)("p",null,"Esse workflow \xe9 executado quando um commit \xe9 feito na branch ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"master"),". Ele vai executar o utilit\xe1rio ",(0,r.kt)("a",{parentName:"p",href:"https://gource.io"},"Gource")," e vai gerar um v\xeddeo com as altera\xe7\xf5es que foram feitas no projeto. O v\xeddeo \xe9 gerado no formato ",(0,r.kt)("inlineCode",{parentName:"p"},".mp4")," e \xe9 salvo no reposit\xf3rio do projeto no branch ",(0,r.kt)("inlineCode",{parentName:"p"},"gource"),"."))}p.isMDXComponent=!0}}]);