---
id: aws_ec2
title: AWS EC2
---

:::tip LINK
**LINK:** [https://aws.amazon.com/pt/ec2/](https://aws.amazon.com/pt/ec2/)
:::

Elastic Compute Cloud (EC2) é um serviço web que fornece capacidade de computação na nuvem de forma segura e escalável. É um serviço de computação em nuvem que permite que você aumente ou diminua a capacidade de computação de acordo com a demanda. O EC2 permite que você tenha controle total sobre a configuração de hardware do servidor, permitindo que você instale e configure o software que desejar, configure grupos de segurança e crie imagens de servidor que contenham o software e as configurações que você deseja.

Uma _alternativa_ ao EC2 é o Lightsail, que é um serviço de computação em nuvem da Amazon que fornece servidores virtuais pré-configurados e gerenciados. O Lightsail é uma alternativa mais simples e mais barata ao EC2, mas não oferece a mesma flexibilidade e controle que o EC2.

:::tip LINK
**LINK:** [https://aws.amazon.com/pt/lightsail/](https://aws.amazon.com/pt/lightsail/)
:::

:::warning Atenção

- O Lightsail não é uma alternativa ao EC2, mas sim uma alternativa mais simples e mais barata ao EC2.
- Não é possível migrar um servidor EC2 para o Lightsail e vice-versa.
- Enquanto o Lightsail tem um preço fixo, o EC2 tem um preço variável dependendo da quantidade de recursos que você está usando.
  :::

## Instâncias EC2

As instâncias EC2 são máquinas virtuais (VMs) que você pode usar para executar aplicativos na nuvem. Cada instância EC2 inclui um sistema operacional (SO), aplicativos de software pré-instalados, uma quantidade de armazenamento e uma quantidade de memória que você pode especificar. Você pode usar uma instância EC2 para executar aplicativos de banco de dados, aplicativos web, aplicativos de servidor de arquivos e muito mais.

## Tipos de instâncias EC2

Existem vários tipos de instâncias EC2 disponíveis, cada um com diferentes recursos e preços. Cada instancia EC2 tem um tipo de processador, uma quantidade de memória e limites de banda de rede. Recentemente, começou a ser possível escolher tipo de instancias que rodam em processadores ARM, que são mais baratos e mais eficientes do que os processadores Intel x86, mas sua aplicação tem que ser compatível com processadores ARM.

## Volumes EC2

Os volumes EC2 são discos de armazenamento que você pode anexar a uma instância EC2. Os volumes EC2 podem ser usados para armazenar dados de aplicativos e sistemas operacionais, ou para servir como discos de inicialização para suas instâncias. Os volumes EC2 podem ser anexados a uma instância EC2 quando a instância é iniciada, ou podem ser anexados a uma instância EC2 que já está em execução. Os volumes EC2 podem ser anexados a várias instâncias EC2 ao mesmo tempo.

:::info Custo
O custo de um volume é cobrado por hora e por GB alocado, mesmo que o volume não esteja sendo usado ou a maquina esteja desligada.
:::

### Snapshots de volumes EC2

Os snapshots de volumes EC2 são cópias de segurança de volumes EC2. Você pode criar um snapshot de um volume EC2 a qualquer momento, e os snapshots de volume EC2 são criados incrementalmente, o que significa que apenas as alterações desde o último snapshot são armazenadas. Os snapshots de volume EC2 são armazenados em S3 e podem ser copiados para outras regiões da AWS.

## Network Interfaces EC2

As instâncias EC2 possuem uma ou mais interfaces de rede, que são usadas para se comunicar com a internet e com outras instâncias EC2. As interfaces de rede EC2 podem ser configuradas para usar endereços IP públicos ou privados, e podem ser configuradas para usar endereços IP estáticos ou dinâmicos.

### Security Groups EC2

Os security groups EC2 são grupos de regras de firewall que podem ser aplicadas a uma ou mais interfaces de rede EC2. Os security groups EC2 podem ser usados para permitir ou bloquear o tráfego de entrada e saída para uma instância EC2. Os security groups EC2 podem ser aplicados a uma instância EC2 quando a instância é iniciada, ou podem ser aplicados a uma instância EC2 que já está em execução.

## Regiões EC2

As regiões EC2 são locais geográficos onde você pode executar suas instâncias EC2. Cada região EC2 é composta por pelo menos uma zona de disponibilidade. As regiões EC2 são usadas para fornecer redundância e disponibilidade, pois as instâncias EC2 em uma região EC2 podem falhar, mas as instâncias EC2 em outras regiões EC2 não serão afetadas.

## Extra

Os serviços da AWS são extremamente flexíveis e configuráveis, e você pode criar uma infraestrutura de nuvem altamente personalizada para atender às suas necessidades. O que foi apresentado aqui é apenas uma introdução.
