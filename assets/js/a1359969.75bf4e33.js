"use strict";(self.webpackChunkcode=self.webpackChunkcode||[]).push([[9345],{8834:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=a(5893),i=a(1151);a(4985);const s={id:"index",title:"Day 8",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Day 8"},o=void 0,c={id:"pick-2024/kubernets/day8/index",title:"Day 8",description:"Sum\xe1rio",source:"@site/docs/cursos/pick-2024/kubernets/day8/index.md",sourceDirName:"pick-2024/kubernets/day8",slug:"/pick-2024/kubernets/day8/",permalink:"/cursos/pick-2024/kubernets/day8/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucasbaccan/code/tree/master/docs/cursos/pick-2024/kubernets/day8/index.md",tags:[],version:"current",lastUpdatedBy:"Lucas Elias Baccan",lastUpdatedAt:1722798949e3,frontMatter:{id:"index",title:"Day 8",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Day 8"}},t={},l=[{value:"Sum\xe1rio",id:"sum\xe1rio",level:2},{value:"Dia 8",id:"dia-8",level:2},{value:"Secrets",id:"secrets",level:3},{value:"Exemplo de Secret",id:"exemplo-de-secret",level:3},{value:"Utilizando o Secret em um Pod",id:"utilizando-o-secret-em-um-pod",level:3},{value:"Exemplo de Secret para Docker Hub",id:"exemplo-de-secret-para-docker-hub",level:3},{value:"Exemplo de Secret para TLS",id:"exemplo-de-secret-para-tls",level:3},{value:"ConfigMaps",id:"configmaps",level:3},{value:"Exemplo de ConfigMap (Nginx + SSL)",id:"exemplo-de-configmap-nginx--ssl",level:3},{value:"Desafio",id:"desafio",level:2},{value:"Objetivos 1",id:"objetivos-1",level:3},{value:"Solu\xe7\xe3o 1",id:"solu\xe7\xe3o-1",level:3},{value:"Objetivos 2",id:"objetivos-2",level:3},{value:"Solu\xe7\xe3o 2",id:"solu\xe7\xe3o-2",level:3}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"sum\xe1rio",children:"Sum\xe1rio"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 Intro Day-8 - 02:50"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udcd6 O que iremos ver hoje?"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 O que s\xe3o as Secrets do Kubernetes? - 05:16"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 Conhecendo todos os tipos de Secrets e o que \xe9 a codifica\xe7\xe3o base64 - 13:21"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udcd6 O que s\xe3o os Secrets e o Base64"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 Criando um Secret do tipo Opaque - 07:22"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udcd6 Criando o nosso primeiro Secret"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 Utilizando o nosso Secret como vari\xe1vel de ambiente no Pod - 06:34"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udcd6 Utilizando o nosso Secret dentro de um Pod"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 Criando um Secret para autenticar no Docker Hub do tipo dockerconfigjson e usar imagens privadas - 22:05"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udcd6 Criando um Secret para autenticar no Docker Hub"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 Criando um Secret do tipo tls para armazenar um certificado e chave TLS - 06:39"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udcd6 Criando um Secret do tipo TLS"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 O que s\xe3o os ConfigMaps? - 02:09"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 Criando um ConfigMap para adicionar um arquivo no Pod e configurar SSL no Nginx - 26:48"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udcd6 Criando e utilizando ConfigMaps"}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfa5 Encerramento Day-8 - 01:06"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udcd6 Encerramento Day-8"}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udcdd Desafio Pr\xe1tico do Day8"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Legenda"}),(0,r.jsx)(n.br,{}),"\n","\ud83c\udfa5 - Aula gravada\n\ud83d\udcd6 - Material complementar\n\ud83d\udcdd - Atividade"]}),"\n",(0,r.jsx)(n.h2,{id:"dia-8",children:"Dia 8"}),"\n",(0,r.jsx)(n.p,{children:"No dia 8, vamos aprender sobre Secrets e ConfigMaps. Vamos entender o que s\xe3o, como criar e como utilizar esses recursos no Kubernetes."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Material complementar: ",(0,r.jsx)(n.a,{href:"https://livro.descomplicandokubernetes.com.br/pt/day-8/",children:"Leitura complementar do Day-8"})]})}),"\n",(0,r.jsx)(n.h3,{id:"secrets",children:"Secrets"}),"\n",(0,r.jsx)(n.p,{children:"Secrets s\xe3o objetos do Kubernetes que armazenam informa\xe7\xf5es sens\xedveis, como senhas, tokens, chaves de acesso, etc. Por padr\xe3o o Kubernetes armazena os Secrets em base64, mas \xe9 importante saber que base64 n\xe3o \xe9 uma forma segura de criptografar informa\xe7\xf5es, \xe9 apenas uma forma de codificar."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Material complementar: ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/secret/",children:"Kubernets: Secret"})]})}),"\n",(0,r.jsx)(n.p,{children:"Temos 7 tipos de Secrets padr\xe3o no Kubernetes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Opaque"}),": armazena chaves e valores arbitr\xe1rios"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"kubernetes.io/service-account-token"}),": armazena o token de um service account"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"kubernetes.io/dockercfg"}),": armazena credenciais para acessar um registry do Docker (.dockercfg)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"kubernetes.io/dockerconfigjson"}),": armazena credenciais para acessar um registry do Docker (.docker/config.json)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"kubernetes.io/basic-auth"}),": armazena credenciais de autentica\xe7\xe3o b\xe1sica"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"kubernetes.io/ssh-auth"}),": armazena chaves SSH"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"kubernetes.io/tls"}),": armazena certificados e chaves TLS"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Para listar os Secrets do cluster, execute o comando:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl get secrets\n# ou\nkubectl get secrets --all-namespaces\n# ou \nkubectl get secrets -A\n"})}),"\n",(0,r.jsx)(n.p,{children:"Os secrets s\xe3o armazenados em base64, para codificar uma string em base64, execute o comando:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'echo -n "minha-senha" | base64\n'})}),"\n",(0,r.jsx)(n.p,{children:"Para decodificar uma string em base64, execute o comando:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'echo "bWluaGEtc2VuaGE=" | base64 -d\n# ou\nbase64 -d <<< "bWluaGEtc2VuaGE="\n'})}),"\n",(0,r.jsx)(n.h3,{id:"exemplo-de-secret",children:"Exemplo de Secret"}),"\n",(0,r.jsx)(n.p,{children:"Vamos criar um Secret do tipo Opaque, que \xe9 o tipo mais gen\xe9rico de Secret. Esse tipo de Secret \xe9 utilizado para armazenar chaves e valores arbitr\xe1rios."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="secret.yaml"',children:'apiVersion: v1\nkind: Secret\nmetadata:\n  name: my-secret\ntype: Opaque\ndata:\n  # echo -n "admin" | base64\n  username: YWRtaW4=\n  # echo -n "admin123" | base64\n  password: YWRtaW4xMjM=\n'})}),"\n",(0,r.jsx)(n.p,{children:"Para criar o Secret, execute o comando:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f secret.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"Para listar os Secrets do cluster, execute o comando:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl get secrets my-secret\n# ou\nkubectl get secrets my-secret -o yaml\n# ou com describ\nkubectl describe secrets my-secret\n"})}),"\n",(0,r.jsx)(n.h3,{id:"utilizando-o-secret-em-um-pod",children:"Utilizando o Secret em um Pod"}),"\n",(0,r.jsx)(n.p,{children:"Para utilizar o Secret em um Pod, adicione o volume do Secret no Pod e adicione o volumeMounts no container."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="exemplo.yaml"',children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: my-pod\nspec:\n  containers:\n    - name: my-container\n      image: nginx\n      env:\n        - name: USERNAME\n          valueFrom:\n            secretKeyRef:\n              name: my-secret\n              key: username\n        - name: PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: my-secret\n              key: password\n---\napiVersion: v1\nkind: secret\nmetadata:\n  name: my-secret\ntype: Opaque\ndata:\n  username: YWRtaW4=\n  password: YWRtaW4xMjM=\n"})}),"\n",(0,r.jsx)(n.p,{children:"Para criar o Pod, execute o comando:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f exemplo.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"E para verificar se o Secret foi utilizado no Pod, execute o comando:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl exec -it my-pod -- env\n"})}),"\n",(0,r.jsx)(n.h3,{id:"exemplo-de-secret-para-docker-hub",children:"Exemplo de Secret para Docker Hub"}),"\n",(0,r.jsx)(n.p,{children:"Vamos criar um Secret para autenticar no Docker Hub do tipo dockerconfigjson, que \xe9 utilizado para armazenar credenciais para acessar um registry do Docker."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="docker-secret.yaml"',children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: docker-secret\ntype: kubernetes.io/dockerconfigjson\ndata:\n  .dockerconfigjson: ewoJImF1dGhzIjogewoJCSJkb2NrZXIuaW8iOiB7CgkJCQkiYXV0aCI6ICJhZG1pbiIsCgkJCQkicGFzc3dvcmQiOiAiYWRtaW4xMjMifQoJCX0KfQo=\n"})}),"\n",(0,r.jsx)(n.p,{children:"Utilizar o Secret no Pod:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="docker-pod.yaml"',children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: docker-pod\nspec:\n  containers:\n    - name: docker-container\n      image: nginx\n  imagePullSecrets:\n    - name: docker-secret\n"})}),"\n",(0,r.jsx)(n.h3,{id:"exemplo-de-secret-para-tls",children:"Exemplo de Secret para TLS"}),"\n",(0,r.jsx)(n.p,{children:"Vamos criar um Secret do tipo tls para armazenar um certificado e chave TLS."}),"\n",(0,r.jsx)(n.p,{children:"Podemos criar um certificado para testar utilizando o comando:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout chave-privada.key -out certificado.crt\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="tls-secret.yaml"',children:"apiVersion: v1\nkind: Secret\nmetadata:\n  name: tls-secret\ntype: kubernetes.io/tls\ndata:\n  # cat cert.pem | base64\n  tls.crt: base64-encode-certificate\n  # cat key.pem | base64\n  tls.key: base64-encode-key\n"})}),"\n",(0,r.jsx)(n.p,{children:"Ou"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl create secret tls tls-secret --cert=cert.pem --key=key.pem\n"})}),"\n",(0,r.jsx)(n.p,{children:"Utilizar o Secret no Pod:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="tls-pod.yaml"',children:"apiVersion: v1\nkind: Pod\nmetadata:\n  name: tls-pod\nspec:\n  containers:\n    - name: tls-container\n      image: nginx\n      volumeMounts:\n        - name: tls\n          mountPath: /etc/nginx/ssl\n  volumes:\n    - name: tls\n      secret:\n        secretName: tls-secret\n"})}),"\n",(0,r.jsx)(n.h3,{id:"configmaps",children:"ConfigMaps"}),"\n",(0,r.jsx)(n.p,{children:"ConfigMaps s\xe3o objetos do Kubernetes que armazenam configura\xe7\xf5es, como vari\xe1veis de ambiente, arquivos de configura\xe7\xe3o, etc. ConfigMaps s\xe3o utilizados para armazenar informa\xe7\xf5es n\xe3o sens\xedveis. A diferen\xe7a entre ConfigMaps e Secrets \xe9 que ConfigMaps s\xe3o armazenados em texto puro, enquanto Secrets s\xe3o armazenados em base64."}),"\n",(0,r.jsx)(n.h3,{id:"exemplo-de-configmap-nginx--ssl",children:"Exemplo de ConfigMap (Nginx + SSL)"}),"\n",(0,r.jsx)(n.p,{children:"Vamos criar um ConfigMap para adicionar um arquivo no Pod e configurar SSL no Nginx."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="nginx.yaml"',children:"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: nginx-config\ndata:\n  ssl.conf: |\n    ssl_certificate /etc/nginx/ssl/tls.crt;\n    ssl_certificate_key /etc/nginx/ssl/tls.key;\n---\napiVersion: v1\nkind: Secret\nmetadata:\n  name: tls-secret\ntype: kubernetes.io/tls\ndata:\n  certificado.crt: base64-encode-certificate\n  certificado.key: base64-encode-key\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-pod\nspec:\n  containers:\n    - name: nginx-container\n      image: nginx\n      volumeMounts:\n        - name: tls\n          mountPath: /etc/nginx/ssl\n        - name: config\n          mountPath: /etc/nginx/conf.d\n  volumes:\n    - name: tls\n      secret:\n        secretName: tls-secret\n        items:\n          - key: certificado.crt\n            path: tls.crt\n          - key: certificado.key\n            path: tls.key\n    - name: config\n      configMap:\n        name: nginx-config\n"})}),"\n",(0,r.jsx)(n.p,{children:"Para criar o ConfigMap, execute o comando:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f nginx.yaml\n"})}),"\n",(0,r.jsx)(n.h2,{id:"desafio",children:"Desafio"}),"\n",(0,r.jsx)(n.h3,{id:"objetivos-1",children:"Objetivos 1"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\ud83c\udfd7\ufe0f Crie um Secret no Kubernetes que contenha o certificado e a chave privada para o HTTPS. Verifique se o Secret foi criado corretamente e se o tipo est\xe1 correto."}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfaf Crie um ConfigMap com a configura\xe7\xe3o do Nginx. Certifique-se de que a configura\xe7\xe3o est\xe1 correta e de que o ConfigMap est\xe1 corretamente configurado."}),"\n",(0,r.jsx)(n.li,{children:'\ud83d\udcbc Verifique se o Nginx est\xe1 rodando e se seu status \xe9 "Running".'}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udd75\ufe0f\u200d\u2640\ufe0f Certifique-se de que o HTTPS est\xe1 funcionando corretamente. Para fazer isso, voc\xea pode executar curl -k https:\\\\localhost:<PORTA>."}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udcdd Verifique o certificado do Nginx e certifique-se de que est\xe1 correto."}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udca1 Verifique se o Service \xe9 do tipo NodePort na porta 32400 e est\xe1 redirecionando para a porta 443 do container."}),"\n",(0,r.jsx)(n.li,{children:"\ud83d\udcdd Verifique se o Nginx est\xe1 rodando na porta 443."}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfaf O nome do Pod precisa ser nginx-https."}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfaf O nome do Service precisa ser nginx-service."}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfaf O nome do ConfigMap precisa ser nginx-config."}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfaf O nome do Secret precisa ser nginx-secret."}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfaf O certificado e a chave privada precisam estar no diret\xf3rio /root/manifests."}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfaf O arquivo de configura\xe7\xe3o do Nginx precisa estar no diret\xf3rio /root/manifests."}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfaf O arquivo de configura\xe7\xe3o do Nginx precisa se chamar nginx.conf."}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfaf O certificado precisa se chamar nginx.crt."}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfaf A chave privada precisa se chamar nginx.key."}),"\n",(0,r.jsx)(n.li,{children:"\ud83c\udfaf O manifesto do Pod precisa se chamar nginx-https-pod.yaml."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"solu\xe7\xe3o-1",children:"Solu\xe7\xe3o 1"}),"\n",(0,r.jsx)(n.p,{children:"Criar o certificado e a chave privada:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout nginx.key -out nginx.crt\n#\nkubectl create secret tls nginx-secret --cert=nginx.crt --key=nginx.key\n"})}),"\n",(0,r.jsx)(n.p,{children:"Criar o ConfigMap:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="nginx-https-pod.yaml"',children:"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: nginx-config\ndata:\n  nginx.conf: |\n    events {}\n    http {\n      server {\n        listen 80;\n        listen 443 ssl;\n        server_name localhost;\n        ssl_certificate /etc/nginx/ssl/tls.crt;\n        ssl_certificate_key /etc/nginx/ssl/tls.key;\n        location / {\n          root /usr/share/nginx/html;\n          index index.html;\n        }\n      }\n    }\n  index.html: |\n    <html>\n      <head>\n        <title>Descomplicando o Kubernetes</title>\n      </head>\n      <body>\n        <h1>Descomplicando o Kubernetes</h1>\n      </body>\n    </html>\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-https\n  labels:\n    app: nginx\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n      volumeMounts:\n        - name: ssl\n          mountPath: /etc/nginx/ssl\n        - name: config\n          mountPath: /etc/nginx\n        - name: html\n          mountPath: /usr/share/nginx/html\n      ports:\n        - containerPort: 80\n          name: http\n        - containerPort: 443\n          name: https\n      resources:\n        requests:\n          cpu: 100m\n          memory: 128Mi\n        limits:\n          cpu: 250m\n          memory: 256Mi\n  volumes:\n    - name: ssl\n      secret:\n        secretName: nginx-secret\n        items:\n          - key: tls.crt\n            path: tls.crt\n          - key: tls.key\n            path: tls.key\n    - name: config\n      configMap:\n        name: nginx-config\n        items:\n          - key: nginx.conf\n            path: nginx.conf\n    - name: html\n      configMap:\n        name: nginx-config\n        items:\n          - key: index.html\n            path: index.html\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-service\nspec:\n  type: NodePort\n  ports:\n    - port: 32400\n      targetPort: 443\n      nodePort: 32400\n  selector:\n    app: nginx\n"})}),"\n",(0,r.jsx)(n.p,{children:"aplicar o desafio:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f nginx-https-pod.yaml\nkubectl delete -f nginx-https-pod.yaml\n#\nkubectl get secrets\nkubectl describe secret nginx-secret\n#\nkubectl get pods\nkubectl describe pod nginx-https\nkubectl logs nginx-https\n#\nkubectl get svc\nkubectl describe svc nginx-service\n#\ncurl -k https://localhost:443\n"})}),"\n",(0,r.jsx)(n.h3,{id:"objetivos-2",children:"Objetivos 2"}),"\n",(0,r.jsx)(n.p,{children:"Neste desafio, voc\xea ter\xe1 que resolver um problema com o nosso ConfigMap e Secret do nosso Nginx. Voc\xea tem que descobrir o que est\xe1 errado e corrigir o problema em 05 minutos."}),"\n",(0,r.jsx)(n.p,{children:"Instru\xe7\xf5es\nAlguma coisa aconteceu e o Nginx que voc\xea configurou no desafio anterior n\xe3o est\xe1 funcionando corretamente. Voc\xea precisa descobrir o que est\xe1 errado e corrigir o problema."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\ud83d\udd75\ufe0f\u200d\u2640\ufe0f Verifique se est\xe1 tudo certo com o Pod, Secret, ConfigMap e outras coisas que voc\xea achar necess\xe1rio."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"solu\xe7\xe3o-2",children:"Solu\xe7\xe3o 2"}),"\n",(0,r.jsx)(n.p,{children:"O secret estava errado, ent\xe3o foi recriado:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl get secret\nkubectl describe secret nginx-secret\nkubectl delete secret nginx-secret\nkubectl create secret tls nginx-secret --cert=nginx.crt --key=nginx.key\n#\nkubectl delete -f nginx-https-pod.yaml\nkubectl apply -f nginx-https-pod.yaml\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4985:(e,n,a)=>{a.d(n,{Z:()=>i});a(7294);var r=a(5893);function i(e){let{children:n,fontSize:a="15px",color:i="#999"}=e;return(0,r.jsx)("div",{style:{textAlign:"center",fontSize:a,color:i},children:n})}},1151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>o});var r=a(7294);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);