---
id: aws_s3
title: AWS S3
---

:::tip LINK
**LINK:** [https://aws.amazon.com/pt/s3/](https://aws.amazon.com/pt/s3/)
:::

Simple Storage Service (S3) é um serviço de armazenamento de objetos na nuvem da Amazon Web Services (AWS). O S3 armazena qualquer tipo de arquivo, desde imagens e vídeos até documentos e dados de aplicativos. O S3 é um serviço altamente escalável, seguro e confiável, projetado para fazer com que os desenvolvedores de aplicativos e as empresas armazenem e recuperem qualquer quantidade de dados de qualquer lugar na web.

:::caution Custos
Você não paga nada para enviar os dados para o S3, mas você paga por armazenamento e transferência de dados. Para mais informações, consulte [https://aws.amazon.com/pt/s3/pricing/](https://aws.amazon.com/pt/s3/pricing/).
:::

## Bucket

Um bucket é um espaço de armazenamento na AWS. É um container para armazenar objetos. Cada bucket é único e possui um nome exclusivo. O nome do bucket é usado para identificar o bucket em todas as solicitações de API e na URL do bucket. O nome do bucket deve ser exclusivo em todo o AWS.

## Objeto

Um objeto é um arquivo que você armazena no S3. Um objeto consiste em dados e metadados. Os dados são o conteúdo do objeto. Os metadados são pares de nome-valor que descrevem os dados. Os metadados não afetam o conteúdo do objeto. Os metadados são armazenados separadamente do conteúdo do objeto.

## Região

A região é uma localização geográfica que contém pelo menos um data center. Cada região é isolada geograficamente da outra. As regiões são independentes entre si, mas compartilham a mesma infraestrutura global. Por exemplo, se você armazenar um objeto em uma região, você pode acessá-lo de qualquer outra região.