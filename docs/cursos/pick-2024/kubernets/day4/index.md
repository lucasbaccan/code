---
id: index
title: Day 4
hide_title: false
hide_table_of_contents: false
sidebar_label: Day 4
---

import Center from "@site/src/components/Center";

## Sumário

- 🎥 Intro Day-4 - 02:28
- 📖 O que iremos ver hoje?
- 🎥 O que é um ReplicaSet? - 06:49
- 📖 ReplicaSet
- 🎥 O Deployment e o ReplicaSet - 13:03
- 📖 O Deployment e o ReplicaSet
- 🎥 Criando o nosso ReplicaSet - 14:01
- 📖 Criando o nosso ReplicaSet
- 🎥 O que é um DaemonSet? - 04:45
- 📖 DaemonSet
- 🎥 Criando o nosso DaemonSet - 22:42
- 📖 Criando um DaemonSet
- 🎥 Porque não usamos o kubectl create agora - 02:22
- 🎥 O que são as Probes no Kubernetes? - 05:56
- 📖 As Probes do Kubernetes
- 🎥 Liveness Probe - 12:53
- 📖 Liveness Probe
- 🎥 Readiness Probe - 12:27
- 📖 Readiness Probe
- 🎥 StartUp Probe - 13:26
- 📖 StartUp Probe
- 📖 Exemplo com todas as Probes
- 🎥 Encerramento Day-4 - 02:30

**Legenda**  
🎥 - Aula gravada
📖 - Material complementar
📝 - Atividade

## Dia 4

No dia 4, você aprenderá sobre ReplicaSet, DaemonSet e Probes. Você aprenderá a criar, gerenciar e monitorar ReplicaSets e DaemonSets, além de aprender a configurar Probes para garantir a saúde dos seus containers.

:::info
Material complementar: [Leitura complementar do Day-4](https://livro.descomplicandokubernetes.com.br/pt/day-4/)
:::

### O que é um ReplicaSet?

O ReplicaSet é um recurso do Kubernetes que é responsável por garantir que um conjunto de pods esteja sempre em execução e disponível para os usuários. Ele é responsável por garantir que o número de réplicas de um pod esteja sempre de acordo com o desejado.

### O Deployment e o ReplicaSet

O Deployment é um recurso do Kubernetes que é responsável por gerenciar a implantação de aplicações. Ele é responsável por garantir que um conjunto de pods esteja sempre em execução e disponível para os usuários. O Deployment utiliza o ReplicaSet para garantir que o número de réplicas de um pod esteja sempre de acordo com o desejado.

### Criando o nosso ReplicaSet

Para criar um ReplicaSet, você precisa criar um arquivo YAML com a definição do ReplicaSet e aplicar o arquivo YAML no cluster.

```yaml title="nginx-replicaset.yaml"
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  labels:
    app: nginx-replicaset
  name: nginx-replicaset
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx-replicaset
  template:
    metadata:
      labels:
        app: nginx-replicaset
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

Mas não é recomendado criar ReplicaSets diretamente, pois o Deployment é uma abstração mais poderosa e flexível que o ReplicaSet.

Se você alterar alguma propriedade do ReplicaSet e aplicar o arquivo YAML, os pods não serão atualizados. Para atualizar os pods, você precisa excluir o ReplicaSet e criar um novo.

### O que é um DaemonSet?

O DaemonSet é um recurso do Kubernetes que é responsável por garantir que um pod esteja em execução em todos os nós do cluster. Por exemplo, você pode utilizar um DaemonSet para garantir que um pod de monitoramento esteja em execução em todos os nós do cluster.

```yaml title="nginx-daemonset.yaml"
apiVersion: apps/v1
kind: DaemonSet
metadata:
  labels:
    app: nginx-daemonset
  name: nginx-daemonset
spec:
  selector:
    matchLabels:
      app: nginx-daemonset
  template:
    metadata:
      labels:
        app: nginx-daemonset
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

Se você alterar alguma propriedade do DaemonSet e aplicar o arquivo YAML, os pods vão ser atualizados automaticamente após a aplicação do arquivo YAML.

### Porque não usamos o kubectl create agora

O comando `kubectl create` não cria recursos do tipo ReplicaSet e DaemonSet. Para criar um ReplicaSet ou DaemonSet, você precisa utilizar o comando `kubectl apply`.

```bash
kubectl create --help
# Available Commands:
#   clusterrole           Create a cluster role
#   clusterrolebinding    Create a cluster role binding for a particular cluster role
#   configmap             Create a config map from a local file, directory or literal value
#   cronjob               Create a cron job with the specified name
#   deployment            Create a deployment with the specified name
#   ingress               Create an ingress with the specified name
#   job                   Create a job with the specified name
#   namespace             Create a namespace with the specified name
#   poddisruptionbudget   Create a pod disruption budget with the specified name
#   priorityclass         Create a priority class with the specified name
#   quota                 Create a quota with the specified name
#   role                  Create a role with single rule
#   rolebinding           Create a role binding for a particular role or cluster role
#   secret                Create a secret using specified subcommand
#   service               Create a service using a specified subcommand
#   serviceaccount        Create a service account with the specified name
#   token                 Request a service account token
```

### O que são as Probes no Kubernetes?

As Probes são mecanismos que o Kubernetes utiliza para verificar a saúde dos containers. Existem três tipos de Probes: Liveness Probe, Readiness Probe e StartUp Probe.

### Liveness Probe

A Liveness Probe é utilizada para verificar se o container está em execução. Se o container falhar na Liveness Probe, o Kubernetes irá reiniciar o container.

### Readiness Probe

A Readiness Probe é utilizada para verificar se o container está pronto para receber tráfego. Se o container falhar na Readiness Probe, o Kubernetes irá remover o container do serviço.

### StartUp Probe

A StartUp Probe é utilizada para verificar se o container está pronto para receber tráfego após a inicialização. A StartUp Probe é utilizada para verificar se o container está pronto para receber tráfego após a inicialização.

### Exemplo com todas as Probes

```yaml title="liveness-probe.yaml"
apiVersion: v1
kind: Pod
metadata:
  labels:
    app: liveness-probe
  name: liveness-probe
spec:
  containers:
    - name: liveness-probe
      image: nginx
      livenessProbe: # Liveness Probe
        httpGet: # Faz uma requisição HTTP GET para o container
          path: / # Caminho da requisição
          port: 80 # Porta da requisição
        # tcpSocket:              # Faz uma requisição TCP para o container
        #   port: 80              # Porta da requisição
        initialDelaySeconds: 15 # Tempo para iniciar a verificação
        periodSeconds: 5 # Intervalo entre as verificações
        timeoutSeconds: 5 # Tempo limite para a verificação
        failureThreshold: 3 # Número de falhas para reiniciar o container
      readinessProbe: # Readiness Probe
        exec: # Executa um comando no container
          command: # Comando a ser executado
            - curl
            - -f
            - http://localhost:80
        initialDelaySeconds: 15 # Tempo para iniciar a verificação
        periodSeconds: 5 # Intervalo entre as verificações
        timeoutSeconds: 5 # Tempo limite para a verificação
        failureThreshold: 3 # Número de falhas para remover o container do serviço
      startupProbe: # StartUp Probe
        tcpSocket: # Faz uma requisição TCP para o container
          port: 80 # Porta da requisição
        initialDelaySeconds: 15 # Tempo para iniciar a verificação
      resources:
        limits:
          memory: "128Mi"
          cpu: "500m"
        requests:
          memory: "64Mi"
          cpu: "250m"
```

## Desafio

### Objetivos

Criar o deployment de 3 aplicações diferentes, contendo limites de recursos de CPU e memória, estrarégia de atualização e a configuração de probes.

### Solução

```yaml title="deployments.yaml"
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
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 1
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
          livenessProbe:
            httpGet:
              path: /
              port: 80
            initialDelaySeconds: 15
            periodSeconds: 5
            timeoutSeconds: 5
            failureThreshold: 3
          readinessProbe:
            httpGet:
              path: /
              port: 80
            initialDelaySeconds: 15
            periodSeconds: 5
            timeoutSeconds: 5
            failureThreshold: 3
          startupProbe:
            httpGet:
              path: /
              port: 80
            initialDelaySeconds: 15
---
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: apache-deployment
  name: apache-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: apache-deployment
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 1
  template:
    metadata:
      labels:
        app: apache-deployment
    spec:
      containers:
        - name: apache
          image: httpd:latest
          resources:
            limits:
              memory: "128Mi"
              cpu: "500m"
            requests:
              memory: "64Mi"
              cpu: "250m"
          livenessProbe:
            httpGet:
              path: /
              port: 80
            initialDelaySeconds: 15
            periodSeconds: 5
            timeoutSeconds: 5
            failureThreshold: 3
          readinessProbe:
            httpGet:
              path: /
              port: 80
            initialDelaySeconds: 15
            periodSeconds: 5
            timeoutSeconds: 5
            failureThreshold: 3
          startupProbe:
            httpGet:
              path: /
              port: 80
            initialDelaySeconds: 15
---
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: tomcat-deployment
  name: tomcat-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: tomcat-deployment
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 1
  template:
    metadata:
      labels:
        app: tomcat-deployment
    spec:
      containers:
        - name: tomcat
          image: tomcat:latest
          resources:
            limits:
              memory: "128Mi"
              cpu: "500m"
            requests:
              memory: "64Mi"
              cpu: "250m"
          livenessProbe:
            tcpSocket:
              port: 8080
            initialDelaySeconds: 15
            periodSeconds: 5
            timeoutSeconds: 5
            failureThreshold: 3
          readinessProbe:
            tcpSocket:
              port: 8080
            initialDelaySeconds: 15
            periodSeconds: 5
            timeoutSeconds: 5
            failureThreshold: 3
          startupProbe:
            tcpSocket:
              port: 8080
            initialDelaySeconds: 15
```

E rodar o comando:

```bash
kubectl apply -f deployments.yaml
```
