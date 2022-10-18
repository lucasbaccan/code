"use strict";(self.webpackChunkcode=self.webpackChunkcode||[]).push([[7489],{3905:(e,a,o)=>{o.d(a,{Zo:()=>l,kt:()=>m});var r=o(7294);function i(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){i(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function t(e,a){if(null==e)return{};var o,r,i=function(e,a){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],a.indexOf(o)>=0||(i[o]=e[o]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var d=r.createContext({}),u=function(e){var a=r.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},l=function(e){var a=u(e.components);return r.createElement(d.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var o=e.components,i=e.mdxType,n=e.originalType,d=e.parentName,l=t(e,["components","mdxType","originalType","parentName"]),p=u(o),m=i,f=p["".concat(d,".").concat(m)]||p[m]||c[m]||n;return o?r.createElement(f,s(s({ref:a},l),{},{components:o})):r.createElement(f,s({ref:a},l))}));function m(e,a){var o=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=o.length,s=new Array(n);s[0]=p;var t={};for(var d in a)hasOwnProperty.call(a,d)&&(t[d]=a[d]);t.originalType=e,t.mdxType="string"==typeof e?e:i,s[1]=t;for(var u=2;u<n;u++)s[u]=o[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},2758:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>t,toc:()=>u});var r=o(7462),i=(o(7294),o(3905));const n={id:"jenkins",title:"Jenkins"},s=void 0,t={unversionedId:"germantech/jenkins",id:"germantech/jenkins",title:"Jenkins",description:"LINK//www.jenkins.io/",source:"@site/docs/off/germantech/02_jenkins.md",sourceDirName:"germantech",slug:"/germantech/jenkins",permalink:"/off/germantech/jenkins",draft:!1,editUrl:"https://github.com/lucasbaccan/code/tree/master/docs/off/germantech/02_jenkins.md",tags:[],version:"current",lastUpdatedBy:"Lucas Elias Baccan",lastUpdatedAt:1666054798,formattedLastUpdatedAt:"18 de out. de 2022",sidebarPosition:2,frontMatter:{id:"jenkins",title:"Jenkins"},sidebar:"germantech_sidebar",previous:{title:"Linux",permalink:"/off/germantech/linux"},next:{title:"PostgreSQL",permalink:"/off/germantech/postgres"}},d={},u=[{value:"Instala\xe7\xe3o",id:"instala\xe7\xe3o",level:2},{value:"Configura\xe7\xe3o",id:"configura\xe7\xe3o",level:2},{value:"Plugins",id:"plugins",level:2},{value:"Configura\xe7\xf5es gerais",id:"configura\xe7\xf5es-gerais",level:2},{value:"Estrutura",id:"estrutura",level:2},{value:"Jobs",id:"jobs",level:3},{value:"Pipeline (Recomendado)",id:"pipeline-recomendado",level:4},{value:"Freestyle",id:"freestyle",level:4},{value:"Outros tipos de jobs",id:"outros-tipos-de-jobs",level:4},{value:"Build",id:"build",level:3},{value:"Artifacts",id:"artifacts",level:3},{value:"Configura\xe7\xf5es recomendadas",id:"configura\xe7\xf5es-recomendadas",level:2},{value:"Credenciais",id:"credenciais",level:3},{value:"Controle de acesso",id:"controle-de-acesso",level:3},{value:"Configura\xe7\xe3o global de ferramentas",id:"configura\xe7\xe3o-global-de-ferramentas",level:3}],l={toc:u};function c(e){let{components:a,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,o,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"LINK",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"LINK:")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.jenkins.io/"},"https://www.jenkins.io/"))),(0,i.kt)("p",null,"O Jenkins \xe9 uma ferramenta de automa\xe7\xe3o de tarefas, que pode ser utilizada para automatizar o processo de build e deploy de aplica\xe7\xf5es. O Jenkins \xe9 uma ferramenta open source, que pode ser instalada em qualquer servidor, e que pode ser utilizada para automatizar qualquer processo que possa ser executado em um servidor."),(0,i.kt)("h2",{id:"instala\xe7\xe3o"},"Instala\xe7\xe3o"),(0,i.kt)("p",null,"Para instalar o Jenkins, basta acessar o ",(0,i.kt)("a",{parentName:"p",href:"https://www.jenkins.io/doc/book/installing/"},"site oficial")," e seguir as instru\xe7\xf5es de instala\xe7\xe3o para o seu sistema operacional."),(0,i.kt)("h2",{id:"configura\xe7\xe3o"},"Configura\xe7\xe3o"),(0,i.kt)("p",null,"Para configurar o Jenkins, basta acessar o endere\xe7o do servidor onde o Jenkins foi instalado, e seguir as instru\xe7\xf5es de configura\xe7\xe3o."),(0,i.kt)("p",null,"No primeiro acesso, o Jenkins solicitar\xe1 a cria\xe7\xe3o de um usu\xe1rio administrador, que ser\xe1 utilizado para acessar o sistema. Sua senha inicial ser\xe1 gerada automaticamente, e ser\xe1 solicitada no primeiro acesso. A senha \xe9 salva em um arquivo chamado ",(0,i.kt)("inlineCode",{parentName:"p"},"initialAdminPassword")," dentro da pasta ",(0,i.kt)("inlineCode",{parentName:"p"},"secrets")," do Jenkins."),(0,i.kt)("h2",{id:"plugins"},"Plugins"),(0,i.kt)("p",null,"O Jenkins possui uma grande quantidade de plugins, que podem ser utilizados para automatizar tarefas espec\xedficas. Para instalar um plugin, basta acessar a p\xe1gina de gerenciamento de plugins, e pesquisar pelo plugin desejado. Para instalar um plugin, basta clicar no bot\xe3o ",(0,i.kt)("inlineCode",{parentName:"p"},"Install without restart"),"."),(0,i.kt)("admonition",{title:"Aten\xe7\xe3o",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Os plugins ajudam muito no dia a dia, mas com o tempo, isso pode impactar no servidor, tanto em performance, quanto na manuten\xe7\xe3o. Por isso, \xe9 importante avaliar se o plugin \xe9 realmente necess\xe1rio, e se ele n\xe3o pode ser substitu\xeddo por uma configura\xe7\xe3o simples.")),(0,i.kt)("h2",{id:"configura\xe7\xf5es-gerais"},"Configura\xe7\xf5es gerais"),(0,i.kt)("p",null,"Para o melhor funcionamento do Jenkins, deve ser verificado as configura\xe7\xf5es gerais do sistema. Esses ajustem tem que ser feitos atendendo as necessidades de cada empresa. "),(0,i.kt)("h2",{id:"estrutura"},"Estrutura"),(0,i.kt)("p",null,"Segue abaixo os principais itens da estrutura do Jenkins:"),(0,i.kt)("h3",{id:"jobs"},"Jobs"),(0,i.kt)("p",null,"O Jenkins \xe9 composto por jobs, que s\xe3o as tarefas que ser\xe3o executadas. Para criar um job, basta clicar no bot\xe3o ",(0,i.kt)("inlineCode",{parentName:"p"},"New Item"),", e preencher as informa\xe7\xf5es do job."),(0,i.kt)("p",null,"Ao clicar em novo, selecione o tipo de job que deseja criar e seguir com as configura\xe7\xf5es que v\xe3o ser solicitadas. Os tipos de jobs mais comuns s\xe3o:"),(0,i.kt)("h4",{id:"pipeline-recomendado"},"Pipeline (Recomendado)"),(0,i.kt)("p",null,"O Jenkins possui um tipo de job chamado ",(0,i.kt)("inlineCode",{parentName:"p"},"Pipeline"),", que permite a cria\xe7\xe3o de jobs que executam scripts. \xc9 a forma mais comum de se utilizar o Jenkins, e \xe9 a forma mais utilizada para automatizar o processo de build e deploy de aplica\xe7\xf5es.\nNo projeto, geralmente \xe9 utilizado o Jenkinsfile, que \xe9 um arquivo de configura\xe7\xe3o do Jenkins, que \xe9 versionado no reposit\xf3rio do projeto, e que \xe9 utilizado para configurar o job."),(0,i.kt)("h4",{id:"freestyle"},"Freestyle"),(0,i.kt)("p",null,"O Jenkins tamb\xe9m possui um tipo de job chamado ",(0,i.kt)("inlineCode",{parentName:"p"},"Freestyle"),", que permite a cria\xe7\xe3o de jobs que executam scripts. \xc9 a forma mais simples e de forma visual, o que pode limitar a configura\xe7\xe3o do job."),(0,i.kt)("h4",{id:"outros-tipos-de-jobs"},"Outros tipos de jobs"),(0,i.kt)("p",null,"Dependendo dos plugins instalados, o Jenkins pode ter outros tipos de jobs, como por exemplo, o tipo ",(0,i.kt)("inlineCode",{parentName:"p"},"Maven"),", que permite a cria\xe7\xe3o de jobs que executam o Maven."),(0,i.kt)("h3",{id:"build"},"Build"),(0,i.kt)("p",null,"Cada job possui um n\xfamero de build, que \xe9 um n\xfamero sequencial que \xe9 incrementado a cada execu\xe7\xe3o do job. O n\xfamero da build \xe9 utilizado para identificar cada execu\xe7\xe3o do job."),(0,i.kt)("p",null,"Os builds s\xe3o as execu\xe7\xf5es do job, e tem as informa\xe7\xf5es de quem, quando e o qeu foi executado. Voc\xea pode configurar quantos builds ser\xe3o mantidos no hist\xf3rico, e tamb\xe9m se os builds ser\xe3o mantidos mesmo que o job seja exclu\xeddo."),(0,i.kt)("h3",{id:"artifacts"},"Artifacts"),(0,i.kt)("p",null,"Os artifacts s\xe3o os arquivos gerados durante a execu\xe7\xe3o do job. Os artifacts s\xe3o salvos no disco do servidor, e podem ser acessados atrav\xe9s do Jenkins, ou diretamente no servidor. Ent\xe3o quando um job \xe9 executado, voc\xea especifica quais arquivos ser\xe3o salvos como artifacts, sen\xe3o nenhum arquivo ser\xe1 salvo."),(0,i.kt)("h2",{id:"configura\xe7\xf5es-recomendadas"},"Configura\xe7\xf5es recomendadas"),(0,i.kt)("h3",{id:"credenciais"},"Credenciais"),(0,i.kt)("p",null,"As credenciais s\xe3o as informa\xe7\xf5es de acesso a outros sistemas, como por exemplo, o acesso ao reposit\xf3rio de c\xf3digo, ou o acesso ao servidor de deploy. As credenciais s\xe3o utilizadas para acessar esses sistemas, e s\xe3o armazenadas no Jenkins."),(0,i.kt)("p",null,"Para criar uma credencial, basta acessar a p\xe1gina de gerenciamento de credenciais, e clicar no bot\xe3o ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Credentials"),"."),(0,i.kt)("p",null,"Isso \xe9 uma boa pr\xe1tica, pois evita que as credenciais fiquem expostas no c\xf3digo al\xe9m de facilitar a manuten\xe7\xe3o e padroniza\xe7\xe3o."),(0,i.kt)("h3",{id:"controle-de-acesso"},"Controle de acesso"),(0,i.kt)("p",null,"O Jenkins possui um controle de acesso, que permite definir quem pode acessar o sistema, e quais jobs podem ser executados por cada usu\xe1rio. Para configurar o controle de acesso, basta acessar a p\xe1gina de gerenciamento de usu\xe1rios, e clicar no bot\xe3o ",(0,i.kt)("inlineCode",{parentName:"p"},"Add User"),"."),(0,i.kt)("h3",{id:"configura\xe7\xe3o-global-de-ferramentas"},"Configura\xe7\xe3o global de ferramentas"),(0,i.kt)("p",null,"Em alguns casos voc\xea vai precisar instalar ferramentas no servidor do Jenkins, e depois ir em ",(0,i.kt)("inlineCode",{parentName:"p"},"Global Tool Configuration")," e configurar o caminho para a ferramenta. Por exemplo, se voc\xea precisa instalar o Maven no servidor, voc\xea vai precisar configurar o caminho para o Maven. Isso torna o processo de configura\xe7\xe3o mais f\xe1cil, pois voc\xea n\xe3o precisa configurar o caminho para a ferramenta em cada job."))}c.isMDXComponent=!0}}]);