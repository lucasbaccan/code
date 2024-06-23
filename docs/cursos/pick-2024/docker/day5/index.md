---
id: index
title: Day 5
hide_title: false
hide_table_of_contents: false
sidebar_label: Day 5
---

import Center from "@site/src/components/Center";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Sumário

- 🎥 Day5 - Intro - 02:24
- 🎥 Day5 - Descomplicando as Networks no Docker - 08:16
- 🎥 Day5 - Criando uma Network e conectando nossos containers - 27:13
- 🎥 Day5 - Outras opções de rede para os nossos containers - 10:28
- 🎥 Day5 - Conectando containers em uma Network temporariamente - 04:09
- 🎥 Day5 - Limitando recursos como CPU e Memória - 10:59
- 🎥 Day5 - Encerramento Day5 - 00:51
- 📝 Exame teórico do Day5 12 questões

**Legenda**  
🎥 - Aula gravada
📝 - Atividade

## Dia 5

Day 5 foi sobre Networks, onde aprendemos o que são Networks, como criar uma Network, conectar containers em uma Network, outras opções de rede para os nossos containers, conectar containers em uma Network temporariamente e limitar recursos como CPU e Memória.

### O que são Networks?

Networks são mecanismos de comunicação entre containers no Docker. Elas são usadas para conectar containers em uma rede privada, permitindo que eles se comuniquem entre si. As Networks são independentes do ciclo de vida do container, ou seja, elas persistem mesmo após o container ser removido.

Existem seis tipos de Networks no Docker:

- `bridge`: rede padrão do Docker, que conecta containers em uma rede privada.
- `host`: conecta containers na mesma rede do host.
- `none`: não conecta containers em nenhuma rede.
- `overlay`: conecta containers em diferentes hosts.
- `macvlan`: conecta containers em uma rede com endereços MAC.
- `ipvlan`: conecta containers em uma rede com endereços IP.

### Criando uma Network

Vamos começar baixando rodando nosso container de exemplo:

```bash
docker run -d --name giropops-senhas -p 5000:5000 linuxtips/giropops-senhas:1.0
```

Mas ele não vai funcionar, pois precisamos rodar o container `redis` para ele funcionar, então rode o comando:

```bash
docker run -d --name redis -p 6379:6379 redis
```

Mas ainda não vai funcionar, pois nossa aplicação não sabe onde que o `redis` está, então vamos passar uma variável de ambiente para nossa aplicação saber qual é o IP do `redis`:

```bash
# Apagar o container
docker container rm -f giropops-senhas
docker run -d --name giropops-senhas -p 5000:5000 -e REDIS_HOST=<IP> linuxtips/giropops-senhas:1.0
```

Show, agora tudo está funcionando, mas não é elegante passar o IP do `redis` manualmente, então vamos criar uma Network para conectar nossos containers:

```bash
# Apagar os containers
docker rm -f giropops-senhas redis
docker network create giropops
docker run -d --name redis -p 6379:6379 --network giropops redis
docker run -d --name giropops-senhas -p 5000:5000 -e REDIS_HOST=redis --network giropops linuxtips/giropops-senhas:1.0
```

Agora sim, tudo está funcionando e nossos containers estão conectados em uma Network. Você pode verificar isso rodando o comando:

```bash
docker network inspect giropops
```

O comando acima irá mostrar todas as informações da Network `giropops`, você pode ver que os containers `giropops-senhas` e `redis` estão conectados nela, qual é o IP de cada container, etc.

Quando você colocar os containers em uma Network, o Docker cria um DNS interno para os containers, então você pode acessar o container pelo nome do container, no caso acima, o `giropops-senhas` acessa o `redis` pelo nome `redis`.

:::warning
Não utilize a opção `--link` para conectar containers em uma Network, pois ela está obsoleta e será removida em futuras versões do Docker.
:::

### Outras opções de rede para os nossos containers

Vamos passar novos parâmetros para o comando `docker run`, para ver a lista completa de opções, rode o comando:

```bash
docker container run --help
```

- `--add-host`: adiciona um host ao arquivo `/etc/hosts` do container.
- `--dns`: define o servidor DNS para o container.
- `--dns-search`: define o domínio de pesquisa para o servidor DNS.
- `--dns-option`: define opções adicionais para o servidor DNS.
- `--ip`: define o endereço IP do container.
- `--mac-address`: define o endereço MAC do container.

### Conectando containers em uma Network temporariamente

Se você não quiser criar uma Network para conectar seus containers, você pode usar a opção `--network` para conectar seus containers temporariamente. Por exemplo, para conectar o container `giropops-senhas` ao container `redis` temporariamente, rode o comando:

```bash
# Apagar os containers
docker container rm -f giropops-senhas
docker run -d --name redis -p 6379:6379 --network giropops redis
# Rodar o container sem ligar na Network
docker run -d --name giropops-senhas -p 5000:5000 -e REDIS_HOST=redis linuxtips/giropops-senhas:1.0
# Não vai funcionar, pois o container não está na Network
docker network connect giropops giropops-senhas
# Agora sim, tudo está funcionando
docker network disconnect giropops giropops-senhas
# Agora o container não está mais conectado na Network, então não vai funcionar
```

### Limpando a casa

```bash
docker rm -f giropops-senhas redis
docker network prune
```

O comando `prune` remove todas as Networks que não estão sendo usadas.

### Limitando recursos como CPU e Memória

Vamos passar novos parâmetros para o comando `docker run`, para ver a lista completa de opções, rode o comando:

```bash
docker container run --help
```

- `--cpus`: limita a quantidade de CPUs que o container pode usar. Você pode usar valores decimais, por exemplo, `--cpus 0.5` limita o container a usar metade de uma CPU.
- `--memory`: limita a quantidade de memória que o container pode usar. Você pode usar valores com `k`, `m`, `g`, por exemplo, `--memory 128m` limita o container a usar 128MB de memória.
- `--memory-swap`: limita a quantidade de memória + swap que o container pode usar.
- `--memory-reservation`: define a quantidade de memória que o container reserva.

Vamos testar limitar a quantidade de CPUs e memória que o container pode usar:

```bash
docker container rm -f giropops-senhas
docker run -d --name giropops-senhas -p 5000:5000 --cpus 0.5 --memory 128m linuxtips/giropops-senhas:1.0
```

Você pode verificar se os limites estão sendo respeitados rodando o comando:

```bash
docker container stats
# ou
docker container stats giropops-senhas
```

O comando acima mostra as estatísticas do container `giropops-senhas`, você pode ver a quantidade de CPUs e memória que o container está usando.

Você consegue atualuzar os limites de CPU e memória de um container em execução rodando o comando:

```bash
docker update --cpus 1 --memory 256m giropops-senhas
```