---
id: index
title: Day 11
hide_title: false
hide_table_of_contents: false
sidebar_label: Day 11
slug: /cursos/pick-2024/kubernetes/day11
---

import Center from "@site/src/components/Center";

## Sumário

- 🎥 Intro Day-11 - 01:58
- 📖 Intro Day-11
- 🎥 O que é o Ingress no Kubernetes - 05:07
- 📖 O que é o Ingress?
- 🎥 Configurando o Kind para suportar o Ingress - 10:54
- 📖 Configurando o Kind para suportar o Ingress
- 🎥 Instalando o Ingress Nginx Controller - 11:53
- 📖 Instalando o Ingress Nginx Controller
- 🎥 Deploy da nossa aplicação que iremos usar de exemplo - 12:43
- 📖 Arquivos utilizados para fazer o deploy da App
- 🎥 Criando a nossa primeira regra de Ingress - 11:41
- 📖 Criando a nossa primeira regra
- 📝 O que está acontecendo com o nosso Ingress? - 1 questões
- 🎥 Precisamos entender melhor como o Ingress funciona - 07:09
- 🎥 Entendendo as alternativas que temos e como resolver - 10:05
- 🎥 Configurando um Ingress para a nossa App em Flask e usando Redis - 04:49
- 🎥 Criando múltiplos Ingresses no mesmo Ingress Controller - 09:35
- 🎥 Instalando um cluster EKS para os nossos testes com Ingress - 03:42
- 🎥 Entendendo os Contexts do Kubernetes para gerenciar vários clusters - 06:14
- 🎥 Instalando o Ingress Nginx Controller no EKS - 09:48
- 🎥 Conhecendo o ingressClassName e configurando um novo Ingress - 08:25
- 🎥 Configurando um domínio válido para o nosso Ingress no EKS - 07:51
- 🎥 Encerramento Day-11 - 02:45
- 🎙️ Sessão ao vivo PICK2023 com Ricardo Katz - Mantenedor do Ingress Nginx Controller - 01:47:50
- 🎙️ Mentoria ao vivo - Devops com Inteligência Emocional, Excelente Combinação! - André Brandão - 01:09:27

**Legenda**  
🎥 - Aula gravada
🎙️ - Aula ao Vivo
📖 - Material complementar
📝 - Atividade

## Dia 11

No dia 11, vamos falar sobre Ingress no Kubernetes. O Ingress é um recurso que permite a exposição de serviços HTTP e HTTPS fora do cluster Kubernetes. Com ele, é possível configurar regras de roteamento para diferentes serviços, além de permitir a configuração de TLS para comunicação segura.

:::info
Material complementar: [Leitura complementar do Day-9](https://livro.descomplicandokubernetes.com.br/pt/day-9/)
:::

### O que é o Ingress?

O Ingress é um recurso do Kubernetes que permite a exposição de serviços HTTP e HTTPS fora do cluster Kubernetes. Com ele, é possível configurar regras de roteamento para diferentes serviços, além de permitir a configuração de TLS para comunicação segura.

A diferença entre o Ingress e o Service é que o Ingress é um recurso de camada 7, enquanto o Service é um recurso de camada 4. Isso significa que o Ingress opera no nível de aplicação, permitindo a configuração de regras de roteamento baseadas em URL, cabeçalhos, etc.

Você precisa ter um Service do tipo NodePort ou LoadBalancer para que o Ingress funcione corretamente.

As principais ferramentas de Ingress disponíveis são o Nginx Ingress Controller, o Traefik, o HAProxy e o Istio.

Dentre as principais funcionalidades do Ingress, podemos destacar:

- **Controlador de Ingress**: É a implementação real que satisfaz um recurso Ingress. Ele pode ser implementado através de várias soluções de proxy reverso, como NGINX ou HAProxy.
- **Regras de Roteamento**: Definidas em um objeto YAML, essas regras determinam como as requisições externas devem ser encaminhadas aos serviços internos.
- **Backend Padrão**: Um serviço de fallback para onde as requisições são encaminhadas se nenhuma regra de roteamento for correspondida.
- **Balanceamento de Carga**: Distribuição automática de tráfego entre múltiplos pods de um serviço.
- **Terminação SSL/TLS**: O Ingress permite a configuração de certificados SSL/TLS para a terminação de criptografia no ponto de entrada do cluster.
- **Anexos de Recurso**: Possibilidade de anexar recursos adicionais como ConfigMaps ou Secrets, que podem ser utilizados para configurar comportamentos adicionais como autenticação básica, listas de controle de acesso etc.

### Configurando o Kind para suportar o Ingress

Para que o Kind suporte o Ingress, é necessário habilitar o recurso de port forwarding. Isso pode ser feito através do arquivo de configuração do Kind, adicionando a seguinte configuração:

```yaml title="kind-config.yaml"
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
  - role: control-plane
    kubeadminConfigPatches:
      - |
        kind: InitConfiguration
        nodeRegistration:
          kubeletExtraArgs:
            node-labels: "ingress-ready=true"
    extraPortMappings:
      - containerPort: 80
        hostPort: 80
        protocol: TCP
      - containerPort: 443
        hostPort: 443
        protocol: TCP
```

Rode o comando `kind create cluster --config kind-config.yaml` para criar o cluster Kind com suporte ao Ingress.

:::note Observação
Essa configuração só é necessária para o Kind. Caso esteja utilizando um cluster gerenciado, como o EKS, GKE ou AKS, o suporte ao Ingress já está habilitado por padrão.
Se estiver utilizando Minikube ou outro ambiente local, verifique a documentação para habilitar o suporte ao Ingress.
:::

### Instalando o Ingress Nginx Controller

O projeto [Ingress Nginx](https://kubernetes.github.io/ingress-nginx/) é uma implementação do controlador de Ingress baseado no NGINX. Para instalá-lo, execute os seguintes comandos:

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/kind/deploy.yaml
```

Caso esteja utilizando outro ambiente, veja a [documentação oficial](https://kubernetes.github.io/ingress-nginx/deploy/#contents) para instruções específicas.

Verifique se o Ingress Nginx Controller foi instalado corretamente executando o comando:

```bash
kubectl wait --namespace ingress-nginx \
  --for=condition=ready pod \
  --selector=app.kubernetes.io/component=controller \
  --timeout=120s
```

### Deploy da nossa aplicação que iremos usar de exemplo

Vamos utilizar o projeto [Giropops Senhas](https://github.com/badtuxx/giropops-senhas-labs) como exemplo para configurar o Ingress.

Vamos aplicar os arquivos de configuração necessários para o deploy da aplicação:

```bash
# App Deployment
kubectl apply -f https://raw.githubusercontent.com/badtuxx/giropops-senhas-labs/main/giropops-senhas/app-deployment.yaml
# App Service
kubectl apply -f https://raw.githubusercontent.com/badtuxx/giropops-senhas-labs/main/giropops-senhas/app-service.yaml
# Redis Deployment
kubectl apply -f https://raw.githubusercontent.com/badtuxx/giropops-senhas-labs/main/giropops-senhas/redis-deployment.yaml
# Redis Service
kubectl apply -f https://raw.githubusercontent.com/badtuxx/giropops-senhas-labs/main/giropops-senhas/redis-service.yaml
```

Vamos utilizar o port-forward para acessar a aplicação:

```bash
kubectl port-forward service/giropops-senhas 5000:5000
```

Acesse a aplicação em [http://localhost:5000](http://localhost:5000) para verificar se está funcionando corretamente.

### Criando a nossa primeira regra de Ingress

O arquivo de configuração do Ingress é composto por três partes: a definição do recurso Ingress, a definição das regras de roteamento e a definição do backend padrão.

Vamos criar o arquivo de configuração do Ingress para a nossa aplicação:

```yaml title="giropops-ingress.yaml"
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: giropops-senhas
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
    - http:
        paths:
          - path: /giropops-senhas
            pathType: Prefix
            backend:
              service:
                name: giropops-senhas
                port:
                  number: 5000
```

Aplique o arquivo de configuração do Ingress:

```bash
kubectl apply -f giropops-ingress.yaml
```

### Corrigindo o Ingress

Quando subimos o Ingress anteriormente, ele não funcionou como esperado. Isso ocorreu porque o Ingress Controller não conseguiu resolver os arquivos de `/static` para a aplicação.

Para corrigir esse problema, precisamos adicionar uma configuração adicional no arquivo de configuração do Ingress:

```yaml title="giropops-ingress-2.yaml"
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: giropops-senhas
spec:
  rules:
    - http:
        paths:
          - path: /static
            pathType: Prefix
            backend:
              service:
                name: giropops-senhas
                port:
                  number: 5000
```

Isso irá permitir que o Ingress Controller encaminhe as requisições para o diretório `/static` corretamente.

### Ingress para a nossa App em Flask e usando Redis

Vamos criar um Ingress para a nossa aplicação em Flask que utiliza o Redis como banco de dados.

```yaml title="giropops-ingress.yaml"
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: giropops-senhas
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
    - http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: giropops-senhas
                port:
                  number: 5000
```

Dessa forma, não rodamos mais a aplicação em um "subdiretório" e sim na raiz do domínio.

### Criando múltiplos Ingresses no mesmo Ingress Controller

É possível criar múltiplos Ingresses no mesmo Ingress Controller. Para isso, basta criar um arquivo de configuração para cada Ingress e aplicá-los no cluster. Mas é importante de configurar o `host` para cada Ingress, para que o Ingress Controller saiba para qual domínio encaminhar as requisições.

```yaml title="giropops-ingress-2.yaml"
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: giropops-senhas
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
    - host: giropops-senhas.local
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: giropops-senhas
                port:
                  number: 5000
    - host: giropops-senhas.remoto
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: giropops-senhas
                port:
                  number: 5000
```

Dessa forma, podemos ter múltiplos domínios apontando para a mesma aplicação ou ter regras diferentes que aponte para o mesmo `path`.

### Instalando um cluster EKS para os nossos testes com Ingress

Para instalar um cluster EKS, siga os passos descritos na [documentação oficial](https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html).

Se você tiver o `eksctl` instalado, pode criar um cluster EKS com o comando:

```bash
eksctl create cluster --name giropops --region us-east-1 --node-type t3.medium --nodes 2 --nodes-min 1 --nodes-max 3 --managed
```

Após a instalação, configure o `kubectl` para acessar o cluster EKS:

```bash
aws eks --region us-east-1 update-kubeconfig --name giropops
```

### Entendendo os Contexts do Kubernetes para gerenciar vários clusters

O `kubectl` suporta múltiplos contextos, que são conjuntos de configurações que definem o cluster, o usuário e o namespace padrão. Isso permite alternar facilmente entre diferentes clusters e ambientes.

Para listar os contextos disponíveis, execute o comando:

```bash
kubectl config get-contexts
```

Para alterar o contexto padrão, execute o comando:

```bash
kubectl config use-context <context-name>
```

### Instalando o Ingress Nginx Controller no EKS

Para instalar o Ingress Nginx Controller no EKS, siga os passos descritos na [documentação oficial](https://kubernetes.github.io/ingress-nginx/deploy/#aws).

Um ponto importante é que até o momento, não precisamos configurar qual a classe do Ingress Controller que queremos utilizar. Isso ocorre porque o Ingress Nginx Controller é o controlador padrão. Mas na AWS, o Ingress Nginx Controller é instalado com a classe `alb`. Para utilizar o Ingress Nginx Controller, é necessário configurar a classe do Ingress Controller no arquivo de configuração do Ingress.

### Conhecendo o ingressClassName e configurando um novo Ingress

O campo `ingressClassName` foi introduzido no Kubernetes 1.18 e permite especificar a classe do Ingress Controller que deve ser utilizada para satisfazer o recurso Ingress.

```yaml title="giropops-ingress-3.yaml"
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: giropops-senhas
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  ingressClassName: nginx # Essa é a classe do Ingress Controller que será utilizada
  rules:
  - host: giropops-senhas.local
    http:
      paths:
      ...
```

Dessa forma, podemos configurar qual Ingress Controller deve ser utilizado para satisfazer o recurso Ingress.

### Configurando um domínio válido para o nosso Ingress no EKS

Para configurar um domínio válido para o Ingress no EKS, é necessário criar um registro DNS apontando para o Load Balancer criado pelo Ingress Nginx Controller.

Você pode ver qual o endereço IP do Load Balancer executando o comando:

```bash
kubectl get svc -n ingress-nginx
# ou
kubectl get ingress -A
```

Após obter o endereço IP, crie um registro DNS apontando para esse IP.

Vale notar que se no seu `Ingress` você configurou o campo `host`, o domínio configurado no DNS deve ser o mesmo que o configurado no `Ingress`. Caso contrário, o Ingress não irá funcionar corretamente. Mas se você não configurou o campo `host`, o domínio configurado no DNS pode ser qualquer um, e sua aplicação funciona acessando o IP do Load Balancer.
