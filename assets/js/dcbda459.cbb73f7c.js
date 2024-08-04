"use strict";(self.webpackChunkcode=self.webpackChunkcode||[]).push([[622],{7457:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>t});var o=a(5893),s=a(1151);a(4985);const l={id:"index",title:"Day 3",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Day 3"},i=void 0,r={id:"pick-2024/kubernets/day3/index",title:"Day 3",description:"Sum\xe1rio",source:"@site/docs/cursos/pick-2024/kubernets/day3/index.md",sourceDirName:"pick-2024/kubernets/day3",slug:"/pick-2024/kubernets/day3/",permalink:"/cursos/pick-2024/kubernets/day3/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucasbaccan/code/tree/master/docs/cursos/pick-2024/kubernets/day3/index.md",tags:[],version:"current",lastUpdatedBy:"Lucas Elias Baccan",lastUpdatedAt:1722796302e3,frontMatter:{id:"index",title:"Day 3",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Day 3"},sidebar:"docs",previous:{title:"Day 2",permalink:"/cursos/pick-2024/kubernets/day2/"},next:{title:"Day 4",permalink:"/cursos/pick-2024/kubernets/day4/"}},d={},t=[{value:"Sum\xe1rio",id:"sum\xe1rio",level:2},{value:"Dia 3",id:"dia-3",level:2},{value:"O que \xe9 um Deployment?",id:"o-que-\xe9-um-deployment",level:3},{value:"Criando um Deployment atrav\xe9s de um manifesto",id:"criando-um-deployment-atrav\xe9s-de-um-manifesto",level:3},{value:"Criando mais Deployments e vendo os detalhes",id:"criando-mais-deployments-e-vendo-os-detalhes",level:3},{value:"Como atualizar um Deployment?",id:"como-atualizar-um-deployment",level:3},{value:"Estrat\xe9gias de atualiza\xe7\xf5es de nossos Deployments",id:"estrat\xe9gias-de-atualiza\xe7\xf5es-de-nossos-deployments",level:3},{value:"Fazendo Rollback",id:"fazendo-rollback",level:3},{value:"Desafio",id:"desafio",level:2},{value:"Objetivos",id:"objetivos",level:3},{value:"Solu\xe7\xe3o",id:"solu\xe7\xe3o",level:3}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"sum\xe1rio",children:"Sum\xe1rio"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"\ud83c\udfa5 Intro Day-3 - 01:17"}),"\n",(0,o.jsx)(n.li,{children:"\ud83c\udfa5 O que \xe9 um Deployment? - 05:44"}),"\n",(0,o.jsx)(n.li,{children:"\ud83c\udfa5 Criando um Deployment atrav\xe9s de um manifesto - 14:36"}),"\n",(0,o.jsx)(n.li,{children:"\ud83c\udfa5 Criando mais Deployments e vendo os detalhes - 11:22"}),"\n",(0,o.jsx)(n.li,{children:"\ud83c\udfa5 Como atualizar um Deployment? - 10:06"}),"\n",(0,o.jsx)(n.li,{children:"\ud83c\udfa5 Estrat\xe9gias de atualiza\xe7\xf5es de nossos Deployments - 16:18"}),"\n",(0,o.jsx)(n.li,{children:"\ud83c\udfa5 Fazendo Rollback e conhecendo o comando Rollout - 16:23"}),"\n",(0,o.jsx)(n.li,{children:"\ud83c\udfa5 Encerramento Day-3 - 01:04"}),"\n",(0,o.jsx)(n.li,{children:"\ud83d\udcd6 Leitura complementar do Day-3 - 17:25"}),"\n",(0,o.jsx)(n.li,{children:"\ud83d\udcd6 Download da leitura complementar do Day-3"}),"\n",(0,o.jsx)(n.li,{children:"\ud83d\udcdd Desafio do Day-3"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Legenda"}),(0,o.jsx)(n.br,{}),"\n","\ud83c\udfa5 - Aula gravada\n\ud83d\udcd6 - Material complementar\n\ud83d\udcdd - Atividade"]}),"\n",(0,o.jsx)(n.h2,{id:"dia-3",children:"Dia 3"}),"\n",(0,o.jsx)(n.p,{children:"No dia 3, voc\xea aprender\xe1 sobre Deployments, que s\xe3o respons\xe1veis por gerenciar a implanta\xe7\xe3o de aplica\xe7\xf5es no Kubernetes. Voc\xea aprender\xe1 a criar, gerenciar e monitorar Deployments, al\xe9m de aprender a atualizar, fazer rollback e conhecer as estrat\xe9gias de atualiza\xe7\xf5es de Deployments."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Material complementar: ",(0,o.jsx)(n.a,{href:"https://livro.descomplicandokubernetes.com.br/pt/day-3/",children:"Leitura complementar do Day-3"})]})}),"\n",(0,o.jsx)(n.h3,{id:"o-que-\xe9-um-deployment",children:"O que \xe9 um Deployment?"}),"\n",(0,o.jsx)(n.p,{children:"O Deployment \xe9 um recurso do Kubernetes que \xe9 respons\xe1vel por gerenciar a implanta\xe7\xe3o de aplica\xe7\xf5es. Ele \xe9 respons\xe1vel por garantir que um conjunto de pods esteja sempre em execu\xe7\xe3o e dispon\xedvel para os usu\xe1rios."}),"\n",(0,o.jsx)(n.p,{children:"O Deployment permite que voc\xea defina o n\xfamero de r\xe9plicas de um pod, a estrat\xe9gia de atualiza\xe7\xe3o, o controle de falhas e o controle de vers\xe3o da aplica\xe7\xe3o."}),"\n",(0,o.jsx)(n.h3,{id:"criando-um-deployment-atrav\xe9s-de-um-manifesto",children:"Criando um Deployment atrav\xe9s de um manifesto"}),"\n",(0,o.jsx)(n.p,{children:"Para criar um Deployment atrav\xe9s de um manifesto, voc\xea precisa criar um arquivo YAML com a defini\xe7\xe3o do Deployment e aplicar o arquivo YAML no cluster."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="nginx-deployment.yaml"',children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: nginx-deployment\n  name: nginx-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx-deployment\n  strategy: {}\n  template:\n    metadata:\n      labels:\n        app: nginx-deployment\n    spec:\n      containers:\n        - name: nginx\n          image: nginx:latest\n          resources:\n            limits:\n              memory: "128Mi"\n              cpu: "500m"\n            requests:\n              memory: "64Mi"\n              cpu: "250m"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Para aplicar o arquivo YAML no cluster, voc\xea pode utilizar o comando:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f nginx-deployment.yaml\n"})}),"\n",(0,o.jsx)(n.p,{children:"Para listar os Deployments em execu\xe7\xe3o no cluster, voc\xea pode utilizar o comando:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl get deployments\n# ou\nkubectl get pods -l app=nginx-deployment\n# ou\nkubectl get replicasets -l app=nginx-deployment\n"})}),"\n",(0,o.jsx)(n.h3,{id:"criando-mais-deployments-e-vendo-os-detalhes",children:"Criando mais Deployments e vendo os detalhes"}),"\n",(0,o.jsxs)(n.p,{children:["Voc\xea consegue criar um deployment sem precisar criar um arquivo yaml, utilizando o comando ",(0,o.jsx)(n.code,{children:"kubectl create deployment <nome-do-deployment> --image=<nome-da-imagem>"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl create deployment nginx-deployment --image=nginx --replicas=3\n"})}),"\n",(0,o.jsx)(n.p,{children:"Para saber mais detalhes sobre um Deployment espec\xedfico, voc\xea pode utilizar o comando:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl describe deployment <nome-do-deployment>\n# exemplo\nkubectl describe deployment nginx-deployment\n"})}),"\n",(0,o.jsx)(n.h3,{id:"como-atualizar-um-deployment",children:"Como atualizar um Deployment?"}),"\n",(0,o.jsx)(n.p,{children:"Para atualizar um Deployment, voc\xea pode editar o arquivo YAML do Deployment e aplicar as altera\xe7\xf5es no cluster."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f nginx-deployment.yaml\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Ou voc\xea pode utilizar o comando ",(0,o.jsx)(n.code,{children:"kubectl set image deployment/<nome-do-deployment> <container>=<nova-imagem>"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl set image deployment/nginx-deployment nginx=nginx:1.19\n"})}),"\n",(0,o.jsx)(n.h3,{id:"estrat\xe9gias-de-atualiza\xe7\xf5es-de-nossos-deployments",children:"Estrat\xe9gias de atualiza\xe7\xf5es de nossos Deployments"}),"\n",(0,o.jsxs)(n.p,{children:["O Kubernetes oferece diferentes estrat\xe9gias de atualiza\xe7\xf5es de Deployments, como a estrat\xe9gia ",(0,o.jsx)(n.code,{children:"Recreate"})," e ",(0,o.jsx)(n.code,{children:"RollingUpdate"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Recreate"}),": Nessa estrat\xe9gia, o Kubernetes remove todos os pods antigos e cria novos pods com a nova vers\xe3o da aplica\xe7\xe3o. Essa estrat\xe9gia \xe9 mais r\xe1pida, mas pode causar indisponibilidade da aplica\xe7\xe3o durante a atualiza\xe7\xe3o."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"RollingUpdate"}),": Nessa estrat\xe9gia, o Kubernetes atualiza os pods gradualmente, um a um, garantindo que a aplica\xe7\xe3o esteja sempre dispon\xedvel. O termo ",(0,o.jsx)(n.em,{children:"Surge"})," \xe9 utilizado para definir o n\xfamero de pods que ser\xe3o criados antes de remover os pods antigos, e o termo ",(0,o.jsx)(n.em,{children:"MaxUnavailable"})," \xe9 utilizado para definir o n\xfamero m\xe1ximo de pods que podem ficar indispon\xedveis durante a atualiza\xe7\xe3o."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Voc\xea consegue ver como est\xe1 a atualiza\xe7\xe3o do seu deployment utilizando o comando ",(0,o.jsx)(n.code,{children:"kubectl rollout status deployment/<nome-do-deployment>"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl rollout status deployment/nginx-deployment\n"})}),"\n",(0,o.jsx)(n.h3,{id:"fazendo-rollback",children:"Fazendo Rollback"}),"\n",(0,o.jsxs)(n.p,{children:["Para fazer um rollback de um Deployment, voc\xea pode utilizar o comando ",(0,o.jsx)(n.code,{children:"kubectl rollout undo deployment/<nome-do-deployment>"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl rollout undo deployment/nginx-deployment\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Voc\xea pode ver o hist\xf3rico de atualiza\xe7\xf5es de um Deployment utilizando o comando ",(0,o.jsx)(n.code,{children:"kubectl rollout history deployment/<nome-do-deployment>"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl rollout history deployment/nginx-deployment\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Da mesma forma, voc\xea pode fazer um rollback para uma revis\xe3o espec\xedfica utilizando o comando ",(0,o.jsx)(n.code,{children:"kubectl rollout undo deployment/<nome-do-deployment> --to-revision=<n\xfamero-da-revis\xe3o>"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl rollout undo deployment/nginx-deployment --to-revision=2\n"})}),"\n",(0,o.jsx)(n.p,{children:"E se voc\xea n\xe3o sabe qual revis\xe3o deseja fazer o rollback, voc\xea pode ver o hist\xf3rico de revis\xf5es e escolher a revis\xe3o desejada para verificar as altera\xe7\xf5es feitas."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"kubectl rollout history deployment/nginx-deployment --revision=2\n"})}),"\n",(0,o.jsx)(n.h2,{id:"desafio",children:"Desafio"}),"\n",(0,o.jsx)(n.h3,{id:"objetivos",children:"Objetivos"}),"\n",(0,o.jsx)(n.p,{children:"O nosso objetivo aqui \xe9 fazer a instala\xe7\xe3o do Nginx!"}),"\n",(0,o.jsx)(n.p,{children:"Aten\xe7\xe3o! \ud83d\udce2"}),"\n",(0,o.jsx)(n.p,{children:"Corrija todos os erros encontrados e realize o deploy do Nginx utilizando o arquivo deployment.yaml."}),"\n",(0,o.jsx)(n.p,{children:"Tarefas"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Utilize o arquivo /root/deployment.yaml para realizar o deploy do nosso Deployment;"}),"\n",(0,o.jsx)(n.li,{children:"Corrija todos os erros;"}),"\n",(0,o.jsxs)(n.li,{children:["Configure o limite de utiliza\xe7\xe3o de recursos da seguinte maneira:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Requests:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"64Mi de Mem\xf3ria;"}),"\n",(0,o.jsx)(n.li,{children:"0.1 de CPU;"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Limits:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"128 Mi de Mem\xf3ria;"}),"\n",(0,o.jsx)(n.li,{children:"0.3 de CPU;"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Use a estrat\xe9gia de atualiza\xe7\xe3o do Deployment que atualiza todos os pods de uma vez;"}),"\n",(0,o.jsx)(n.li,{children:"A vers\xe3o do Nginx deve ser a 1.16.0."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="deployment.yaml"',children:"apiVersion: app/v1\nkind: Deployment\nmetadata:\n  label:\n    app: nginx-girus\n    opa: sensacional-juvenal\nname: nginx-girus\nspecs:\n  replicas: 5\n    selector:\n      matchLabels:\n      app: nginx-girus\n  strategies:\n    type: recreate\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 2\n  strategies: {}\n  replicas: 2\n  template:\n    metadata:\n    label:\n      app: nginx\n    specs:\n      containers:\n      - image: nginx 1.15.0\n        name: nginx\n        resource: {}\n"})}),"\n",(0,o.jsx)(n.h3,{id:"solu\xe7\xe3o",children:"Solu\xe7\xe3o"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: nginx-girus\n    opa: sensacional-juvenal\n  name: nginx-girus\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: nginx-girus\n  strategy:\n    type: Recreate\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n        - image: nginx:1.16.0\n          name: nginx\n          resources:\n            limits:\n              memory: "128Mi"\n              cpu: "300m"\n            requests:\n              memory: "64Mi"\n              cpu: "100m"\n'})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},4985:(e,n,a)=>{a.d(n,{Z:()=>s});a(7294);var o=a(5893);function s(e){let{children:n,fontSize:a="15px",color:s="#999"}=e;return(0,o.jsx)("div",{style:{textAlign:"center",fontSize:a,color:s},children:n})}},1151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>i});var o=a(7294);const s={},l=o.createContext(s);function i(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);