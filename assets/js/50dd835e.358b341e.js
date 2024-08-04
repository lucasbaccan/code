"use strict";(self.webpackChunkcode=self.webpackChunkcode||[]).push([[8748],{7384:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>t,toc:()=>m});var r=o(5893),i=o(1151);o(4985);const s={id:"index",title:"Day 10",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Day 10"},a=void 0,t={id:"pick-2024/kubernets/day10/index",title:"Day 10",description:"Sum\xe1rio",source:"@site/docs/cursos/pick-2024/kubernets/day10/index.md",sourceDirName:"pick-2024/kubernets/day10",slug:"/pick-2024/kubernets/day10/",permalink:"/cursos/pick-2024/kubernets/day10/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucasbaccan/code/tree/master/docs/cursos/pick-2024/kubernets/day10/index.md",tags:[],version:"current",lastUpdatedBy:"Lucas Elias Baccan",lastUpdatedAt:1722798949e3,frontMatter:{id:"index",title:"Day 10",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Day 10"}},c={},m=[{value:"Sum\xe1rio",id:"sum\xe1rio",level:2},{value:"Dia 10",id:"dia-10",level:2},{value:"O que \xe9 um ServiceMonitor?",id:"o-que-\xe9-um-servicemonitor",level:3},{value:"Criando o nosso Deployment e Service no Kubernetes",id:"criando-o-nosso-deployment-e-service-no-kubernetes",level:3},{value:"Criando o nosso primeiro ServiceMonitor",id:"criando-o-nosso-primeiro-servicemonitor",level:3},{value:"Criando um novo pod e o nosso PodMonitor",id:"criando-um-novo-pod-e-o-nosso-podmonitor",level:3},{value:"Criando alertas no Prometheus e AlertManager atrav\xe9s do PrometheusRule",id:"criando-alertas-no-prometheus-e-alertmanager-atrav\xe9s-do-prometheusrule",level:3},{value:"Encerramento do Day-10",id:"encerramento-do-day-10",level:3}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"sum\xe1rio",children:"Sum\xe1rio"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 Intro Day-10 - 02:32"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 O que \xe9 um ServiceMonitor? - 03:41"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udcd6 Os ServicesMonitors"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 Criando o nosso Deployment e Service no Kubernetes - 23:01"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udcd6 Criando o nosso Deployment e Service no Kubernetes"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 Criando o nosso primeiro ServiceMonitor - 11:29"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udcd6 Criando o nosso primeiro ServiceMonitor"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 Criando um novo pod e o nosso PodMonitor - 13:39"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udcd6 Criando um novo pod e o nosso PodMonitor"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 Criando alertas no Prometheus e AlertManager atrav\xe9s do PrometheusRule - 22:04"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udcd6 Criando alertas no Prometheus e AlertManager atrav\xe9s do PrometheusRule"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 Encerramento do Day-10 - 02:26"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udf99\ufe0f Mentoria ao vivo - Carreira, open source e qualidade de vida - Carlos Panato - 02:15:54"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udf99\ufe0f Sess\xe3o ao vivo PICK - Jeferson Fernando - 04/05 - 01:16:52"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Legenda"}),(0,r.jsx)(n.br,{}),"\n","\ud83c\udfa5 - Aula gravada\n\ud83c\udf99\ufe0f - Aula ao Vivo\n\ud83d\udcd6 - Material complementar"]}),"\n",(0,r.jsx)(n.h2,{id:"dia-10",children:"Dia 10"}),"\n",(0,r.jsx)(n.p,{children:"No dia 10, vamos falar sobre ServiceMonitors, Deployment, Service, PodMonitor e PrometheusRule. Vamos entender o que \xe9 um ServiceMonitor, como criar um Deployment e um Service no Kubernetes, como criar um ServiceMonitor, como criar um novo pod e um PodMonitor e como criar alertas no Prometheus e AlertManager atrav\xe9s do PrometheusRule."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Material complementar: ",(0,r.jsx)(n.a,{href:"https://livro.descomplicandokubernetes.com.br/pt/day-10/",children:"Leitura complementar do Day-10"})]})}),"\n",(0,r.jsx)(n.h3,{id:"o-que-\xe9-um-servicemonitor",children:"O que \xe9 um ServiceMonitor?"}),"\n",(0,r.jsx)(n.p,{children:"O ServiceMonitor \xe9 um recurso do Prometheus Operator que permite monitorar os servi\xe7os que est\xe3o rodando em nosso cluster. Com o ServiceMonitor, podemos definir regras de monitoramento para os servi\xe7os que est\xe3o rodando em nosso cluster."}),"\n",(0,r.jsx)(n.h3,{id:"criando-o-nosso-deployment-e-service-no-kubernetes",children:"Criando o nosso Deployment e Service no Kubernetes"}),"\n",(0,r.jsx)(n.p,{children:"Vamos criar o nosso Deployment e Service no Kubernetes. O Deployment \xe9 um recurso do Kubernetes que permite definir como os pods devem ser criados e gerenciados. O Service \xe9 um recurso do Kubernetes que permite expor os pods para o mundo externo."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# nginx-deployment.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n      annotations:\n        prometheus.io/scrape: "true"\n        prometheus.io/port: "9113"\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.27\n        ports:\n        - containerPort: 80\n          name: http\n        volumeMounts:\n        - name: nginx-config\n          mountPath: /etc/nginx/conf.d/default.conf\n          subPath: nginx.conf\n        resources:\n          requests:\n            memory: "64Mi"\n            cpu: "250m"\n          limits:\n            memory: "128Mi"\n            cpu: "500m"\n      - name: nginx-exporter\n        image: nginx/nginx-prometheus-exporter:1.1.2\n        args: \n          - \'-nginx.scrape-uri=http://localhost/metrics\'\n        ports:\n        - containerPort: 9113\n          name: metrics\n        resources:\n          requests:\n            memory: "64Mi"\n            cpu: "250m"\n          limits:\n            memory: "128Mi"\n            cpu: "500m"\n      volumes:\n      - name: nginx-config\n        configMap:\n          name: nginx-config\n          defaultMode: 420\n---\n# nginx-config.yaml\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: nginx-config\ndata:\n  nginx.conf: |\n    server {\n      listen 80;\n      server_name localhost;\n      location / {\n        root /usr/share/nginx/html;\n        index index.html index.htm;\n      }\n      location /metrics {\n        stub_status on;\n        access_log off;\n        allow all;\n      }\n    }\n---\n# nginx-service.yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-service\n  labels:\n    app: nginx\nspec:\n  selector:\n    app: nginx\n  ports:\n    - port: 9113\n      name: metrics\n'})}),"\n",(0,r.jsx)(n.h3,{id:"criando-o-nosso-primeiro-servicemonitor",children:"Criando o nosso primeiro ServiceMonitor"}),"\n",(0,r.jsx)(n.p,{children:"Vamos criar o nosso primeiro ServiceMonitor. O ServiceMonitor \xe9 um recurso do Prometheus Operator que permite monitorar os servi\xe7os que est\xe3o rodando em nosso cluster."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  labels:\n    app: nginx\n  name: nginx-servicemonitor\nspec:\n  endpoints:\n  - interval: 10s\n    path: /metrics\n    port: 9113\n  selector:\n    matchLabels:\n      app: nginx\n"})}),"\n",(0,r.jsx)(n.h3,{id:"criando-um-novo-pod-e-o-nosso-podmonitor",children:"Criando um novo pod e o nosso PodMonitor"}),"\n",(0,r.jsx)(n.p,{children:"Vamos criar um novo pod e o nosso PodMonitor. O PodMonitor \xe9 um recurso do Prometheus Operator que permite monitorar os pods que est\xe3o rodando em nosso cluster."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-pod\n  labels:\n    app: nginx-pod\nspec:\n  containers:\n  - name: nginx\n    image: nginx:1.27\n    ports:\n    - containerPort: 80\n    volumeMounts:\n    - name: nginx-config\n      mountPath: /etc/nginx/conf.d/default.conf\n      subPath: nginx.conf\n    resources:\n      requests:\n        memory: "64Mi"\n        cpu: "250m"\n      limits:\n        memory: "128Mi"\n        cpu: "500m"\n  - name: nginx-exporter\n    image: nginx/nginx-prometheus-exporter:1.1.2\n    args: \n      - \'-nginx.scrape-uri=http://localhost/metrics\'\n    ports:\n    - containerPort: 9113\n    resources:\n      requests:\n        memory: "64Mi"\n        cpu: "250m"\n      limits:\n        memory: "128Mi"\n        cpu: "500m"\n  volumes:\n  - name: nginx-config\n    configMap:\n      name: nginx-config\n      defaultMode: 420\n---\napiVersion: monitoring.coreos.com/v1\nkind: PodMonitor\nmetadata:\n  labels:\n    app: nginx-pod\n  name: nginx-podmonitor\nspec:\n  podMetricsEndpoints:\n  - interval: 10s\n    port: metrics\n    targetPort: 9113\n  selector:\n    matchLabels:\n      app: nginx-pod\n'})}),"\n",(0,r.jsx)(n.h3,{id:"criando-alertas-no-prometheus-e-alertmanager-atrav\xe9s-do-prometheusrule",children:"Criando alertas no Prometheus e AlertManager atrav\xe9s do PrometheusRule"}),"\n",(0,r.jsx)(n.p,{children:"Os alertas no Prometheus e AlertManager s\xe3o criados atrav\xe9s do PrometheusRule. O PrometheusRule \xe9 um recurso do Prometheus Operator que permite definir regras de alertas para os servi\xe7os que est\xe3o rodando em nosso cluster."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="prometheus-rule.yaml"',children:'apiVersion: monitoring.coreos.com/v1\nkind: PrometheusRule\nmetadata:\n  name: nginx-prometheus-rule\n  namespace: monitoring\n  labels:\n    prometheus: k8s\n    role: alert-rules\n    app.kubernetes.io/name: kube-prometheus\n    app.kubernetes.io/part-of: kube-prometheus\nspec:\n  groups:\n  - name: nginx-prometheus-rule\n    rules:\n    - alert: NginxDown\n      expr: nginx_up == 0\n      for: 1m\n      labels:\n        severity: critical\n      annotations:\n        summary: "Nginx est\xe1 fora do ar"\n        description: "O servi\xe7o do Nginx est\xe1 fora do ar {{ $labels.instance }}"\n'})}),"\n",(0,r.jsx)(n.p,{children:"E aplicamos o PrometheusRule no nosso cluster Kubernetes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f prometheus-rule.yaml\n"})}),"\n",(0,r.jsx)(n.h3,{id:"encerramento-do-day-10",children:"Encerramento do Day-10"}),"\n",(0,r.jsx)(n.p,{children:"No dia 10, aprendemos sobre ServiceMonitors, Deployment, Service, PodMonitor e PrometheusRule. Vimos como criar um Deployment e um Service no Kubernetes, como criar um ServiceMonitor, como criar um novo pod e um PodMonitor e como criar alertas no Prometheus e AlertManager atrav\xe9s do PrometheusRule."})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},4985:(e,n,o)=>{o.d(n,{Z:()=>i});o(7294);var r=o(5893);function i(e){let{children:n,fontSize:o="15px",color:i="#999"}=e;return(0,r.jsx)("div",{style:{textAlign:"center",fontSize:o,color:i},children:n})}},1151:(e,n,o)=>{o.d(n,{Z:()=>t,a:()=>a});var r=o(7294);const i={},s=r.createContext(i);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);