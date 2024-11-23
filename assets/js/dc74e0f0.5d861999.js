"use strict";(self.webpackChunkcode=self.webpackChunkcode||[]).push([[784],{2132:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"pick-2024/kubernetes/day2/index","title":"Day 2","description":"Sum\xe1rio","source":"@site/docs/cursos/pick-2024/kubernetes/day2/index.md","sourceDirName":"pick-2024/kubernetes/day2","slug":"/pick-2024/kubernetes/day2/","permalink":"/cursos/pick-2024/kubernetes/day2/","draft":false,"unlisted":false,"editUrl":"https://github.com/lucasbaccan/code/tree/master/docs/cursos/pick-2024/kubernetes/day2/index.md","tags":[],"version":"current","lastUpdatedBy":"Lucas Elias Baccan","lastUpdatedAt":1732372446000,"frontMatter":{"id":"index","title":"Day 2","hide_title":false,"hide_table_of_contents":false,"sidebar_label":"Day 2"},"sidebar":"docs","previous":{"title":"Day 1","permalink":"/cursos/pick-2024/kubernetes/day1/"},"next":{"title":"Day 3","permalink":"/cursos/pick-2024/kubernetes/day3/"}}');var s=n(4848),r=n(8453);n(2890);const a={id:"index",title:"Day 2",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Day 2"},d=void 0,c={},l=[{value:"Sum\xe1rio",id:"sum\xe1rio",level:2},{value:"Dia 2",id:"dia-2",level:2},{value:"O que \xe9 um Pod?",id:"o-que-\xe9-um-pod",level:3},{value:"<code>kubectl get pods</code> e <code>kubectl describe pods</code>",id:"kubectl-get-pods-e-kubectl-describe-pods",level:3},{value:"<code>kubectl attach</code> e <code>kubectl exec</code>",id:"kubectl-attach-e-kubectl-exec",level:3},{value:"Criando o nosso primeiro pod multi container utilizando um manifesto",id:"criando-o-nosso-primeiro-pod-multi-container-utilizando-um-manifesto",level:3},{value:"Limitando o consumo de recursos de CPU e Mem\xf3ria",id:"limitando-o-consumo-de-recursos-de-cpu-e-mem\xf3ria",level:3},{value:"Configurando o nosso primeiro volume EmptyDir",id:"configurando-o-nosso-primeiro-volume-emptydir",level:3},{value:"Desafio",id:"desafio",level:2},{value:"Objetivos",id:"objetivos",level:3},{value:"Solu\xe7\xe3o",id:"solu\xe7\xe3o",level:3}];function t(e){const o={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h2,{id:"sum\xe1rio",children:"Sum\xe1rio"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"\ud83c\udfa5 Intro Day-2 - 01:15"}),"\n",(0,s.jsx)(o.li,{children:"\ud83c\udfa5 O que \xe9 um Pod? - 05:09"}),"\n",(0,s.jsx)(o.li,{children:"\ud83c\udfa5 Os sensacionais kubectl get pods e o kubectl describe pods - 14:56"}),"\n",(0,s.jsx)(o.li,{children:"\ud83c\udfa5 Conhecendo o kubectl attach e o kubectl exec - 25:58"}),"\n",(0,s.jsx)(o.li,{children:"\ud83c\udfa5 Criando o nosso primeiro pod multi container utilizando um manifesto - 21:47"}),"\n",(0,s.jsx)(o.li,{children:"\ud83c\udfa5 Limitando o consumo de recursos de CPU e Mem\xf3ria - 21:15"}),"\n",(0,s.jsx)(o.li,{children:"\ud83c\udfa5 Configurando o nosso primeiro volume EmptyDir - 16:00"}),"\n",(0,s.jsx)(o.li,{children:"\ud83c\udfa5 Encerramento do Day-2 - 02:43"}),"\n",(0,s.jsx)(o.li,{children:"\ud83c\udfa5 Li\xe7\xe3o de casa - 01:44"}),"\n",(0,s.jsx)(o.li,{children:"\ud83d\udcd6 Leitura complementar do Day-2"}),"\n",(0,s.jsx)(o.li,{children:"\ud83d\udcd6 Download da leitura complementar do Day-2"}),"\n",(0,s.jsx)(o.li,{children:"\ud83d\udcdd Exame do Day-2 - 8 quest\xf5es"}),"\n",(0,s.jsx)(o.li,{children:"\ud83d\udcdd Desafio Day-2"}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Legenda"}),(0,s.jsx)(o.br,{}),"\n","\ud83c\udfa5 - Aula gravada\n\ud83d\udcd6 - Material complementar\n\ud83d\udcdd - Atividade"]}),"\n",(0,s.jsx)(o.h2,{id:"dia-2",children:"Dia 2"}),"\n",(0,s.jsx)(o.p,{children:"O dia 2 \xe9 o dia com foco em Pods, que s\xe3o a menor unidade de trabalho no Kubernetes. Neste dia, voc\xea aprender\xe1 a criar, gerenciar e monitorar Pods. Al\xe9m disso, voc\xea aprender\xe1 a limitar o consumo de recursos de CPU e mem\xf3ria, configurar volumes e criar Pods multicontainer."}),"\n",(0,s.jsx)(o.admonition,{type:"info",children:(0,s.jsxs)(o.p,{children:["Material complementar: ",(0,s.jsx)(o.a,{href:"https://livro.descomplicandokubernetes.com.br/pt/day-2/",children:"Leitura complementar do Day-2"})]})}),"\n",(0,s.jsx)(o.h3,{id:"o-que-\xe9-um-pod",children:"O que \xe9 um Pod?"}),"\n",(0,s.jsx)(o.p,{children:"O pod \xe9 a menor unidade de trabalho no Kubernetes. Ele \xe9 composto por um ou mais containers que compartilham recursos, como rede e armazenamento. Antigamente era comum ter um container por pod, mas hoje em dia \xe9 mais comum ter m\xfaltiplos containers por pod, como sidecar containers."}),"\n",(0,s.jsxs)(o.h3,{id:"kubectl-get-pods-e-kubectl-describe-pods",children:[(0,s.jsx)(o.code,{children:"kubectl get pods"})," e ",(0,s.jsx)(o.code,{children:"kubectl describe pods"})]}),"\n",(0,s.jsxs)(o.p,{children:["O ",(0,s.jsx)(o.code,{children:"kubectl get pods"})," \xe9 um dos comandos mais utilizados no dia a dia de um administrador de Kubernetes. Ele \xe9 utilizado para listar os pods em execu\xe7\xe3o no cluster. J\xe1 o ",(0,s.jsx)(o.code,{children:"kubectl describe pods"})," \xe9 utilizado para obter informa\xe7\xf5es detalhadas sobre um pod espec\xedfico."]}),"\n",(0,s.jsx)(o.p,{children:"Voc\xea pode listar todos os pods em execu\xe7\xe3o no cluster com o comando:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"kubectl get pods\n# ou\nkubectl get pods -A # para listar todos os pods em todos os namespaces\n"})}),"\n",(0,s.jsx)(o.p,{children:"Para obter informa\xe7\xf5es detalhadas sobre um pod espec\xedfico, voc\xea pode utilizar o comando:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"kubectl describe pod <nome-do-pod>\n"})}),"\n",(0,s.jsxs)(o.h3,{id:"kubectl-attach-e-kubectl-exec",children:[(0,s.jsx)(o.code,{children:"kubectl attach"})," e ",(0,s.jsx)(o.code,{children:"kubectl exec"})]}),"\n",(0,s.jsxs)(o.p,{children:["O ",(0,s.jsx)(o.code,{children:"kubectl attach"})," \xe9 utilizado para anexar um terminal a um pod em execu\xe7\xe3o. J\xe1 o ",(0,s.jsx)(o.code,{children:"kubectl exec"})," \xe9 utilizado para executar um comando em um pod em execu\xe7\xe3o."]}),"\n",(0,s.jsx)(o.p,{children:"Para anexar um terminal a um pod em execu\xe7\xe3o, voc\xea pode utilizar o comando:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"kubectl attach -it <nome-do-pod>\n"})}),"\n",(0,s.jsx)(o.p,{children:"E para executar um comando em um pod em execu\xe7\xe3o, voc\xea pode utilizar o comando:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"kubectl exec -it <nome-do-pod> -- <comando>\n"})}),"\n",(0,s.jsx)(o.h3,{id:"criando-o-nosso-primeiro-pod-multi-container-utilizando-um-manifesto",children:"Criando o nosso primeiro pod multi container utilizando um manifesto"}),"\n",(0,s.jsxs)(o.p,{children:["Vamos primeiro criar um arquivo ",(0,s.jsx)(o.code,{children:"yaml"})," de cria\xe7\xe3o de pod, utilize o comando:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"\tkubectl run girus --image nginx --dry-run=client -o yaml > pod.yaml\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Agora, vamos adicionar um segundo container ao pod, edite o arquivo ",(0,s.jsx)(o.code,{children:"pod.yaml"})," e adicione o seguinte trecho:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    run: girus\n  name: girus\nspec:\n  containers:\n    - image: nginx\n      name: nginx\n      resources: {}\n    - image: httpd\n      name: apache\n      resources: {}\n  dnsPolicy: ClusterFirst\n  restartPolicy: Always\n"})}),"\n",(0,s.jsx)(o.p,{children:"E ent\xe3o, crie o pod com o comando:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"kubectl apply -f pod.yaml\n"})}),"\n",(0,s.jsx)(o.p,{children:"Caso queira verificar se o pod foi criado com sucesso, utilize o comando:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"kubectl get pods\n"})}),"\n",(0,s.jsx)(o.p,{children:"Se quiser verificar os detalhes do pod, utilize o comando:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"kubectl describe pod girus -c nginx\n# ou\nkubectl describe pod girus -c apache\n"})}),"\n",(0,s.jsx)(o.h3,{id:"limitando-o-consumo-de-recursos-de-cpu-e-mem\xf3ria",children:"Limitando o consumo de recursos de CPU e Mem\xf3ria"}),"\n",(0,s.jsxs)(o.p,{children:["Para limitar o consumo de recursos de CPU e mem\xf3ria de um pod, voc\xea pode adicionar as seguintes configura\xe7\xf5es ao arquivo ",(0,s.jsx)(o.code,{children:"yaml"})," do pod:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    run: girus\n  name: girus\nspec:\n  containers:\n    - image: nginx\n      name: nginx\n      resources:\n        limits:\n          cpu: "500m"\n          memory: "256Mi"\n        requests:\n          cpu: "200m"\n          memory: "128Mi"\n  dnsPolicy: ClusterFirst\n  restartPolicy: Always\n'})}),"\n",(0,s.jsxs)(o.p,{children:["A tag ",(0,s.jsx)(o.code,{children:"resources"})," \xe9 utilizada para definir os limites e as requisi\xe7\xf5es de recursos de CPU e mem\xf3ria do pod. A tag ",(0,s.jsx)(o.code,{children:"limits"})," \xe9 utilizada para definir os limites m\xe1ximos de recursos que o pod pode consumir, enquanto a tag ",(0,s.jsx)(o.code,{children:"requests"})," \xe9 utilizada para definir os recursos m\xednimos que o pod precisa para funcionar corretamente."]}),"\n",(0,s.jsx)(o.h3,{id:"configurando-o-nosso-primeiro-volume-emptydir",children:"Configurando o nosso primeiro volume EmptyDir"}),"\n",(0,s.jsxs)(o.p,{children:["Para configurar um volume ",(0,s.jsx)(o.code,{children:"EmptyDir"})," em um pod, voc\xea pode adicionar a seguinte configura\xe7\xe3o ao arquivo ",(0,s.jsx)(o.code,{children:"yaml"})," do pod:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    run: girus\n  name: girus\nspec:\n  containers:\n    - image: nginx\n      name: girus\n      volumeMounts:\n        - mountPath: /giropops\n          name: empty-dir-volume-girus\n      resources:\n        limits:\n          cpu: "1"\n          memory: "1Gi"\n        requests:\n          cpu: "0.5"\n          memory: "500Mi"\n  dnsPolicy: ClusterFirst\n  restartPolicy: Always\n  volumes:\n    - name: empty-dir-volume-girus\n      emptyDir:\n        sizeLimit: 256Mi\n'})}),"\n",(0,s.jsxs)(o.p,{children:["A tag ",(0,s.jsx)(o.code,{children:"volumes"})," \xe9 utilizada para definir os volumes que ser\xe3o montados no pod. A tag ",(0,s.jsx)(o.code,{children:"volumeMounts"})," \xe9 utilizada para definir os pontos de montagem dos volumes nos containers do pod."]}),"\n",(0,s.jsxs)(o.p,{children:["O volume ",(0,s.jsx)(o.code,{children:"EmptyDir"})," \xe9 um volume tempor\xe1rio que \xe9 criado quando o pod \xe9 iniciado e \xe9 exclu\xeddo quando o pod \xe9 exclu\xeddo. Ele \xe9 \xfatil para compartilhar arquivos tempor\xe1rios entre os containers de um pod."]}),"\n",(0,s.jsxs)(o.p,{children:["Se o pod for exclu\xeddo, o volume ",(0,s.jsx)(o.code,{children:"EmptyDir"})," tamb\xe9m ser\xe1 exclu\xeddo, ent\xe3o tenha cuidado ao utilizar esse tipo de volume. Mas se voc\xea s\xf3 reiniar o pod, o volume ",(0,s.jsx)(o.code,{children:"EmptyDir"})," n\xe3o ser\xe1 exclu\xeddo."]}),"\n",(0,s.jsx)(o.h2,{id:"desafio",children:"Desafio"}),"\n",(0,s.jsx)(o.h3,{id:"objetivos",children:"Objetivos"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsx)(o.li,{children:"Corrija todos os erros encontrados e realize o deploy do Nginx utilizando o arquivo pod.yaml."}),"\n"]}),"\n",(0,s.jsx)(o.p,{children:"Voc\xea tem 12 minutos!"}),"\n",(0,s.jsx)(o.p,{children:"Sua miss\xe3o \xe9 realizar o deploy do Nginx utilizando o arquivo pod.yaml."}),"\n",(0,s.jsx)(o.p,{children:"Ajuste os limites de consumo de recursos para que o pod seja deployado corretamente."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-yaml",children:'apiVersion: v1beta1\nkind: pods\nmetadata:\n  labels:\n    run: nginx-giropops\n    app: giropops-strigus\n  name: nginx_giropops\nspec:\n  containers:\n    - image: nginx\n      name: nginx_giropops\n      ports:\n        - containerPort: 80\n      resources:\n        limits:\n          memory:\n          cpu: "0.5"\n      requests:\n        memory: "4400MB"\n        cpu: "0,3"\n  dnsPolicy: ClusterSecond\n  restartPolicy: Always\n'})}),"\n",(0,s.jsx)(o.h3,{id:"solu\xe7\xe3o",children:"Solu\xe7\xe3o"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    run: nginx-giropops\n    app: giropops-strigus\n  name: nginx-giropops\nspec:\n  containers:\n    - image: nginx\n      name: nginx-giropops\n      ports:\n        - containerPort: 80\n      resources:\n        limits:\n          cpu: "500m"\n          memory: "500Mi"\n        requests:\n          cpu: "300m"\n          memory: "440Mi"\n  dnsPolicy: ClusterFirst\n  restartPolicy: Always\n'})})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},2890:(e,o,n)=>{n.d(o,{A:()=>r});n(6540);var i=n(5293),s=n(4848);function r(e){let{children:o,fontSize:n="15px",color:r="#999",bgColor:a=null,bgColorDark:d=null}=e;const{colorMode:c}=(0,i.G)(),l={textAlign:"center",fontSize:n,color:r,backgroundColor:"dark"===c?d:a};return console.log("Current color mode:",c),(0,s.jsx)("div",{style:l,children:o})}},8453:(e,o,n)=>{n.d(o,{R:()=>a,x:()=>d});var i=n(6540);const s={},r=i.createContext(s);function a(e){const o=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:o},e.children)}}}]);