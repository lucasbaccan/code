"use strict";(self.webpackChunkcode=self.webpackChunkcode||[]).push([[7537],{4549:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>q,contentTitle:()=>_,default:()=>S,frontMatter:()=>O,metadata:()=>z,toc:()=>I});var a=r(5893),s=r(1151),n=r(7294),t=r(512),i=r(6767),d=r.n(i),l=r(3692),c=r(5999),u=r(2949),m=r(9286),p=r(9047),h=r(812);const j={"--ifm-color-primary":{adjustment:0,adjustmentInput:"0",displayOrder:3,codeOrder:0},"--ifm-color-primary-dark":{adjustment:.1,adjustmentInput:"10",displayOrder:4,codeOrder:1},"--ifm-color-primary-darker":{adjustment:.15,adjustmentInput:"15",displayOrder:5,codeOrder:2},"--ifm-color-primary-darkest":{adjustment:.3,adjustmentInput:"30",displayOrder:6,codeOrder:3},"--ifm-color-primary-light":{adjustment:-.1,adjustmentInput:"-10",displayOrder:2,codeOrder:4},"--ifm-color-primary-lighter":{adjustment:-.15,adjustmentInput:"-15",displayOrder:1,codeOrder:5},"--ifm-color-primary-lightest":{adjustment:-.3,adjustmentInput:"-30",displayOrder:0,codeOrder:6}},g="#c41508",x="#ff3224",f="#ffffff",v="#181920",b=(0,h.WA)("ifm-theme-colors-light",{persistence:"sessionStorage"}),y=(0,h.WA)("ifm-theme-colors-dark",{persistence:"sessionStorage"});function C(e,o){return Object.keys(e).map((r=>({...e[r],variableName:r,hex:d()(o).darken(e[r].adjustment).hex()})))}const k={color:"color_mVUL",input:"input_HUC3",colorInput:"colorInput_C1YB",colorTable:"colorTable_Js7s"};function A(e,o){const r=d()(e).contrast(d()(o));return r>7?"AAA \ud83c\udfc5":r>4.5?"AA \ud83d\udc4d":"Fail \ud83d\udd34"}function N(){const{colorMode:e,setColorMode:o}=(0,u.I)(),r="dark"===e,s=r?x:g,i=r?v:f,[h,N]=(0,n.useState)(s),[O,_]=(0,n.useState)(s),[z,q]=(0,n.useState)(i),[I,P]=(0,n.useState)(j),[S,Z]=(0,n.useState)(r?y:b);function G(e){const o=e.target.value.replace(/^(?=[^#])/,"#");N(o);try{_(d()(o).hex())}catch{}}return(0,n.useEffect)((()=>{Z(r?y:b)}),[r]),(0,n.useEffect)((()=>{const e=JSON.parse(S.get()??"{}");N(e.baseColor??s),_(e.baseColor??s),q(e.background??i),P(e.shades??j)}),[S,i,s]),(0,n.useEffect)((()=>{!function(e,o){let{shades:r,baseColor:a,background:s}=e;const n=Array.from(document.styleSheets).find((e=>e.href?.match(/styles(?:\.[\da-f]+)?\.css/))),t=Array.from(n.cssRules).findIndex((e=>e.selectorText===(o?'[data-theme="dark"]':'[data-theme="light"]')&&Array.from(e.style).includes("--ifm-color-primary")&&e.style.length<10));t>=0&&n.deleteRule(t);const i=`${o?'[data-theme="dark"]':'[data-theme="light"]'} {\n   ${C(r,a).map((e=>`  ${e.variableName}: ${e.hex};`)).join("\n")}\n   --ifm-background-color: ${s};\n }`;n.insertRule(i,n.cssRules.length-1)}({baseColor:O,background:z,shades:I},r),S.set(JSON.stringify({baseColor:O,background:z,shades:I}))}),[O,z,I,S,r]),(0,a.jsxs)("div",{children:[(0,a.jsx)(p.Z,{type:"tip",children:(0,a.jsx)("p",{children:(0,a.jsx)(c.Z,{id:"colorGenerator.tip.body",values:{wcagLink:(0,a.jsx)(l.Z,{href:"https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast",children:(0,a.jsx)(c.Z,{id:"colorGenerator.tip.body.wcagLink.label",children:"WCAG-AA contrast ratio"})})},children:"Procure pelo menos a rela\xe7\xe3o de contraste {wcagLink} para a cor prim\xe1ria para garantir a legibilidade. Voc\xea pode utilizar como essa p\xe1gina vai ficar para ver o resultado final. Voc\xea pode ter uma mesma cor para tema claro e escuro, mas \xe9 recomendado que voc\xea tenha cores diferentes para cada um para melhorar a experi\xeancia do usu\xe1rio."})})}),(0,a.jsxs)("p",{children:[(0,a.jsx)("label",{htmlFor:"primary_color",children:(0,a.jsx)("strong",{className:"margin-right--sm",children:(0,a.jsx)(c.Z,{id:"colorGenerator.inputs.primary.label",children:"Cor primaria:"})})})," ",(0,a.jsx)("input",{id:"primary_color",type:"text",className:(0,t.Z)(k.input,"margin-right--sm"),value:h,onChange:G}),(0,a.jsx)("input",{type:"color",className:k.colorInput,value:O,onChange:G}),(0,a.jsx)("button",{type:"button",className:"clean-btn button button--primary margin-left--md",onClick:()=>o(r?"light":"dark"),children:(0,a.jsx)(c.Z,{id:"colorGenerator.inputs.modeToggle.label",values:{colorMode:r?(0,a.jsx)(c.Z,{id:"colorGenerator.inputs.modeToggle.label.colorMode.light",children:"light"}):(0,a.jsx)(c.Z,{id:"colorGenerator.inputs.modeToggle.label.colorMode.dark",children:"dark"})},children:r?"Editar modo claro":"Editar nodo escuro"})}),(0,a.jsx)("button",{type:"button",className:"clean-btn button button--secondary margin-left--md",onClick:()=>{N(s),_(s),q(i),P(j)},children:(0,a.jsx)(c.Z,{id:"colorGenerator.inputs.resetButton.label",children:"Resetar"})})]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("label",{htmlFor:"background_color",children:(0,a.jsx)("strong",{className:"margin-right--sm",children:(0,a.jsx)(c.Z,{id:"colorGenerator.inputs.background.label",children:"Cor de fundo:"})})}),(0,a.jsx)("input",{id:"background_color",type:"color",className:(0,t.Z)(k.colorInput,"margin-right--sm"),value:z,onChange:e=>{q(e.target.value)}})]}),(0,a.jsx)("div",{children:(0,a.jsxs)("table",{className:k.colorTable,children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(c.Z,{id:"colorGenerator.table.heading1",children:"Nome da vari\xe1vel CSS"})}),(0,a.jsx)("th",{children:(0,a.jsx)(c.Z,{id:"colorGenerator.table.heading2",description:"This column is the color's representation in hex",children:"Hex"})}),(0,a.jsx)("th",{children:(0,a.jsx)(c.Z,{id:"colorGenerator.table.heading3",description:"This column is the adjusted shades' adjustment values relative to the primary color",children:"Ajuste"})}),(0,a.jsx)("th",{children:(0,a.jsx)(c.Z,{id:"colorGenerator.table.heading4",description:"This column is WCAG contrast rating: AAA, AA, Fail",children:"\xcdndice de contraste"})})]})}),(0,a.jsx)("tbody",{children:C(I,O).sort(((e,o)=>e.displayOrder-o.displayOrder)).map((e=>{const{variableName:o,adjustment:r,adjustmentInput:s,hex:n}=e;return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)("code",{children:o})}),(0,a.jsxs)("td",{children:[(0,a.jsx)("span",{className:k.color,style:{backgroundColor:n}}),(0,a.jsx)("code",{className:"margin-left--sm",children:n.toLowerCase()})]}),(0,a.jsx)("td",{children:"--ifm-color-primary"===o?0:(0,a.jsx)("input",{"aria-label":`${o} CSS variable name`,className:k.input,type:"number",value:s,onChange:e=>{const a=parseFloat(e.target.value);P({...I,[o]:{...I[o],adjustmentInput:e.target.value,adjustment:Number.isNaN(a)?r:a/100}})}})}),(0,a.jsx)("td",{style:{fontSize:"medium",backgroundColor:z,color:n},children:(0,a.jsx)("b",{children:A(n,z)})})]},o)}))})]})}),(0,a.jsx)("p",{children:(0,a.jsx)(c.Z,{id:"colorGenerator.text",values:{cssPath:(0,a.jsx)("code",{children:"src/css/custom.css"})},children:"Troque os valores no  {cssPath} pelos aqui gerado."})}),(0,a.jsx)(m.Z,{className:"language-css",title:"/src/css/custom.css",children:`${r?"[data-theme='dark']":":root"} {\n ${C(I,O).sort(((e,o)=>e.codeOrder-o.codeOrder)).map((e=>`  ${e.variableName}: ${e.hex.toLowerCase()};`)).join("\n")}${z!==i?`\n  --ifm-background-color: ${z};`:""}\n }`})]})}const O={id:"personalizando_site",title:"Personalizando o site"},_=void 0,z={id:"site_docusaurus/personalizando_site",title:"Personalizando o site",description:"Requisitos",source:"@site/docs/tutorial/site_docusaurus/03_personalizando_site.md",sourceDirName:"site_docusaurus",slug:"/site_docusaurus/personalizando_site",permalink:"/tutorial/site_docusaurus/personalizando_site",draft:!1,unlisted:!1,editUrl:"https://github.com/lucasbaccan/code/tree/master/docs/tutorial/site_docusaurus/03_personalizando_site.md",tags:[],version:"current",lastUpdatedBy:"Lucas Elias Baccan",lastUpdatedAt:1731361657e3,sidebarPosition:3,frontMatter:{id:"personalizando_site",title:"Personalizando o site"},sidebar:"docs",previous:{title:"Criando o projeto",permalink:"/tutorial/site_docusaurus/criando_projeto"},next:{title:"Publicando o site",permalink:"/tutorial/site_docusaurus/publicando"}},q={},I=[{value:"Requisitos",id:"requisitos",level:2},{value:"Personalizando o site",id:"personalizando-o-site",level:2},{value:"Alterando o t\xedtulo",id:"alterando-o-t\xedtulo",level:3},{value:"Alterando a descri\xe7\xe3o",id:"alterando-a-descri\xe7\xe3o",level:3},{value:"Logo",id:"logo",level:3},{value:"Itens do menu",id:"itens-do-menu",level:3},{value:"Alterando o tema",id:"alterando-o-tema",level:3},{value:"Pr\xf3ximo passo",id:"pr\xf3ximo-passo",level:2}];function P(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.h2,{id:"requisitos",children:"Requisitos"}),"\n",(0,a.jsxs)(o.p,{children:["Para seguir o tutorial, voc\xea precisa ter o ",(0,a.jsx)(o.a,{href:"https://nodejs.org/en/",children:"Node.js"})," instalado em sua m\xe1quina e ter criado o site anteriormente."]}),"\n",(0,a.jsx)(o.h2,{id:"personalizando-o-site",children:"Personalizando o site"}),"\n",(0,a.jsxs)(o.p,{children:["Agora que voc\xea j\xe1 tem o projeto criado, vamos come\xe7ar a personalizar o projeto para que ele fique com a sua cara. Para isso, acesse o arquivo ",(0,a.jsx)(o.code,{children:"docusaurus.config.js"}),", esse arquivo \xe9 respons\xe1vel por configurar o projeto, e nele voc\xea pode alterar o t\xedtulo, descri\xe7\xe3o, tema, entre outras coisas."]}),"\n",(0,a.jsxs)(o.p,{children:["Tome cuidado ao alterar o arquivo, pois se voc\xea fizer algo errado, o projeto pode parar de funcionar. Para evitar isso, sempre que fizer alguma altera\xe7\xe3o, execute o comando ",(0,a.jsx)(o.code,{children:"npm start"})," para verificar se o projeto est\xe1 funcionando corretamente."]}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Observa\xe7\xe3o"}),": Caso tenha rodado o comando ",(0,a.jsx)(o.code,{children:"npm start"}),", o projeto atualizar\xe1 automaticamente quando voc\xea salvar o arquivo, ent\xe3o n\xe3o \xe9 necess\xe1rio executar o comando novamente sempre que fizer uma altera\xe7\xe3o."]}),"\n",(0,a.jsxs)(o.p,{children:["Mais informa\xe7\xf5es sobre as configura\xe7\xf5es do arquivo ",(0,a.jsx)(o.code,{children:"docusaurus.config.js"})," podem ser encontradas na ",(0,a.jsx)(o.a,{href:"https://docusaurus.io/docs/docusaurus.config.js",children:"documenta\xe7\xe3o"}),", mas vamos ver algumas configura\xe7\xf5es b\xe1sicas."]}),"\n",(0,a.jsx)(o.h3,{id:"alterando-o-t\xedtulo",children:"Alterando o t\xedtulo"}),"\n",(0,a.jsxs)(o.p,{children:["O t\xedtulo do site \xe9 definido na propriedade ",(0,a.jsx)(o.code,{children:"title"})," do objeto ",(0,a.jsx)(o.code,{children:"themeConfig"}),", ent\xe3o vamos alterar o valor dessa propriedade para o nome do nosso site."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  const config = {\n    title: 'Meu site'\n  }\n  ...\n  themeConfig: {\n    ...\n    navbar: {\n      title: 'Meu site'\n    }\n    ...\n  }\n"})}),"\n",(0,a.jsx)(o.admonition,{title:"Aten\xe7\xe3o",type:"info",children:(0,a.jsxs)(o.p,{children:["O valor da propriedade ",(0,a.jsx)(o.code,{children:"title"})," deve ser uma string, ent\xe3o n\xe3o esque\xe7a das aspas. Al\xe9m disso, existe mais de uma propriedade ",(0,a.jsx)(o.code,{children:"title"}),", voc\xea pode alterar todas."]})}),"\n",(0,a.jsx)(o.h3,{id:"alterando-a-descri\xe7\xe3o",children:"Alterando a descri\xe7\xe3o"}),"\n",(0,a.jsxs)(o.p,{children:["A descri\xe7\xe3o do site \xe9 definida na propriedade ",(0,a.jsx)(o.code,{children:"tagline"})," do objeto ",(0,a.jsx)(o.code,{children:"themeConfig"}),", ent\xe3o vamos alterar o valor dessa propriedade para a descri\xe7\xe3o do nosso site."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  const config = {\n    tagline: 'Descri\xe7\xe3o do meu site'\n  }\n  ...\n"})}),"\n",(0,a.jsx)(o.h3,{id:"logo",children:"Logo"}),"\n",(0,a.jsxs)(o.p,{children:["O logo do site \xe9 definido na propriedade ",(0,a.jsx)(o.code,{children:"logo"})," do objeto ",(0,a.jsx)(o.code,{children:"themeConfig"}),", ent\xe3o vamos alterar o valor dessa propriedade para o logo do nosso site."]}),"\n",(0,a.jsxs)(o.p,{children:["Para isso, voc\xea precisa ter o logo do seu site em formato ",(0,a.jsx)(o.code,{children:".svg"})," e colocar ele na pasta ",(0,a.jsx)(o.code,{children:"static/img"}),", depois altere o valor da propriedade ",(0,a.jsx)(o.code,{children:"logo"})," para o caminho do logo."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  themeConfig: {\n    navbar: {\n      ...\n      logo: {\n        alt: 'Logo do meu site',\n        src: 'img/logo.svg',\n      },\n      ...\n    },\n  }\n  ...\n"})}),"\n",(0,a.jsx)(o.h3,{id:"itens-do-menu",children:"Itens do menu"}),"\n",(0,a.jsxs)(o.p,{children:["Os itens do menu s\xe3o definidos na propriedade ",(0,a.jsx)(o.code,{children:"items"})," do objeto ",(0,a.jsx)(o.code,{children:"navbar"}),", ent\xe3o caso queira adicionar ou remover algum item, basta alterar o valor dessa propriedade."]}),"\n",(0,a.jsxs)(o.p,{children:["Para saber mais sobre os itens do menu, acesse a ",(0,a.jsx)(o.a,{href:"https://docusaurus.io/docs/api/themes/configuration#navbar",children:"documenta\xe7\xe3o"}),"."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"\n```js title=\"docusaurus.config.js\"\nmodule.exports = {\n  themeConfig: {\n    navbar: {\n      ...\n      items: [\n        {\n          to: 'docs/introducao',\n          activeBasePath: 'docs',\n          label: 'Documenta\xe7\xe3o',\n          position: 'left',\n        },\n        {to: 'blog', label: 'Blog', position: 'left'}\n      ],\n      ...\n    },\n    ...\n  }\n  ...\n"})}),"\n",(0,a.jsx)(o.h3,{id:"alterando-o-tema",children:"Alterando o tema"}),"\n","\n",(0,a.jsxs)(o.p,{children:["O tema do site \xe9 definido na propriedade ",(0,a.jsx)(o.code,{children:"colorMode"})," do objeto ",(0,a.jsx)(o.code,{children:"themeConfig"}),", ent\xe3o vamos alterar o valor dessa propriedade para o tema do nosso site."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  themeConfig: {\n    colorMode: {\n      defaultMode: 'light',\n      disableSwitch: false,\n      respectPrefersColorScheme: true,\n      switchConfig: {\n        darkIcon: '\ud83c\udf19',\n        darkIconStyle: {\n          marginLeft: '2px',\n        },\n        lightIcon: '\u2600\ufe0f',\n        lightIconStyle: {\n          marginLeft: '1px',\n        },\n      },\n    },\n    ...\n  }\n  ...\n"})}),"\n",(0,a.jsx)(o.p,{children:"Para alterar a cor do site, voc\xea pode utilizar o gerador de cores abaixo."}),"\n",(0,a.jsx)(N,{}),"\n",(0,a.jsx)(o.h2,{id:"pr\xf3ximo-passo",children:"Pr\xf3ximo passo"}),"\n",(0,a.jsx)(o.p,{children:"Agora que realizamos as configura\xe7\xf5es b\xe1sicas do site, vamos colocar o site no ar, ent\xe3o acesse o pr\xf3ximo tutorial para saber como fazer isso."})]})}function S(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(P,{...e})}):P(e)}}}]);