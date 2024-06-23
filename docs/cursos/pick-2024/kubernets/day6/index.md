---
id: index
title: Day 6
hide_title: false
hide_table_of_contents: false
sidebar_label: Day 6
---

import Center from "@site/src/components/Center";

## Sumário

- 🎥 Intro Day-6 - 02:16
- 📖 O que iremos ver hoje?
- 🎥 O que são volumes? - 05:10
- 📖 O que são volumes?
- 🎥 O StorageClass - 15:15
- 📖 O StorageClass
- 🎥 PV - O PersistentVolume - 18:04
- 📖 PV - O Persistent Volume
- 🎥 PV - O PersistentVolume com NFS - 14:16
- 📖 PV - O PersistentVolume com NFS
- 🎥 PVC - O PersistentVolumeClaim - 20:56
- 📖 PVC - O Persistent Volume Claim
- 📝 Vamos testar o que você aprendeu
- 🎥 Encerramento Day-6 - 01:07
- 📖 Encerramento Day-6
- 🎥 Sessão Ao Vivo - Matheus Fidelis | 21/09/2023 - 01:10:58
- 📖 Slides da Sessão do Matheus Fidelis
- 📝 Feedback

**Legenda**  
🎥 - Aula gravada
📖 - Material complementar
📝 - Atividade

## Dia 6

No dia 6, você aprenderá sobre volumes no Kubernetes. Você aprenderá o que são volumes, o que é um StorageClass, o que é um PersistentVolume (PV), o que é um PersistentVolumeClaim (PVC) e como utilizá-los no Kubernetes.

:::info
Material complementar: [Leitura complementar do Day-6](https://livro.descomplicandokubernetes.com.br/pt/day-6/)
:::

### O que são volumes?

Volumes são diretórios que podem ser montados em um ou mais contêineres em um pod. Eles podem ser usados para compartilhar dados entre contêineres em um pod ou para persistir dados além do ciclo de vida de um contêiner.

Nós já vimos o **emptyDir** que é um tipo de volume que é criado quando um pod é criado e é deletado quando o pod é deletado. Mas, e se você quiser persistir dados além do ciclo de vida de um contêiner? É aí que entram os **PersistentVolumes**.

Para isso, precisamos entender três conceitos:

- StorageClass
- PersistentVolume (PV)
- PersistentVolumeClaim (PVC)

### O que é um StorageClass?

O **StorageClass** é um recurso do Kubernetes que fornece uma maneira de descrever as "classes" de armazenamento que um cluster Kubernetes pode oferecer. Ele é usado para definir diferentes classes de armazenamento, como SSD, HDD, NFS, EBS, etc.

Para listar os StorageClasses disponíveis no seu cluster, você pode executar o seguinte comando:

```bash
kubectl get storageclass
```

Caso queira criar um StorageClass, você pode usar o seguinte exemplo:

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: giropops
provisioner: kubernetes.io/no-provisioner
reclaimPolicy: Retain
volumeBindingMode: WaitForFirstConsumer
```

### O que é um PersistentVolume (PV)?

O **PersistentVolume** é um recurso do Kubernetes que representa um volume de armazenamento em um cluster. Ele é provisionado por um administrador de cluster e pode ser provisionado de várias maneiras, como NFS, EBS, etc.

É o "pedaço" de armazenamento que é provisionado no cluster e que pode ser reivindicado por um pod.

Para criar um PersistentVolume, você pode usar o seguinte exemplo:

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  labels:
    storage: lento
  name: meu-pv
spec:
  capacity:
    storage: 1Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: giropops
  hostPath:
    path: /mnt/data
```

### PersistentVolume com NFS

O NFS (Network File System) é um sistema de arquivos distribuído que permite que um servidor exporte um sistema de arquivos para vários clientes. No Kubernetes, você pode usar o NFS para provisionar PersistentVolumes.

Para criar um PersistentVolume com NFS, você pode usar o seguinte exemplo:

```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: nfs-pv
  labels:
    type: nfs
spec:
  capacity:
    storage: 1Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: giropopsnfs
  nfs:
    server: 192.168.0.1 # IP do servidor NFS
    path: "/mnt/data"
```

Agora basta criar um PersistentVolumeClaim (PVC) para reivindicar o PersistentVolume que você criou.

### O que é um PersistentVolumeClaim (PVC)?

O **PersistentVolumeClaim** é um recurso do Kubernetes que representa uma solicitação de armazenamento por um pod. Ele é usado para reivindicar um PersistentVolume e vinculá-lo a um pod.

Para criar um PersistentVolumeClaim, você pode usar o seguinte exemplo:

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: meu-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
  storageClassName: giropops
```

Então o PV é o recurso que representa o armazenamento físico, o PVC é a solicitação de armazenamento e o StorageClass é a classe de armazenamento que define as propriedades do armazenamento.






