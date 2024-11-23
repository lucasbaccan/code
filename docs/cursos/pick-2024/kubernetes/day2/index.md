---
id: index
title: Day 2
hide_title: false
hide_table_of_contents: false
sidebar_label: Day 2
---

import Center from "@site/src/components/Center";

## Sumário

- 🎥 Intro Day-2 - 01:15
- 🎥 O que é um Pod? - 05:09
- 🎥 Os sensacionais kubectl get pods e o kubectl describe pods - 14:56
- 🎥 Conhecendo o kubectl attach e o kubectl exec - 25:58
- 🎥 Criando o nosso primeiro pod multi container utilizando um manifesto - 21:47
- 🎥 Limitando o consumo de recursos de CPU e Memória - 21:15
- 🎥 Configurando o nosso primeiro volume EmptyDir - 16:00
- 🎥 Encerramento do Day-2 - 02:43
- 🎥 Lição de casa - 01:44
- 📖 Leitura complementar do Day-2
- 📖 Download da leitura complementar do Day-2
- 📝 Exame do Day-2 - 8 questões
- 📝 Desafio Day-2

**Legenda**  
🎥 - Aula gravada
📖 - Material complementar
📝 - Atividade

## Dia 2

O dia 2 é o dia com foco em Pods, que são a menor unidade de trabalho no Kubernetes. Neste dia, você aprenderá a criar, gerenciar e monitorar Pods. Além disso, você aprenderá a limitar o consumo de recursos de CPU e memória, configurar volumes e criar Pods multicontainer.

:::info
Material complementar: [Leitura complementar do Day-2](https://livro.descomplicandokubernetes.com.br/pt/day-2/)
:::

### O que é um Pod?

O pod é a menor unidade de trabalho no Kubernetes. Ele é composto por um ou mais containers que compartilham recursos, como rede e armazenamento. Antigamente era comum ter um container por pod, mas hoje em dia é mais comum ter múltiplos containers por pod, como sidecar containers.

### `kubectl get pods` e `kubectl describe pods`

O `kubectl get pods` é um dos comandos mais utilizados no dia a dia de um administrador de Kubernetes. Ele é utilizado para listar os pods em execução no cluster. Já o `kubectl describe pods` é utilizado para obter informações detalhadas sobre um pod específico.

Você pode listar todos os pods em execução no cluster com o comando:

```bash
kubectl get pods
# ou
kubectl get pods -A # para listar todos os pods em todos os namespaces
```

Para obter informações detalhadas sobre um pod específico, você pode utilizar o comando:

```bash
kubectl describe pod <nome-do-pod>
```
### `kubectl attach` e `kubectl exec`

O `kubectl attach` é utilizado para anexar um terminal a um pod em execução. Já o `kubectl exec` é utilizado para executar um comando em um pod em execução.

Para anexar um terminal a um pod em execução, você pode utilizar o comando:

```bash
kubectl attach -it <nome-do-pod>
```

E para executar um comando em um pod em execução, você pode utilizar o comando:

```bash
kubectl exec -it <nome-do-pod> -- <comando>
```

### Criando o nosso primeiro pod multi container utilizando um manifesto

Vamos primeiro criar um arquivo `yaml` de criação de pod, utilize o comando:

```bash
	kubectl run girus --image nginx --dry-run=client -o yaml > pod.yaml
```

Agora, vamos adicionar um segundo container ao pod, edite o arquivo `pod.yaml` e adicione o seguinte trecho:

```yaml
apiVersion: v1
kind: Pod
metadata:
  labels:
    run: girus
  name: girus
spec:
  containers:
    - image: nginx
      name: nginx
      resources: {}
    - image: httpd
      name: apache
      resources: {}
  dnsPolicy: ClusterFirst
  restartPolicy: Always
```

E então, crie o pod com o comando:

```bash
kubectl apply -f pod.yaml
```

Caso queira verificar se o pod foi criado com sucesso, utilize o comando:

```bash
kubectl get pods
```

Se quiser verificar os detalhes do pod, utilize o comando:

```bash
kubectl describe pod girus -c nginx
# ou
kubectl describe pod girus -c apache
```

### Limitando o consumo de recursos de CPU e Memória

Para limitar o consumo de recursos de CPU e memória de um pod, você pode adicionar as seguintes configurações ao arquivo `yaml` do pod:

```yaml
apiVersion: v1
kind: Pod
metadata:
  labels:
    run: girus
  name: girus
spec:
  containers:
    - image: nginx
      name: nginx
      resources:
        limits:
          cpu: "500m"
          memory: "256Mi"
        requests:
          cpu: "200m"
          memory: "128Mi"
  dnsPolicy: ClusterFirst
  restartPolicy: Always
```

A tag `resources` é utilizada para definir os limites e as requisições de recursos de CPU e memória do pod. A tag `limits` é utilizada para definir os limites máximos de recursos que o pod pode consumir, enquanto a tag `requests` é utilizada para definir os recursos mínimos que o pod precisa para funcionar corretamente.	

### Configurando o nosso primeiro volume EmptyDir

Para configurar um volume `EmptyDir` em um pod, você pode adicionar a seguinte configuração ao arquivo `yaml` do pod:

```yaml
apiVersion: v1
kind: Pod
metadata:
  labels:
    run: girus
  name: girus
spec:
  containers:
    - image: nginx
      name: girus
      volumeMounts:
        - mountPath: /giropops
          name: empty-dir-volume-girus
      resources:
        limits:
          cpu: "1"
          memory: "1Gi"
        requests:
          cpu: "0.5"
          memory: "500Mi"
  dnsPolicy: ClusterFirst
  restartPolicy: Always
  volumes:
    - name: empty-dir-volume-girus
      emptyDir:
        sizeLimit: 256Mi
```

A tag `volumes` é utilizada para definir os volumes que serão montados no pod. A tag `volumeMounts` é utilizada para definir os pontos de montagem dos volumes nos containers do pod.

O volume `EmptyDir` é um volume temporário que é criado quando o pod é iniciado e é excluído quando o pod é excluído. Ele é útil para compartilhar arquivos temporários entre os containers de um pod.

Se o pod for excluído, o volume `EmptyDir` também será excluído, então tenha cuidado ao utilizar esse tipo de volume. Mas se você só reiniar o pod, o volume `EmptyDir` não será excluído.

## Desafio

### Objetivos

1. Corrija todos os erros encontrados e realize o deploy do Nginx utilizando o arquivo pod.yaml.

Você tem 12 minutos!

Sua missão é realizar o deploy do Nginx utilizando o arquivo pod.yaml.

Ajuste os limites de consumo de recursos para que o pod seja deployado corretamente.

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
          cpu: "500m"
          memory: "500Mi"
        requests:
          cpu: "300m"
          memory: "440Mi"
  dnsPolicy: ClusterFirst
  restartPolicy: Always
```
