"use strict";(self.webpackChunkcode=self.webpackChunkcode||[]).push([[4242],{5154:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var r=n(5893),o=n(1151);n(4985);const i={id:"index",title:"Day 6",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Day 6"},a=void 0,t={id:"pick-2024/kubernets/day6/index",title:"Day 6",description:"Sum\xe1rio",source:"@site/docs/cursos/pick-2024/kubernets/day6/index.md",sourceDirName:"pick-2024/kubernets/day6",slug:"/pick-2024/kubernets/day6/",permalink:"/cursos/pick-2024/kubernets/day6/",draft:!1,unlisted:!1,editUrl:"https://github.com/lucasbaccan/code/tree/master/docs/cursos/pick-2024/kubernets/day6/index.md",tags:[],version:"current",lastUpdatedBy:"Lucas Elias Baccan",lastUpdatedAt:1722796302e3,frontMatter:{id:"index",title:"Day 6",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Day 6"},sidebar:"docs",previous:{title:"Day 5",permalink:"/cursos/pick-2024/kubernets/day5/"},next:{title:"Day 7",permalink:"/cursos/pick-2024/kubernets/day7/"}},l={},d=[{value:"Sum\xe1rio",id:"sum\xe1rio",level:2},{value:"Dia 6",id:"dia-6",level:2},{value:"O que s\xe3o volumes?",id:"o-que-s\xe3o-volumes",level:3},{value:"O que \xe9 um StorageClass?",id:"o-que-\xe9-um-storageclass",level:3},{value:"O que \xe9 um PersistentVolume (PV)?",id:"o-que-\xe9-um-persistentvolume-pv",level:3},{value:"PersistentVolume com NFS",id:"persistentvolume-com-nfs",level:3},{value:"O que \xe9 um PersistentVolumeClaim (PVC)?",id:"o-que-\xe9-um-persistentvolumeclaim-pvc",level:3}];function c(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"sum\xe1rio",children:"Sum\xe1rio"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"\ud83c\udfa5 Intro Day-6 - 02:16"}),"\n",(0,r.jsx)(s.li,{children:"\ud83d\udcd6 O que iremos ver hoje?"}),"\n",(0,r.jsx)(s.li,{children:"\ud83c\udfa5 O que s\xe3o volumes? - 05:10"}),"\n",(0,r.jsx)(s.li,{children:"\ud83d\udcd6 O que s\xe3o volumes?"}),"\n",(0,r.jsx)(s.li,{children:"\ud83c\udfa5 O StorageClass - 15:15"}),"\n",(0,r.jsx)(s.li,{children:"\ud83d\udcd6 O StorageClass"}),"\n",(0,r.jsx)(s.li,{children:"\ud83c\udfa5 PV - O PersistentVolume - 18:04"}),"\n",(0,r.jsx)(s.li,{children:"\ud83d\udcd6 PV - O Persistent Volume"}),"\n",(0,r.jsx)(s.li,{children:"\ud83c\udfa5 PV - O PersistentVolume com NFS - 14:16"}),"\n",(0,r.jsx)(s.li,{children:"\ud83d\udcd6 PV - O PersistentVolume com NFS"}),"\n",(0,r.jsx)(s.li,{children:"\ud83c\udfa5 PVC - O PersistentVolumeClaim - 20:56"}),"\n",(0,r.jsx)(s.li,{children:"\ud83d\udcd6 PVC - O Persistent Volume Claim"}),"\n",(0,r.jsx)(s.li,{children:"\ud83d\udcdd Vamos testar o que voc\xea aprendeu"}),"\n",(0,r.jsx)(s.li,{children:"\ud83c\udfa5 Encerramento Day-6 - 01:07"}),"\n",(0,r.jsx)(s.li,{children:"\ud83d\udcd6 Encerramento Day-6"}),"\n",(0,r.jsx)(s.li,{children:"\ud83c\udfa5 Sess\xe3o Ao Vivo - Matheus Fidelis | 21/09/2023 - 01:10:58"}),"\n",(0,r.jsx)(s.li,{children:"\ud83d\udcd6 Slides da Sess\xe3o do Matheus Fidelis"}),"\n",(0,r.jsx)(s.li,{children:"\ud83d\udcdd Feedback"}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Legenda"}),(0,r.jsx)(s.br,{}),"\n","\ud83c\udfa5 - Aula gravada\n\ud83d\udcd6 - Material complementar\n\ud83d\udcdd - Atividade"]}),"\n",(0,r.jsx)(s.h2,{id:"dia-6",children:"Dia 6"}),"\n",(0,r.jsx)(s.p,{children:"No dia 6, voc\xea aprender\xe1 sobre volumes no Kubernetes. Voc\xea aprender\xe1 o que s\xe3o volumes, o que \xe9 um StorageClass, o que \xe9 um PersistentVolume (PV), o que \xe9 um PersistentVolumeClaim (PVC) e como utiliz\xe1-los no Kubernetes."}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:["Material complementar: ",(0,r.jsx)(s.a,{href:"https://livro.descomplicandokubernetes.com.br/pt/day-6/",children:"Leitura complementar do Day-6"})]})}),"\n",(0,r.jsx)(s.h3,{id:"o-que-s\xe3o-volumes",children:"O que s\xe3o volumes?"}),"\n",(0,r.jsx)(s.p,{children:"Volumes s\xe3o diret\xf3rios que podem ser montados em um ou mais cont\xeaineres em um pod. Eles podem ser usados para compartilhar dados entre cont\xeaineres em um pod ou para persistir dados al\xe9m do ciclo de vida de um cont\xeainer."}),"\n",(0,r.jsxs)(s.p,{children:["N\xf3s j\xe1 vimos o ",(0,r.jsx)(s.strong,{children:"emptyDir"})," que \xe9 um tipo de volume que \xe9 criado quando um pod \xe9 criado e \xe9 deletado quando o pod \xe9 deletado. Mas, e se voc\xea quiser persistir dados al\xe9m do ciclo de vida de um cont\xeainer? \xc9 a\xed que entram os ",(0,r.jsx)(s.strong,{children:"PersistentVolumes"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Para isso, precisamos entender tr\xeas conceitos:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"StorageClass"}),"\n",(0,r.jsx)(s.li,{children:"PersistentVolume (PV)"}),"\n",(0,r.jsx)(s.li,{children:"PersistentVolumeClaim (PVC)"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"o-que-\xe9-um-storageclass",children:"O que \xe9 um StorageClass?"}),"\n",(0,r.jsxs)(s.p,{children:["O ",(0,r.jsx)(s.strong,{children:"StorageClass"}),' \xe9 um recurso do Kubernetes que fornece uma maneira de descrever as "classes" de armazenamento que um cluster Kubernetes pode oferecer. Ele \xe9 usado para definir diferentes classes de armazenamento, como SSD, HDD, NFS, EBS, etc.']}),"\n",(0,r.jsx)(s.p,{children:"Para listar os StorageClasses dispon\xedveis no seu cluster, voc\xea pode executar o seguinte comando:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"kubectl get storageclass\n"})}),"\n",(0,r.jsx)(s.p,{children:"Caso queira criar um StorageClass, voc\xea pode usar o seguinte exemplo:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: giropops\nprovisioner: kubernetes.io/no-provisioner\nreclaimPolicy: Retain\nvolumeBindingMode: WaitForFirstConsumer\n"})}),"\n",(0,r.jsx)(s.h3,{id:"o-que-\xe9-um-persistentvolume-pv",children:"O que \xe9 um PersistentVolume (PV)?"}),"\n",(0,r.jsxs)(s.p,{children:["O ",(0,r.jsx)(s.strong,{children:"PersistentVolume"})," \xe9 um recurso do Kubernetes que representa um volume de armazenamento em um cluster. Ele \xe9 provisionado por um administrador de cluster e pode ser provisionado de v\xe1rias maneiras, como NFS, EBS, etc."]}),"\n",(0,r.jsx)(s.p,{children:'\xc9 o "peda\xe7o" de armazenamento que \xe9 provisionado no cluster e que pode ser reivindicado por um pod.'}),"\n",(0,r.jsx)(s.p,{children:"Para criar um PersistentVolume, voc\xea pode usar o seguinte exemplo:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  labels:\n    storage: lento\n  name: meu-pv\nspec:\n  capacity:\n    storage: 1Gi\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Retain\n  storageClassName: giropops\n  hostPath:\n    path: /mnt/data\n"})}),"\n",(0,r.jsx)(s.h3,{id:"persistentvolume-com-nfs",children:"PersistentVolume com NFS"}),"\n",(0,r.jsx)(s.p,{children:"O NFS (Network File System) \xe9 um sistema de arquivos distribu\xeddo que permite que um servidor exporte um sistema de arquivos para v\xe1rios clientes. No Kubernetes, voc\xea pode usar o NFS para provisionar PersistentVolumes."}),"\n",(0,r.jsx)(s.p,{children:"Para criar um PersistentVolume com NFS, voc\xea pode usar o seguinte exemplo:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:'apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: nfs-pv\n  labels:\n    type: nfs\nspec:\n  capacity:\n    storage: 1Gi\n  accessModes:\n    - ReadWriteOnce\n  persistentVolumeReclaimPolicy: Retain\n  storageClassName: giropopsnfs\n  nfs:\n    server: 192.168.0.1 # IP do servidor NFS\n    path: "/mnt/data"\n'})}),"\n",(0,r.jsx)(s.p,{children:"Agora basta criar um PersistentVolumeClaim (PVC) para reivindicar o PersistentVolume que voc\xea criou."}),"\n",(0,r.jsx)(s.h3,{id:"o-que-\xe9-um-persistentvolumeclaim-pvc",children:"O que \xe9 um PersistentVolumeClaim (PVC)?"}),"\n",(0,r.jsxs)(s.p,{children:["O ",(0,r.jsx)(s.strong,{children:"PersistentVolumeClaim"})," \xe9 um recurso do Kubernetes que representa uma solicita\xe7\xe3o de armazenamento por um pod. Ele \xe9 usado para reivindicar um PersistentVolume e vincul\xe1-lo a um pod."]}),"\n",(0,r.jsx)(s.p,{children:"Para criar um PersistentVolumeClaim, voc\xea pode usar o seguinte exemplo:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: meu-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 1Gi\n  storageClassName: giropops\n"})}),"\n",(0,r.jsx)(s.p,{children:"Ent\xe3o o PV \xe9 o recurso que representa o armazenamento f\xedsico, o PVC \xe9 a solicita\xe7\xe3o de armazenamento e o StorageClass \xe9 a classe de armazenamento que define as propriedades do armazenamento."})]})}function u(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},4985:(e,s,n)=>{n.d(s,{Z:()=>o});n(7294);var r=n(5893);function o(e){let{children:s,fontSize:n="15px",color:o="#999"}=e;return(0,r.jsx)("div",{style:{textAlign:"center",fontSize:n,color:o},children:s})}},1151:(e,s,n)=>{n.d(s,{Z:()=>t,a:()=>a});var r=n(7294);const o={},i=r.createContext(o);function a(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);