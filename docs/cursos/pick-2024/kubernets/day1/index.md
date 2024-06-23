---
id: index
title: Day 1
hide_title: false
hide_table_of_contents: false
sidebar_label: Day 1
---

import Center from "@site/src/components/Center";

## Sumário

- 🎥 Intro Day-1 - 01:38
- 🎥 O que é um container? - 09:58
- 🎥 O que é um container engine? - 04:02
- 🎥 O que é um container runtime? - 07:07
- 🎥 O que é a OCI? - 02:03
- 🎥 O que é o Kubernetes? - 08:10
- 🎥 O que são os workers e o control plane do Kubernetes? - 07:16
- 🎥 Quais os componentes do control plane do Kubernetes? - 08:58
- 🎥 Quais os componentes dos workers do Kubernetes? - 04:11
- 🎥 Quais as portas TCP e UDP dos componentes do Kubernetes? - 06:10
- 🎥 Introdução a pods, replica sets, deployments e service - 14:46
- 🎥 Entendendo e instalando o kubectl - 06:22
- 🎥 Criando o nosso primeiro cluster com o kind - 18:43
- 🎥 Primeiros passos no Kubernetes com o kubectl - 25:04
- 🎥 Conhecendo o YAML e o kubectl com dry-run - 08:53
- 🎥 Encerramento Day-1 - 02:00
- 🎥 Lição de casa - 00:41
- 📖 Leitura complementar do Day-1
- 🎥 A Pessoa_Diretora_X me ligou e você tem o seu primeiro desafio! - 04:56
- 📝 Desafio do Day-1
- 📖 Download da leitura complementar do Day-1 - 23 Páginas
- 📝 Exame do Day-1 - 9 questões

**Legenda**  
🎥 - Aula gravada
📖 - Material complementar
📝 - Atividade
⌛ - Revisão/Reflexão

## Dia 1

Agora começamos a transição do Docker para o Kubernetes, onde vamos aprender o que é um container, o que é um container engine, o que é um container runtime, o que é a OCI, o que é o Kubernetes, o que são os workers e o control plane do Kubernetes, quais os componentes do control plane do Kubernetes, quais os componentes dos workers do Kubernetes, quais as portas TCP e UDP dos componentes do Kubernetes, introdução a pods, replica sets, deployments e service, entendendo e instalando o kubectl, criando o nosso primeiro cluster com o kind, primeiros passos no Kubernetes com o kubectl, conhecendo o YAML e o kubectl com dry-run.

:::info
Material complementar: [Leitura complementar do Day-1](https://livro.descomplicandokubernetes.com.br/pt/day-1/)
:::

### O que é um container?

Container é uma unidade de software que empacota código e todas as suas dependências, de modo que a aplicação seja executada de maneira rápida e confiável de um ambiente de computação para outro. Um container é uma forma de virtualização a nível de sistema operacional que permite executar múltiplos ambientes isolados em uma única instância de um sistema operacional.

Em outras palavras, um container é uma forma de isolamento de recursos. CPU, Memória, Rede, Disco, etc. Mas ele consome os recursos do host, ou seja, ele não tem recursos próprios, ele usa os recursos do host.Ne

### O que é um container engine?

Container Engine é um software que fornece uma interface para interagir com o sistema operacional para que ele possa criar e gerenciar containers. O container engine é responsável por criar, iniciar, parar, remover e gerenciar containers.

Ele não conversa diretamente com o hardware, ele conversa com o sistema operacional, solicitando recursos para criar e gerenciar containers.

### O que é um container runtime?

Container Runtime é um software que executa containers. Ele é responsável por executar o container, ou seja, ele é o responsável por criar o container e executar o processo dentro do container.

Ele sim conversa diretamente com o hardware, com o kernel, interpretando as instruções do container engine e solicitando recursos diretamente ao hardware.

Temos três tipode de container runtime:

- Low-level: São runtimes que interagem diretamente com o kernel do sistema operacional, como o runc, crun e o runsc.
- High-level: São runtimes que interagem com o kernel do sistema operacional através de uma API, como o containerd, podman e o cri-o.
- Sandbox: São runtimes que interagem com o kernel do sistema operacional através de uma API, como o gVisor e o Kata Containers.

### Container Engine e Container Runtime

Caso queira ler mais, pode acessar a documentação feita pelo Jeferson.

- [Container Engine](https://github.com/badtuxx/CertifiedContainersExpert/blob/main/DescomplicandoKubernetes/day-1/README.md#o-container-engine)
- [Container Runtime](https://github.com/badtuxx/CertifiedContainersExpert/blob/main/DescomplicandoKubernetes/day-1/README.md#o-container-runtime)

### O que é a OCI?

OCI (Open Container Initiative) é uma organização que tem como objetivo padronizar o formato dos containers. A OCI é responsável por padronizar o formato dos containers, ou seja, ela define como um container deve ser criado, como ele deve ser executado e como ele deve ser distribuído.

O principal projeto da OCI é o _runc_, que é um runtime de containers que implementa a especificação da OCI.

### O que é o Kubernetes?

De forma rápida, o Kubernets é um orquestrador de containers. Ele é responsável por gerenciar containers em um ambiente distribuído, ou seja, ele é responsável por criar, iniciar, parar, remover e gerenciar containers em um ambiente distribuído.

A comunidade chama o Kubernetes de K8s (se fala 'kates'), que é a abreviação de Kubernetes, onde o 8 representa as 8 letras que estão entre o **K** e o **s**, que é o padrão [i18n](http://www.i18nguy.com/origini18n.html).

### O que são os workers e o control plane do Kubernetes?

O Kubernetes é dividido em dois grupos de máquinas, os workers e o control plane.

Os workers são responsáveis por executar os containers, ou seja, eles são responsáveis por criar, iniciar, parar, remover e gerenciar containers.

O control plane é responsável por gerenciar os workers, ou seja, ele é responsável por criar, iniciar, parar, remover e gerenciar os workers.

<Center>

![Kubernetes](img-kubernetes-cluster-architecture.svg)  
Fonte: [Kubernetes](https://kubernetes.io/docs/concepts/architecture/)

</Center>

### Quais os componentes do control plane do Kubernetes?

O control plane é composto por quatro componentes:

- **etcd**: É o componente que armazena o estado do cluster. Ele é responsável por armazenar as informações do cluster, como os objetos do Kubernetes, os objetos do cluster, os objetos dos namespaces, os objetos dos nodes, etc.
- **kube-apiserver**: É o componente que expõe a API do Kubernetes. Ele é responsável por receber as requisições, validar as requisições, autenticar as requisições, autorizar as requisições e encaminhar as requisições para os componentes responsáveis por executar as ações solicitadas. Ele é o único componente que conversa com o etcd.
- **kube-scheduler**: É o componente que é responsável por agendar os pods nos nodes. Ele é responsável por escolher o node que vai executar o pod, levando em consideração as regras de agendamento, como a quantidade de recursos disponíveis, a quantidade de recursos solicitados, a quantidade de pods já executando no node, etc.
- **kube-controller-manager**: É o componente que é responsável por controlar o estado do cluster. Ele é responsável por garantir que o estado do cluster está de acordo com o estado desejado, ou seja, ele é responsável por garantir que os objetos do Kubernetes estão de acordo com as regras definidas.

Esses são os componentes básicos do control plane do Kubernetes, mas existem outros componentes que são opcionais, como o kube-proxy, o ingress controller, o dns, o metrics server, o dashboard, etc.

### Quais os componentes dos workers do Kubernetes?

Os workers são compostos por três componentes:

- **kubelet**: É o componente que é responsável por executar os containers. Ele é responsável por criar, iniciar, parar, remover e gerenciar containers.
- **kube-proxy**: É o componente que é responsável por gerenciar o tráfego de rede. Ele é responsável por encaminhar o tráfego de rede para os containers.
- **container runtime interface**: É o componente que é responsável por executar os containers. Ele é responsável por criar o container e executar o processo dentro do container.

### Quais as portas TCP e UDP dos componentes do Kubernetes?

Os componentes do Kubernetes utilizam várias portas TCP e UDP para se comunicar. Abaixo estão as portas TCP e UDP dos componentes do Kubernetes:

| Componente              | Porta TCP   | Porta UDP | Grupo         |
| ----------------------- | ----------- | --------- | ------------- |
| kube-apiserver          | 6443        |           | Control Plane |
| etcd                    | 2379-2380   |           | Control Plane |
| kubelet                 | 10250       |           | Control Plane |
| kube-scheduler          | 10251       |           | Control Plane |
| kube-controller-manager | 10252       |           | Control Plane |
| nodeport                | 30000-32767 |           | Worker        |

### Introdução a pods, replica sets, deployments e service

Pods, Replica Sets, Deployments e Services são os principais objetos do Kubernetes.

- **Pods**: É o menor objeto do Kubernetes. Ele é responsável por executar um ou mais containers. Ele é a menor unidade de execução do Kubernetes.
- **Replica Sets**: É o objeto que é responsável por garantir que um número específico de pods está executando. Ele é responsável por garantir que um número específico de pods está em execução.
- **Deployments**: É o objeto que é responsável por garantir que um número específico de replica sets está em execução. Ele é responsável por garantir que um número específico de replica sets está em execução.
- **Services**: É o objeto que é responsável por expor os pods para o mundo externo. Ele é responsável por expor os pods para o mundo externo.

### Entendendo e instalando o kubectl

O kubectl é a ferramenta de linha de comando do Kubernetes. Ele é responsável por interagir com o Kubernetes, ou seja, ele é responsável por criar, iniciar, parar, remover e gerenciar objetos do Kubernetes.

Para instalar o kubectl, basta acessar a [documentação oficial](https://kubernetes.io/docs/tasks/tools/install-kubectl/).

### Criando o nosso primeiro cluster com o kind

O kind é uma ferramenta que é responsável por criar clusters Kubernetes. Ele é uma ferramenta que é responsável por criar clusters Kubernetes em containers Docker. Não é recomendado para ambientes de produção, mas é recomendado para ambientes de desenvolvimento.

Para instalar o kind, basta acessar a [documentação oficial](https://kind.sigs.k8s.io/docs/user/quick-start/).

Após instalar o kind, basta executar o comando abaixo para criar o cluster:

```bash
kind create cluster
# ou
kind create cluster --config kind-config.yaml
```

Podemos verificar se o cluster foi criado com sucesso executando o comando abaixo:

```bash
kubectl get nodes
```

### Primeiros passos no Kubernetes com o kubectl

Agora que temos o cluster criado, podemos executar o comando abaixo para verificar os pods que estão em execução:

```bash
kubectl get pods
# No resources found in default namespace.
```

O comando acima não retornou nenhum pod, pois não temos nenhum pod em execução, isso no namespace default. Para verificar os pods em todos os namespaces, podemos executar o comando abaixo:

```bash
kubectl get pods -A
# ou
kubectl get pods --all-namespaces
```

ou procurar o namespace que queremos

```bash
kubectl get namespace
```

e agora rodando o comando abaixo

```bash
kubectl get pods -n kube-system
# ou
kubectl get pods --namespace kube-system -o wide
```

é possível ver os pods que estão rodando no namespace kube-system.

Agora que vimos que tem recursos padrão do Kubernetes rodando, podemos criar um pod com o comando abaixo:

```bash
kubectl run nginx --image nginx
```

Podemos acessar o pod criado com o comando abaixo:

```bash
kubectl exec -it nginx -- /bin/bash
```

e para deletar o pod, basta executar o comando abaixo:

```bash
kubectl delete pod nginx
```

### Conhecendo o YAML e o kubectl com dry-run

O YAML é uma linguagem de marcação que é responsável por definir a estrutura dos objetos do Kubernetes. Ele é responsável por definir como os objetos do Kubernetes devem ser criados, como eles devem ser executados e como eles devem ser distribuídos.

O kubectl é a ferramenta de linha de comando do Kubernetes. Ele é responsável por interagir com o Kubernetes, ou seja, ele é responsável por criar, iniciar, parar, remover e gerenciar objetos do Kubernetes.

O dry-run é uma opção do kubectl que é responsável por simular a criação de um objeto do Kubernetes. Ele é responsável por simular a criação de um objeto do Kubernetes, sem efetivamente criar o objeto.

Para criar um objeto do Kubernetes com o kubectl, basta executar o comando abaixo:

```bash
kubectl create -f arquivo.yaml
```

Para simular a criação de um objeto do Kubernetes com o kubectl, basta executar o comando abaixo:

```bash
kubectl create -f arquivo.yaml --dry-run=client -o yaml
```

## Desafio

O desafio veio sendo um diretor ligando e solicitando a criação de um cluster.

### Objetivos

1. 🎯 Hora de instalar o kind e dar o primeiro passo na nossa jornada!

Deve criar o cluster com 3 workers e 1 control plane.

2. Rodar um pod com o arquivo já existente, que contem alguns erros

```yaml
apiVersion: v1beta1
kind: pods
metadata:
  labels:
    run: nginx-giropops
    app: giropops-strigus
  name: nginx_giropops
spec:
  containers:
    - image: nginx
      name: nginx_giropops
      ports:
        - containerPort: 80
      resources:
        limits:
          memory:
          cpu: "0.5"
      requests:
        memory: "4400MB"
        cpu: "0,3"
  dnsPolicy: ClusterSecond
  restartPolicy: Always
```

### Solução

1.

```yaml
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
  - role: control-plane
  - role: worker
  - role: worker
  - role: worker
```

```bash
kind create cluster --config kind-config.yaml
```

2.

```yaml
apiVersion: v1
kind: Pod
metadata:
  labels:
    run: nginx-giropops
    app: giropops-strigus
  name: nginx-giropops
spec:
  containers:
    - image: nginx
      name: nginx-giropops
      ports:
        - containerPort: 80
      resources:
        limits:
          memory: "4400Mi"
          cpu: "0.5"
        requests:
          memory: "4400Mi"
          cpu: "0.3"
  dnsPolicy: ClusterFirst
  restartPolicy: Always
```

```bash

```

```bash
kubectl apply -f nginx.yaml
```
