"use strict";(self.webpackChunkcode=self.webpackChunkcode||[]).push([[2743],{3905:(e,a,r)=>{r.d(a,{Zo:()=>p,kt:()=>m});var t=r(7294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function d(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=t.createContext({}),c=function(e){var a=t.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},p=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},l=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),l=c(r),m=n,v=l["".concat(s,".").concat(m)]||l[m]||u[m]||o;return r?t.createElement(v,i(i({ref:a},p),{},{components:r})):t.createElement(v,i({ref:a},p))}));function m(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=l;var d={};for(var s in a)hasOwnProperty.call(a,s)&&(d[s]=a[s]);d.originalType=e,d.mdxType="string"==typeof e?e:n,i[1]=d;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}l.displayName="MDXCreateElement"},1049:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=r(7462),n=(r(7294),r(3905));const o={id:"criando_paginas",title:"Criando p\xe1ginas"},i=void 0,d={unversionedId:"site_docusaurus/criando_paginas",id:"site_docusaurus/criando_paginas",title:"Criando p\xe1ginas",description:"Criando uma p\xe1gina",source:"@site/docs/tutorial/site_docusaurus/05_criando_paginas.md",sourceDirName:"site_docusaurus",slug:"/site_docusaurus/criando_paginas",permalink:"/tutorial/site_docusaurus/criando_paginas",draft:!1,editUrl:"https://github.com/lucasbaccan/code/tree/master/docs/tutorial/site_docusaurus/05_criando_paginas.md",tags:[],version:"current",lastUpdatedBy:"Lucas Elias Baccan",lastUpdatedAt:1664551991,formattedLastUpdatedAt:"30 de set. de 2022",sidebarPosition:5,frontMatter:{id:"criando_paginas",title:"Criando p\xe1ginas"},sidebar:"docs",previous:{title:"Publicando o site",permalink:"/tutorial/site_docusaurus/publicando"},next:{title:"GitHub Actions",permalink:"/tutorial/site_docusaurus/github_actions"}},s={},c=[{value:"Criando uma p\xe1gina",id:"criando-uma-p\xe1gina",level:2}],p={toc:c};function u(e){let{components:a,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"criando-uma-p\xe1gina"},"Criando uma p\xe1gina"),(0,n.kt)("p",null,"Para criar uma p\xe1gina, voc\xea precisa criar um arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},".md")," dentro da pasta ",(0,n.kt)("inlineCode",{parentName:"p"},"docs")," e dentro dessa pasta voc\xea precisa criar uma pasta com o nome da p\xe1gina, por exemplo, se voc\xea quiser criar uma p\xe1gina chamada ",(0,n.kt)("inlineCode",{parentName:"p"},"sobre"),", voc\xea precisa criar uma pasta chamada ",(0,n.kt)("inlineCode",{parentName:"p"},"sobre")," dentro da pasta ",(0,n.kt)("inlineCode",{parentName:"p"},"docs")," e dentro dessa pasta voc\xea precisa criar um arquivo chamado ",(0,n.kt)("inlineCode",{parentName:"p"},"index.md"),", o conte\xfado do arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},"index.md")," vai ser o conte\xfado da p\xe1gina."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/sobre/index.md"',title:'"docs/sobre/index.md"'},"---\nid: sobre\ntitle: Sobre\n---\n\n# Sobre\n\nConte\xfado da p\xe1gina sobre.\n")),(0,n.kt)("p",null,"Por padr\xe3o, o Docusaurus vai criar uma p\xe1gina para cada arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},".md")," que estiver dentro da pasta ",(0,n.kt)("inlineCode",{parentName:"p"},"docs"),". Mas o que \xe9 o conte\xfado do arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},".md"),"?"),(0,n.kt)("p",null,"O conte\xfado do arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},".md")," \xe9 escrito em ",(0,n.kt)("a",{parentName:"p",href:"https://pt.wikipedia.org/wiki/Markdown"},"Markdown"),", que \xe9 uma linguagem de marca\xe7\xe3o que permite escrever texto formatado usando uma sintaxe simples. O Docusaurus vai converter o conte\xfado do arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},".md")," para HTML e vai colocar esse HTML dentro de um template, ent\xe3o voc\xea n\xe3o precisa se preocupar com a formata\xe7\xe3o do HTML."),(0,n.kt)("p",null,"Quando rodamos o comando ",(0,n.kt)("inlineCode",{parentName:"p"},"npm run build"),", o Docusaurus vai analisar todos os arquivos ",(0,n.kt)("inlineCode",{parentName:"p"},".md")," dentro da pasta ",(0,n.kt)("inlineCode",{parentName:"p"},"docs")," e vai criar uma p\xe1gina para cada arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},".md")," que encontrar. Por exemplo, se voc\xea tiver um arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},"docs/sobre/index.md"),", o Docusaurus vai criar uma p\xe1gina com o conte\xfado do arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},"docs/sobre/index.md")," e vai colocar esse conte\xfado dentro do template ",(0,n.kt)("inlineCode",{parentName:"p"},"docs/sobre/index.html"),"."))}u.isMDXComponent=!0}}]);