"use strict";(self.webpackChunkcode=self.webpackChunkcode||[]).push([[5434],{566:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=o(5893),a=o(1151);o(4985),o(4866),o(5162);const s={id:"index",title:"Day 5",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Day 5"},i=void 0,c={id:"pick-2024/day5/index",title:"Day 5",description:"Sum\xe1rio",source:"@site/docs/cursos/pick-2024/day5/index.md",sourceDirName:"pick-2024/day5",slug:"/pick-2024/day5/",permalink:"/cursos/pick-2024/day5/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucasbaccan/code/tree/master/docs/cursos/pick-2024/day5/index.md",tags:[],version:"current",lastUpdatedBy:"Lucas Elias Baccan",lastUpdatedAt:1711933826e3,frontMatter:{id:"index",title:"Day 5",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Day 5"},sidebar:"docs",previous:{title:"Day 4",permalink:"/cursos/pick-2024/day4/"}},t={},d=[{value:"Sum\xe1rio",id:"sum\xe1rio",level:2},{value:"Dia 5",id:"dia-5",level:2},{value:"O que s\xe3o Networks?",id:"o-que-s\xe3o-networks",level:3},{value:"Criando uma Network",id:"criando-uma-network",level:3},{value:"Outras op\xe7\xf5es de rede para os nossos containers",id:"outras-op\xe7\xf5es-de-rede-para-os-nossos-containers",level:3},{value:"Conectando containers em uma Network temporariamente",id:"conectando-containers-em-uma-network-temporariamente",level:3},{value:"Limpando a casa",id:"limpando-a-casa",level:3},{value:"Limitando recursos como CPU e Mem\xf3ria",id:"limitando-recursos-como-cpu-e-mem\xf3ria",level:3}];function l(e){const n={admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"sum\xe1rio",children:"Sum\xe1rio"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 Day5 - Intro - 02:24"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 Day5 - Descomplicando as Networks no Docker - 08:16"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 Day5 - Criando uma Network e conectando nossos containers - 27:13"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 Day5 - Outras op\xe7\xf5es de rede para os nossos containers - 10:28"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 Day5 - Conectando containers em uma Network temporariamente - 04:09"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 Day5 - Limitando recursos como CPU e Mem\xf3ria - 10:59"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 Day5 - Encerramento Day5 - 00:51"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udcdd Exame te\xf3rico do Day5 12 quest\xf5es"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Legenda"}),(0,r.jsx)(n.br,{}),"\n","\ud83c\udfa5 - Aula gravada\n\ud83d\udcdd - Atividade"]}),"\n",(0,r.jsx)(n.h2,{id:"dia-5",children:"Dia 5"}),"\n",(0,r.jsx)(n.p,{children:"Day 5 foi sobre Networks, onde aprendemos o que s\xe3o Networks, como criar uma Network, conectar containers em uma Network, outras op\xe7\xf5es de rede para os nossos containers, conectar containers em uma Network temporariamente e limitar recursos como CPU e Mem\xf3ria."}),"\n",(0,r.jsx)(n.h3,{id:"o-que-s\xe3o-networks",children:"O que s\xe3o Networks?"}),"\n",(0,r.jsx)(n.p,{children:"Networks s\xe3o mecanismos de comunica\xe7\xe3o entre containers no Docker. Elas s\xe3o usadas para conectar containers em uma rede privada, permitindo que eles se comuniquem entre si. As Networks s\xe3o independentes do ciclo de vida do container, ou seja, elas persistem mesmo ap\xf3s o container ser removido."}),"\n",(0,r.jsx)(n.p,{children:"Existem seis tipos de Networks no Docker:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"bridge"}),": rede padr\xe3o do Docker, que conecta containers em uma rede privada."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"host"}),": conecta containers na mesma rede do host."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"none"}),": n\xe3o conecta containers em nenhuma rede."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"overlay"}),": conecta containers em diferentes hosts."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"macvlan"}),": conecta containers em uma rede com endere\xe7os MAC."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ipvlan"}),": conecta containers em uma rede com endere\xe7os IP."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"criando-uma-network",children:"Criando uma Network"}),"\n",(0,r.jsx)(n.p,{children:"Vamos come\xe7ar baixando rodando nosso container de exemplo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -d --name giropops-senhas -p 5000:5000 linuxtips/giropops-senhas:1.0\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Mas ele n\xe3o vai funcionar, pois precisamos rodar o container ",(0,r.jsx)(n.code,{children:"redis"})," para ele funcionar, ent\xe3o rode o comando:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -d --name redis -p 6379:6379 redis\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Mas ainda n\xe3o vai funcionar, pois nossa aplica\xe7\xe3o n\xe3o sabe onde que o ",(0,r.jsx)(n.code,{children:"redis"})," est\xe1, ent\xe3o vamos passar uma vari\xe1vel de ambiente para nossa aplica\xe7\xe3o saber qual \xe9 o IP do ",(0,r.jsx)(n.code,{children:"redis"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Apagar o container\ndocker container rm -f giropops-senhas\ndocker run -d --name giropops-senhas -p 5000:5000 -e REDIS_HOST=<IP> linuxtips/giropops-senhas:1.0\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Show, agora tudo est\xe1 funcionando, mas n\xe3o \xe9 elegante passar o IP do ",(0,r.jsx)(n.code,{children:"redis"})," manualmente, ent\xe3o vamos criar uma Network para conectar nossos containers:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Apagar os containers\ndocker rm -f giropops-senhas redis\ndocker network create giropops\ndocker run -d --name redis -p 6379:6379 --network giropops redis\ndocker run -d --name giropops-senhas -p 5000:5000 -e REDIS_HOST=redis --network giropops linuxtips/giropops-senhas:1.0\n"})}),"\n",(0,r.jsx)(n.p,{children:"Agora sim, tudo est\xe1 funcionando e nossos containers est\xe3o conectados em uma Network. Voc\xea pode verificar isso rodando o comando:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker network inspect giropops\n"})}),"\n",(0,r.jsxs)(n.p,{children:["O comando acima ir\xe1 mostrar todas as informa\xe7\xf5es da Network ",(0,r.jsx)(n.code,{children:"giropops"}),", voc\xea pode ver que os containers ",(0,r.jsx)(n.code,{children:"giropops-senhas"})," e ",(0,r.jsx)(n.code,{children:"redis"})," est\xe3o conectados nela, qual \xe9 o IP de cada container, etc."]}),"\n",(0,r.jsxs)(n.p,{children:["Quando voc\xea colocar os containers em uma Network, o Docker cria um DNS interno para os containers, ent\xe3o voc\xea pode acessar o container pelo nome do container, no caso acima, o ",(0,r.jsx)(n.code,{children:"giropops-senhas"})," acessa o ",(0,r.jsx)(n.code,{children:"redis"})," pelo nome ",(0,r.jsx)(n.code,{children:"redis"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["N\xe3o utilize a op\xe7\xe3o ",(0,r.jsx)(n.code,{children:"--link"})," para conectar containers em uma Network, pois ela est\xe1 obsoleta e ser\xe1 removida em futuras vers\xf5es do Docker."]})}),"\n",(0,r.jsx)(n.h3,{id:"outras-op\xe7\xf5es-de-rede-para-os-nossos-containers",children:"Outras op\xe7\xf5es de rede para os nossos containers"}),"\n",(0,r.jsxs)(n.p,{children:["Vamos passar novos par\xe2metros para o comando ",(0,r.jsx)(n.code,{children:"docker run"}),", para ver a lista completa de op\xe7\xf5es, rode o comando:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker container run --help\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--add-host"}),": adiciona um host ao arquivo ",(0,r.jsx)(n.code,{children:"/etc/hosts"})," do container."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--dns"}),": define o servidor DNS para o container."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--dns-search"}),": define o dom\xednio de pesquisa para o servidor DNS."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--dns-option"}),": define op\xe7\xf5es adicionais para o servidor DNS."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--ip"}),": define o endere\xe7o IP do container."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--mac-address"}),": define o endere\xe7o MAC do container."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"conectando-containers-em-uma-network-temporariamente",children:"Conectando containers em uma Network temporariamente"}),"\n",(0,r.jsxs)(n.p,{children:["Se voc\xea n\xe3o quiser criar uma Network para conectar seus containers, voc\xea pode usar a op\xe7\xe3o ",(0,r.jsx)(n.code,{children:"--network"})," para conectar seus containers temporariamente. Por exemplo, para conectar o container ",(0,r.jsx)(n.code,{children:"giropops-senhas"})," ao container ",(0,r.jsx)(n.code,{children:"redis"})," temporariamente, rode o comando:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Apagar os containers\ndocker container rm -f giropops-senhas\ndocker run -d --name redis -p 6379:6379 --network giropops redis\n# Rodar o container sem ligar na Network\ndocker run -d --name giropops-senhas -p 5000:5000 -e REDIS_HOST=redis linuxtips/giropops-senhas:1.0\n# N\xe3o vai funcionar, pois o container n\xe3o est\xe1 na Network\ndocker network connect giropops giropops-senhas\n# Agora sim, tudo est\xe1 funcionando\ndocker network disconnect giropops giropops-senhas\n# Agora o container n\xe3o est\xe1 mais conectado na Network, ent\xe3o n\xe3o vai funcionar\n"})}),"\n",(0,r.jsx)(n.h3,{id:"limpando-a-casa",children:"Limpando a casa"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker rm -f giropops-senhas redis\ndocker network prune\n"})}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.code,{children:"prune"})," remove todas as Networks que n\xe3o est\xe3o sendo usadas."]}),"\n",(0,r.jsx)(n.h3,{id:"limitando-recursos-como-cpu-e-mem\xf3ria",children:"Limitando recursos como CPU e Mem\xf3ria"}),"\n",(0,r.jsxs)(n.p,{children:["Vamos passar novos par\xe2metros para o comando ",(0,r.jsx)(n.code,{children:"docker run"}),", para ver a lista completa de op\xe7\xf5es, rode o comando:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker container run --help\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--cpus"}),": limita a quantidade de CPUs que o container pode usar. Voc\xea pode usar valores decimais, por exemplo, ",(0,r.jsx)(n.code,{children:"--cpus 0.5"})," limita o container a usar metade de uma CPU."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--memory"}),": limita a quantidade de mem\xf3ria que o container pode usar. Voc\xea pode usar valores com ",(0,r.jsx)(n.code,{children:"k"}),", ",(0,r.jsx)(n.code,{children:"m"}),", ",(0,r.jsx)(n.code,{children:"g"}),", por exemplo, ",(0,r.jsx)(n.code,{children:"--memory 128m"})," limita o container a usar 128MB de mem\xf3ria."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--memory-swap"}),": limita a quantidade de mem\xf3ria + swap que o container pode usar."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--memory-reservation"}),": define a quantidade de mem\xf3ria que o container reserva."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Vamos testar limitar a quantidade de CPUs e mem\xf3ria que o container pode usar:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker container rm -f giropops-senhas\ndocker run -d --name giropops-senhas -p 5000:5000 --cpus 0.5 --memory 128m linuxtips/giropops-senhas:1.0\n"})}),"\n",(0,r.jsx)(n.p,{children:"Voc\xea pode verificar se os limites est\xe3o sendo respeitados rodando o comando:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker container stats\n# ou\ndocker container stats giropops-senhas\n"})}),"\n",(0,r.jsxs)(n.p,{children:["O comando acima mostra as estat\xedsticas do container ",(0,r.jsx)(n.code,{children:"giropops-senhas"}),", voc\xea pode ver a quantidade de CPUs e mem\xf3ria que o container est\xe1 usando."]}),"\n",(0,r.jsx)(n.p,{children:"Voc\xea consegue atualuzar os limites de CPU e mem\xf3ria de um container em execu\xe7\xe3o rodando o comando:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker update --cpus 1 --memory 256m giropops-senhas\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},5162:(e,n,o)=>{o.d(n,{Z:()=>i});o(7294);var r=o(512);const a={tabItem:"tabItem_Ymn6"};var s=o(5893);function i(e){let{children:n,hidden:o,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:o,children:n})}},4866:(e,n,o)=>{o.d(n,{Z:()=>w});var r=o(7294),a=o(512),s=o(2466),i=o(6550),c=o(469),t=o(1980),d=o(7392),l=o(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:o}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:o,attributes:r,default:a}}=e;return{value:n,label:o,attributes:r,default:a}}))}(o);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function m(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:o}=e;const a=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,t._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function x(e){const{defaultValue:n,queryString:o=!1,groupId:a}=e,s=p(e),[i,t]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=o.find((e=>e.default))??o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[d,u]=h({queryString:o,groupId:a}),[x,j]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,l.Nk)(o);return[a,(0,r.useCallback)((e=>{o&&s.set(e)}),[o,s])]}({groupId:a}),v=(()=>{const e=d??x;return m({value:e,tabValues:s})?e:null})();(0,c.Z)((()=>{v&&t(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);t(e),u(e),j(e)}),[u,j,s]),tabValues:s}}var j=o(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=o(5893);function f(e){let{className:n,block:o,selectedValue:r,selectValue:i,tabValues:c}=e;const t=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),l=e=>{const n=e.currentTarget,o=t.indexOf(n),a=c[o].value;a!==r&&(d(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const o=t.indexOf(e.currentTarget)+1;n=t[o]??t[0];break}case"ArrowLeft":{const o=t.indexOf(e.currentTarget)-1;n=t[o]??t[t.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},n),children:c.map((e=>{let{value:n,label:o,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>t.push(e),onKeyDown:u,onClick:l,...s,className:(0,a.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===n}),children:o??n},n)}))})}function k(e){let{lazy:n,children:o,selectedValue:a}=e;const s=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function b(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(f,{...e,...n}),(0,g.jsx)(k,{...e,...n})]})}function w(e){const n=(0,j.Z)();return(0,g.jsx)(b,{...e,children:u(e.children)},String(n))}},4985:(e,n,o)=>{o.d(n,{Z:()=>a});o(7294);var r=o(5893);function a(e){let{children:n,fontSize:o="15px",color:a="#999"}=e;return(0,r.jsx)("div",{style:{textAlign:"center",fontSize:o,color:a},children:n})}},1151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>i});var r=o(7294);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);