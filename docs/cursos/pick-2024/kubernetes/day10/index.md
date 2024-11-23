---
id: index
title: Day 10
hide_title: false
hide_table_of_contents: false
sidebar_label: Day 10
---

import Center from "@site/src/components/Center";

## Sumário

- 🎥 Intro Day-10 - 02:32
- 🎥 O que é um ServiceMonitor? - 03:41
- 📖 Os ServicesMonitors
- 🎥 Criando o nosso Deployment e Service no Kubernetes - 23:01
- 📖 Criando o nosso Deployment e Service no Kubernetes
- 🎥 Criando o nosso primeiro ServiceMonitor - 11:29
- 📖 Criando o nosso primeiro ServiceMonitor
- 🎥 Criando um novo pod e o nosso PodMonitor - 13:39
- 📖 Criando um novo pod e o nosso PodMonitor
- 🎥 Criando alertas no Prometheus e AlertManager através do PrometheusRule - 22:04
- 📖 Criando alertas no Prometheus e AlertManager através do PrometheusRule
- 🎥 Encerramento do Day-10 - 02:26
- 🎙️ Mentoria ao vivo - Carreira, open source e qualidade de vida - Carlos Panato - 02:15:54
- 🎙️ Sessão ao vivo PICK - Jeferson Fernando - 04/05 - 01:16:52

**Legenda**  
🎥 - Aula gravada
🎙️ - Aula ao Vivo
📖 - Material complementar

## Dia 10

No dia 10, vamos falar sobre ServiceMonitors, Deployment, Service, PodMonitor e PrometheusRule. Vamos entender o que é um ServiceMonitor, como criar um Deployment e um Service no Kubernetes, como criar um ServiceMonitor, como criar um novo pod e um PodMonitor e como criar alertas no Prometheus e AlertManager através do PrometheusRule.

:::info
Material complementar: [Leitura complementar do Day-10](https://livro.descomplicandokubernetes.com.br/pt/day-10/)
:::


### O que é um ServiceMonitor?

O ServiceMonitor é um recurso do Prometheus Operator que permite monitorar os serviços que estão rodando em nosso cluster. Com o ServiceMonitor, podemos definir regras de monitoramento para os serviços que estão rodando em nosso cluster.

### Criando o nosso Deployment e Service no Kubernetes

Vamos criar o nosso Deployment e Service no Kubernetes. O Deployment é um recurso do Kubernetes que permite definir como os pods devem ser criados e gerenciados. O Service é um recurso do Kubernetes que permite expor os pods para o mundo externo.

```yaml
# nginx-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
      annotations:
        prometheus.io/scrape: "true"
        prometheus.io/port: "9113"
    spec:
      containers:
      - name: nginx
        image: nginx:1.27
        ports:
        - containerPort: 80
          name: http
        volumeMounts:
        - name: nginx-config
          mountPath: /etc/nginx/conf.d/default.conf
          subPath: nginx.conf
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"
      - name: nginx-exporter
        image: nginx/nginx-prometheus-exporter:1.1.2
        args: 
          - '-nginx.scrape-uri=http://localhost/metrics'
        ports:
        - containerPort: 9113
          name: metrics
        resources:
          requests:
            memory: "64Mi"
            cpu: "250m"
          limits:
            memory: "128Mi"
            cpu: "500m"
      volumes:
      - name: nginx-config
        configMap:
          name: nginx-config
          defaultMode: 420
---
# nginx-config.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: nginx-config
data:
  nginx.conf: |
    server {
      listen 80;
      server_name localhost;
      location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
      }
      location /metrics {
        stub_status on;
        access_log off;
        allow all;
      }
    }
---
# nginx-service.yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
  labels:
    app: nginx
spec:
  selector:
    app: nginx
  ports:
    - port: 9113
      name: metrics
```

### Criando o nosso primeiro ServiceMonitor

Vamos criar o nosso primeiro ServiceMonitor. O ServiceMonitor é um recurso do Prometheus Operator que permite monitorar os serviços que estão rodando em nosso cluster.

```yaml
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  labels:
    app: nginx
  name: nginx-servicemonitor
spec:
  endpoints:
  - interval: 10s
    path: /metrics
    port: 9113
  selector:
    matchLabels:
      app: nginx
```

### Criando um novo pod e o nosso PodMonitor

Vamos criar um novo pod e o nosso PodMonitor. O PodMonitor é um recurso do Prometheus Operator que permite monitorar os pods que estão rodando em nosso cluster.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx-pod
spec:
  containers:
  - name: nginx
    image: nginx:1.27
    ports:
    - containerPort: 80
    volumeMounts:
    - name: nginx-config
      mountPath: /etc/nginx/conf.d/default.conf
      subPath: nginx.conf
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"
  - name: nginx-exporter
    image: nginx/nginx-prometheus-exporter:1.1.2
    args: 
      - '-nginx.scrape-uri=http://localhost/metrics'
    ports:
    - containerPort: 9113
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"
  volumes:
  - name: nginx-config
    configMap:
      name: nginx-config
      defaultMode: 420
---
apiVersion: monitoring.coreos.com/v1
kind: PodMonitor
metadata:
  labels:
    app: nginx-pod
  name: nginx-podmonitor
spec:
  podMetricsEndpoints:
  - interval: 10s
    port: metrics
    targetPort: 9113
  selector:
    matchLabels:
      app: nginx-pod
```

### Criando alertas no Prometheus e AlertManager através do PrometheusRule

Os alertas no Prometheus e AlertManager são criados através do PrometheusRule. O PrometheusRule é um recurso do Prometheus Operator que permite definir regras de alertas para os serviços que estão rodando em nosso cluster.

```yaml title="prometheus-rule.yaml"
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: nginx-prometheus-rule
  namespace: monitoring
  labels:
    prometheus: k8s
    role: alert-rules
    app.kubernetes.io/name: kube-prometheus
    app.kubernetes.io/part-of: kube-prometheus
spec:
  groups:
  - name: nginx-prometheus-rule
    rules:
    - alert: NginxDown
      expr: nginx_up == 0
      for: 1m
      labels:
        severity: critical
      annotations:
        summary: "Nginx está fora do ar"
        description: "O serviço do Nginx está fora do ar {{ $labels.instance }}"
```

E aplicamos o PrometheusRule no nosso cluster Kubernetes:

```bash
kubectl apply -f prometheus-rule.yaml
```

### Encerramento do Day-10

No dia 10, aprendemos sobre ServiceMonitors, Deployment, Service, PodMonitor e PrometheusRule. Vimos como criar um Deployment e um Service no Kubernetes, como criar um ServiceMonitor, como criar um novo pod e um PodMonitor e como criar alertas no Prometheus e AlertManager através do PrometheusRule.
 