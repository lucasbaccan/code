"use strict";(self.webpackChunkcode=self.webpackChunkcode||[]).push([[5391],{3905:(e,a,s)=>{s.d(a,{Zo:()=>d,kt:()=>l});var t=s(7294);function o(e,a,s){return a in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}function r(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,t)}return s}function i(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?r(Object(s),!0).forEach((function(a){o(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}function n(e,a){if(null==e)return{};var s,t,o=function(e,a){if(null==e)return{};var s,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)s=r[t],a.indexOf(s)>=0||(o[s]=e[s]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)s=r[t],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var c=t.createContext({}),u=function(e){var a=t.useContext(c),s=a;return e&&(s="function"==typeof e?e(a):i(i({},a),e)),s},d=function(e){var a=u(e.components);return t.createElement(c.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var s=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=n(e,["components","mdxType","originalType","parentName"]),p=u(s),l=o,v=p["".concat(c,".").concat(l)]||p[l]||m[l]||r;return s?t.createElement(v,i(i({ref:a},d),{},{components:s})):t.createElement(v,i({ref:a},d))}));function l(e,a){var s=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=s.length,i=new Array(r);i[0]=p;var n={};for(var c in a)hasOwnProperty.call(a,c)&&(n[c]=a[c]);n.originalType=e,n.mdxType="string"==typeof e?e:o,i[1]=n;for(var u=2;u<r;u++)i[u]=s[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,s)}p.displayName="MDXCreateElement"},1185:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>n,toc:()=>u});var t=s(7462),o=(s(7294),s(3905));const r={id:"aws_ec2",title:"AWS EC2"},i=void 0,n={unversionedId:"germantech/aws_ec2",id:"germantech/aws_ec2",title:"AWS EC2",description:"LINK//aws.amazon.com/pt/ec2/",source:"@site/docs/off/germantech/05_aws_ec2.md",sourceDirName:"germantech",slug:"/germantech/aws_ec2",permalink:"/off/germantech/aws_ec2",draft:!1,editUrl:"https://github.com/lucasbaccan/code/tree/master/docs/off/germantech/05_aws_ec2.md",tags:[],version:"current",lastUpdatedBy:"Lucas Elias Baccan",lastUpdatedAt:1666054798,formattedLastUpdatedAt:"18 de out. de 2022",sidebarPosition:5,frontMatter:{id:"aws_ec2",title:"AWS EC2"},sidebar:"germantech_sidebar",previous:{title:"Docker",permalink:"/off/germantech/docker"},next:{title:"AWS S3",permalink:"/off/germantech/aws_s3"}},c={},u=[{value:"Inst\xe2ncias EC2",id:"inst\xe2ncias-ec2",level:2},{value:"Tipos de inst\xe2ncias EC2",id:"tipos-de-inst\xe2ncias-ec2",level:2},{value:"Volumes EC2",id:"volumes-ec2",level:2},{value:"Snapshots de volumes EC2",id:"snapshots-de-volumes-ec2",level:3},{value:"Network Interfaces EC2",id:"network-interfaces-ec2",level:2},{value:"Security Groups EC2",id:"security-groups-ec2",level:3},{value:"Regi\xf5es EC2",id:"regi\xf5es-ec2",level:2},{value:"Extra",id:"extra",level:2}],d={toc:u};function m(e){let{components:a,...s}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,s,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"LINK",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"LINK:")," ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/pt/ec2/"},"https://aws.amazon.com/pt/ec2/"))),(0,o.kt)("p",null,"Elastic Compute Cloud (EC2) \xe9 um servi\xe7o web que fornece capacidade de computa\xe7\xe3o na nuvem de forma segura e escal\xe1vel. \xc9 um servi\xe7o de computa\xe7\xe3o em nuvem que permite que voc\xea aumente ou diminua a capacidade de computa\xe7\xe3o de acordo com a demanda. O EC2 permite que voc\xea tenha controle total sobre a configura\xe7\xe3o de hardware do servidor, permitindo que voc\xea instale e configure o software que desejar, configure grupos de seguran\xe7a e crie imagens de servidor que contenham o software e as configura\xe7\xf5es que voc\xea deseja."),(0,o.kt)("p",null,'Uma "alternativa" ao EC2 \xe9 o Lightsail, que \xe9 um servi\xe7o de computa\xe7\xe3o em nuvem da Amazon que fornece servidores virtuais pr\xe9-configurados e gerenciados. O Lightsail \xe9 uma alternativa mais simples e mais barata ao EC2, mas n\xe3o oferece a mesma flexibilidade e controle que o EC2.'),(0,o.kt)("admonition",{title:"LINK",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"LINK:")," ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/pt/lightsail/"},"https://aws.amazon.com/pt/lightsail/"))),(0,o.kt)("admonition",{title:"Aten\xe7\xe3o",type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"O Lightsail n\xe3o \xe9 uma alternativa ao EC2, mas sim uma alternativa mais simples e mais barata ao EC2."),(0,o.kt)("li",{parentName:"ul"},"N\xe3o \xe9 poss\xedvel migrar um servidor EC2 para o Lightsail e vice-versa."),(0,o.kt)("li",{parentName:"ul"},"Enquanto o Lightsail tem um pre\xe7o fixo, o EC2 tem um pre\xe7o vari\xe1vel dependendo da quantidade de recursos que voc\xea est\xe1 usando."))),(0,o.kt)("h2",{id:"inst\xe2ncias-ec2"},"Inst\xe2ncias EC2"),(0,o.kt)("p",null,"As inst\xe2ncias EC2 s\xe3o m\xe1quinas virtuais (VMs) que voc\xea pode usar para executar aplicativos na nuvem. Cada inst\xe2ncia EC2 inclui um sistema operacional (SO), aplicativos de software pr\xe9-instalados, uma quantidade de armazenamento e uma quantidade de mem\xf3ria que voc\xea pode especificar. Voc\xea pode usar uma inst\xe2ncia EC2 para executar aplicativos de banco de dados, aplicativos web, aplicativos de servidor de arquivos e muito mais."),(0,o.kt)("h2",{id:"tipos-de-inst\xe2ncias-ec2"},"Tipos de inst\xe2ncias EC2"),(0,o.kt)("p",null,"Existem v\xe1rios tipos de inst\xe2ncias EC2 dispon\xedveis, cada um com diferentes recursos e pre\xe7os. Cada instancia EC2 tem um tipo de processador, uma quantidade de mem\xf3ria e limites de banda de rede. Recentemente, come\xe7ou a ser poss\xedvel escolher tipo de instancias que rodam em processadores ARM, que s\xe3o mais baratos e mais eficientes do que os processadores Intel x86, mas sua aplica\xe7\xe3o tem que ser compat\xedvel com processadores ARM."),(0,o.kt)("h2",{id:"volumes-ec2"},"Volumes EC2"),(0,o.kt)("p",null,"Os volumes EC2 s\xe3o discos de armazenamento que voc\xea pode anexar a uma inst\xe2ncia EC2. Os volumes EC2 podem ser usados para armazenar dados de aplicativos e sistemas operacionais, ou para servir como discos de inicializa\xe7\xe3o para suas inst\xe2ncias. Os volumes EC2 podem ser anexados a uma inst\xe2ncia EC2 quando a inst\xe2ncia \xe9 iniciada, ou podem ser anexados a uma inst\xe2ncia EC2 que j\xe1 est\xe1 em execu\xe7\xe3o. Os volumes EC2 podem ser anexados a v\xe1rias inst\xe2ncias EC2 ao mesmo tempo."),(0,o.kt)("admonition",{title:"Custo",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"O custo de um volume \xe9 cobrado por hora e por GB alocado, mesmo que o volume n\xe3o esteja sendo usado ou a maquina esteja desligada.")),(0,o.kt)("h3",{id:"snapshots-de-volumes-ec2"},"Snapshots de volumes EC2"),(0,o.kt)("p",null,"Os snapshots de volumes EC2 s\xe3o c\xf3pias de seguran\xe7a de volumes EC2. Voc\xea pode criar um snapshot de um volume EC2 a qualquer momento, e os snapshots de volume EC2 s\xe3o criados incrementalmente, o que significa que apenas as altera\xe7\xf5es desde o \xfaltimo snapshot s\xe3o armazenadas. Os snapshots de volume EC2 s\xe3o armazenados em S3 e podem ser copiados para outras regi\xf5es da AWS."),(0,o.kt)("h2",{id:"network-interfaces-ec2"},"Network Interfaces EC2"),(0,o.kt)("p",null,"As inst\xe2ncias EC2 possuem uma ou mais interfaces de rede, que s\xe3o usadas para se comunicar com a internet e com outras inst\xe2ncias EC2. As interfaces de rede EC2 podem ser configuradas para usar endere\xe7os IP p\xfablicos ou privados, e podem ser configuradas para usar endere\xe7os IP est\xe1ticos ou din\xe2micos. "),(0,o.kt)("h3",{id:"security-groups-ec2"},"Security Groups EC2"),(0,o.kt)("p",null,"Os security groups EC2 s\xe3o grupos de regras de firewall que podem ser aplicadas a uma ou mais interfaces de rede EC2. Os security groups EC2 podem ser usados para permitir ou bloquear o tr\xe1fego de entrada e sa\xedda para uma inst\xe2ncia EC2. Os security groups EC2 podem ser aplicados a uma inst\xe2ncia EC2 quando a inst\xe2ncia \xe9 iniciada, ou podem ser aplicados a uma inst\xe2ncia EC2 que j\xe1 est\xe1 em execu\xe7\xe3o."),(0,o.kt)("h2",{id:"regi\xf5es-ec2"},"Regi\xf5es EC2"),(0,o.kt)("p",null,"As regi\xf5es EC2 s\xe3o locais geogr\xe1ficos onde voc\xea pode executar suas inst\xe2ncias EC2. Cada regi\xe3o EC2 \xe9 composta por pelo menos uma zona de disponibilidade. As regi\xf5es EC2 s\xe3o usadas para fornecer redund\xe2ncia e disponibilidade, pois as inst\xe2ncias EC2 em uma regi\xe3o EC2 podem falhar, mas as inst\xe2ncias EC2 em outras regi\xf5es EC2 n\xe3o ser\xe3o afetadas."),(0,o.kt)("h2",{id:"extra"},"Extra"),(0,o.kt)("p",null,"Os servi\xe7os da AWS s\xe3o extremamente flex\xedveis e configur\xe1veis, e voc\xea pode criar uma infraestrutura de nuvem altamente personalizada para atender \xe0s suas necessidades. O que foi apresentado aqui \xe9 apenas uma introdu\xe7\xe3o."))}m.isMDXComponent=!0}}]);