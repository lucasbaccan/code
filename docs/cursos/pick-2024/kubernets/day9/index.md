---
id: index
title: Day 9
hide_title: false
hide_table_of_contents: false
sidebar_label: Day 9
---

import Center from "@site/src/components/Center";

## Sumário

- 🎥 Intro - Day-9 - 02:07
- 📖 O que iremos ver hoje?
- 🎥 O que é o Prometheus Operator e o Kube-Prometheus - 06:58
- 📖 O que é o kube-prometheus?
- 🎥 Instalando o EKSCTL e o AWS CLI - 11:32
- 🎥 Instalando e Configurando o EKS - 04:27
- 📖 Instalando o nosso cluster EKS
- 🎥 Instalando o Kube-Prometheus - 15:46
- 📖 Instalando o Kube-Prometheus
- 🎥 Acessando o nosso Grafana e os Dashboards - 08:54
- 📖 Acessando o nosso Grafana
- 🎥 Acessando o nosso Prometheus e o Alertmanager - 08:20
- 🎥 O que é um ServiceMonitor? - 15:31
- 📖 Os ServiceMonitors
- 🎥 Encerramento do Day-9 - 01:27
- 📝 Desafio do Day-9

**Legenda**  
🎥 - Aula gravada
📖 - Material complementar
📝 - Atividade

## Dia 9

No dia 9, vamos falar sobre o Prometheus Operator e o Kube-Prometheus. Vamos entender o que é o kube-prometheus e como podemos instalar ele em nosso cluster EKS. Vamos aprender a instalar o EKSCTL e o AWS CLI, instalar e configurar o EKS, instalar o kube-prometheus, acessar o Grafana e os Dashboards, acessar o Prometheus e o Alertmanager e entender o que é um ServiceMonitor.

Vimos também o que é um Custom Resource Definition (CRD) e como podemos criar um ServiceMonitor para monitorar os serviços que estão rodando em nosso cluster.

### Prometeus Operator e Kube-Prometheus

O [Prometheus Operator](https://github.com/prometheus-operator/prometheus-operator) é um projeto que visa simplificar a instalação e a operação do Prometheus, Alertmanager e Grafana. O [Kube-Prometheus](https://github.com/prometheus-operator/kube-prometheus) é um projeto que visa simplificar a instalação e a operação do Prometheus Operator e dos componentes do Prometheus.

### EKSCTL e AWS CLI

O [EKSCTL](https://eksctl.io/) é uma ferramenta de linha de comando que simplifica a criação, a configuração e a gestão de clusters EKS. O [AWS CLI](https://aws.amazon.com/pt/cli/) é uma ferramenta de linha de comando que permite interagir com os serviços da AWS.

### Kube-Prometheus

Vamos instalar o kube-prometheus em nosso cluster. O kube-prometheus é um conjunto de arquivos YAML que instala o Prometheus Operator e os componentes do Prometheus em nosso cluster.

```bash
git clone https://github.com/prometheus-operator/kube-prometheus
cd kube-prometheus
kubectl create -f manifests/setup
kubectl apply -f manifests/
```

Para saber se deu tudo certo, podemos executar o comando `kubectl get pods -n monitoring`.

### Acessando o Grafana/Prometheus/Alertmanager

A forma correta seria criar um Ingress para acessar o Grafana, Prometheus e Alertmanager. Mas, para simplificar, podemos usar o `kubectl port-forward` para acessar esses serviços.

```bash
# Grafana - http://localhost:13000
kubectl port-forward -n monitoring svc/grafana 13000:3000
# Prometheus - http://localhost:19090
kubectl port-forward -n monitoring svc/prometheus-k8s 19090:9090
# Alertmanager - http://localhost:19093
kubectl port-forward -n monitoring svc/alertmanager-main 19093:9093
```

### ServiceMonitor

O ServiceMonitor é um recurso do Prometheus Operator que permite monitorar automaticamente os serviços que estão rodando em nosso cluster. O ServiceMonitor é um recurso do Kubernetes que define quais serviços devem ser monitorados pelo Prometheus.

Exemplo do ServiceMonitor do Grafana:

```bash
kubectl get servicemonitor -n monitoring grafana -o yaml
```

```yaml title="grafana-servicemonitor.yaml"
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  # Lista de labels que vão ser usadas para identificar o ServiceMonitor
  labels:
    app.kubernetes.io/component: grafana
    app.kubernetes.io/name: grafana
    app.kubernetes.io/part-of: kube-prometheus
    app.kubernetes.io/version: 11.1.0
  name: grafana
  namespace: monitoring
  resourceVersion: "3766336"
  uid: 82ee0eed-f074-4d60-b7ea-38828a8f1f95
spec:
  # Os endpoints que vão ser monitorados
  endpoints:
  - interval: 15s
    port: http # Porta que o serviço está rodando
  selector:
    # Seletor para identificar o serviço que vai ser monitorado
    matchLabels:
      app.kubernetes.io/name: grafana
```

Ao criar um ServiceMonitor, o Prometheus Operator irá automaticamente configurar o Prometheus para monitorar o serviço que está rodando em nosso cluster, criando o target automaticamente.

### Custom Resource Definitions (CRDs)

O Prometheus Operator utiliza Custom Resource Definitions (CRDs) para definir os recursos que ele gerencia. Os CRDs são extensões do Kubernetes que permitem definir novos tipos de recursos.

Exemplo de um CRD do Prometheus Operator:

```yaml title="prometheus.yaml"
apiVersion: monitoring.coreos.com/v1
kind: Prometheus # Tipo do recurso (CRD)
metadata:
  name: prometheus
  namespace: monitoring
spec:
  alerting:
    alertmanagers:
    - name: alertmanager-main
      namespace: monitoring
      port: web
  baseImage: quay.io/prometheus/prometheus
  nodeSelector:
    kubernetes.io/os: linux
  replicas: 2
  resources:
    requests:
      memory: 400Mi
  ruleSelector:
    matchLabels:
      role: prometheus
  securityContext:
    fsGroup: 2000
  serviceAccountName: prometheus
  serviceMonitorSelector:
    matchLabels:
      release: prometheus
  version: v2.28.1
```

## Desafio do Dia 9

### Objetivos 1

Use o terminal para realizar o deploy do nosso Kube-Prometheus no cluster Kubernetes.

### Solução 1

```bash
git clone https://github.com/prometheus-operator/kube-prometheus
cd kube-prometheus
kubectl create -f manifests/setup
kubectl apply -f manifests/
```

### Objetivos 2

Quando você logar pela primeira vez com o usuário admin, mude a senha imediatamente.

Durante esse desafio, você terá que usar o 'kubectl port-forward' para deixar o grafana disponível na porta 33000

Um conselho importante, você vai precisar utilizar o parâmetro "--address=0.0.0.0" para que seja possível você acessar o Grafana através do navegador.

Explore os dashboards, e divirta-se!

Quando terminar, clique em Check!

### Solução 2

```bash
kubectl port-forward -n monitoring svc/grafana 33000:3000 --address=0.0.0.0
```