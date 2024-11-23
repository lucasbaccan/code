---
id: index
title: Day 7
hide_title: false
hide_table_of_contents: false
sidebar_label: Day 7
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Center from "@site/src/components/Center";

## Sumário

- 🎥 Intro - Day-7 - 02:09
- 📖 O que iremos ver hoje?
- 🎥 O que é um StatefulSet? - 07:59
- 📖 O que é um StatefulSet
- 🎥 Criando o nosso primeiro StatefulSet - 08:40
- 📖 Criando um StatefulSet
- 🎥 Criando o nosso Headless Service - 11:47
- 📖 Criando o nosso Headless Service
- 🎥 Removendo o nosso StatefulSet - 01:24
- 📖 Removendo o nosso StatefulSet
- 🎥 O que são os Services? - 11:31
- 📖 Services
- 🎥 Criando os nossos Services ClusterIP e NodePort - 11:39
- 🎥 Criando os nossos Services LoadBalancer e ExternalName - 11:16
- 🎥 Criando o Service expondo outro Service - 05:05
- 🎥 Criando os Services através de YAML - 13:48
- 📖 Criando os nossos Services
- 🎥 Encerramento Day-7 - 01:55
- 📖 Encerramento e Lição de Casa do Day-7 - 01:07
- 📝 Vamos testar o que você aprendeu! - 15 questões
- 📝 Desafio do Day-7

**Legenda**  
🎥 - Aula gravada
📖 - Material complementar
📝 - Atividade

## Dia 7

No dia 7, vamos aprender sobre o StatefulSet, um recurso do Kubernetes que nos permite criar aplicações com estado. Além disso, vamos aprender sobre os Services, que são responsáveis por expor as aplicações para o mundo externo.

:::info
Material complementar: [Leitura complementar do Day-7](https://livro.descomplicandokubernetes.com.br/pt/day-7/)
:::

### O que é um StatefulSet?

O **StatefulSet** é um recurso do Kubernetes que nos permite criar aplicações com estado. Ele é semelhante ao **Deployment**, mas com algumas diferenças importantes:

- Os Pods de um StatefulSet são criados e mantidos em uma ordem específica.
- Cada Pod de um StatefulSet possui um identificador único.
- Os Pods de um StatefulSet são persistentes, ou seja, eles mantêm o mesmo identificador mesmo após serem deletados.
- Ao criar um StatefulSet, um PVC (PersistentVolumeClaim) é criado automaticamente para cada Pod.

Geralmente, usamos um StatefulSet para aplicações que possuem um banco de dados, como MySQL, PostgreSQL, MongoDB, etc. Em menssageria, como Kafka, RabbitMQ, etc. Autenticação, como Keycloak, etc.

Exemplo de um StatefulSet:

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: nginx
spec:
  serviceName: "nginx"
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx
        ports:
        - containerPort: 80
          name: http
        volumeMounts:
        - name: nginx-persistent-storage
          mountPath: /usr/share/nginx/html
  volumeClaimTemplates:
  - metadata:
      name: nginx-persistent-storage
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 1Gi
```


### O que é um Headless Service?

O **Headless Service** é um tipo de Service que não possui um IP fixo. Ele é usado para aplicações que precisam de um DNS para cada Pod. Cada Pod de um Headless Service possui um DNS específico.

Exemplo de um Headless Service:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-headless
  labels:
    app: nginx
spec:
  ports:
    - port: 80
      name: http
  clusterIP: None # Como estamos criando um Headless Service, não queremos que ele tenha um IP, então definimos o clusterIP como None
  selector:
    app: nginx
```

### O que são os Services?

Os **Services** são responsáveis por expor as aplicações para o mundo externo (fora do cluster). Existem quatro tipos de Services:
- **ClusterIP** (padrão): Expõe o Service em um IP interno no cluster. Este tipo torna o Service acessível apenas dentro do cluster.
- **NodePort**: Expõe o Service na mesma porta de cada Node selecionado no cluster usando NAT. Torna o Service acessível de fora do cluster usando :.
- **LoadBalancer**: Cria um balanceador de carga externo no ambiente de nuvem atual (se suportado) e atribui um IP fixo, externo ao cluster, ao Service.
- **ExternalName**: Mapeia o Service para o conteúdo do campo externalName (por exemplo, foo.bar.example.com), retornando um registro CNAME com seu valor.

O serviço utiliza o **selector** para saber para qual Pod ele deve redirecionar a requisição. O **selector** é um conjunto de labels que o Service utiliza para saber para qual Pod ele deve redirecionar a requisição.


### Criando os nossos Services com YAML

Para criar um Service, precisamos de um arquivo YAML com a seguinte estrutura:

- ClusterIP:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-clusterip
  labels:
    app: nginx
spec:
  ports:
    - port: 80
      name: http
  selector:
    app: nginx
```

- NodePort:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-nodeport
  labels:
    app: nginx
spec:
  type: NodePort
  ports:
    - port: 80
      targetPort: 80
      nodePort: 30080
      name: http
  selector:
    app: nginx
```

- LoadBalancer:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-loadbalancer
  labels:
    app: nginx
spec:
  type: LoadBalancer
  ports:
    - port: 80
      targetPort: 80
      name: http
  selector:
    app: nginx
```

- ExternalName:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-externalname
  labels:
    app: nginx
spec:
  type: ExternalName
  externalName: nginx.com
```


### Lição de Casa

> Quero que você crie e gerencie um StatefulSet em seu próprio ambiente Kubernetes. Comece criando um StatefulSet simples com um par de Pods e depois tente escalá-lo para mais Pods. Experimente também apagar um Pod e veja como o Kubernetes lida com isso.  
> Em seguida, brinque com os Services. Exponha seu StatefulSet através de um Service do tipo ClusterIP e depois tente mudar para um NodePort ou LoadBalancer. Teste a conectividade para garantir que tudo está funcionando corretamente.  
> E por último, mas não menos importante, crie um Service do tipo ExternalName e aponte-o para um serviço externo de sua escolha. Verifique se o serviço externo está acessível de dentro de seus Pods.  
> Lembre-se, a prática leva à perfeição, então não pule essa lição de casa! ;) E quando tiver dúvidas ou enfrentar problemas, não hesite em procurar ajuda. Estamos todos aqui para aprender juntos!

```yaml
# StatefulSet
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: nginx
spec:
  serviceName: "nginx"
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx
        ports:
        - containerPort: 80
          name: http
---
# Service ClusterIP
apiVersion: v1
kind: Service
metadata:
  name: nginx-clusterip
  labels:
    app: nginx
spec:
  ports:
    - port: 80
      name: http
  selector:
    app: nginx
---
# Service NodePort
apiVersion: v1
kind: Service
metadata:
  name: nginx-nodeport
  labels:
    app: nginx
spec:
  type: NodePort
  ports:
    - port: 80
      targetPort: 80
      nodePort: 30080
      name: http
  selector:
    app: nginx
```

## Desafio

### Objetivos 1

1. 🏗️ Crie um StatefulSet do Nginx com três réplicas, cada uma com seu próprio volume persistente. O StatefulSet deve ser nomeado "giropops-set".
2. 🎯 Configure um Headless Service para o StatefulSet criado. O serviço deve ser nomeado "giropops-service".
3. 🕵️‍♀️ Verifique se o StatefulSet, o Service e o Pod foram criados corretamente e se estão em execução.
4. 🔄 Faça um upgrade do StatefulSet para a versão 1.19.0 do Nginx.

### Solução 1

```yaml title="statefulset.yaml"
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: giropops-set
spec:
  serviceName: "giropops-service"
  replicas: 3
  selector:
    matchLabels:
      app: giropops
  template:
    metadata:
      labels:
        app: giropops
    spec:
      containers:
      - name: giropops
        image: nginx:1.19.0
        ports:
        - containerPort: 80
          name: http
```

```yaml title="headless-service.yaml"
apiVersion: v1
kind: Service
metadata:
  name: giropops-service
  labels:
    app: giropops
spec:
  ports:
    - port: 80
      name: http
  clusterIP: None
  selector:
    app: giropops
```

### Objetivos 2

Neste desafio, você terá que resolver um problema com o nosso Deployment e Service do Giropops-Senhas.

1. 🕵️‍♀️ Verifique se o Deployment e o Service foram criados corretamente e se estão funcionando como esperado, senão, corrija o problema

### Solução 2

<Tabs groupId="solucao2" queryString>
  <TabItem value="giropops-senhas-service.yaml-solucao" label="Solução" default>
```yaml title="giropops-senhas-service.yaml" showLineNumbers {9,13,14}
apiVersion: v1
kind: Service
metadata:
  name: giropops-senhas
  labels:
    app: giropops-senhas
spec:
  selector:
    app: giropops-senhas
  ports:
    - protocol: TCP
      port: 5000

      targetPort: 5000
      name: tcp-app
  type: NodePort
```
  </TabItem>
  <TabItem value="giropops-senhas-service.yaml-original" label="Original" default>
```yaml title="giropops-senhas-service.yaml" showLineNumbers {9,13,14}
apiVersion: v1
kind: Service
metadata:
  name: giropops-senhas
  labels:
    app: giropops-senhas
spec:
  selector:
    app: giropops-senha
  ports:
    - protocol: TCP
      port: 5000
      nodePort: 32500
      targetPort: 32767
      name: tcp-app
  type: NodePort
```
  </TabItem>
</Tabs>

<Tabs groupId="solucao2" queryString>
  <TabItem value="giropops-senhas-deployment.yaml-solucao" label="Solução" default>
```yaml title="giropops-senhas-deployment.yaml" showLineNumbers
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: giropops-senhas
  name: giropops-senhas
spec:
  replicas: 2
  selector:
    matchLabels:
      app: giropops-senhas
  template:
    metadata:
      labels:
        app: giropops-senhas
    spec:
      containers:
      - image: linuxtips/giropops-senhas:1.0
        name: giropops-senhas
        ports:
        - containerPort: 5000
        imagePullPolicy: Always
```
  </TabItem>
  <TabItem value="giropops-senhas-deployment.yaml-original" label="Original" default>
```yaml title="giropops-senhas-deployment.yaml" showLineNumbers
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: giropops-senhas
  name: giropops-senhas
spec:
  replicas: 2
  selector:
    matchLabels:
      app: giropops-senhas
  template:
    metadata:
      labels:
        app: giropops-senhas
    spec:
      containers:
      - image: linuxtips/giropops-senhas:1.0
        name: giropops-senhas
        ports:
        - containerPort: 5000
        imagePullPolicy: Always
```
  </TabItem>
</Tabs>

<Tabs groupId="solucao2" queryString>
  <TabItem value="redis-deployment.yaml-solucao" label="Solução" default>
```yaml title="redis-deployment.yaml" showLineNumbers {21}
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: redis
  name: redis-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: redis
  template:
    metadata:
      labels:
        app: redis
    spec:
      containers:
      - image: redis
        name: redis
        ports:
          - containerPort: 6379
```
  </TabItem>
  <TabItem value="redis-deployment.yaml-original" label="Original" default>
```yaml title="redis-deployment.yaml" showLineNumbers {21}
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: redis
  name: redis-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: redis
  template:
    metadata:
      labels:
        app: redis
    spec:
      containers:
      - image: redis
        name: redis
        ports:
          - containerPort: 6579
```
  </TabItem>
</Tabs>

<Tabs groupId="solucao2" queryString>
  <TabItem value="redis-service.yaml-solucao" label="Solução" default>
```yaml title="redis-service.yaml" showLineNumbers {7,11}
apiVersion: v1
kind: Service
metadata:
  name: redis-service
spec:
  selector:
    app: redis
  ports:
    - protocol: TCP
      port: 6379
      targetPort: 6379
  type: ClusterIP
```
  </TabItem>
  <TabItem value="redis-service.yaml-original" label="Original" default>
```yaml title="redis-service.yaml" showLineNumbers {7,11}
apiVersion: v1
kind: Service
metadata:
  name: redis-service
spec:
  selector:
    app: redis-service
  ports:
    - protocol: TCP
      port: 6379
      targetPort: 6679
  type: ClusterIP
```
  </TabItem>
</Tabs>