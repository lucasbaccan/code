"use strict";(self.webpackChunkcode=self.webpackChunkcode||[]).push([[1552],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>u});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},g=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,c=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return r?i.createElement(c,o(o({ref:t},g),{},{components:r})):i.createElement(c,o({ref:t},g))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=r(7462),n=(r(7294),r(3905));const a={id:"index",title:"Gitignore.io",description:"Gerador de arquivos .gitignore",tags:["Ferramentas online","Git","Gitingore"]},o=void 0,s={unversionedId:"ferramentas_online/gitignore_io/index",id:"ferramentas_online/gitignore_io/index",title:"Gitignore.io",description:"Gerador de arquivos .gitignore",source:"@site/docs/docs/ferramentas_online/gitignore_io/index.md",sourceDirName:"ferramentas_online/gitignore_io",slug:"/ferramentas_online/gitignore_io/",permalink:"/docs/ferramentas_online/gitignore_io/",draft:!1,editUrl:"https://github.com/lucasbaccan/code/tree/master/docs/docs/ferramentas_online/gitignore_io/index.md",tags:[{label:"Ferramentas online",permalink:"/docs/tags/ferramentas-online"},{label:"Git",permalink:"/docs/tags/git"},{label:"Gitingore",permalink:"/docs/tags/gitingore"}],version:"current",lastUpdatedBy:"Lucas Elias Baccan",lastUpdatedAt:1680986205,formattedLastUpdatedAt:"8 de abr. de 2023",frontMatter:{id:"index",title:"Gitignore.io",description:"Gerador de arquivos .gitignore",tags:["Ferramentas online","Git","Gitingore"]},sidebar:"docs",previous:{title:"Index",permalink:"/docs/"}},l={},p=[{value:"Git e .gitignore",id:"git-e-gitignore",level:2},{value:"Como utilizar",id:"como-utilizar",level:2},{value:"Exemplo de m\xfaltiplas linguagens",id:"exemplo-de-m\xfaltiplas-linguagens",level:3}],g={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"LINK",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"LINK:")," ",(0,n.kt)("a",{parentName:"p",href:"https://gitignore.io/"},"https://gitignore.io/"))),(0,n.kt)("h2",{id:"git-e-gitignore"},"Git e .gitignore"),(0,n.kt)("p",null,"Quando criamos um novo projeto, \xe9 uma boa pratica utilizar uma ferramenta de gerenciamento de c\xf3digo, a mais utilizada atualmente \xe9 o ",(0,n.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git"),". Quando rodamos ",(0,n.kt)("inlineCode",{parentName:"p"},"git ini"),", \xe9 criado uma pasta ",(0,n.kt)("strong",{parentName:"p"},".git")," e se inicia o processo de versionamento. Al\xe9m desta pasta, podemos criar um arquivo ",(0,n.kt)("strong",{parentName:"p"},".gitignore"),", do qual informamos quais arquivos e diret\xf3rios ",(0,n.kt)("strong",{parentName:"p"},"n\xe3o")," queremos que o ",(0,n.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git")," gerencie."),(0,n.kt)("p",null,"A forma que o Git utiliza para controlar quais arquivos ele ",(0,n.kt)("strong",{parentName:"p"},"n\xe3o")," deve controlar \xe9 utilizando um arquivo ",(0,n.kt)("strong",{parentName:"p"},".gitignore"),". Este arquivo deve ficar na raiz do projeto."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Local onde o arquivo &#39;.gitignore&#39; deve ficar",src:r(9656).Z,width:"182",height:"97"}),"  ")),(0,n.kt)("h2",{id:"como-utilizar"},"Como utilizar"),(0,n.kt)("p",null,"Utilizo o site ",(0,n.kt)("a",{parentName:"p",href:"https://gitignore.io/"},"https://gitignore.io/")," para gerar o arquivo ",(0,n.kt)("strong",{parentName:"p"},".gitignore"),", basta informar qual a linguagem ou tecnologias que utiliza no site e gerar um arquivo com as configura\xe7\xf5es."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:r(8267).Z,width:"690",height:"365"}))),(0,n.kt)("p",null,"O site gera um arquivo semelhante ao abaixo, nele contem varias configura\xe7\xf5es para evitar arquivos da linguagem ",(0,n.kt)("strong",{parentName:"p"},"java"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".gitignore" showLineNumbers={true}',title:'".gitignore"',showLineNumbers:"{true}"},"# Created by https://www.toptal.com/developers/gitignore/api/java\n# Edit at https://www.toptal.com/developers/gitignore?templates=java\n\n### Java ###\n# Compiled class file\n*.class\n\n# Log file\n*.log\n\n# BlueJ files\n*.ctxt\n\n# Mobile Tools for Java (J2ME)\n.mtj.tmp/\n\n# Package Files #\n*.jar\n*.war\n*.nar\n*.ear\n*.zip\n*.tar.gz\n*.rar\n")),(0,n.kt)("h3",{id:"exemplo-de-m\xfaltiplas-linguagens"},"Exemplo de m\xfaltiplas linguagens"),(0,n.kt)("p",null,"O site contem diversas op\xe7\xf5es, e voc\xea pode juntar mais de uma op\xe7\xe3o ao mesmo tempo."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:r(153).Z,width:"690",height:"365"}))),(0,n.kt)("p",null,"Ent\xe3o explore as op\xe7\xf5es sem medo, aposto que vai achar uma solu\xe7\xe3o para seu projeto."))}d.isMDXComponent=!0},9656:(e,t,r)=>{r.d(t,{Z:()=>i});const i="data:image/png;base64,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"},8267:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/imagem_2-cf8d285a9bcea6721bed75a8153d3ea7.png"},153:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/imagem_3-6539abb5d162ec5be80d2062e5d7a43c.png"}}]);