(self.webpackChunkcode=self.webpackChunkcode||[]).push([[7537],{8223:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>N,contentTitle:()=>E,default:()=>z,frontMatter:()=>x,metadata:()=>C,toc:()=>O});var n=r(7462),a=r(7294),o=r(3905),s=r(6010),l=r(6767),i=r.n(l),c=r(9960),u=r(5999),d=r(2949),h=r(814),m=r(3612),p=r(12);const g={"--ifm-color-primary":{adjustment:0,adjustmentInput:"0",displayOrder:3,codeOrder:0},"--ifm-color-primary-dark":{adjustment:.1,adjustmentInput:"10",displayOrder:4,codeOrder:1},"--ifm-color-primary-darker":{adjustment:.15,adjustmentInput:"15",displayOrder:5,codeOrder:2},"--ifm-color-primary-darkest":{adjustment:.3,adjustmentInput:"30",displayOrder:6,codeOrder:3},"--ifm-color-primary-light":{adjustment:-.1,adjustmentInput:"-10",displayOrder:2,codeOrder:4},"--ifm-color-primary-lighter":{adjustment:-.15,adjustmentInput:"-15",displayOrder:1,codeOrder:5},"--ifm-color-primary-lightest":{adjustment:-.3,adjustmentInput:"-30",displayOrder:0,codeOrder:6}},f=(0,p.WA)("ifm-theme-colors-light",{persistence:"sessionStorage"}),b=(0,p.WA)("ifm-theme-colors-dark",{persistence:"sessionStorage"});function v(e,t){return Object.keys(e).map((r=>({...e[r],variableName:r,hex:i()(t).darken(e[r].adjustment).hex()})))}const y="color_mVUL",k="input_HUC3",w="colorInput_C1YB",j="colorTable_Js7s";function M(){const{colorMode:e,setColorMode:t}=(0,d.I)(),r="dark"===e,n=r?"#ff3224":"#c41508",o=r?"#181920":"#ffffff",[l,p]=(0,a.useState)(n),[M,x]=(0,a.useState)(n),[E,C]=(0,a.useState)(o),[N,O]=(0,a.useState)(g),[A,z]=(0,a.useState)(r?b:f);function q(e){const t=e.target.value.replace(/^(?=[^#])/,"#");p(t);try{x(i()(t).hex())}catch{}}return(0,a.useEffect)((()=>{z(r?b:f)}),[r]),(0,a.useEffect)((()=>{const e=JSON.parse(A.get()??"{}");p(e.baseColor??n),x(e.baseColor??n),C(e.background??o),O(e.shades??g)}),[A,o,n]),(0,a.useEffect)((()=>{!function(e,t){let{shades:r,baseColor:n,background:a}=e;const o=Array.from(document.styleSheets).find((e=>{var t;return null==(t=e.href)?void 0:t.match(/styles(?:\.[\da-f]+)?\.css/)})),s=Array.from(o.cssRules).findIndex((e=>e.selectorText===(t?'[data-theme="dark"]':'[data-theme="light"]')&&Array.from(e.style).includes("--ifm-color-primary")&&e.style.length<10));s>=0&&o.deleteRule(s);const l=`${t?'[data-theme="dark"]':'[data-theme="light"]'} {\n   ${v(r,n).map((e=>`  ${e.variableName}: ${e.hex};`)).join("\n")}\n   --ifm-background-color: ${a};\n }`;o.insertRule(l,o.cssRules.length-1)}({baseColor:M,background:E,shades:N},r),A.set(JSON.stringify({baseColor:M,background:E,shades:N}))}),[M,E,N,A,r]),a.createElement("div",null,a.createElement(m.Z,{type:"tip"},a.createElement("p",null,a.createElement(u.Z,{id:"colorGenerator.tip.body",values:{wcagLink:a.createElement(c.Z,{href:"https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast"},a.createElement(u.Z,{id:"colorGenerator.tip.body.wcagLink.label"},"WCAG-AA contrast ratio"))}},"Procure pelo menos a rela\xe7\xe3o de contraste {wcagLink} para a cor prim\xe1ria para garantir a legibilidade. Voc\xea pode utilizar como essa p\xe1gina vai ficar para ver o resultado final. Voc\xea pode ter uma mesma cor para tema claro e escuro, mas \xe9 recomendado que voc\xea tenha cores diferentes para cada um para melhorar a experi\xeancia do usu\xe1rio."))),a.createElement("p",null,a.createElement("label",{htmlFor:"primary_color"},a.createElement("strong",{className:"margin-right--sm"},a.createElement(u.Z,{id:"colorGenerator.inputs.primary.label"},"Cor primaria:")))," ",a.createElement("input",{id:"primary_color",type:"text",className:(0,s.Z)(k,"margin-right--sm"),value:l,onChange:q}),a.createElement("input",{type:"color",className:w,value:M,onChange:q}),a.createElement("button",{type:"button",className:"clean-btn button button--primary margin-left--md",onClick:()=>t(r?"light":"dark")},a.createElement(u.Z,{id:"colorGenerator.inputs.modeToggle.label",values:{colorMode:r?a.createElement(u.Z,{id:"colorGenerator.inputs.modeToggle.label.colorMode.light"},"light"):a.createElement(u.Z,{id:"colorGenerator.inputs.modeToggle.label.colorMode.dark"},"dark")}},r?"Editar modo claro":"Editar nodo escuro")),a.createElement("button",{type:"button",className:"clean-btn button button--secondary margin-left--md",onClick:()=>{p(n),x(n),C(o),O(g)}},a.createElement(u.Z,{id:"colorGenerator.inputs.resetButton.label"},"Resetar"))),a.createElement("p",null,a.createElement("label",{htmlFor:"background_color"},a.createElement("strong",{className:"margin-right--sm"},a.createElement(u.Z,{id:"colorGenerator.inputs.background.label"},"Cor de fundo:"))),a.createElement("input",{id:"background_color",type:"color",className:(0,s.Z)(w,"margin-right--sm"),value:E,onChange:e=>{C(e.target.value)}})),a.createElement("div",null,a.createElement("table",{className:j},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,a.createElement(u.Z,{id:"colorGenerator.table.heading1"},"Nome da vari\xe1vel CSS")),a.createElement("th",null,a.createElement(u.Z,{id:"colorGenerator.table.heading2",description:"This column is the color's representation in hex"},"Hex")),a.createElement("th",null,a.createElement(u.Z,{id:"colorGenerator.table.heading3",description:"This column is the adjusted shades' adjustment values relative to the primary color"},"Ajuste")),a.createElement("th",null,a.createElement(u.Z,{id:"colorGenerator.table.heading4",description:"This column is WCAG contrast rating: AAA, AA, Fail"},"\xcdndice de contraste")))),a.createElement("tbody",null,v(N,M).sort(((e,t)=>e.displayOrder-t.displayOrder)).map((e=>{const{variableName:t,adjustment:r,adjustmentInput:n,hex:o}=e;return a.createElement("tr",{key:t},a.createElement("td",null,a.createElement("code",null,t)),a.createElement("td",null,a.createElement("span",{className:y,style:{backgroundColor:o}}),a.createElement("code",{className:"margin-left--sm"},o.toLowerCase())),a.createElement("td",null,"--ifm-color-primary"===t?0:a.createElement("input",{"aria-label":`${t} CSS variable name`,className:k,type:"number",value:n,onChange:e=>{const n=parseFloat(e.target.value);O({...N,[t]:{...N[t],adjustmentInput:e.target.value,adjustment:Number.isNaN(n)?r:n/100}})}})),a.createElement("td",{style:{fontSize:"medium",backgroundColor:E,color:o}},a.createElement("b",null,function(e,t){const r=i()(e).contrast(i()(t));return r>7?"AAA \ud83c\udfc5":r>4.5?"AA \ud83d\udc4d":"Fail \ud83d\udd34"}(o,E))))}))))),a.createElement("p",null,a.createElement(u.Z,{id:"colorGenerator.text",values:{cssPath:a.createElement("code",null,"src/css/custom.css")}},"Troque os valores no  {cssPath} pelos aqui gerado.")),a.createElement(h.Z,{className:"language-css",title:"/src/css/custom.css"},`${r?"[data-theme='dark']":":root"} {\n ${v(N,M).sort(((e,t)=>e.codeOrder-t.codeOrder)).map((e=>`  ${e.variableName}: ${e.hex.toLowerCase()};`)).join("\n")}${E!==o?`\n  --ifm-background-color: ${E};`:""}\n }`))}const x={id:"personalizando_site",title:"Personalizando o site"},E=void 0,C={unversionedId:"site_docusaurus/personalizando_site",id:"site_docusaurus/personalizando_site",title:"Personalizando o site",description:"Requisitos",source:"@site/docs/tutorial/site_docusaurus/03_personalizando_site.md",sourceDirName:"site_docusaurus",slug:"/site_docusaurus/personalizando_site",permalink:"/tutorial/site_docusaurus/personalizando_site",draft:!1,editUrl:"https://github.com/lucasbaccan/code/tree/master/docs/tutorial/site_docusaurus/03_personalizando_site.md",tags:[],version:"current",lastUpdatedBy:"Lucas Elias Baccan",lastUpdatedAt:1682986583,formattedLastUpdatedAt:"2 de mai. de 2023",sidebarPosition:3,frontMatter:{id:"personalizando_site",title:"Personalizando o site"},sidebar:"docs",previous:{title:"Criando o projeto",permalink:"/tutorial/site_docusaurus/criando_projeto"},next:{title:"Publicando o site",permalink:"/tutorial/site_docusaurus/publicando"}},N={},O=[{value:"Requisitos",id:"requisitos",level:2},{value:"Personalizando o site",id:"personalizando-o-site",level:2},{value:"Alterando o t\xedtulo",id:"alterando-o-t\xedtulo",level:3},{value:"Alterando a descri\xe7\xe3o",id:"alterando-a-descri\xe7\xe3o",level:3},{value:"Logo",id:"logo",level:3},{value:"Itens do menu",id:"itens-do-menu",level:3},{value:"Alterando o tema",id:"alterando-o-tema",level:3},{value:"Pr\xf3ximo passo",id:"pr\xf3ximo-passo",level:2}],A={toc:O};function z(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},A,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"requisitos"},"Requisitos"),(0,o.kt)("p",null,"Para seguir o tutorial, voc\xea precisa ter o ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")," instalado em sua m\xe1quina e ter criado o site anteriormente."),(0,o.kt)("h2",{id:"personalizando-o-site"},"Personalizando o site"),(0,o.kt)("p",null,"Agora que voc\xea j\xe1 tem o projeto criado, vamos come\xe7ar a personalizar o projeto para que ele fique com a sua cara. Para isso, acesse o arquivo ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),", esse arquivo \xe9 respons\xe1vel por configurar o projeto, e nele voc\xea pode alterar o t\xedtulo, descri\xe7\xe3o, tema, entre outras coisas."),(0,o.kt)("p",null,"Tome cuidado ao alterar o arquivo, pois se voc\xea fizer algo errado, o projeto pode parar de funcionar. Para evitar isso, sempre que fizer alguma altera\xe7\xe3o, execute o comando ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start")," para verificar se o projeto est\xe1 funcionando corretamente."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Observa\xe7\xe3o"),": Caso tenha rodado o comando ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start"),", o projeto atualizar\xe1 automaticamente quando voc\xea salvar o arquivo, ent\xe3o n\xe3o \xe9 necess\xe1rio executar o comando novamente sempre que fizer uma altera\xe7\xe3o."),(0,o.kt)("p",null,"Mais informa\xe7\xf5es sobre as configura\xe7\xf5es do arquivo ",(0,o.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," podem ser encontradas na ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/docusaurus.config.js"},"documenta\xe7\xe3o"),", mas vamos ver algumas configura\xe7\xf5es b\xe1sicas."),(0,o.kt)("h3",{id:"alterando-o-t\xedtulo"},"Alterando o t\xedtulo"),(0,o.kt)("p",null,"O t\xedtulo do site \xe9 definido na propriedade ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," do objeto ",(0,o.kt)("inlineCode",{parentName:"p"},"themeConfig"),", ent\xe3o vamos alterar o valor dessa propriedade para o nome do nosso site."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  const config = {\n    title: 'Meu site'\n  }\n  ...\n  themeConfig: {\n    ...\n    navbar: {\n      title: 'Meu site'\n    }\n    ...\n  }\n")),(0,o.kt)("admonition",{title:"Aten\xe7\xe3o",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"O valor da propriedade ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," deve ser uma string, ent\xe3o n\xe3o esque\xe7a das aspas. Al\xe9m disso, existe mais de uma propriedade ",(0,o.kt)("inlineCode",{parentName:"p"},"title"),", voc\xea pode alterar todas.")),(0,o.kt)("h3",{id:"alterando-a-descri\xe7\xe3o"},"Alterando a descri\xe7\xe3o"),(0,o.kt)("p",null,"A descri\xe7\xe3o do site \xe9 definida na propriedade ",(0,o.kt)("inlineCode",{parentName:"p"},"tagline")," do objeto ",(0,o.kt)("inlineCode",{parentName:"p"},"themeConfig"),", ent\xe3o vamos alterar o valor dessa propriedade para a descri\xe7\xe3o do nosso site."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  const config = {\n    tagline: 'Descri\xe7\xe3o do meu site'\n  }\n  ...\n")),(0,o.kt)("h3",{id:"logo"},"Logo"),(0,o.kt)("p",null,"O logo do site \xe9 definido na propriedade ",(0,o.kt)("inlineCode",{parentName:"p"},"logo")," do objeto ",(0,o.kt)("inlineCode",{parentName:"p"},"themeConfig"),", ent\xe3o vamos alterar o valor dessa propriedade para o logo do nosso site."),(0,o.kt)("p",null,"Para isso, voc\xea precisa ter o logo do seu site em formato ",(0,o.kt)("inlineCode",{parentName:"p"},".svg")," e colocar ele na pasta ",(0,o.kt)("inlineCode",{parentName:"p"},"static/img"),", depois altere o valor da propriedade ",(0,o.kt)("inlineCode",{parentName:"p"},"logo")," para o caminho do logo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      ...\n      logo: {\n        alt: 'Logo do meu site',\n        src: 'img/logo.svg',\n      },\n      ...\n    },\n  }\n  ...\n")),(0,o.kt)("h3",{id:"itens-do-menu"},"Itens do menu"),(0,o.kt)("p",null,"Os itens do menu s\xe3o definidos na propriedade ",(0,o.kt)("inlineCode",{parentName:"p"},"items")," do objeto ",(0,o.kt)("inlineCode",{parentName:"p"},"navbar"),", ent\xe3o caso queira adicionar ou remover algum item, basta alterar o valor dessa propriedade."),(0,o.kt)("p",null,"Para saber mais sobre os itens do menu, acesse a ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/themes/configuration#navbar"},"documenta\xe7\xe3o"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"\n```js title=\"docusaurus.config.js\"\nmodule.exports = {\n  themeConfig: {\n    navbar: {\n      ...\n      items: [\n        {\n          to: 'docs/introducao',\n          activeBasePath: 'docs',\n          label: 'Documenta\xe7\xe3o',\n          position: 'left',\n        },\n        {to: 'blog', label: 'Blog', position: 'left'}\n      ],\n      ...\n    },\n    ...\n  }\n  ...\n")),(0,o.kt)("h3",{id:"alterando-o-tema"},"Alterando o tema"),(0,o.kt)("p",null,"O tema do site \xe9 definido na propriedade ",(0,o.kt)("inlineCode",{parentName:"p"},"colorMode")," do objeto ",(0,o.kt)("inlineCode",{parentName:"p"},"themeConfig"),", ent\xe3o vamos alterar o valor dessa propriedade para o tema do nosso site."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    colorMode: {\n      defaultMode: 'light',\n      disableSwitch: false,\n      respectPrefersColorScheme: true,\n      switchConfig: {\n        darkIcon: '\ud83c\udf19',\n        darkIconStyle: {\n          marginLeft: '2px',\n        },\n        lightIcon: '\u2600\ufe0f',\n        lightIconStyle: {\n          marginLeft: '1px',\n        },\n      },\n    },\n    ...\n  }\n  ...\n")),(0,o.kt)("p",null,"Para alterar a cor do site, voc\xea pode utilizar o gerador de cores abaixo."),(0,o.kt)(M,{mdxType:"ColorGenerator"}),(0,o.kt)("h2",{id:"pr\xf3ximo-passo"},"Pr\xf3ximo passo"),(0,o.kt)("p",null,"Agora que realizamos as configura\xe7\xf5es b\xe1sicas do site, vamos colocar o site no ar, ent\xe3o acesse o pr\xf3ximo tutorial para saber como fazer isso."))}z.isMDXComponent=!0},8168:(e,t,r)=>{const n=r(8874),a={};for(const s of Object.keys(n))a[n[s]]=s;const o={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};e.exports=o;for(const s of Object.keys(o)){if(!("channels"in o[s]))throw new Error("missing channels property: "+s);if(!("labels"in o[s]))throw new Error("missing channel labels property: "+s);if(o[s].labels.length!==o[s].channels)throw new Error("channel and label counts mismatch: "+s);const{channels:e,labels:t}=o[s];delete o[s].channels,delete o[s].labels,Object.defineProperty(o[s],"channels",{value:e}),Object.defineProperty(o[s],"labels",{value:t})}o.rgb.hsl=function(e){const t=e[0]/255,r=e[1]/255,n=e[2]/255,a=Math.min(t,r,n),o=Math.max(t,r,n),s=o-a;let l,i;o===a?l=0:t===o?l=(r-n)/s:r===o?l=2+(n-t)/s:n===o&&(l=4+(t-r)/s),l=Math.min(60*l,360),l<0&&(l+=360);const c=(a+o)/2;return i=o===a?0:c<=.5?s/(o+a):s/(2-o-a),[l,100*i,100*c]},o.rgb.hsv=function(e){let t,r,n,a,o;const s=e[0]/255,l=e[1]/255,i=e[2]/255,c=Math.max(s,l,i),u=c-Math.min(s,l,i),d=function(e){return(c-e)/6/u+.5};return 0===u?(a=0,o=0):(o=u/c,t=d(s),r=d(l),n=d(i),s===c?a=n-r:l===c?a=1/3+t-n:i===c&&(a=2/3+r-t),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*c]},o.rgb.hwb=function(e){const t=e[0],r=e[1];let n=e[2];const a=o.rgb.hsl(e)[0],s=1/255*Math.min(t,Math.min(r,n));return n=1-1/255*Math.max(t,Math.max(r,n)),[a,100*s,100*n]},o.rgb.cmyk=function(e){const t=e[0]/255,r=e[1]/255,n=e[2]/255,a=Math.min(1-t,1-r,1-n);return[100*((1-t-a)/(1-a)||0),100*((1-r-a)/(1-a)||0),100*((1-n-a)/(1-a)||0),100*a]},o.rgb.keyword=function(e){const t=a[e];if(t)return t;let r,o=1/0;for(const a of Object.keys(n)){const t=n[a],i=(l=t,((s=e)[0]-l[0])**2+(s[1]-l[1])**2+(s[2]-l[2])**2);i<o&&(o=i,r=a)}var s,l;return r},o.keyword.rgb=function(e){return n[e]},o.rgb.xyz=function(e){let t=e[0]/255,r=e[1]/255,n=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92;return[100*(.4124*t+.3576*r+.1805*n),100*(.2126*t+.7152*r+.0722*n),100*(.0193*t+.1192*r+.9505*n)]},o.rgb.lab=function(e){const t=o.rgb.xyz(e);let r=t[0],n=t[1],a=t[2];r/=95.047,n/=100,a/=108.883,r=r>.008856?r**(1/3):7.787*r+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,a=a>.008856?a**(1/3):7.787*a+16/116;return[116*n-16,500*(r-n),200*(n-a)]},o.hsl.rgb=function(e){const t=e[0]/360,r=e[1]/100,n=e[2]/100;let a,o,s;if(0===r)return s=255*n,[s,s,s];a=n<.5?n*(1+r):n+r-n*r;const l=2*n-a,i=[0,0,0];for(let c=0;c<3;c++)o=t+1/3*-(c-1),o<0&&o++,o>1&&o--,s=6*o<1?l+6*(a-l)*o:2*o<1?a:3*o<2?l+(a-l)*(2/3-o)*6:l,i[c]=255*s;return i},o.hsl.hsv=function(e){const t=e[0];let r=e[1]/100,n=e[2]/100,a=r;const o=Math.max(n,.01);n*=2,r*=n<=1?n:2-n,a*=o<=1?o:2-o;return[t,100*(0===n?2*a/(o+a):2*r/(n+r)),100*((n+r)/2)]},o.hsv.rgb=function(e){const t=e[0]/60,r=e[1]/100;let n=e[2]/100;const a=Math.floor(t)%6,o=t-Math.floor(t),s=255*n*(1-r),l=255*n*(1-r*o),i=255*n*(1-r*(1-o));switch(n*=255,a){case 0:return[n,i,s];case 1:return[l,n,s];case 2:return[s,n,i];case 3:return[s,l,n];case 4:return[i,s,n];case 5:return[n,s,l]}},o.hsv.hsl=function(e){const t=e[0],r=e[1]/100,n=e[2]/100,a=Math.max(n,.01);let o,s;s=(2-r)*n;const l=(2-r)*a;return o=r*a,o/=l<=1?l:2-l,o=o||0,s/=2,[t,100*o,100*s]},o.hwb.rgb=function(e){const t=e[0]/360;let r=e[1]/100,n=e[2]/100;const a=r+n;let o;a>1&&(r/=a,n/=a);const s=Math.floor(6*t),l=1-n;o=6*t-s,0!=(1&s)&&(o=1-o);const i=r+o*(l-r);let c,u,d;switch(s){default:case 6:case 0:c=l,u=i,d=r;break;case 1:c=i,u=l,d=r;break;case 2:c=r,u=l,d=i;break;case 3:c=r,u=i,d=l;break;case 4:c=i,u=r,d=l;break;case 5:c=l,u=r,d=i}return[255*c,255*u,255*d]},o.cmyk.rgb=function(e){const t=e[0]/100,r=e[1]/100,n=e[2]/100,a=e[3]/100;return[255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,r*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]},o.xyz.rgb=function(e){const t=e[0]/100,r=e[1]/100,n=e[2]/100;let a,o,s;return a=3.2406*t+-1.5372*r+-.4986*n,o=-.9689*t+1.8758*r+.0415*n,s=.0557*t+-.204*r+1.057*n,a=a>.0031308?1.055*a**(1/2.4)-.055:12.92*a,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,s=s>.0031308?1.055*s**(1/2.4)-.055:12.92*s,a=Math.min(Math.max(0,a),1),o=Math.min(Math.max(0,o),1),s=Math.min(Math.max(0,s),1),[255*a,255*o,255*s]},o.xyz.lab=function(e){let t=e[0],r=e[1],n=e[2];t/=95.047,r/=100,n/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,n=n>.008856?n**(1/3):7.787*n+16/116;return[116*r-16,500*(t-r),200*(r-n)]},o.lab.xyz=function(e){let t,r,n;r=(e[0]+16)/116,t=e[1]/500+r,n=r-e[2]/200;const a=r**3,o=t**3,s=n**3;return r=a>.008856?a:(r-16/116)/7.787,t=o>.008856?o:(t-16/116)/7.787,n=s>.008856?s:(n-16/116)/7.787,t*=95.047,r*=100,n*=108.883,[t,r,n]},o.lab.lch=function(e){const t=e[0],r=e[1],n=e[2];let a;a=360*Math.atan2(n,r)/2/Math.PI,a<0&&(a+=360);return[t,Math.sqrt(r*r+n*n),a]},o.lch.lab=function(e){const t=e[0],r=e[1],n=e[2]/360*2*Math.PI;return[t,r*Math.cos(n),r*Math.sin(n)]},o.rgb.ansi16=function(e,t=null){const[r,n,a]=e;let s=null===t?o.rgb.hsv(e)[2]:t;if(s=Math.round(s/50),0===s)return 30;let l=30+(Math.round(a/255)<<2|Math.round(n/255)<<1|Math.round(r/255));return 2===s&&(l+=60),l},o.hsv.ansi16=function(e){return o.rgb.ansi16(o.hsv.rgb(e),e[2])},o.rgb.ansi256=function(e){const t=e[0],r=e[1],n=e[2];if(t===r&&r===n)return t<8?16:t>248?231:Math.round((t-8)/247*24)+232;return 16+36*Math.round(t/255*5)+6*Math.round(r/255*5)+Math.round(n/255*5)},o.ansi16.rgb=function(e){let t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const r=.5*(1+~~(e>50));return[(1&t)*r*255,(t>>1&1)*r*255,(t>>2&1)*r*255]},o.ansi256.rgb=function(e){if(e>=232){const t=10*(e-232)+8;return[t,t,t]}let t;e-=16;return[Math.floor(e/36)/5*255,Math.floor((t=e%36)/6)/5*255,t%6/5*255]},o.rgb.hex=function(e){const t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},o.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let r=t[0];3===t[0].length&&(r=r.split("").map((e=>e+e)).join(""));const n=parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},o.rgb.hcg=function(e){const t=e[0]/255,r=e[1]/255,n=e[2]/255,a=Math.max(Math.max(t,r),n),o=Math.min(Math.min(t,r),n),s=a-o;let l,i;return l=s<1?o/(1-s):0,i=s<=0?0:a===t?(r-n)/s%6:a===r?2+(n-t)/s:4+(t-r)/s,i/=6,i%=1,[360*i,100*s,100*l]},o.hsl.hcg=function(e){const t=e[1]/100,r=e[2]/100,n=r<.5?2*t*r:2*t*(1-r);let a=0;return n<1&&(a=(r-.5*n)/(1-n)),[e[0],100*n,100*a]},o.hsv.hcg=function(e){const t=e[1]/100,r=e[2]/100,n=t*r;let a=0;return n<1&&(a=(r-n)/(1-n)),[e[0],100*n,100*a]},o.hcg.rgb=function(e){const t=e[0]/360,r=e[1]/100,n=e[2]/100;if(0===r)return[255*n,255*n,255*n];const a=[0,0,0],o=t%1*6,s=o%1,l=1-s;let i=0;switch(Math.floor(o)){case 0:a[0]=1,a[1]=s,a[2]=0;break;case 1:a[0]=l,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=s;break;case 3:a[0]=0,a[1]=l,a[2]=1;break;case 4:a[0]=s,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=l}return i=(1-r)*n,[255*(r*a[0]+i),255*(r*a[1]+i),255*(r*a[2]+i)]},o.hcg.hsv=function(e){const t=e[1]/100,r=t+e[2]/100*(1-t);let n=0;return r>0&&(n=t/r),[e[0],100*n,100*r]},o.hcg.hsl=function(e){const t=e[1]/100,r=e[2]/100*(1-t)+.5*t;let n=0;return r>0&&r<.5?n=t/(2*r):r>=.5&&r<1&&(n=t/(2*(1-r))),[e[0],100*n,100*r]},o.hcg.hwb=function(e){const t=e[1]/100,r=t+e[2]/100*(1-t);return[e[0],100*(r-t),100*(1-r)]},o.hwb.hcg=function(e){const t=e[1]/100,r=1-e[2]/100,n=r-t;let a=0;return n<1&&(a=(r-n)/(1-n)),[e[0],100*n,100*a]},o.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},o.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},o.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},o.gray.hsl=function(e){return[0,0,e[0]]},o.gray.hsv=o.gray.hsl,o.gray.hwb=function(e){return[0,100,e[0]]},o.gray.cmyk=function(e){return[0,0,0,e[0]]},o.gray.lab=function(e){return[e[0],0,0]},o.gray.hex=function(e){const t=255&Math.round(e[0]/100*255),r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r},o.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},2085:(e,t,r)=>{const n=r(8168),a=r(4111),o={};Object.keys(n).forEach((e=>{o[e]={},Object.defineProperty(o[e],"channels",{value:n[e].channels}),Object.defineProperty(o[e],"labels",{value:n[e].labels});const t=a(e);Object.keys(t).forEach((r=>{const n=t[r];o[e][r]=function(e){const t=function(...t){const r=t[0];if(null==r)return r;r.length>1&&(t=r);const n=e(t);if("object"==typeof n)for(let e=n.length,a=0;a<e;a++)n[a]=Math.round(n[a]);return n};return"conversion"in e&&(t.conversion=e.conversion),t}(n),o[e][r].raw=function(e){const t=function(...t){const r=t[0];return null==r?r:(r.length>1&&(t=r),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(n)}))})),e.exports=o},4111:(e,t,r)=>{const n=r(8168);function a(e){const t=function(){const e={},t=Object.keys(n);for(let r=t.length,n=0;n<r;n++)e[t[n]]={distance:-1,parent:null};return e}(),r=[e];for(t[e].distance=0;r.length;){const e=r.pop(),a=Object.keys(n[e]);for(let n=a.length,o=0;o<n;o++){const n=a[o],s=t[n];-1===s.distance&&(s.distance=t[e].distance+1,s.parent=e,r.unshift(n))}}return t}function o(e,t){return function(r){return t(e(r))}}function s(e,t){const r=[t[e].parent,e];let a=n[t[e].parent][e],s=t[e].parent;for(;t[s].parent;)r.unshift(t[s].parent),a=o(n[t[s].parent][s],a),s=t[s].parent;return a.conversion=r,a}e.exports=function(e){const t=a(e),r={},n=Object.keys(t);for(let a=n.length,o=0;o<a;o++){const e=n[o];null!==t[e].parent&&(r[e]=s(e,t))}return r}},8874:e=>{"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},9818:(e,t,r)=>{var n=r(8874),a=r(6851),o=Object.hasOwnProperty,s=Object.create(null);for(var l in n)o.call(n,l)&&(s[n[l]]=l);var i=e.exports={to:{},get:{}};function c(e,t,r){return Math.min(Math.max(t,e),r)}function u(e){var t=Math.round(e).toString(16).toUpperCase();return t.length<2?"0"+t:t}i.get=function(e){var t,r;switch(e.substring(0,3).toLowerCase()){case"hsl":t=i.get.hsl(e),r="hsl";break;case"hwb":t=i.get.hwb(e),r="hwb";break;default:t=i.get.rgb(e),r="rgb"}return t?{model:r,value:t}:null},i.get.rgb=function(e){if(!e)return null;var t,r,a,s=[0,0,0,1];if(t=e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(a=t[2],t=t[1],r=0;r<3;r++){var l=2*r;s[r]=parseInt(t.slice(l,l+2),16)}a&&(s[3]=parseInt(a,16)/255)}else if(t=e.match(/^#([a-f0-9]{3,4})$/i)){for(a=(t=t[1])[3],r=0;r<3;r++)s[r]=parseInt(t[r]+t[r],16);a&&(s[3]=parseInt(a+a,16)/255)}else if(t=e.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(r=0;r<3;r++)s[r]=parseInt(t[r+1],0);t[4]&&(t[5]?s[3]=.01*parseFloat(t[4]):s[3]=parseFloat(t[4]))}else{if(!(t=e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)))return(t=e.match(/^(\w+)$/))?"transparent"===t[1]?[0,0,0,0]:o.call(n,t[1])?((s=n[t[1]])[3]=1,s):null:null;for(r=0;r<3;r++)s[r]=Math.round(2.55*parseFloat(t[r+1]));t[4]&&(t[5]?s[3]=.01*parseFloat(t[4]):s[3]=parseFloat(t[4]))}for(r=0;r<3;r++)s[r]=c(s[r],0,255);return s[3]=c(s[3],0,1),s},i.get.hsl=function(e){if(!e)return null;var t=e.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(t){var r=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,c(parseFloat(t[2]),0,100),c(parseFloat(t[3]),0,100),c(isNaN(r)?1:r,0,1)]}return null},i.get.hwb=function(e){if(!e)return null;var t=e.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(t){var r=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,c(parseFloat(t[2]),0,100),c(parseFloat(t[3]),0,100),c(isNaN(r)?1:r,0,1)]}return null},i.to.hex=function(){var e=a(arguments);return"#"+u(e[0])+u(e[1])+u(e[2])+(e[3]<1?u(Math.round(255*e[3])):"")},i.to.rgb=function(){var e=a(arguments);return e.length<4||1===e[3]?"rgb("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+")":"rgba("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+", "+e[3]+")"},i.to.rgb.percent=function(){var e=a(arguments),t=Math.round(e[0]/255*100),r=Math.round(e[1]/255*100),n=Math.round(e[2]/255*100);return e.length<4||1===e[3]?"rgb("+t+"%, "+r+"%, "+n+"%)":"rgba("+t+"%, "+r+"%, "+n+"%, "+e[3]+")"},i.to.hsl=function(){var e=a(arguments);return e.length<4||1===e[3]?"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)":"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+e[3]+")"},i.to.hwb=function(){var e=a(arguments),t="";return e.length>=4&&1!==e[3]&&(t=", "+e[3]),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+t+")"},i.to.keyword=function(e){return s[e.slice(0,3)]}},6767:(e,t,r)=>{const n=r(9818),a=r(2085),o=["keyword","gray","hex"],s={};for(const m of Object.keys(a))s[[...a[m].labels].sort().join("")]=m;const l={};function i(e,t){if(!(this instanceof i))return new i(e,t);if(t&&t in o&&(t=null),t&&!(t in a))throw new Error("Unknown model: "+t);let r,c;if(null==e)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(e instanceof i)this.model=e.model,this.color=[...e.color],this.valpha=e.valpha;else if("string"==typeof e){const t=n.get(e);if(null===t)throw new Error("Unable to parse color from string: "+e);this.model=t.model,c=a[this.model].channels,this.color=t.value.slice(0,c),this.valpha="number"==typeof t.value[c]?t.value[c]:1}else if(e.length>0){this.model=t||"rgb",c=a[this.model].channels;const r=Array.prototype.slice.call(e,0,c);this.color=h(r,c),this.valpha="number"==typeof e[c]?e[c]:1}else if("number"==typeof e)this.model="rgb",this.color=[e>>16&255,e>>8&255,255&e],this.valpha=1;else{this.valpha=1;const t=Object.keys(e);"alpha"in e&&(t.splice(t.indexOf("alpha"),1),this.valpha="number"==typeof e.alpha?e.alpha:0);const n=t.sort().join("");if(!(n in s))throw new Error("Unable to parse color from object: "+JSON.stringify(e));this.model=s[n];const{labels:o}=a[this.model],l=[];for(r=0;r<o.length;r++)l.push(e[o[r]]);this.color=h(l)}if(l[this.model])for(c=a[this.model].channels,r=0;r<c;r++){const e=l[this.model][r];e&&(this.color[r]=e(this.color[r]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}i.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(e){let t=this.model in n.to?this:this.rgb();t=t.round("number"==typeof e?e:1);const r=1===t.valpha?t.color:[...t.color,this.valpha];return n.to[t.model](r)},percentString(e){const t=this.rgb().round("number"==typeof e?e:1),r=1===t.valpha?t.color:[...t.color,this.valpha];return n.to.rgb.percent(r)},array(){return 1===this.valpha?[...this.color]:[...this.color,this.valpha]},object(){const e={},{channels:t}=a[this.model],{labels:r}=a[this.model];for(let n=0;n<t;n++)e[r[n]]=this.color[n];return 1!==this.valpha&&(e.alpha=this.valpha),e},unitArray(){const e=this.rgb().color;return e[0]/=255,e[1]/=255,e[2]/=255,1!==this.valpha&&e.push(this.valpha),e},unitObject(){const e=this.rgb().object();return e.r/=255,e.g/=255,e.b/=255,1!==this.valpha&&(e.alpha=this.valpha),e},round(e){return e=Math.max(e||0,0),new i([...this.color.map(c(e)),this.valpha],this.model)},alpha(e){return void 0!==e?new i([...this.color,Math.max(0,Math.min(1,e))],this.model):this.valpha},red:u("rgb",0,d(255)),green:u("rgb",1,d(255)),blue:u("rgb",2,d(255)),hue:u(["hsl","hsv","hsl","hwb","hcg"],0,(e=>(e%360+360)%360)),saturationl:u("hsl",1,d(100)),lightness:u("hsl",2,d(100)),saturationv:u("hsv",1,d(100)),value:u("hsv",2,d(100)),chroma:u("hcg",1,d(100)),gray:u("hcg",2,d(100)),white:u("hwb",1,d(100)),wblack:u("hwb",2,d(100)),cyan:u("cmyk",0,d(100)),magenta:u("cmyk",1,d(100)),yellow:u("cmyk",2,d(100)),black:u("cmyk",3,d(100)),x:u("xyz",0,d(95.047)),y:u("xyz",1,d(100)),z:u("xyz",2,d(108.833)),l:u("lab",0,d(100)),a:u("lab",1),b:u("lab",2),keyword(e){return void 0!==e?new i(e):a[this.model].keyword(this.color)},hex(e){return void 0!==e?new i(e):n.to.hex(this.rgb().round().color)},hexa(e){if(void 0!==e)return new i(e);const t=this.rgb().round().color;let r=Math.round(255*this.valpha).toString(16).toUpperCase();return 1===r.length&&(r="0"+r),n.to.hex(t)+r},rgbNumber(){const e=this.rgb().color;return(255&e[0])<<16|(255&e[1])<<8|255&e[2]},luminosity(){const e=this.rgb().color,t=[];for(const[r,n]of e.entries()){const e=n/255;t[r]=e<=.04045?e/12.92:((e+.055)/1.055)**2.4}return.2126*t[0]+.7152*t[1]+.0722*t[2]},contrast(e){const t=this.luminosity(),r=e.luminosity();return t>r?(t+.05)/(r+.05):(r+.05)/(t+.05)},level(e){const t=this.contrast(e);return t>=7?"AAA":t>=4.5?"AA":""},isDark(){const e=this.rgb().color;return(2126*e[0]+7152*e[1]+722*e[2])/1e4<128},isLight(){return!this.isDark()},negate(){const e=this.rgb();for(let t=0;t<3;t++)e.color[t]=255-e.color[t];return e},lighten(e){const t=this.hsl();return t.color[2]+=t.color[2]*e,t},darken(e){const t=this.hsl();return t.color[2]-=t.color[2]*e,t},saturate(e){const t=this.hsl();return t.color[1]+=t.color[1]*e,t},desaturate(e){const t=this.hsl();return t.color[1]-=t.color[1]*e,t},whiten(e){const t=this.hwb();return t.color[1]+=t.color[1]*e,t},blacken(e){const t=this.hwb();return t.color[2]+=t.color[2]*e,t},grayscale(){const e=this.rgb().color,t=.3*e[0]+.59*e[1]+.11*e[2];return i.rgb(t,t,t)},fade(e){return this.alpha(this.valpha-this.valpha*e)},opaquer(e){return this.alpha(this.valpha+this.valpha*e)},rotate(e){const t=this.hsl();let r=t.color[0];return r=(r+e)%360,r=r<0?360+r:r,t.color[0]=r,t},mix(e,t){if(!e||!e.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof e);const r=e.rgb(),n=this.rgb(),a=void 0===t?.5:t,o=2*a-1,s=r.alpha()-n.alpha(),l=((o*s==-1?o:(o+s)/(1+o*s))+1)/2,c=1-l;return i.rgb(l*r.red()+c*n.red(),l*r.green()+c*n.green(),l*r.blue()+c*n.blue(),r.alpha()*a+n.alpha()*(1-a))}};for(const m of Object.keys(a)){if(o.includes(m))continue;const{channels:e}=a[m];i.prototype[m]=function(...e){return this.model===m?new i(this):e.length>0?new i(e,m):new i([...(t=a[this.model][m].raw(this.color),Array.isArray(t)?t:[t]),this.valpha],m);var t},i[m]=function(...t){let r=t[0];return"number"==typeof r&&(r=h(t,e)),new i(r,m)}}function c(e){return function(t){return function(e,t){return Number(e.toFixed(t))}(t,e)}}function u(e,t,r){e=Array.isArray(e)?e:[e];for(const n of e)(l[n]||(l[n]=[]))[t]=r;return e=e[0],function(n){let a;return void 0!==n?(r&&(n=r(n)),a=this[e](),a.color[t]=n,a):(a=this[e]().color[t],r&&(a=r(a)),a)}}function d(e){return function(t){return Math.max(0,Math.min(e,t))}}function h(e,t){for(let r=0;r<t;r++)"number"!=typeof e[r]&&(e[r]=0);return e}e.exports=i},6851:(e,t,r)=>{"use strict";var n=r(9594),a=Array.prototype.concat,o=Array.prototype.slice,s=e.exports=function(e){for(var t=[],r=0,s=e.length;r<s;r++){var l=e[r];n(l)?t=a.call(t,o.call(l)):t.push(l)}return t};s.wrap=function(e){return function(){return e(s(arguments))}}},9594:e=>{e.exports=function(e){return!(!e||"string"==typeof e)&&(e instanceof Array||Array.isArray(e)||e.length>=0&&(e.splice instanceof Function||Object.getOwnPropertyDescriptor(e,e.length-1)&&"String"!==e.constructor.name))}}}]);