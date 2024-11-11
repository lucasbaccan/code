"use strict";(self.webpackChunkcode=self.webpackChunkcode||[]).push([[8177],{4923:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=r(5893),n=r(1151);r(4985);const a={id:"index",title:"Day 9",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Day 9"},t=void 0,i={id:"pick-2024/kubernets/day9/index",title:"Day 9",description:"Sum\xe1rio",source:"@site/docs/cursos/pick-2024/kubernets/day9/index.md",sourceDirName:"pick-2024/kubernets/day9",slug:"/pick-2024/kubernets/day9/",permalink:"/cursos/pick-2024/kubernets/day9/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucasbaccan/code/tree/master/docs/cursos/pick-2024/kubernets/day9/index.md",tags:[],version:"current",lastUpdatedBy:"Lucas Elias Baccan",lastUpdatedAt:1731361657e3,frontMatter:{id:"index",title:"Day 9",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Day 9"},sidebar:"docs",previous:{title:"Day 8",permalink:"/cursos/pick-2024/kubernets/day8/"},next:{title:"Day 10",permalink:"/cursos/pick-2024/kubernets/day10/"}},c={},l=[{value:"Sum\xe1rio",id:"sum\xe1rio",level:2},{value:"Dia 9",id:"dia-9",level:2},{value:"Prometeus Operator e Kube-Prometheus",id:"prometeus-operator-e-kube-prometheus",level:3},{value:"EKSCTL e AWS CLI",id:"eksctl-e-aws-cli",level:3},{value:"Kube-Prometheus",id:"kube-prometheus",level:3},{value:"Acessando o Grafana/Prometheus/Alertmanager",id:"acessando-o-grafanaprometheusalertmanager",level:3},{value:"ServiceMonitor",id:"servicemonitor",level:3},{value:"Custom Resource Definitions (CRDs)",id:"custom-resource-definitions-crds",level:3},{value:"Desafio do Dia 9",id:"desafio-do-dia-9",level:2},{value:"Objetivos 1",id:"objetivos-1",level:3},{value:"Solu\xe7\xe3o 1",id:"solu\xe7\xe3o-1",level:3},{value:"Objetivos 2",id:"objetivos-2",level:3},{value:"Solu\xe7\xe3o 2",id:"solu\xe7\xe3o-2",level:3}];function u(e){const o={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h2,{id:"sum\xe1rio",children:"Sum\xe1rio"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"\ud83c\udfa5 Intro - Day-9 - 02:07"}),"\n",(0,s.jsx)(o.li,{children:"\ud83d\udcd6 O que iremos ver hoje?"}),"\n",(0,s.jsx)(o.li,{children:"\ud83c\udfa5 O que \xe9 o Prometheus Operator e o Kube-Prometheus - 06:58"}),"\n",(0,s.jsx)(o.li,{children:"\ud83d\udcd6 O que \xe9 o kube-prometheus?"}),"\n",(0,s.jsx)(o.li,{children:"\ud83c\udfa5 Instalando o EKSCTL e o AWS CLI - 11:32"}),"\n",(0,s.jsx)(o.li,{children:"\ud83c\udfa5 Instalando e Configurando o EKS - 04:27"}),"\n",(0,s.jsx)(o.li,{children:"\ud83d\udcd6 Instalando o nosso cluster EKS"}),"\n",(0,s.jsx)(o.li,{children:"\ud83c\udfa5 Instalando o Kube-Prometheus - 15:46"}),"\n",(0,s.jsx)(o.li,{children:"\ud83d\udcd6 Instalando o Kube-Prometheus"}),"\n",(0,s.jsx)(o.li,{children:"\ud83c\udfa5 Acessando o nosso Grafana e os Dashboards - 08:54"}),"\n",(0,s.jsx)(o.li,{children:"\ud83d\udcd6 Acessando o nosso Grafana"}),"\n",(0,s.jsx)(o.li,{children:"\ud83c\udfa5 Acessando o nosso Prometheus e o Alertmanager - 08:20"}),"\n",(0,s.jsx)(o.li,{children:"\ud83c\udfa5 O que \xe9 um ServiceMonitor? - 15:31"}),"\n",(0,s.jsx)(o.li,{children:"\ud83d\udcd6 Os ServiceMonitors"}),"\n",(0,s.jsx)(o.li,{children:"\ud83c\udfa5 Encerramento do Day-9 - 01:27"}),"\n",(0,s.jsx)(o.li,{children:"\ud83d\udcdd Desafio do Day-9"}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Legenda"}),(0,s.jsx)(o.br,{}),"\n","\ud83c\udfa5 - Aula gravada\n\ud83d\udcd6 - Material complementar\n\ud83d\udcdd - Atividade"]}),"\n",(0,s.jsx)(o.h2,{id:"dia-9",children:"Dia 9"}),"\n",(0,s.jsx)(o.p,{children:"No dia 9, vamos falar sobre o Prometheus Operator e o Kube-Prometheus. Vamos entender o que \xe9 o kube-prometheus e como podemos instalar ele em nosso cluster EKS. Vamos aprender a instalar o EKSCTL e o AWS CLI, instalar e configurar o EKS, instalar o kube-prometheus, acessar o Grafana e os Dashboards, acessar o Prometheus e o Alertmanager e entender o que \xe9 um ServiceMonitor."}),"\n",(0,s.jsx)(o.p,{children:"Vimos tamb\xe9m o que \xe9 um Custom Resource Definition (CRD) e como podemos criar um ServiceMonitor para monitorar os servi\xe7os que est\xe3o rodando em nosso cluster."}),"\n",(0,s.jsx)(o.h3,{id:"prometeus-operator-e-kube-prometheus",children:"Prometeus Operator e Kube-Prometheus"}),"\n",(0,s.jsxs)(o.p,{children:["O ",(0,s.jsx)(o.a,{href:"https://github.com/prometheus-operator/prometheus-operator",children:"Prometheus Operator"})," \xe9 um projeto que visa simplificar a instala\xe7\xe3o e a opera\xe7\xe3o do Prometheus, Alertmanager e Grafana. O ",(0,s.jsx)(o.a,{href:"https://github.com/prometheus-operator/kube-prometheus",children:"Kube-Prometheus"})," \xe9 um projeto que visa simplificar a instala\xe7\xe3o e a opera\xe7\xe3o do Prometheus Operator e dos componentes do Prometheus."]}),"\n",(0,s.jsx)(o.h3,{id:"eksctl-e-aws-cli",children:"EKSCTL e AWS CLI"}),"\n",(0,s.jsxs)(o.p,{children:["O ",(0,s.jsx)(o.a,{href:"https://eksctl.io/",children:"EKSCTL"})," \xe9 uma ferramenta de linha de comando que simplifica a cria\xe7\xe3o, a configura\xe7\xe3o e a gest\xe3o de clusters EKS. O ",(0,s.jsx)(o.a,{href:"https://aws.amazon.com/pt/cli/",children:"AWS CLI"})," \xe9 uma ferramenta de linha de comando que permite interagir com os servi\xe7os da AWS."]}),"\n",(0,s.jsx)(o.h3,{id:"kube-prometheus",children:"Kube-Prometheus"}),"\n",(0,s.jsx)(o.p,{children:"Vamos instalar o kube-prometheus em nosso cluster. O kube-prometheus \xe9 um conjunto de arquivos YAML que instala o Prometheus Operator e os componentes do Prometheus em nosso cluster."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"git clone https://github.com/prometheus-operator/kube-prometheus\ncd kube-prometheus\nkubectl create -f manifests/setup\nkubectl apply -f manifests/\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Para saber se deu tudo certo, podemos executar o comando ",(0,s.jsx)(o.code,{children:"kubectl get pods -n monitoring"}),"."]}),"\n",(0,s.jsx)(o.h3,{id:"acessando-o-grafanaprometheusalertmanager",children:"Acessando o Grafana/Prometheus/Alertmanager"}),"\n",(0,s.jsxs)(o.p,{children:["A forma correta seria criar um Ingress para acessar o Grafana, Prometheus e Alertmanager. Mas, para simplificar, podemos usar o ",(0,s.jsx)(o.code,{children:"kubectl port-forward"})," para acessar esses servi\xe7os."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"# Grafana - http://localhost:13000\nkubectl port-forward -n monitoring svc/grafana 13000:3000\n# Prometheus - http://localhost:19090\nkubectl port-forward -n monitoring svc/prometheus-k8s 19090:9090\n# Alertmanager - http://localhost:19093\nkubectl port-forward -n monitoring svc/alertmanager-main 19093:9093\n"})}),"\n",(0,s.jsx)(o.h3,{id:"servicemonitor",children:"ServiceMonitor"}),"\n",(0,s.jsx)(o.p,{children:"O ServiceMonitor \xe9 um recurso do Prometheus Operator que permite monitorar automaticamente os servi\xe7os que est\xe3o rodando em nosso cluster. O ServiceMonitor \xe9 um recurso do Kubernetes que define quais servi\xe7os devem ser monitorados pelo Prometheus."}),"\n",(0,s.jsx)(o.p,{children:"Exemplo do ServiceMonitor do Grafana:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"kubectl get servicemonitor -n monitoring grafana -o yaml\n"})}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-yaml",metastring:'title="grafana-servicemonitor.yaml"',children:'apiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  # Lista de labels que v\xe3o ser usadas para identificar o ServiceMonitor\n  labels:\n    app.kubernetes.io/component: grafana\n    app.kubernetes.io/name: grafana\n    app.kubernetes.io/part-of: kube-prometheus\n    app.kubernetes.io/version: 11.1.0\n  name: grafana\n  namespace: monitoring\n  resourceVersion: "3766336"\n  uid: 82ee0eed-f074-4d60-b7ea-38828a8f1f95\nspec:\n  # Os endpoints que v\xe3o ser monitorados\n  endpoints:\n  - interval: 15s\n    port: http # Porta que o servi\xe7o est\xe1 rodando\n  selector:\n    # Seletor para identificar o servi\xe7o que vai ser monitorado\n    matchLabels:\n      app.kubernetes.io/name: grafana\n'})}),"\n",(0,s.jsx)(o.p,{children:"Ao criar um ServiceMonitor, o Prometheus Operator ir\xe1 automaticamente configurar o Prometheus para monitorar o servi\xe7o que est\xe1 rodando em nosso cluster, criando o target automaticamente."}),"\n",(0,s.jsx)(o.h3,{id:"custom-resource-definitions-crds",children:"Custom Resource Definitions (CRDs)"}),"\n",(0,s.jsx)(o.p,{children:"O Prometheus Operator utiliza Custom Resource Definitions (CRDs) para definir os recursos que ele gerencia. Os CRDs s\xe3o extens\xf5es do Kubernetes que permitem definir novos tipos de recursos."}),"\n",(0,s.jsx)(o.p,{children:"Exemplo de um CRD do Prometheus Operator:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-yaml",metastring:'title="prometheus.yaml"',children:"apiVersion: monitoring.coreos.com/v1\nkind: Prometheus # Tipo do recurso (CRD)\nmetadata:\n  name: prometheus\n  namespace: monitoring\nspec:\n  alerting:\n    alertmanagers:\n    - name: alertmanager-main\n      namespace: monitoring\n      port: web\n  baseImage: quay.io/prometheus/prometheus\n  nodeSelector:\n    kubernetes.io/os: linux\n  replicas: 2\n  resources:\n    requests:\n      memory: 400Mi\n  ruleSelector:\n    matchLabels:\n      role: prometheus\n  securityContext:\n    fsGroup: 2000\n  serviceAccountName: prometheus\n  serviceMonitorSelector:\n    matchLabels:\n      release: prometheus\n  version: v2.28.1\n"})}),"\n",(0,s.jsx)(o.h2,{id:"desafio-do-dia-9",children:"Desafio do Dia 9"}),"\n",(0,s.jsx)(o.h3,{id:"objetivos-1",children:"Objetivos 1"}),"\n",(0,s.jsx)(o.p,{children:"Use o terminal para realizar o deploy do nosso Kube-Prometheus no cluster Kubernetes."}),"\n",(0,s.jsx)(o.h3,{id:"solu\xe7\xe3o-1",children:"Solu\xe7\xe3o 1"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"git clone https://github.com/prometheus-operator/kube-prometheus\ncd kube-prometheus\nkubectl create -f manifests/setup\nkubectl apply -f manifests/\n"})}),"\n",(0,s.jsx)(o.h3,{id:"objetivos-2",children:"Objetivos 2"}),"\n",(0,s.jsx)(o.p,{children:"Quando voc\xea logar pela primeira vez com o usu\xe1rio admin, mude a senha imediatamente."}),"\n",(0,s.jsx)(o.p,{children:"Durante esse desafio, voc\xea ter\xe1 que usar o 'kubectl port-forward' para deixar o grafana dispon\xedvel na porta 33000"}),"\n",(0,s.jsx)(o.p,{children:'Um conselho importante, voc\xea vai precisar utilizar o par\xe2metro "--address=0.0.0.0" para que seja poss\xedvel voc\xea acessar o Grafana atrav\xe9s do navegador.'}),"\n",(0,s.jsx)(o.p,{children:"Explore os dashboards, e divirta-se!"}),"\n",(0,s.jsx)(o.p,{children:"Quando terminar, clique em Check!"}),"\n",(0,s.jsx)(o.h3,{id:"solu\xe7\xe3o-2",children:"Solu\xe7\xe3o 2"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-bash",children:"kubectl port-forward -n monitoring svc/grafana 33000:3000 --address=0.0.0.0\n"})})]})}function d(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},4985:(e,o,r)=>{r.d(o,{Z:()=>n});r(7294);var s=r(5893);function n(e){let{children:o,fontSize:r="15px",color:n="#999"}=e;return(0,s.jsx)("div",{style:{textAlign:"center",fontSize:r,color:n},children:o})}},1151:(e,o,r)=>{r.d(o,{Z:()=>i,a:()=>t});var s=r(7294);const n={},a=s.createContext(n);function t(e){const o=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),s.createElement(a.Provider,{value:o},e.children)}}}]);