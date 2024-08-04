"use strict";(self.webpackChunkcode=self.webpackChunkcode||[]).push([[5283],{8144:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>l});var r=n(5893),s=n(1151),a=n(4985);const i={id:"index",title:"Day 1",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Day 1"},c=void 0,t={id:"pick-2024/kubernets/day1/index",title:"Day 1",description:"Sum\xe1rio",source:"@site/docs/cursos/pick-2024/kubernets/day1/index.md",sourceDirName:"pick-2024/kubernets/day1",slug:"/pick-2024/kubernets/day1/",permalink:"/cursos/pick-2024/kubernets/day1/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucasbaccan/code/tree/master/docs/cursos/pick-2024/kubernets/day1/index.md",tags:[],version:"current",lastUpdatedBy:"Lucas Elias Baccan",lastUpdatedAt:1722796302e3,frontMatter:{id:"index",title:"Day 1",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Day 1"},sidebar:"docs",previous:{title:"Day 6",permalink:"/cursos/pick-2024/docker/day6/"},next:{title:"Day 2",permalink:"/cursos/pick-2024/kubernets/day2/"}},d={},l=[{value:"Sum\xe1rio",id:"sum\xe1rio",level:2},{value:"Dia 1",id:"dia-1",level:2},{value:"O que \xe9 um container?",id:"o-que-\xe9-um-container",level:3},{value:"O que \xe9 um container engine?",id:"o-que-\xe9-um-container-engine",level:3},{value:"O que \xe9 um container runtime?",id:"o-que-\xe9-um-container-runtime",level:3},{value:"Container Engine e Container Runtime",id:"container-engine-e-container-runtime",level:3},{value:"O que \xe9 a OCI?",id:"o-que-\xe9-a-oci",level:3},{value:"O que \xe9 o Kubernetes?",id:"o-que-\xe9-o-kubernetes",level:3},{value:"O que s\xe3o os workers e o control plane do Kubernetes?",id:"o-que-s\xe3o-os-workers-e-o-control-plane-do-kubernetes",level:3},{value:"Quais os componentes do control plane do Kubernetes?",id:"quais-os-componentes-do-control-plane-do-kubernetes",level:3},{value:"Quais os componentes dos workers do Kubernetes?",id:"quais-os-componentes-dos-workers-do-kubernetes",level:3},{value:"Quais as portas TCP e UDP dos componentes do Kubernetes?",id:"quais-as-portas-tcp-e-udp-dos-componentes-do-kubernetes",level:3},{value:"Introdu\xe7\xe3o a pods, replica sets, deployments e service",id:"introdu\xe7\xe3o-a-pods-replica-sets-deployments-e-service",level:3},{value:"Entendendo e instalando o kubectl",id:"entendendo-e-instalando-o-kubectl",level:3},{value:"Criando o nosso primeiro cluster com o kind",id:"criando-o-nosso-primeiro-cluster-com-o-kind",level:3},{value:"Primeiros passos no Kubernetes com o kubectl",id:"primeiros-passos-no-kubernetes-com-o-kubectl",level:3},{value:"Conhecendo o YAML e o kubectl com dry-run",id:"conhecendo-o-yaml-e-o-kubectl-com-dry-run",level:3},{value:"Desafio",id:"desafio",level:2},{value:"Objetivos",id:"objetivos",level:3},{value:"Solu\xe7\xe3o",id:"solu\xe7\xe3o",level:3}];function u(e){const o={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"sum\xe1rio",children:"Sum\xe1rio"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 Intro Day-1 - 01:38"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 O que \xe9 um container? - 09:58"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 O que \xe9 um container engine? - 04:02"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 O que \xe9 um container runtime? - 07:07"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 O que \xe9 a OCI? - 02:03"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 O que \xe9 o Kubernetes? - 08:10"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 O que s\xe3o os workers e o control plane do Kubernetes? - 07:16"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 Quais os componentes do control plane do Kubernetes? - 08:58"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 Quais os componentes dos workers do Kubernetes? - 04:11"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 Quais as portas TCP e UDP dos componentes do Kubernetes? - 06:10"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 Introdu\xe7\xe3o a pods, replica sets, deployments e service - 14:46"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 Entendendo e instalando o kubectl - 06:22"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 Criando o nosso primeiro cluster com o kind - 18:43"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 Primeiros passos no Kubernetes com o kubectl - 25:04"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 Conhecendo o YAML e o kubectl com dry-run - 08:53"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 Encerramento Day-1 - 02:00"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 Li\xe7\xe3o de casa - 00:41"}),"\n",(0,r.jsx)(o.li,{children:"\ud83d\udcd6 Leitura complementar do Day-1"}),"\n",(0,r.jsx)(o.li,{children:"\ud83c\udfa5 A Pessoa_Diretora_X me ligou e voc\xea tem o seu primeiro desafio! - 04:56"}),"\n",(0,r.jsx)(o.li,{children:"\ud83d\udcdd Desafio do Day-1"}),"\n",(0,r.jsx)(o.li,{children:"\ud83d\udcd6 Download da leitura complementar do Day-1 - 23 P\xe1ginas"}),"\n",(0,r.jsx)(o.li,{children:"\ud83d\udcdd Exame do Day-1 - 9 quest\xf5es"}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Legenda"}),(0,r.jsx)(o.br,{}),"\n","\ud83c\udfa5 - Aula gravada\n\ud83d\udcd6 - Material complementar\n\ud83d\udcdd - Atividade\n\u231b - Revis\xe3o/Reflex\xe3o"]}),"\n",(0,r.jsx)(o.h2,{id:"dia-1",children:"Dia 1"}),"\n",(0,r.jsx)(o.p,{children:"Agora come\xe7amos a transi\xe7\xe3o do Docker para o Kubernetes, onde vamos aprender o que \xe9 um container, o que \xe9 um container engine, o que \xe9 um container runtime, o que \xe9 a OCI, o que \xe9 o Kubernetes, o que s\xe3o os workers e o control plane do Kubernetes, quais os componentes do control plane do Kubernetes, quais os componentes dos workers do Kubernetes, quais as portas TCP e UDP dos componentes do Kubernetes, introdu\xe7\xe3o a pods, replica sets, deployments e service, entendendo e instalando o kubectl, criando o nosso primeiro cluster com o kind, primeiros passos no Kubernetes com o kubectl, conhecendo o YAML e o kubectl com dry-run."}),"\n",(0,r.jsx)(o.admonition,{type:"info",children:(0,r.jsxs)(o.p,{children:["Material complementar: ",(0,r.jsx)(o.a,{href:"https://livro.descomplicandokubernetes.com.br/pt/day-1/",children:"Leitura complementar do Day-1"})]})}),"\n",(0,r.jsx)(o.h3,{id:"o-que-\xe9-um-container",children:"O que \xe9 um container?"}),"\n",(0,r.jsx)(o.p,{children:"Container \xe9 uma unidade de software que empacota c\xf3digo e todas as suas depend\xeancias, de modo que a aplica\xe7\xe3o seja executada de maneira r\xe1pida e confi\xe1vel de um ambiente de computa\xe7\xe3o para outro. Um container \xe9 uma forma de virtualiza\xe7\xe3o a n\xedvel de sistema operacional que permite executar m\xfaltiplos ambientes isolados em uma \xfanica inst\xe2ncia de um sistema operacional."}),"\n",(0,r.jsx)(o.p,{children:"Em outras palavras, um container \xe9 uma forma de isolamento de recursos. CPU, Mem\xf3ria, Rede, Disco, etc. Mas ele consome os recursos do host, ou seja, ele n\xe3o tem recursos pr\xf3prios, ele usa os recursos do host.Ne"}),"\n",(0,r.jsx)(o.h3,{id:"o-que-\xe9-um-container-engine",children:"O que \xe9 um container engine?"}),"\n",(0,r.jsx)(o.p,{children:"Container Engine \xe9 um software que fornece uma interface para interagir com o sistema operacional para que ele possa criar e gerenciar containers. O container engine \xe9 respons\xe1vel por criar, iniciar, parar, remover e gerenciar containers."}),"\n",(0,r.jsx)(o.p,{children:"Ele n\xe3o conversa diretamente com o hardware, ele conversa com o sistema operacional, solicitando recursos para criar e gerenciar containers."}),"\n",(0,r.jsx)(o.h3,{id:"o-que-\xe9-um-container-runtime",children:"O que \xe9 um container runtime?"}),"\n",(0,r.jsx)(o.p,{children:"Container Runtime \xe9 um software que executa containers. Ele \xe9 respons\xe1vel por executar o container, ou seja, ele \xe9 o respons\xe1vel por criar o container e executar o processo dentro do container."}),"\n",(0,r.jsx)(o.p,{children:"Ele sim conversa diretamente com o hardware, com o kernel, interpretando as instru\xe7\xf5es do container engine e solicitando recursos diretamente ao hardware."}),"\n",(0,r.jsx)(o.p,{children:"Temos tr\xeas tipode de container runtime:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:"Low-level: S\xe3o runtimes que interagem diretamente com o kernel do sistema operacional, como o runc, crun e o runsc."}),"\n",(0,r.jsx)(o.li,{children:"High-level: S\xe3o runtimes que interagem com o kernel do sistema operacional atrav\xe9s de uma API, como o containerd, podman e o cri-o."}),"\n",(0,r.jsx)(o.li,{children:"Sandbox: S\xe3o runtimes que interagem com o kernel do sistema operacional atrav\xe9s de uma API, como o gVisor e o Kata Containers."}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"container-engine-e-container-runtime",children:"Container Engine e Container Runtime"}),"\n",(0,r.jsx)(o.p,{children:"Caso queira ler mais, pode acessar a documenta\xe7\xe3o feita pelo Jeferson."}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"https://github.com/badtuxx/CertifiedContainersExpert/blob/main/DescomplicandoKubernetes/day-1/README.md#o-container-engine",children:"Container Engine"})}),"\n",(0,r.jsx)(o.li,{children:(0,r.jsx)(o.a,{href:"https://github.com/badtuxx/CertifiedContainersExpert/blob/main/DescomplicandoKubernetes/day-1/README.md#o-container-runtime",children:"Container Runtime"})}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"o-que-\xe9-a-oci",children:"O que \xe9 a OCI?"}),"\n",(0,r.jsx)(o.p,{children:"OCI (Open Container Initiative) \xe9 uma organiza\xe7\xe3o que tem como objetivo padronizar o formato dos containers. A OCI \xe9 respons\xe1vel por padronizar o formato dos containers, ou seja, ela define como um container deve ser criado, como ele deve ser executado e como ele deve ser distribu\xeddo."}),"\n",(0,r.jsxs)(o.p,{children:["O principal projeto da OCI \xe9 o ",(0,r.jsx)(o.em,{children:"runc"}),", que \xe9 um runtime de containers que implementa a especifica\xe7\xe3o da OCI."]}),"\n",(0,r.jsx)(o.h3,{id:"o-que-\xe9-o-kubernetes",children:"O que \xe9 o Kubernetes?"}),"\n",(0,r.jsx)(o.p,{children:"De forma r\xe1pida, o Kubernets \xe9 um orquestrador de containers. Ele \xe9 respons\xe1vel por gerenciar containers em um ambiente distribu\xeddo, ou seja, ele \xe9 respons\xe1vel por criar, iniciar, parar, remover e gerenciar containers em um ambiente distribu\xeddo."}),"\n",(0,r.jsxs)(o.p,{children:["A comunidade chama o Kubernetes de K8s (se fala 'kates'), que \xe9 a abrevia\xe7\xe3o de Kubernetes, onde o 8 representa as 8 letras que est\xe3o entre o ",(0,r.jsx)(o.strong,{children:"K"})," e o ",(0,r.jsx)(o.strong,{children:"s"}),", que \xe9 o padr\xe3o ",(0,r.jsx)(o.a,{href:"http://www.i18nguy.com/origini18n.html",children:"i18n"}),"."]}),"\n",(0,r.jsx)(o.h3,{id:"o-que-s\xe3o-os-workers-e-o-control-plane-do-kubernetes",children:"O que s\xe3o os workers e o control plane do Kubernetes?"}),"\n",(0,r.jsx)(o.p,{children:"O Kubernetes \xe9 dividido em dois grupos de m\xe1quinas, os workers e o control plane."}),"\n",(0,r.jsx)(o.p,{children:"Os workers s\xe3o respons\xe1veis por executar os containers, ou seja, eles s\xe3o respons\xe1veis por criar, iniciar, parar, remover e gerenciar containers."}),"\n",(0,r.jsx)(o.p,{children:"O control plane \xe9 respons\xe1vel por gerenciar os workers, ou seja, ele \xe9 respons\xe1vel por criar, iniciar, parar, remover e gerenciar os workers."}),"\n",(0,r.jsx)(a.Z,{children:(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.img,{alt:"Kubernetes",src:n(4089).Z+"",width:"1402",height:"882"}),(0,r.jsx)(o.br,{}),"\n","Fonte: ",(0,r.jsx)(o.a,{href:"https://kubernetes.io/docs/concepts/architecture/",children:"Kubernetes"})]})}),"\n",(0,r.jsx)(o.h3,{id:"quais-os-componentes-do-control-plane-do-kubernetes",children:"Quais os componentes do control plane do Kubernetes?"}),"\n",(0,r.jsx)(o.p,{children:"O control plane \xe9 composto por quatro componentes:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"etcd"}),": \xc9 o componente que armazena o estado do cluster. Ele \xe9 respons\xe1vel por armazenar as informa\xe7\xf5es do cluster, como os objetos do Kubernetes, os objetos do cluster, os objetos dos namespaces, os objetos dos nodes, etc."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"kube-apiserver"}),": \xc9 o componente que exp\xf5e a API do Kubernetes. Ele \xe9 respons\xe1vel por receber as requisi\xe7\xf5es, validar as requisi\xe7\xf5es, autenticar as requisi\xe7\xf5es, autorizar as requisi\xe7\xf5es e encaminhar as requisi\xe7\xf5es para os componentes respons\xe1veis por executar as a\xe7\xf5es solicitadas. Ele \xe9 o \xfanico componente que conversa com o etcd."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"kube-scheduler"}),": \xc9 o componente que \xe9 respons\xe1vel por agendar os pods nos nodes. Ele \xe9 respons\xe1vel por escolher o node que vai executar o pod, levando em considera\xe7\xe3o as regras de agendamento, como a quantidade de recursos dispon\xedveis, a quantidade de recursos solicitados, a quantidade de pods j\xe1 executando no node, etc."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"kube-controller-manager"}),": \xc9 o componente que \xe9 respons\xe1vel por controlar o estado do cluster. Ele \xe9 respons\xe1vel por garantir que o estado do cluster est\xe1 de acordo com o estado desejado, ou seja, ele \xe9 respons\xe1vel por garantir que os objetos do Kubernetes est\xe3o de acordo com as regras definidas."]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Esses s\xe3o os componentes b\xe1sicos do control plane do Kubernetes, mas existem outros componentes que s\xe3o opcionais, como o kube-proxy, o ingress controller, o dns, o metrics server, o dashboard, etc."}),"\n",(0,r.jsx)(o.h3,{id:"quais-os-componentes-dos-workers-do-kubernetes",children:"Quais os componentes dos workers do Kubernetes?"}),"\n",(0,r.jsx)(o.p,{children:"Os workers s\xe3o compostos por tr\xeas componentes:"}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"kubelet"}),": \xc9 o componente que \xe9 respons\xe1vel por executar os containers. Ele \xe9 respons\xe1vel por criar, iniciar, parar, remover e gerenciar containers."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"kube-proxy"}),": \xc9 o componente que \xe9 respons\xe1vel por gerenciar o tr\xe1fego de rede. Ele \xe9 respons\xe1vel por encaminhar o tr\xe1fego de rede para os containers."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"container runtime interface"}),": \xc9 o componente que \xe9 respons\xe1vel por executar os containers. Ele \xe9 respons\xe1vel por criar o container e executar o processo dentro do container."]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"quais-as-portas-tcp-e-udp-dos-componentes-do-kubernetes",children:"Quais as portas TCP e UDP dos componentes do Kubernetes?"}),"\n",(0,r.jsx)(o.p,{children:"Os componentes do Kubernetes utilizam v\xe1rias portas TCP e UDP para se comunicar. Abaixo est\xe3o as portas TCP e UDP dos componentes do Kubernetes:"}),"\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Componente"}),(0,r.jsx)(o.th,{children:"Porta TCP"}),(0,r.jsx)(o.th,{children:"Porta UDP"}),(0,r.jsx)(o.th,{children:"Grupo"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"kube-apiserver"}),(0,r.jsx)(o.td,{children:"6443"}),(0,r.jsx)(o.td,{}),(0,r.jsx)(o.td,{children:"Control Plane"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"etcd"}),(0,r.jsx)(o.td,{children:"2379-2380"}),(0,r.jsx)(o.td,{}),(0,r.jsx)(o.td,{children:"Control Plane"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"kubelet"}),(0,r.jsx)(o.td,{children:"10250"}),(0,r.jsx)(o.td,{}),(0,r.jsx)(o.td,{children:"Control Plane"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"kube-scheduler"}),(0,r.jsx)(o.td,{children:"10251"}),(0,r.jsx)(o.td,{}),(0,r.jsx)(o.td,{children:"Control Plane"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"kube-controller-manager"}),(0,r.jsx)(o.td,{children:"10252"}),(0,r.jsx)(o.td,{}),(0,r.jsx)(o.td,{children:"Control Plane"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"nodeport"}),(0,r.jsx)(o.td,{children:"30000-32767"}),(0,r.jsx)(o.td,{}),(0,r.jsx)(o.td,{children:"Worker"})]})]})]}),"\n",(0,r.jsx)(o.h3,{id:"introdu\xe7\xe3o-a-pods-replica-sets-deployments-e-service",children:"Introdu\xe7\xe3o a pods, replica sets, deployments e service"}),"\n",(0,r.jsx)(o.p,{children:"Pods, Replica Sets, Deployments e Services s\xe3o os principais objetos do Kubernetes."}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Pods"}),": \xc9 o menor objeto do Kubernetes. Ele \xe9 respons\xe1vel por executar um ou mais containers. Ele \xe9 a menor unidade de execu\xe7\xe3o do Kubernetes."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Replica Sets"}),": \xc9 o objeto que \xe9 respons\xe1vel por garantir que um n\xfamero espec\xedfico de pods est\xe1 executando. Ele \xe9 respons\xe1vel por garantir que um n\xfamero espec\xedfico de pods est\xe1 em execu\xe7\xe3o."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Deployments"}),": \xc9 o objeto que \xe9 respons\xe1vel por garantir que um n\xfamero espec\xedfico de replica sets est\xe1 em execu\xe7\xe3o. Ele \xe9 respons\xe1vel por garantir que um n\xfamero espec\xedfico de replica sets est\xe1 em execu\xe7\xe3o."]}),"\n",(0,r.jsxs)(o.li,{children:[(0,r.jsx)(o.strong,{children:"Services"}),": \xc9 o objeto que \xe9 respons\xe1vel por expor os pods para o mundo externo. Ele \xe9 respons\xe1vel por expor os pods para o mundo externo."]}),"\n"]}),"\n",(0,r.jsx)(o.h3,{id:"entendendo-e-instalando-o-kubectl",children:"Entendendo e instalando o kubectl"}),"\n",(0,r.jsx)(o.p,{children:"O kubectl \xe9 a ferramenta de linha de comando do Kubernetes. Ele \xe9 respons\xe1vel por interagir com o Kubernetes, ou seja, ele \xe9 respons\xe1vel por criar, iniciar, parar, remover e gerenciar objetos do Kubernetes."}),"\n",(0,r.jsxs)(o.p,{children:["Para instalar o kubectl, basta acessar a ",(0,r.jsx)(o.a,{href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/",children:"documenta\xe7\xe3o oficial"}),"."]}),"\n",(0,r.jsx)(o.h3,{id:"criando-o-nosso-primeiro-cluster-com-o-kind",children:"Criando o nosso primeiro cluster com o kind"}),"\n",(0,r.jsx)(o.p,{children:"O kind \xe9 uma ferramenta que \xe9 respons\xe1vel por criar clusters Kubernetes. Ele \xe9 uma ferramenta que \xe9 respons\xe1vel por criar clusters Kubernetes em containers Docker. N\xe3o \xe9 recomendado para ambientes de produ\xe7\xe3o, mas \xe9 recomendado para ambientes de desenvolvimento."}),"\n",(0,r.jsxs)(o.p,{children:["Para instalar o kind, basta acessar a ",(0,r.jsx)(o.a,{href:"https://kind.sigs.k8s.io/docs/user/quick-start/",children:"documenta\xe7\xe3o oficial"}),"."]}),"\n",(0,r.jsx)(o.p,{children:"Ap\xf3s instalar o kind, basta executar o comando abaixo para criar o cluster:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"kind create cluster\n# ou\nkind create cluster --config kind-config.yaml\n"})}),"\n",(0,r.jsx)(o.p,{children:"Podemos verificar se o cluster foi criado com sucesso executando o comando abaixo:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"kubectl get nodes\n"})}),"\n",(0,r.jsx)(o.h3,{id:"primeiros-passos-no-kubernetes-com-o-kubectl",children:"Primeiros passos no Kubernetes com o kubectl"}),"\n",(0,r.jsx)(o.p,{children:"Agora que temos o cluster criado, podemos executar o comando abaixo para verificar os pods que est\xe3o em execu\xe7\xe3o:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"kubectl get pods\n# No resources found in default namespace.\n"})}),"\n",(0,r.jsx)(o.p,{children:"O comando acima n\xe3o retornou nenhum pod, pois n\xe3o temos nenhum pod em execu\xe7\xe3o, isso no namespace default. Para verificar os pods em todos os namespaces, podemos executar o comando abaixo:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"kubectl get pods -A\n# ou\nkubectl get pods --all-namespaces\n"})}),"\n",(0,r.jsx)(o.p,{children:"ou procurar o namespace que queremos"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"kubectl get namespace\n"})}),"\n",(0,r.jsx)(o.p,{children:"e agora rodando o comando abaixo"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"kubectl get pods -n kube-system\n# ou\nkubectl get pods --namespace kube-system -o wide\n"})}),"\n",(0,r.jsx)(o.p,{children:"\xe9 poss\xedvel ver os pods que est\xe3o rodando no namespace kube-system."}),"\n",(0,r.jsx)(o.p,{children:"Agora que vimos que tem recursos padr\xe3o do Kubernetes rodando, podemos criar um pod com o comando abaixo:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"kubectl run nginx --image nginx\n"})}),"\n",(0,r.jsx)(o.p,{children:"Podemos acessar o pod criado com o comando abaixo:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"kubectl exec -it nginx -- /bin/bash\n"})}),"\n",(0,r.jsx)(o.p,{children:"e para deletar o pod, basta executar o comando abaixo:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"kubectl delete pod nginx\n"})}),"\n",(0,r.jsx)(o.h3,{id:"conhecendo-o-yaml-e-o-kubectl-com-dry-run",children:"Conhecendo o YAML e o kubectl com dry-run"}),"\n",(0,r.jsx)(o.p,{children:"O YAML \xe9 uma linguagem de marca\xe7\xe3o que \xe9 respons\xe1vel por definir a estrutura dos objetos do Kubernetes. Ele \xe9 respons\xe1vel por definir como os objetos do Kubernetes devem ser criados, como eles devem ser executados e como eles devem ser distribu\xeddos."}),"\n",(0,r.jsx)(o.p,{children:"O kubectl \xe9 a ferramenta de linha de comando do Kubernetes. Ele \xe9 respons\xe1vel por interagir com o Kubernetes, ou seja, ele \xe9 respons\xe1vel por criar, iniciar, parar, remover e gerenciar objetos do Kubernetes."}),"\n",(0,r.jsx)(o.p,{children:"O dry-run \xe9 uma op\xe7\xe3o do kubectl que \xe9 respons\xe1vel por simular a cria\xe7\xe3o de um objeto do Kubernetes. Ele \xe9 respons\xe1vel por simular a cria\xe7\xe3o de um objeto do Kubernetes, sem efetivamente criar o objeto."}),"\n",(0,r.jsx)(o.p,{children:"Para criar um objeto do Kubernetes com o kubectl, basta executar o comando abaixo:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"kubectl create -f arquivo.yaml\n"})}),"\n",(0,r.jsx)(o.p,{children:"Para simular a cria\xe7\xe3o de um objeto do Kubernetes com o kubectl, basta executar o comando abaixo:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"kubectl create -f arquivo.yaml --dry-run=client -o yaml\n"})}),"\n",(0,r.jsx)(o.h2,{id:"desafio",children:"Desafio"}),"\n",(0,r.jsx)(o.p,{children:"O desafio veio sendo um diretor ligando e solicitando a cria\xe7\xe3o de um cluster."}),"\n",(0,r.jsx)(o.h3,{id:"objetivos",children:"Objetivos"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:"\ud83c\udfaf Hora de instalar o kind e dar o primeiro passo na nossa jornada!"}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Deve criar o cluster com 3 workers e 1 control plane."}),"\n",(0,r.jsxs)(o.ol,{start:"2",children:["\n",(0,r.jsx)(o.li,{children:"Rodar um pod com o arquivo j\xe1 existente, que contem alguns erros"}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-yaml",children:'apiVersion: v1beta1\nkind: pods\nmetadata:\n  labels:\n    run: nginx-giropops\n    app: giropops-strigus\n  name: nginx_giropops\nspec:\n  containers:\n    - image: nginx\n      name: nginx_giropops\n      ports:\n        - containerPort: 80\n      resources:\n        limits:\n          memory:\n          cpu: "0.5"\n      requests:\n        memory: "4400MB"\n        cpu: "0,3"\n  dnsPolicy: ClusterSecond\n  restartPolicy: Always\n'})}),"\n",(0,r.jsx)(o.h3,{id:"solu\xe7\xe3o",children:"Solu\xe7\xe3o"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-yaml",children:"kind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n  - role: control-plane\n  - role: worker\n  - role: worker\n  - role: worker\n"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"kind create cluster --config kind-config.yaml\n"})}),"\n",(0,r.jsxs)(o.ol,{start:"2",children:["\n",(0,r.jsx)(o.li,{}),"\n"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-yaml",children:'apiVersion: v1\nkind: Pod\nmetadata:\n  labels:\n    run: nginx-giropops\n    app: giropops-strigus\n  name: nginx-giropops\nspec:\n  containers:\n    - image: nginx\n      name: nginx-giropops\n      ports:\n        - containerPort: 80\n      resources:\n        limits:\n          memory: "4400Mi"\n          cpu: "0.5"\n        requests:\n          memory: "4400Mi"\n          cpu: "0.3"\n  dnsPolicy: ClusterFirst\n  restartPolicy: Always\n'})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-bash",children:"kubectl apply -f nginx.yaml\n"})})]})}function p(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},4985:(e,o,n)=>{n.d(o,{Z:()=>s});n(7294);var r=n(5893);function s(e){let{children:o,fontSize:n="15px",color:s="#999"}=e;return(0,r.jsx)("div",{style:{textAlign:"center",fontSize:n,color:s},children:o})}},4089:(e,o,n)=>{n.d(o,{Z:()=>r});const r=n.p+"assets/images/img-kubernetes-cluster-architecture-6a8fd88e48a4e37a97456d434ff57b80.svg"},1151:(e,o,n)=>{n.d(o,{Z:()=>c,a:()=>i});var r=n(7294);const s={},a=r.createContext(s);function i(e){const o=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:o},e.children)}}}]);