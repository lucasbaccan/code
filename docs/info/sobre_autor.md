---
id: sobre_autor
title: Sobre o autor
---

<!-- Imports -->

import Link from "@docusaurus/Link";
import Center from "@site/src/components/Center";
import CalcularAno from "@site/src/components/CalcularAno";
import ProgressBar from "@site/src/components/ProgressBar";

Olá, seja bem vindo ao meu site! 🥳

## Quem sou eu?

Meu nome é **Lucas Elias Baccan**, tenho <CalcularAno ano='1995' mes='9' dia='30'/> anos, moro no Oeste do Paraná. Gosto de tecnologia, programação, automação e infraestrutura. Minha carreira começou com programação, mas agora estou focando em DevOps.

<Center>
  <img src="https://avatars1.githubusercontent.com/u/2676484?s=300&amp;v=4" />
</Center>

## Redes sociais

Eu não sou muito ativo nas redes sociais, mas você pode me encontrar em algumas delas. Caso queira entrar em contato, pode me chamar por lá.

- [GitHub](https://github.com/lucasbaccan/)
- [LinkedIn](https://www.linkedin.com/in/lucas-baccan/)

## Formação acadêmica

- **Análise e Desenvolvimento de Sistemas** (2015)
- **MBA em Segurança da Informação** (2017)
- **Pós graduação em Desenvolvimento Web e Mobile** (2022)

Além disso, sempre busco aprender coisas novas. Caso queira saber mais os cursos relevantes que fiz, você pode acessar a aba [cursos](/cursos) aqui do site.

## Experiência profissional

### Germantech (2013 - 2021)

:::note Sobre
**Site**: [https://germantech.com.br/](https://germantech.com.br/)  
**Tamanho**: Pequena empresa (menos de 40 funcionários)
:::

A Germantech foi minha primeira experiência profissional. Entrei como **estagiário** e por lá fiquei quase **8 anos**. Passei por diversos times e áreas, o que me proporcionou uma visão ampla de como funciona a empresa, isso foi fundamental para meu crescimento profissional.

A empresa atua em algumas áreas, como:

- Sistemas de emissão de documentos fiscais (NF-e, NFC-e, CT-e, SAT, NFS-e, etc)
- Gestão para comércios (PDV, controle de estoque, gestão financeira, etc)
- Gestão para escolas (controle de alunos, professores, notas, etc)
- Gestão para contabilidades (contabilidade, folha de pagamento, impostos, honorários, etc)

Com o tempo de casa, fui aprendendo os processos existentes e como funcionavam. Sabendo disso, consegui identificar problemas e propor soluções, principalmente na automação de processos. O fato de ser uma empresa pequena ajudou, pois eu tinha liberdade para assumir a responsabilidade de criar e implementar soluções. Essas soluções eram bem vistas por todos, pois facilitavam ou otimizavam o trabalho de todos em diversas áreas.

#### Aprendizados

- Java (Desenvolvimento Desktop e Web)
- Jenkins (Instalação, manutenção, criação de pipelines e automação de processos)
- Postgres (Banco de dados)
- NativeScript (Desenvolvimento mobile)
- AWS (EC2, S3, Route53)
- VmWare (Servidores virtuais local)
- Linux (Gestão de servidores Linux, Shell Script)

#### Projetos relevantes

- [Plugin de boleto](#plugin-de-boleto): Criação de plugin para geração de boletos e arquivos de remessa e retorno.
- [Processo de integração contínua](#processo-de-integração-contínua): Criação de processo de integração contínua com Jenkins, automatizando o processo de geração dos artefatos do sistema.

### Matera (2021 - Presente)

:::note Sobre
**Site**: [https://matera.com/](https://matera.com/)  
**Tamanho**: Grande empresa (mais de 1000 funcionários)
:::

A Matera é onde atualmente trabalho há **<CalcularAno ano='2021' mes='1' dia='11'/> anos**, entrei como **DevOps** e aprendi muito já. A empresa é focada em tecnologia para o mercado financeiro, então as ferramentas e processos são mais robustos.

Eu atuo na torre de **arquitetura**, com atuação horizontal em diversos times. O foco é melhorar as bibliotecas e customizações em relação ao Jenkins, implementar novas ferramentas e processos e ajudar os outros DevOps com problemas que surgem em seus times.

Sou o responsável por organizar e apresentar dados de FinOps e Segurança para os DevOps dos times, traçando metas e objetivos para otimizar os ambientes, reduzindo custos e vetores de ataque.

#### Aprendizados

- Jira (Gestão de tarefas e projetos)
- Confluence (Documentação e gestão de conhecimento)
- DevOps
  - Jenkins (Criação de pipelines, bibliotecas customizadas e automação de processos)
  - Terraform (Infraestrutura como código)
  - Docker (Criação de containers e imagens)
  - Kubernetes (Gestão de clusters e aplicações)
  - AWS (EC2, S3, Route53, EKS, RDS, Lambda, etc)
  - Linux (Gestão de servidores Linux)
  - Grafana (Gestão de métricas e logs, com dashboards de custos personalizados)
  - Prometheus (Gestão de métricas e logs)
- Segurança:
  - SonarQube (Análise de código estático)
  - Dependency-Check (Análise de dependências)
  - Dependency-Track (Análise de dependências)
  - Defectdojo (Gestão de vulnerabilidades)
  - Dependabot (Análise de dependências)
  - Spotbugs (Análise de código estático)
  - Trivy (Análise de vulnerabilidades em containers)
- FinOps
  - Cloud8 (Gestão de custos em nuvem)
  - AWS Cost Explorer (Gestão de custos em nuvem)

#### Projetos relevantes

- [Cloud8](#cloud8): Criação de processo de raspagem de dados para otimização de ambientes, utilizando Python, Selenium, Postgres e Grafana.
- [LogBuddy](#logbuddy): Criação de ferramenta para ajudar desenvolvedores e QAs a identificar problemas em logs do Jenkins, utilizando Python, Flask e Postgres.

## Projetos relevantes

### Plugin de boleto

:::note Sobre
Desenvolvido na Germantech.
:::

Um dos primeiros projetos que fiz sozinho e do zero. O projeto era uma biblioteca Java para gerar boletos e arquivos de remessa e retorno. Antes da biblioteca, era utilizado o [Bopepo](https://github.com/jrimum/bopepo), mas ele passou a não atender as necessidades da empresa, então eu sugeri a criação dessa biblioteca para atender a demanda.

Ele suportava diversos bancos:

- Banco do Brasil (001)
- Banco do Nordeste (004)
- Santander (033)
- Caixa Econômica Federal (104)
- Bradesco (237)
- Itaú (341)
- Sicredi (748)
- Sicoob (756)

Os arquivos de remessa e retorno eram gerados nos padrões CNAB 240 e CNAB 400. A biblioteca foi um sucesso: conseguimos atender a demanda de clientes que precisavam de boletos sem custo extra para a empresa nem dependência de serviços externos. Os boletos eram emitidos pelo sistema e caíam diretamente na conta do cliente, sem intermediários.

### Processo de integração contínua

:::note Sobre
Desenvolvido na Germantech.
:::

Antigamente o processo de geração dos artefatos do sistemas era feito manualmente pela equipe de desenvolvimento, repassada para o suporte, que depois atualizava o FTP com os novos arquivos que o comercial e os clientes utilizavam para instalação.

Vendo isso e querendo me aventurar a aprender mais, implantei no Jenkins novos jobs, plugins e scripts para automatizar o processo de geração dos artefatos.

Quando precisava fazer o fechamento de uma versão, era executado as seguintes etapas:

- O Jenkins copiava o código da branch de desenvolvimento (develop) para a branch de produção (master).
- Era criada uma tag com o número da versão do sistema.
- O Jenkins gerava os artefatos do sistema (.jar, .exe, .war, etc).
- O Jenkins copiava os artefatos para a AWS S3.
- O Jenkins atualizava site interno com os novos arquivos e versões.
- O Jenkins enviava um e-mail para a equipe de suporte avisando que a nova versão estava disponível.

A maior parte dos sistemas eram desktop, então não era necessário fazer deploy, mas em um dos sistemas web, o deploy era feito automaticamente. O Jenkins copiava os arquivos para o servidor de produção e reiniciava o serviço do servidor web.

Isso ajudou a tornar o processo mais rápido e eficiente, além de evitar erros humanos. O suporte não precisava mais se preocupar em atualizar os arquivos, pois o Jenkins fazia isso automaticamente, o que ajudou a reduzir o tempo de entrega dos sistemas.

### Cloud8

:::note Sobre
Desenvolvido na Matera.
:::

Utilizamos essa ferramenta para gestão de custos, ela consegue trazer notas e ações de otimização de ambientes, mas ela só traz os números atuais. Então criei um processo de raspagem de dados, utilizando Python, Selenium, Postgres e Grafana. O script roda diariamente, coleta os dados e armazena no banco de dados. Depois, o Grafana gera os gráficos e dashboards com os dados coletados.

Com esses dados, os gerentes e coordenadores conseguem ver se o ambiente está otimizado, se tem algum recurso ocioso ou se tem algum recurso que pode ser desligado. Conseguimos ter uma linha do tempo para saber se estão otimizando o ambiente ou não. Isso ajudou a reduzir os custos em mais de 30% em alguns ambientes.

Além da coleta dos dados, eu sou o responsável por apresentar nas reuniões de DevOps, dando um direcionamento para os DevOps dos times em quais ações priorizar e quais ações são mais relevantes para a empresa.

### LogBuddy

:::note Sobre
Desenvolvido na Matera.
:::

Projeto que eu criei para ajudar principalmente os desenvolvedores e QAs a identificar problemas em logs do Jenkins. Ele é feito com Python, Flask e Postgres. Ele tem cerca de 500 regras de validação, que executam em cima dos logs do Jenkins.

Ao identificar um problema, ele já mostra onde aconteceu, uma possível causa e uma possível solução do problema. Em cerca de 6 meses, ele já identificou mais de 1000 problemas, em 300 jobs em 5 milhões de linhas de logs.

Ele não resolve o problema, mas dá autonomia aos times e otimiza o tempo do DevOps para resolver problemas.

### Athus Homework

:::note Sobre
Desenvolvido como freelancer.
:::

Esse projeto foi um desafio, criar um aplicativo para uma escola de idiomas que tivesse um sistema de reconhecimento de voz para atividades de pronúncia. O aplicativo foi desenvolvido em Flutter, com backend em Ruby on Rails e banco de dados em Postgres.

Já existia o sistema de tarefas, mas foi preciso criar toda a API e o aplicativo do zero.

- Google Play Store: [Athus Homework](https://play.google.com/store/apps/details?id=br.com.germantech.athusHomework)
- Apple Store: [Athus Homework](https://apps.apple.com/br/app/athus/id1414979492)

## Habilidades/Conhecimentos

:::info Observação
Os valores abaixo são o quanto eu me sinto confortável em cada tecnologia. Não é uma métrica exata, mas sim uma referência do meu conhecimento e experiência com cada tecnologia.

- Até **30%**: Trabalhei pouco com a tecnologia, não tenho muita experiência. Resolvo problemas simples, seguindo tutoriais e documentações.
- Entre **31%** e **60%**: Já fiz alguns projetos, mas ainda preciso de orientação para temas mais complexos.
- Entre **61%** e **80%**: Já fiz diversos projetos, tenho experiência e consigo resolver problemas complexos sem ajuda.
- Acima de **80%**: Tenho bastante experiência, consigo resolver problemas complexos e posso ajudar outras pessoas.

:::

### Desenvolvimento

<ProgressBar value={100} />
Eu gosto muito de programar, resolvo diversos problemas com programação. Eu não sou o melhor programador do mundo, mas consigo entregar soluções que funcionam. É algo que venho aperfeiçoando desde 2013.

Eu consigo ajudar outros desenvolvedores a quebrar o problema em partes menores, e assim conseguir superar o problema de forma mais fácil.

Eu não domino todos os padrões de desenvolvimento/arquitetura, mas tento utilizar conceitos como SOLID, DRY e KISS.

### Suporte

<ProgressBar value={100} />
Não quero atuar só como suporte, mas atuando como suporte interno dos times de desenvolvimento é algo que faço com tranquilidade.

### DevOps

<ProgressBar value={100} />
É a área na qual atuo atualmente. Gosto muito de DevOps; é algo que me fascina. Eu gosto de automatizar processos, criar soluções e ajudar os desenvolvedores a entregar software de forma mais rápida e eficiente.
### Git

<ProgressBar value={100} />
Isso é fundamental para qualquer desenvolvedor. Eu utilizo o Git desde 2013, então tenho bastante experiência com ele. Utilizo o GitHub e o GitLab para versionar meus projetos.

Eu já fiz apresentações sobre Git, GitHub para novatos na área de tecnologia. Caso queira ver o conteúdo, ele está [aqui](/tutorial/git/) no site.

### Docker

<ProgressBar value={100} />
Depois que comecei a utilizar Docker, me viciei, sempre que posso, uso. É uma ferramenta que facilita muito a vida, principalmente para desenvolvimento e automação de processos.

### Docker Compose

<ProgressBar value={100} />
Docker é ótimo, mas o Docker Compose é melhor ainda. Ele facilita muito a vida, então a grande parte dos projetos que faço, tem um `compose.yaml` para facilitar o desenvolvimento local.

### Jenkins

<ProgressBar value={100} />
Eu já tive que instalar e configurar o Jenkins do zero, então tenho bastante experiência com ele. Já fiz diversos plugins e bibliotecas para ele, então consigo ajudar outros desenvolvedores a resolver problemas.

Hoje é uma das principais ferramentas de CI/CD. Ele é muito versátil, então você tem que ter cuidado para não deixar ele muito complexo. O ideal é sempre tentar simplificar o processo, para que ele seja fácil de entender e manter.

### SQL

<ProgressBar value={100} />
Por ter começado como desenvolvedor, sempre precisei utilizar banco de dados. Então tenho bastante experiência com SQL, principalmente com Postgres. Consigo criar queries complexas e otimizar consultas.

Tem até material aqui no site sobre SQL, caso queira ver, acesse esse [aqui](/tutorial/sql/).

### Java / Python / Shell Script / Groovy

<ProgressBar value={85} />
**Java** foi minha primeira linguagem de programação, então tenho bastante experiência como desenvolvedor, mas os sistemas das empresas que trabalho são em Java, então sempre estou aprendendo algo novo.

**Groovy** é utilizado mais para criar bibliotecas e plugins para o Jenkins, então acabo utilizando para realizar diversas integrações de ferramentas com o Jenkins.

**Python/Shell** Script são utilizados para automação de processos, então sempre que posso utilizo. O Python é uma linguagem muito poderosa e fácil de aprender, então sempre que posso utilizo, mas quando preciso de algo mais simples, utilizo Shell Script.

### AWS

<ProgressBar value={65} />
Eu mexi bastante com S3, EC2, Route53 mas quando se fala de Lambda, EKS, RDS, VPC, etc, eu tenho um conhecimento básico. Já fiz alguns projetos com essas ferramentas, mas não tenho muita experiência. Estou sempre aprendendo e tentando melhorar.

AWS é muito ampla, no geral consigo resolver o que precisa, mas as vezes dou uma pesquisada na documentação para entender melhor como funciona.

### JavaScript / TypeScript / Node / React / Angular / PHP / Flutter

<ProgressBar value={60} />
Eu consigo dar manutenções pontuais em sistemas dessas linguagens, mas não sou um especialista. Pra tudo que precisei fazer, consegui me virar sozinho, mas atuo de forma pontual.

### Kubernetes

<ProgressBar value={45} />
Eu aprendi a utilizar Kubernetes, seus componentes e como funciona. Dou manutenção e subo aplicações nele, mas ainda existe oportunidade de aprendizado. É uma ferramenta muito poderosa, mas complexa.

### Terraform

<ProgressBar value={45} />
No passado eu salvava os scripts de criação/configuração do ambiente, mas hoje em dia estou utilizando o Terraform para criar os ambientes quando possível.
