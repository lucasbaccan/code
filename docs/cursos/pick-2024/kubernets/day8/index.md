---
id: index
title: Day 8
hide_title: false
hide_table_of_contents: false
sidebar_label: Day 8
---

import Center from "@site/src/components/Center";

## Sumário

- 🎥 Intro Day-8 - 02:50
- 📖 O que iremos ver hoje?
- 🎥 O que são as Secrets do Kubernetes? - 05:16
- 🎥 Conhecendo todos os tipos de Secrets e o que é a codificação base64 - 13:21
- 📖 O que são os Secrets e o Base64
- 🎥 Criando um Secret do tipo Opaque - 07:22
- 📖 Criando o nosso primeiro Secret
- 🎥 Utilizando o nosso Secret como variável de ambiente no Pod - 06:34
- 📖 Utilizando o nosso Secret dentro de um Pod
- 🎥 Criando um Secret para autenticar no Docker Hub do tipo dockerconfigjson e usar imagens privadas - 22:05
- 📖 Criando um Secret para autenticar no Docker Hub
- 🎥 Criando um Secret do tipo tls para armazenar um certificado e chave TLS - 06:39
- 📖 Criando um Secret do tipo TLS
- 🎥 O que são os ConfigMaps? - 02:09
- 🎥 Criando um ConfigMap para adicionar um arquivo no Pod e configurar SSL no Nginx - 26:48
- 📖 Criando e utilizando ConfigMaps
- 🎥 Encerramento Day-8 - 01:06
- 📖 Encerramento Day-8
- 📝 Desafio Prático do Day8

**Legenda**  
🎥 - Aula gravada
📖 - Material complementar
📝 - Atividade

## Dia 8

No dia 8, vamos aprender sobre Secrets e ConfigMaps. Vamos entender o que são, como criar e como utilizar esses recursos no Kubernetes.

:::info
Material complementar: [Leitura complementar do Day-8](https://livro.descomplicandokubernetes.com.br/pt/day-8/)
:::

### Secrets

Secrets são objetos do Kubernetes que armazenam informações sensíveis, como senhas, tokens, chaves de acesso, etc. Por padrão o Kubernetes armazena os Secrets em base64, mas é importante saber que base64 não é uma forma segura de criptografar informações, é apenas uma forma de codificar.

:::info
Material complementar: [Kubernets: Secret](https://kubernetes.io/docs/concepts/configuration/secret/)
:::

Temos 7 tipos de Secrets padrão no Kubernetes:

- **Opaque**: armazena chaves e valores arbitrários
- **kubernetes.io/service-account-token**: armazena o token de um service account
- **kubernetes.io/dockercfg**: armazena credenciais para acessar um registry do Docker (.dockercfg)
- **kubernetes.io/dockerconfigjson**: armazena credenciais para acessar um registry do Docker (.docker/config.json)
- **kubernetes.io/basic-auth**: armazena credenciais de autenticação básica
- **kubernetes.io/ssh-auth**: armazena chaves SSH
- **kubernetes.io/tls**: armazena certificados e chaves TLS

Para listar os Secrets do cluster, execute o comando:

```bash
kubectl get secrets
# ou
kubectl get secrets --all-namespaces
# ou 
kubectl get secrets -A
```

Os secrets são armazenados em base64, para codificar uma string em base64, execute o comando:

```bash
echo -n "minha-senha" | base64
```

Para decodificar uma string em base64, execute o comando:

```bash
echo "bWluaGEtc2VuaGE=" | base64 -d
# ou
base64 -d <<< "bWluaGEtc2VuaGE="
```

### Exemplo de Secret

Vamos criar um Secret do tipo Opaque, que é o tipo mais genérico de Secret. Esse tipo de Secret é utilizado para armazenar chaves e valores arbitrários.

```yaml title="secret.yaml"
apiVersion: v1
kind: Secret
metadata:
  name: my-secret
type: Opaque
data:
  # echo -n "admin" | base64
  username: YWRtaW4=
  # echo -n "admin123" | base64
  password: YWRtaW4xMjM=
```

Para criar o Secret, execute o comando:

```bash
kubectl apply -f secret.yaml
```

Para listar os Secrets do cluster, execute o comando:

```bash
kubectl get secrets my-secret
# ou
kubectl get secrets my-secret -o yaml
# ou com describ
kubectl describe secrets my-secret
```

### Utilizando o Secret em um Pod

Para utilizar o Secret em um Pod, adicione o volume do Secret no Pod e adicione o volumeMounts no container.

```yaml title="exemplo.yaml"
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
    - name: my-container
      image: nginx
      env:
        - name: USERNAME
          valueFrom:
            secretKeyRef:
              name: my-secret
              key: username
        - name: PASSWORD
          valueFrom:
            secretKeyRef:
              name: my-secret
              key: password
---
apiVersion: v1
kind: secret
metadata:
  name: my-secret
type: Opaque
data:
  username: YWRtaW4=
  password: YWRtaW4xMjM=
```

Para criar o Pod, execute o comando:

```bash
kubectl apply -f exemplo.yaml
```

E para verificar se o Secret foi utilizado no Pod, execute o comando:

```bash
kubectl exec -it my-pod -- env
```

### Exemplo de Secret para Docker Hub

Vamos criar um Secret para autenticar no Docker Hub do tipo dockerconfigjson, que é utilizado para armazenar credenciais para acessar um registry do Docker.

```yaml title="docker-secret.yaml"
apiVersion: v1
kind: Secret
metadata:
  name: docker-secret
type: kubernetes.io/dockerconfigjson
data:
  .dockerconfigjson: ewoJImF1dGhzIjogewoJCSJkb2NrZXIuaW8iOiB7CgkJCQkiYXV0aCI6ICJhZG1pbiIsCgkJCQkicGFzc3dvcmQiOiAiYWRtaW4xMjMifQoJCX0KfQo=
```

Utilizar o Secret no Pod:

```yaml title="docker-pod.yaml"
apiVersion: v1
kind: Pod
metadata:
  name: docker-pod
spec:
  containers:
    - name: docker-container
      image: nginx
  imagePullSecrets:
    - name: docker-secret
```

### Exemplo de Secret para TLS

Vamos criar um Secret do tipo tls para armazenar um certificado e chave TLS.

Podemos criar um certificado para testar utilizando o comando:
```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout chave-privada.key -out certificado.crt
```

```yaml title="tls-secret.yaml"
apiVersion: v1
kind: Secret
metadata:
  name: tls-secret
type: kubernetes.io/tls
data:
  # cat cert.pem | base64
  tls.crt: base64-encode-certificate
  # cat key.pem | base64
  tls.key: base64-encode-key
```

Ou 

```bash
kubectl create secret tls tls-secret --cert=cert.pem --key=key.pem
```

Utilizar o Secret no Pod:

```yaml title="tls-pod.yaml"
apiVersion: v1
kind: Pod
metadata:
  name: tls-pod
spec:
  containers:
    - name: tls-container
      image: nginx
      volumeMounts:
        - name: tls
          mountPath: /etc/nginx/ssl
  volumes:
    - name: tls
      secret:
        secretName: tls-secret
```

### ConfigMaps

ConfigMaps são objetos do Kubernetes que armazenam configurações, como variáveis de ambiente, arquivos de configuração, etc. ConfigMaps são utilizados para armazenar informações não sensíveis. A diferença entre ConfigMaps e Secrets é que ConfigMaps são armazenados em texto puro, enquanto Secrets são armazenados em base64.

### Exemplo de ConfigMap (Nginx + SSL)

Vamos criar um ConfigMap para adicionar um arquivo no Pod e configurar SSL no Nginx.

```yaml title="nginx.yaml"
apiVersion: v1
kind: ConfigMap
metadata:
  name: nginx-config
data:
  ssl.conf: |
    ssl_certificate /etc/nginx/ssl/tls.crt;
    ssl_certificate_key /etc/nginx/ssl/tls.key;
---
apiVersion: v1
kind: Secret
metadata:
  name: tls-secret
type: kubernetes.io/tls
data:
  certificado.crt: base64-encode-certificate
  certificado.key: base64-encode-key
---
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
    - name: nginx-container
      image: nginx
      volumeMounts:
        - name: tls
          mountPath: /etc/nginx/ssl
        - name: config
          mountPath: /etc/nginx/conf.d
  volumes:
    - name: tls
      secret:
        secretName: tls-secret
        items:
          - key: certificado.crt
            path: tls.crt
          - key: certificado.key
            path: tls.key
    - name: config
      configMap:
        name: nginx-config
```

Para criar o ConfigMap, execute o comando:

```bash
kubectl apply -f nginx.yaml
```

## Desafio

### Objetivos 1

1. 🏗️ Crie um Secret no Kubernetes que contenha o certificado e a chave privada para o HTTPS. Verifique se o Secret foi criado corretamente e se o tipo está correto.
2. 🎯 Crie um ConfigMap com a configuração do Nginx. Certifique-se de que a configuração está correta e de que o ConfigMap está corretamente configurado.
3. 💼 Verifique se o Nginx está rodando e se seu status é "Running".
4. 🕵️‍♀️ Certifique-se de que o HTTPS está funcionando corretamente. Para fazer isso, você pode executar curl -k https:\\\\localhost:\<PORTA\>.
5. 📝 Verifique o certificado do Nginx e certifique-se de que está correto.
6. 💡 Verifique se o Service é do tipo NodePort na porta 32400 e está redirecionando para a porta 443 do container.
7. 📝 Verifique se o Nginx está rodando na porta 443.
8. 🎯 O nome do Pod precisa ser nginx-https.
9. 🎯 O nome do Service precisa ser nginx-service.
10. 🎯 O nome do ConfigMap precisa ser nginx-config.
11. 🎯 O nome do Secret precisa ser nginx-secret.
12. 🎯 O certificado e a chave privada precisam estar no diretório /root/manifests.
13. 🎯 O arquivo de configuração do Nginx precisa estar no diretório /root/manifests.
14. 🎯 O arquivo de configuração do Nginx precisa se chamar nginx.conf.
15. 🎯 O certificado precisa se chamar nginx.crt.
16. 🎯 A chave privada precisa se chamar nginx.key.
17. 🎯 O manifesto do Pod precisa se chamar nginx-https-pod.yaml.

### Solução 1

Criar o certificado e a chave privada:

```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout nginx.key -out nginx.crt
#
kubectl create secret tls nginx-secret --cert=nginx.crt --key=nginx.key
```

Criar o ConfigMap:

```yaml title="nginx-https-pod.yaml"
apiVersion: v1
kind: ConfigMap
metadata:
  name: nginx-config
data:
  nginx.conf: |
    events {}
    http {
      server {
        listen 80;
        listen 443 ssl;
        server_name localhost;
        ssl_certificate /etc/nginx/ssl/tls.crt;
        ssl_certificate_key /etc/nginx/ssl/tls.key;
        location / {
          root /usr/share/nginx/html;
          index index.html;
        }
      }
    }
  index.html: |
    <html>
      <head>
        <title>Descomplicando o Kubernetes</title>
      </head>
      <body>
        <h1>Descomplicando o Kubernetes</h1>
      </body>
    </html>
---
apiVersion: v1
kind: Pod
metadata:
  name: nginx-https
  labels:
    app: nginx
spec:
  containers:
    - name: nginx
      image: nginx
      volumeMounts:
        - name: ssl
          mountPath: /etc/nginx/ssl
        - name: config
          mountPath: /etc/nginx
        - name: html
          mountPath: /usr/share/nginx/html
      ports:
        - containerPort: 80
          name: http
        - containerPort: 443
          name: https
      resources:
        requests:
          cpu: 100m
          memory: 128Mi
        limits:
          cpu: 250m
          memory: 256Mi
  volumes:
    - name: ssl
      secret:
        secretName: nginx-secret
        items:
          - key: tls.crt
            path: tls.crt
          - key: tls.key
            path: tls.key
    - name: config
      configMap:
        name: nginx-config
        items:
          - key: nginx.conf
            path: nginx.conf
    - name: html
      configMap:
        name: nginx-config
        items:
          - key: index.html
            path: index.html
---
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  type: NodePort
  ports:
    - port: 32400
      targetPort: 443
      nodePort: 32400
  selector:
    app: nginx
```

aplicar o desafio:

```bash
kubectl apply -f nginx-https-pod.yaml
kubectl delete -f nginx-https-pod.yaml
#
kubectl get secrets
kubectl describe secret nginx-secret
#
kubectl get pods
kubectl describe pod nginx-https
kubectl logs nginx-https
#
kubectl get svc
kubectl describe svc nginx-service
#
curl -k https://localhost:443
```

### Objetivos 2

Neste desafio, você terá que resolver um problema com o nosso ConfigMap e Secret do nosso Nginx. Você tem que descobrir o que está errado e corrigir o problema em 05 minutos.

Instruções
Alguma coisa aconteceu e o Nginx que você configurou no desafio anterior não está funcionando corretamente. Você precisa descobrir o que está errado e corrigir o problema.

1. 🕵️‍♀️ Verifique se está tudo certo com o Pod, Secret, ConfigMap e outras coisas que você achar necessário.

### Solução 2

O secret estava errado, então foi recriado:

```bash
kubectl get secret
kubectl describe secret nginx-secret
kubectl delete secret nginx-secret
kubectl create secret tls nginx-secret --cert=nginx.crt --key=nginx.key
#
kubectl delete -f nginx-https-pod.yaml
kubectl apply -f nginx-https-pod.yaml
```
