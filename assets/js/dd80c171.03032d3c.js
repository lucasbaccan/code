"use strict";(self.webpackChunkcode=self.webpackChunkcode||[]).push([[5391],{3804:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>t,toc:()=>c});var o=s(5893),i=s(1151);const n={id:"aws_ec2",title:"AWS EC2"},r=void 0,t={id:"germantech/aws_ec2",title:"AWS EC2",description:"LINK//aws.amazon.com/pt/ec2/",source:"@site/docs/off/germantech/05_aws_ec2.md",sourceDirName:"germantech",slug:"/germantech/aws_ec2",permalink:"/off/germantech/aws_ec2",draft:!1,unlisted:!1,editUrl:"https://github.com/lucasbaccan/code/tree/master/docs/off/germantech/05_aws_ec2.md",tags:[],version:"current",lastUpdatedBy:"Lucas Elias Baccan",lastUpdatedAt:1703366520,formattedLastUpdatedAt:"23 de dez. de 2023",sidebarPosition:5,frontMatter:{id:"aws_ec2",title:"AWS EC2"},sidebar:"germantech_sidebar",previous:{title:"Docker",permalink:"/off/germantech/docker"},next:{title:"AWS S3",permalink:"/off/germantech/aws_s3"}},d={},c=[{value:"Inst\xe2ncias EC2",id:"inst\xe2ncias-ec2",level:2},{value:"Tipos de inst\xe2ncias EC2",id:"tipos-de-inst\xe2ncias-ec2",level:2},{value:"Volumes EC2",id:"volumes-ec2",level:2},{value:"Snapshots de volumes EC2",id:"snapshots-de-volumes-ec2",level:3},{value:"Network Interfaces EC2",id:"network-interfaces-ec2",level:2},{value:"Security Groups EC2",id:"security-groups-ec2",level:3},{value:"Regi\xf5es EC2",id:"regi\xf5es-ec2",level:2},{value:"Extra",id:"extra",level:2}];function u(e){const a={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.admonition,{title:"LINK",type:"tip",children:(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"LINK:"})," ",(0,o.jsx)(a.a,{href:"https://aws.amazon.com/pt/ec2/",children:"https://aws.amazon.com/pt/ec2/"})]})}),"\n",(0,o.jsx)(a.p,{children:"Elastic Compute Cloud (EC2) \xe9 um servi\xe7o web que fornece capacidade de computa\xe7\xe3o na nuvem de forma segura e escal\xe1vel. \xc9 um servi\xe7o de computa\xe7\xe3o em nuvem que permite que voc\xea aumente ou diminua a capacidade de computa\xe7\xe3o de acordo com a demanda. O EC2 permite que voc\xea tenha controle total sobre a configura\xe7\xe3o de hardware do servidor, permitindo que voc\xea instale e configure o software que desejar, configure grupos de seguran\xe7a e crie imagens de servidor que contenham o software e as configura\xe7\xf5es que voc\xea deseja."}),"\n",(0,o.jsxs)(a.p,{children:["Uma ",(0,o.jsx)(a.em,{children:"alternativa"})," ao EC2 \xe9 o Lightsail, que \xe9 um servi\xe7o de computa\xe7\xe3o em nuvem da Amazon que fornece servidores virtuais pr\xe9-configurados e gerenciados. O Lightsail \xe9 uma alternativa mais simples e mais barata ao EC2, mas n\xe3o oferece a mesma flexibilidade e controle que o EC2."]}),"\n",(0,o.jsx)(a.admonition,{title:"LINK",type:"tip",children:(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.strong,{children:"LINK:"})," ",(0,o.jsx)(a.a,{href:"https://aws.amazon.com/pt/lightsail/",children:"https://aws.amazon.com/pt/lightsail/"})]})}),"\n",(0,o.jsx)(a.admonition,{title:"Aten\xe7\xe3o",type:"caution",children:(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"O Lightsail n\xe3o \xe9 uma alternativa ao EC2, mas sim uma alternativa mais simples e mais barata ao EC2."}),"\n",(0,o.jsx)(a.li,{children:"N\xe3o \xe9 poss\xedvel migrar um servidor EC2 para o Lightsail e vice-versa."}),"\n",(0,o.jsx)(a.li,{children:"Enquanto o Lightsail tem um pre\xe7o fixo, o EC2 tem um pre\xe7o vari\xe1vel dependendo da quantidade de recursos que voc\xea est\xe1 usando."}),"\n"]})}),"\n",(0,o.jsx)(a.h2,{id:"inst\xe2ncias-ec2",children:"Inst\xe2ncias EC2"}),"\n",(0,o.jsx)(a.p,{children:"As inst\xe2ncias EC2 s\xe3o m\xe1quinas virtuais (VMs) que voc\xea pode usar para executar aplicativos na nuvem. Cada inst\xe2ncia EC2 inclui um sistema operacional (SO), aplicativos de software pr\xe9-instalados, uma quantidade de armazenamento e uma quantidade de mem\xf3ria que voc\xea pode especificar. Voc\xea pode usar uma inst\xe2ncia EC2 para executar aplicativos de banco de dados, aplicativos web, aplicativos de servidor de arquivos e muito mais."}),"\n",(0,o.jsx)(a.h2,{id:"tipos-de-inst\xe2ncias-ec2",children:"Tipos de inst\xe2ncias EC2"}),"\n",(0,o.jsx)(a.p,{children:"Existem v\xe1rios tipos de inst\xe2ncias EC2 dispon\xedveis, cada um com diferentes recursos e pre\xe7os. Cada instancia EC2 tem um tipo de processador, uma quantidade de mem\xf3ria e limites de banda de rede. Recentemente, come\xe7ou a ser poss\xedvel escolher tipo de instancias que rodam em processadores ARM, que s\xe3o mais baratos e mais eficientes do que os processadores Intel x86, mas sua aplica\xe7\xe3o tem que ser compat\xedvel com processadores ARM."}),"\n",(0,o.jsx)(a.h2,{id:"volumes-ec2",children:"Volumes EC2"}),"\n",(0,o.jsx)(a.p,{children:"Os volumes EC2 s\xe3o discos de armazenamento que voc\xea pode anexar a uma inst\xe2ncia EC2. Os volumes EC2 podem ser usados para armazenar dados de aplicativos e sistemas operacionais, ou para servir como discos de inicializa\xe7\xe3o para suas inst\xe2ncias. Os volumes EC2 podem ser anexados a uma inst\xe2ncia EC2 quando a inst\xe2ncia \xe9 iniciada, ou podem ser anexados a uma inst\xe2ncia EC2 que j\xe1 est\xe1 em execu\xe7\xe3o. Os volumes EC2 podem ser anexados a v\xe1rias inst\xe2ncias EC2 ao mesmo tempo."}),"\n",(0,o.jsx)(a.admonition,{title:"Custo",type:"info",children:(0,o.jsx)(a.p,{children:"O custo de um volume \xe9 cobrado por hora e por GB alocado, mesmo que o volume n\xe3o esteja sendo usado ou a maquina esteja desligada."})}),"\n",(0,o.jsx)(a.h3,{id:"snapshots-de-volumes-ec2",children:"Snapshots de volumes EC2"}),"\n",(0,o.jsx)(a.p,{children:"Os snapshots de volumes EC2 s\xe3o c\xf3pias de seguran\xe7a de volumes EC2. Voc\xea pode criar um snapshot de um volume EC2 a qualquer momento, e os snapshots de volume EC2 s\xe3o criados incrementalmente, o que significa que apenas as altera\xe7\xf5es desde o \xfaltimo snapshot s\xe3o armazenadas. Os snapshots de volume EC2 s\xe3o armazenados em S3 e podem ser copiados para outras regi\xf5es da AWS."}),"\n",(0,o.jsx)(a.h2,{id:"network-interfaces-ec2",children:"Network Interfaces EC2"}),"\n",(0,o.jsx)(a.p,{children:"As inst\xe2ncias EC2 possuem uma ou mais interfaces de rede, que s\xe3o usadas para se comunicar com a internet e com outras inst\xe2ncias EC2. As interfaces de rede EC2 podem ser configuradas para usar endere\xe7os IP p\xfablicos ou privados, e podem ser configuradas para usar endere\xe7os IP est\xe1ticos ou din\xe2micos."}),"\n",(0,o.jsx)(a.h3,{id:"security-groups-ec2",children:"Security Groups EC2"}),"\n",(0,o.jsx)(a.p,{children:"Os security groups EC2 s\xe3o grupos de regras de firewall que podem ser aplicadas a uma ou mais interfaces de rede EC2. Os security groups EC2 podem ser usados para permitir ou bloquear o tr\xe1fego de entrada e sa\xedda para uma inst\xe2ncia EC2. Os security groups EC2 podem ser aplicados a uma inst\xe2ncia EC2 quando a inst\xe2ncia \xe9 iniciada, ou podem ser aplicados a uma inst\xe2ncia EC2 que j\xe1 est\xe1 em execu\xe7\xe3o."}),"\n",(0,o.jsx)(a.h2,{id:"regi\xf5es-ec2",children:"Regi\xf5es EC2"}),"\n",(0,o.jsx)(a.p,{children:"As regi\xf5es EC2 s\xe3o locais geogr\xe1ficos onde voc\xea pode executar suas inst\xe2ncias EC2. Cada regi\xe3o EC2 \xe9 composta por pelo menos uma zona de disponibilidade. As regi\xf5es EC2 s\xe3o usadas para fornecer redund\xe2ncia e disponibilidade, pois as inst\xe2ncias EC2 em uma regi\xe3o EC2 podem falhar, mas as inst\xe2ncias EC2 em outras regi\xf5es EC2 n\xe3o ser\xe3o afetadas."}),"\n",(0,o.jsx)(a.h2,{id:"extra",children:"Extra"}),"\n",(0,o.jsx)(a.p,{children:"Os servi\xe7os da AWS s\xe3o extremamente flex\xedveis e configur\xe1veis, e voc\xea pode criar uma infraestrutura de nuvem altamente personalizada para atender \xe0s suas necessidades. O que foi apresentado aqui \xe9 apenas uma introdu\xe7\xe3o."})]})}function m(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,a,s)=>{s.d(a,{Z:()=>t,a:()=>r});var o=s(7294);const i={},n=o.createContext(i);function r(e){const a=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(n.Provider,{value:a},e.children)}}}]);