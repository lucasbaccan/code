---
id: index
title: Day 3
hide_title: false
hide_table_of_contents: false
sidebar_label: Day 3
---

import Center from "@site/src/components/Center";

## Sumário

- 🎥 Intro Day-3 - 01:17
- 🎥 O que é um Deployment? - 05:44
- 🎥 Criando um Deployment através de um manifesto - 14:36
- 🎥 Criando mais Deployments e vendo os detalhes - 11:22
- 🎥 Como atualizar um Deployment? - 10:06
- 🎥 Estratégias de atualizações de nossos Deployments - 16:18
- 🎥 Fazendo Rollback e conhecendo o comando Rollout - 16:23
- 🎥 Encerramento Day-3 - 01:04
- 📖 Leitura complementar do Day-3 - 17:25
- 📖 Download da leitura complementar do Day-3
- 📝 Desafio do Day-3

**Legenda**  
🎥 - Aula gravada
📖 - Material complementar
📝 - Atividade

## Dia 3

No dia 3, você aprenderá sobre Deployments, que são responsáveis por gerenciar a implantação de aplicações no Kubernetes. Você aprenderá a criar, gerenciar e monitorar Deployments, além de aprender a atualizar, fazer rollback e conhecer as estratégias de atualizações de Deployments.

:::info
Material complementar: [Leitura complementar do Day-3](https://livro.descomplicandokubernetes.com.br/pt/day-3/)
:::

### O que é um Deployment?

O Deployment é um recurso do Kubernetes que é responsável por gerenciar a implantação de aplicações. Ele é responsável por garantir que um conjunto de pods esteja sempre em execução e disponível para os usuários.

O Deployment permite que você defina o número de réplicas de um pod, a estratégia de atualização, o controle de falhas e o controle de versão da aplicação.

### Criando um Deployment através de um manifesto

Para criar um Deployment através de um manifesto, você precisa criar um arquivo YAML com a definição do Deployment e aplicar o arquivo YAML no cluster.

```yaml title="nginx-deployment.yaml"
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: nginx-deployment
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx-deployment
  strategy: {}
  template:
    metadata:
      labels:
        app: nginx-deployment
    spec:
      containers:
        - name: nginx
          image: nginx:latest
          resources:
            limits:
              memory: "128Mi"
              cpu: "500m"
            requests:
              memory: "64Mi"
              cpu: "250m"
```

Para aplicar o arquivo YAML no cluster, você pode utilizar o comando:

```bash
kubectl apply -f nginx-deployment.yaml
```

Para listar os Deployments em execução no cluster, você pode utilizar o comando:

```bash
kubectl get deployments
# ou
kubectl get pods -l app=nginx-deployment
# ou
kubectl get replicasets -l app=nginx-deployment
```

### Criando mais Deployments e vendo os detalhes

Você consegue criar um deployment sem precisar criar um arquivo yaml, utilizando o comando `kubectl create deployment <nome-do-deployment> --image=<nome-da-imagem>`.

```bash
kubectl create deployment nginx-deployment --image=nginx --replicas=3
```

Para saber mais detalhes sobre um Deployment específico, você pode utilizar o comando:

```bash
kubectl describe deployment <nome-do-deployment>
# exemplo
kubectl describe deployment nginx-deployment
```

### Como atualizar um Deployment?

Para atualizar um Deployment, você pode editar o arquivo YAML do Deployment e aplicar as alterações no cluster.

```bash
kubectl apply -f nginx-deployment.yaml
```

Ou você pode utilizar o comando `kubectl set image deployment/<nome-do-deployment> <container>=<nova-imagem>`.

```bash
kubectl set image deployment/nginx-deployment nginx=nginx:1.19
```

### Estratégias de atualizações de nossos Deployments

O Kubernetes oferece diferentes estratégias de atualizações de Deployments, como a estratégia `Recreate` e `RollingUpdate`.

- **Recreate**: Nessa estratégia, o Kubernetes remove todos os pods antigos e cria novos pods com a nova versão da aplicação. Essa estratégia é mais rápida, mas pode causar indisponibilidade da aplicação durante a atualização.

- **RollingUpdate**: Nessa estratégia, o Kubernetes atualiza os pods gradualmente, um a um, garantindo que a aplicação esteja sempre disponível. O termo _Surge_ é utilizado para definir o número de pods que serão criados antes de remover os pods antigos, e o termo _MaxUnavailable_ é utilizado para definir o número máximo de pods que podem ficar indisponíveis durante a atualização.

Você consegue ver como está a atualização do seu deployment utilizando o comando `kubectl rollout status deployment/<nome-do-deployment>`.

```bash
kubectl rollout status deployment/nginx-deployment
```

### Fazendo Rollback

Para fazer um rollback de um Deployment, você pode utilizar o comando `kubectl rollout undo deployment/<nome-do-deployment>`.

```bash
kubectl rollout undo deployment/nginx-deployment
```

Você pode ver o histórico de atualizações de um Deployment utilizando o comando `kubectl rollout history deployment/<nome-do-deployment>`.

```bash
kubectl rollout history deployment/nginx-deployment
```

Da mesma forma, você pode fazer um rollback para uma revisão específica utilizando o comando `kubectl rollout undo deployment/<nome-do-deployment> --to-revision=<número-da-revisão>`.

```bash
kubectl rollout undo deployment/nginx-deployment --to-revision=2
```

E se você não sabe qual revisão deseja fazer o rollback, você pode ver o histórico de revisões e escolher a revisão desejada para verificar as alterações feitas.

```bash
kubectl rollout history deployment/nginx-deployment --revision=2
```

## Desafio

### Objetivos

O nosso objetivo aqui é fazer a instalação do Nginx!

Atenção! 📢

Corrija todos os erros encontrados e realize o deploy do Nginx utilizando o arquivo deployment.yaml.

Tarefas

- Utilize o arquivo /root/deployment.yaml para realizar o deploy do nosso Deployment;
- Corrija todos os erros;
- Configure o limite de utilização de recursos da seguinte maneira:
  - Requests:
    - 64Mi de Memória;
    - 0.1 de CPU;
  - Limits:
    - 128 Mi de Memória;
    - 0.3 de CPU;
- Use a estratégia de atualização do Deployment que atualiza todos os pods de uma vez;
- A versão do Nginx deve ser a 1.16.0.

```yaml title="deployment.yaml"
apiVersion: app/v1
kind: Deployment
metadata:
  label:
    app: nginx-girus
    opa: sensacional-juvenal
name: nginx-girus
specs:
  replicas: 5
    selector:
      matchLabels:
      app: nginx-girus
  strategies:
    type: recreate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 2
  strategies: {}
  replicas: 2
  template:
    metadata:
    label:
      app: nginx
    specs:
      containers:
      - image: nginx 1.15.0
        name: nginx
        resource: {}
```

### Solução

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: nginx-girus
    opa: sensacional-juvenal
  name: nginx-girus
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx-girus
  strategy:
    type: Recreate
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - image: nginx:1.16.0
          name: nginx
          resources:
            limits:
              memory: "128Mi"
              cpu: "300m"
            requests:
              memory: "64Mi"
              cpu: "100m"
```