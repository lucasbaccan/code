---
id: jenkins
title: Jenkins
---

:::tip LINK
**LINK:** [https://www.jenkins.io/](https://www.jenkins.io/)
:::

O Jenkins é uma ferramenta de automação de tarefas, que pode ser utilizada para automatizar o processo de build e deploy de aplicações. O Jenkins é uma ferramenta open source, que pode ser instalada em qualquer servidor, e que pode ser utilizada para automatizar qualquer processo que possa ser executado em um servidor.

## Instalação

Para instalar o Jenkins, basta acessar o [site oficial](https://www.jenkins.io/doc/book/installing/) e seguir as instruções de instalação para o seu sistema operacional.

## Configuração

Para configurar o Jenkins, basta acessar o endereço do servidor onde o Jenkins foi instalado, e seguir as instruções de configuração.

No primeiro acesso, o Jenkins solicitará a criação de um usuário administrador, que será utilizado para acessar o sistema. Sua senha inicial será gerada automaticamente, e será solicitada no primeiro acesso. A senha é salva em um arquivo chamado `initialAdminPassword` dentro da pasta `secrets` do Jenkins.

## Plugins

O Jenkins possui uma grande quantidade de plugins, que podem ser utilizados para automatizar tarefas específicas. Para instalar um plugin, basta acessar a página de gerenciamento de plugins, e pesquisar pelo plugin desejado. Para instalar um plugin, basta clicar no botão `Install without restart`.

:::caution Atenção
Os plugins ajudam muito no dia a dia, mas com o tempo, isso pode impactar no servidor, tanto em performance, quanto na manutenção. Por isso, é importante avaliar se o plugin é realmente necessário, e se ele não pode ser substituído por uma configuração simples.
:::

## Configurações gerais

Para o melhor funcionamento do Jenkins, deve ser verificado as configurações gerais do sistema. Esses ajustem tem que ser feitos atendendo as necessidades de cada empresa. 

## Estrutura

Segue abaixo os principais itens da estrutura do Jenkins:

### Jobs

O Jenkins é composto por jobs, que são as tarefas que serão executadas. Para criar um job, basta clicar no botão `New Item`, e preencher as informações do job.


Ao clicar em novo, selecione o tipo de job que deseja criar e seguir com as configurações que vão ser solicitadas. Os tipos de jobs mais comuns são:

#### Pipeline (Recomendado)

O Jenkins possui um tipo de job chamado `Pipeline`, que permite a criação de jobs que executam scripts. É a forma mais comum de se utilizar o Jenkins, e é a forma mais utilizada para automatizar o processo de build e deploy de aplicações.
No projeto, geralmente é utilizado o Jenkinsfile, que é um arquivo de configuração do Jenkins, que é versionado no repositório do projeto, e que é utilizado para configurar o job.

#### Freestyle

O Jenkins também possui um tipo de job chamado `Freestyle`, que permite a criação de jobs que executam scripts. É a forma mais simples e de forma visual, o que pode limitar a configuração do job.

#### Outros tipos de jobs

Dependendo dos plugins instalados, o Jenkins pode ter outros tipos de jobs, como por exemplo, o tipo `Maven`, que permite a criação de jobs que executam o Maven.

### Build

Cada job possui um número de build, que é um número sequencial que é incrementado a cada execução do job. O número da build é utilizado para identificar cada execução do job.

Os builds são as execuções do job, e tem as informações de quem, quando e o qeu foi executado. Você pode configurar quantos builds serão mantidos no histórico, e também se os builds serão mantidos mesmo que o job seja excluído.

### Artifacts

Os artifacts são os arquivos gerados durante a execução do job. Os artifacts são salvos no disco do servidor, e podem ser acessados através do Jenkins, ou diretamente no servidor. Então quando um job é executado, você especifica quais arquivos serão salvos como artifacts, senão nenhum arquivo será salvo.

## Configurações recomendadas

### Credenciais

As credenciais são as informações de acesso a outros sistemas, como por exemplo, o acesso ao repositório de código, ou o acesso ao servidor de deploy. As credenciais são utilizadas para acessar esses sistemas, e são armazenadas no Jenkins.

Para criar uma credencial, basta acessar a página de gerenciamento de credenciais, e clicar no botão `Add Credentials`.

Isso é uma boa prática, pois evita que as credenciais fiquem expostas no código além de facilitar a manutenção e padronização.

### Controle de acesso

O Jenkins possui um controle de acesso, que permite definir quem pode acessar o sistema, e quais jobs podem ser executados por cada usuário. Para configurar o controle de acesso, basta acessar a página de gerenciamento de usuários, e clicar no botão `Add User`.

### Configuração global de ferramentas

Em alguns casos você vai precisar instalar ferramentas no servidor do Jenkins, e depois ir em `Global Tool Configuration` e configurar o caminho para a ferramenta. Por exemplo, se você precisa instalar o Maven no servidor, você vai precisar configurar o caminho para o Maven. Isso torna o processo de configuração mais fácil, pois você não precisa configurar o caminho para a ferramenta em cada job.