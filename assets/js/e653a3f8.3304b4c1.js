"use strict";(self.webpackChunkcode=self.webpackChunkcode||[]).push([[9302],{4475:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>t,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(5893),a=n(1151),s=n(4985);n(4866),n(5162);const i={id:"index",title:"Day 4",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Day 4"},t=void 0,l={id:"pick-2024/docker/day4/index",title:"Day 4",description:"Sum\xe1rio",source:"@site/docs/cursos/pick-2024/docker/day4/index.md",sourceDirName:"pick-2024/docker/day4",slug:"/pick-2024/docker/day4/",permalink:"/cursos/pick-2024/docker/day4/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucasbaccan/code/tree/master/docs/cursos/pick-2024/docker/day4/index.md",tags:[],version:"current",lastUpdatedBy:"Lucas Elias Baccan",lastUpdatedAt:1731361657e3,frontMatter:{id:"index",title:"Day 4",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Day 4"},sidebar:"docs",previous:{title:"Day 3",permalink:"/cursos/pick-2024/docker/day3/"},next:{title:"Day 5",permalink:"/cursos/pick-2024/docker/day5/"}},d={},c=[{value:"Sum\xe1rio",id:"sum\xe1rio",level:2},{value:"Dia 4",id:"dia-4",level:2},{value:"O que s\xe3o Volumes?",id:"o-que-s\xe3o-volumes",level:3},{value:"Volumes do tipo <code>Bind</code>",id:"volumes-do-tipo-bind",level:3},{value:"Volumes do tipo <code>Volume</code>",id:"volumes-do-tipo-volume",level:3},{value:"Volumes do tipo <code>tmpfs</code>",id:"volumes-do-tipo-tmpfs",level:3},{value:"Inspecionando Volumes",id:"inspecionando-volumes",level:3}];function u(e){const o={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"sum\xe1rio",children:"Sum\xe1rio"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 Day4 - Introdu\xe7\xe3o ao Day4 - 03:01"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 Day4 - O que s\xe3o volumes e seus tipos - 04:49"}),"\n",(0,r.jsx)(o.li,{children:"\ud83d\udcd6 O que s\xe3o Volumes?"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 Day4 - Criando um volume do tipo Bind - 11:13"}),"\n",(0,r.jsx)(o.li,{children:"\ud83d\udcd6 Volumes do tipo Bind"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 Day4 - Gerenciando Volumes do tipo Volume - 14:17"}),"\n",(0,r.jsx)(o.li,{children:"\ud83d\udcd6 Volumes do tipo Volume"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 Day4 - Conhecendo outras formas de montar volumes e os Storage Drivers - 09:24"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 Day4 - Criando um Volume do tipo tmpfs - 03:55"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 Day4 - Encerramento do Day4 - 01:32"}),"\n",(0,r.jsx)(o.li,{children:"\ud83d\udcdd Exame te\xf3rico do Day4 - 14 quest\xf5es"}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Legenda"}),(0,r.jsx)(o.br,{}),"\n","\ud83c\udfa5 - Aula gravada\n\ud83d\udcd6 - Material complementar\n\ud83d\udcdd - Atividade"]}),"\n",(0,r.jsx)(o.h2,{id:"dia-4",children:"Dia 4"}),"\n",(0,r.jsxs)(o.p,{children:["Day 4 foi sobre volumes, onde aprendemos o que s\xe3o volumes, os tipos de volumes, como criar volumes do tipo ",(0,r.jsx)(o.code,{children:"Bind"}),", como gerenciar volumes do tipo ",(0,r.jsx)(o.code,{children:"Volume"}),", outras formas de montar volumes e os Storage Drivers."]}),"\n",(0,r.jsx)(o.h3,{id:"o-que-s\xe3o-volumes",children:"O que s\xe3o Volumes?"}),"\n",(0,r.jsx)(o.p,{children:"Volumes s\xe3o mecanismos de persist\xeancia de dados no Docker. Eles s\xe3o usados para armazenar dados gerados por containers, como logs, arquivos de configura\xe7\xe3o, bancos de dados, etc. Os volumes s\xe3o independentes do ciclo de vida do container, ou seja, eles persistem mesmo ap\xf3s o container ser removido."}),"\n",(0,r.jsx)(o.p,{children:"Existem tr\xeas tipos de volumes no Docker:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"Bind"}),": monta um diret\xf3rio do host no container."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"Volume"}),": cria um volume gerenciado pelo Docker."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.code,{children:"tmpfs"}),": cria um volume na mem\xf3ria RAM."]}),"\n"]}),"\n",(0,r.jsx)(s.Z,{children:(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.img,{alt:"Volumes",src:n(8661).Z+"",width:"664",height:"400"}),(0,r.jsx)(o.br,{}),"\n","Fonte: ",(0,r.jsx)(o.a,{href:"https://docs.docker.com/storage/volumes/",children:"Docker"})]})}),"\n",(0,r.jsxs)(o.admonition,{type:"info",children:[(0,r.jsxs)(o.p,{children:["Existe a op\xe7\xe3o ",(0,r.jsx)(o.code,{children:"--mount"})," que \xe9 mais flex\xedvel e recomendada para criar volumes. A op\xe7\xe3o ",(0,r.jsx)(o.code,{children:"-v"})," ou ",(0,r.jsx)(o.code,{children:"--volume"})," \xe9 mais antiga e menos flex\xedvel, mas ambos fazem a mesma coisa."]}),(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"docker run -v /path/on/host:/path/on/container image\n# ou\ndocker run --volume /path/on/host:/path/on/container image\n# ou\ndocker run --mount type=bind,source=/path/on/host,target=/path/on/container image\n"})}),(0,r.jsx)(o.p,{children:"O exemplo acima todos os comandos fazem a mesma coisa."})]}),"\n",(0,r.jsxs)(o.h3,{id:"volumes-do-tipo-bind",children:["Volumes do tipo ",(0,r.jsx)(o.code,{children:"Bind"})]}),"\n",(0,r.jsxs)(o.p,{children:["Volumes do tipo ",(0,r.jsx)(o.code,{children:"Bind"})," s\xe3o usados para montar um diret\xf3rio do host no container. Eles s\xe3o \xfateis para compartilhar arquivos entre o host e o container. Para criar um volume do tipo ",(0,r.jsx)(o.code,{children:"Bind"}),", usamos a op\xe7\xe3o ",(0,r.jsx)(o.code,{children:"-v"})," ou ",(0,r.jsx)(o.code,{children:"--volume"})," seguida do caminho do diret\xf3rio no host e do caminho do diret\xf3rio no container."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"docker run -v /path/on/host:/path/on/container image\n# ou\ndocker run --volume /path/on/host:/path/on/container image\n"})}),"\n",(0,r.jsxs)(o.h3,{id:"volumes-do-tipo-volume",children:["Volumes do tipo ",(0,r.jsx)(o.code,{children:"Volume"})]}),"\n",(0,r.jsxs)(o.p,{children:["Volumes do tipo ",(0,r.jsx)(o.code,{children:"Volume"})," s\xe3o usados para criar volumes gerenciados pelo Docker. Eles s\xe3o \xfateis para armazenar dados de forma persistente e compartilhar dados entre containers. Para criar um volume do tipo ",(0,r.jsx)(o.code,{children:"Volume"}),", usamos a op\xe7\xe3o ",(0,r.jsx)(o.code,{children:"-v"})," ou ",(0,r.jsx)(o.code,{children:"--volume"})," seguida do nome do volume."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"# Criando um volume gerenciado pelo Docker\ndocker volume create volume_name\n# ou\ndocker run -v volume_name:/path/on/container image\n# ou\ndocker run --volume volume_name:/path/on/container image\n"})}),"\n",(0,r.jsxs)(o.h3,{id:"volumes-do-tipo-tmpfs",children:["Volumes do tipo ",(0,r.jsx)(o.code,{children:"tmpfs"})]}),"\n",(0,r.jsxs)(o.p,{children:["Volumes do tipo ",(0,r.jsx)(o.code,{children:"tmpfs"})," s\xe3o usados para criar volumes na mem\xf3ria RAM. Eles s\xe3o \xfateis para armazenar dados tempor\xe1rios que n\xe3o precisam ser persistidos. Para criar um volume do tipo ",(0,r.jsx)(o.code,{children:"tmpfs"}),", usamos a op\xe7\xe3o ",(0,r.jsx)(o.code,{children:"--tmpfs"})," seguida do caminho do diret\xf3rio no container."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"docker run --tmpfs /path/on/container image\n"})}),"\n",(0,r.jsx)(o.admonition,{type:"warning",children:(0,r.jsxs)(o.p,{children:["Volumes do tipo ",(0,r.jsx)(o.code,{children:"tmpfs"})," s\xe3o armazenados na mem\xf3ria RAM e n\xe3o s\xe3o persistidos. Eles s\xe3o apagados quando o container \xe9 removido, reiniciado ou o Docker \xe9 reiniciado."]})}),"\n",(0,r.jsx)(o.h3,{id:"inspecionando-volumes",children:"Inspecionando Volumes"}),"\n",(0,r.jsxs)(o.p,{children:["Se fizemos a liga\xe7\xe3o de um volume do tipo ",(0,r.jsx)(o.code,{children:"Bind"})," ou ",(0,r.jsx)(o.code,{children:"Volume"})," com um container, podemos inspecionar o container para ver os volumes associados a ele. Dentro da sa\xedda do comando ",(0,r.jsx)(o.code,{children:"docker inspect"}),", podemos ver a se\xe7\xe3o ",(0,r.jsx)(o.code,{children:"Mounts"})," que mostra os volumes associados ao container."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"docker inspect container_id\n"})}),"\n",(0,r.jsxs)(o.p,{children:["Podemos tamb\xe9m inspecionar um volume para ver os detalhes dele. O comando ",(0,r.jsx)(o.code,{children:"docker volume inspect"})," mostra informa\xe7\xf5es sobre um volume, como o nome, o driver, o ponto de montagem, etc."]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"docker volume inspect volume_name\n"})})]})}function m(e={}){const{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5162:(e,o,n)=>{n.d(o,{Z:()=>i});n(7294);var r=n(512);const a={tabItem:"tabItem_Ymn6"};var s=n(5893);function i(e){let{children:o,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n,children:o})}},4866:(e,o,n)=>{n.d(o,{Z:()=>y});var r=n(7294),a=n(512),s=n(2466),i=n(6550),t=n(469),l=n(1980),d=n(7392),c=n(812);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:o}=e;return!!o&&"object"==typeof o&&"value"in o}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:o,children:n}=e;return(0,r.useMemo)((()=>{const e=o??function(e){return u(e).map((e=>{let{props:{value:o,label:n,attributes:r,default:a}}=e;return{value:o,label:n,attributes:r,default:a}}))}(n);return function(e){const o=(0,d.l)(e,((e,o)=>e.value===o.value));if(o.length>0)throw new Error(`Docusaurus error: Duplicate values "${o.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[o,n])}function p(e){let{value:o,tabValues:n}=e;return n.some((e=>e.value===o))}function h(e){let{queryString:o=!1,groupId:n}=e;const a=(0,i.k6)(),s=function(e){let{queryString:o=!1,groupId:n}=e;if("string"==typeof o)return o;if(!1===o)return null;if(!0===o&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:o,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const o=new URLSearchParams(a.location.search);o.set(s,e),a.replace({...a.location,search:o.toString()})}),[s,a])]}function v(e){const{defaultValue:o,queryString:n=!1,groupId:a}=e,s=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:o,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(o){if(!p({value:o,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${o}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return o}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:s}))),[d,u]=h({queryString:n,groupId:a}),[v,x]=function(e){let{groupId:o}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(o),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),f=(()=>{const e=d??v;return p({value:e,tabValues:s})?e:null})();(0,t.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(5893);function b(e){let{className:o,block:n,selectedValue:r,selectValue:i,tabValues:t}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const o=e.currentTarget,n=l.indexOf(o),a=t[n].value;a!==r&&(d(o),i(a))},u=e=>{let o=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;o=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;o=l[n]??l[l.length-1];break}}o?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},o),children:t.map((e=>{let{value:o,label:n,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===o?0:-1,"aria-selected":r===o,ref:e=>l.push(e),onKeyDown:u,onClick:c,...s,className:(0,a.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===o}),children:n??o},o)}))})}function g(e){let{lazy:o,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(o){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,o)=>(0,r.cloneElement)(e,{key:o,hidden:e.props.value!==a})))})}function k(e){const o=v(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,j.jsx)(b,{...o,...e}),(0,j.jsx)(g,{...o,...e})]})}function y(e){const o=(0,x.Z)();return(0,j.jsx)(k,{...e,children:u(e.children)},String(o))}},4985:(e,o,n)=>{n.d(o,{Z:()=>a});n(7294);var r=n(5893);function a(e){let{children:o,fontSize:n="15px",color:a="#999"}=e;return(0,r.jsx)("div",{style:{textAlign:"center",fontSize:n,color:a},children:o})}},8661:(e,o,n)=>{n.d(o,{Z:()=>r});const r=n.p+"assets/images/img-types-of-mounts-volume-c4c8705c254de3a614bda526ba775cc8.png"},1151:(e,o,n)=>{n.d(o,{Z:()=>t,a:()=>i});var r=n(7294);const a={},s=r.createContext(a);function i(e){const o=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);