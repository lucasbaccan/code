---
id: sobre
title: Sobre
slug: /sobre
description: Informações sobre formação e carreira
---

export const Highlight = ({children, color}) => (
    <span style={{color: color}}>{children}</span>
);

export const Menu = ({children, url, size}) => (
    <a href={url} style={{
        fontSize: size,
        fontWeight: 'bold',
        paddingLeft: '15px',
    }}>{children}</a>
);

export const DescricaoMenu = ({children}) => (
    <p style={{
        fontSize: '15px',
        paddingLeft: '0px',
        marginTop: '-22px',
        marginBottom: '10px',
        fontStyle: 'italic',
        color: '#777'
    }}>{children}</p>
);

import TeamProfileCard from "@site/src/components/TeamProfileCard"

export function TeamProfileCardCol(props) { return <TeamProfileCard {...props} className={'col col--12 margin-bottom--lg'}/> }


<TeamProfileCardCol
    name="Lucas Elias Baccan"
    githubUrl="https://github.com/LucasBaccan"
    linkedinUrl="https://www.linkedin.com/in/lucas-baccan/"
>

<div 
    style={{
        textAlign: 'center',
        margin: '0px',
        padding: '0px'
    }}
>Programador, entusiasta em tecnologia e fotografo amador nas horas vagas. 
</div>

</TeamProfileCardCol>

## Prefácio

Atuo com programação desde 2013, principalmente na linguagem Java e foco em aplicações desktop, entretanto, já trabalhei com outras linguagens, como Ruby, Ruby on Rails, PHP, NodeJS e Java com JSF. Com o tempo começei a gostar de mexer com ferramentas de DevOps, como Jenkins, Maven, atuando na automação e melhoria de processos de CI/CD em projetos que passei. 

## Formação acadêmica

<!-- ### <Menu size='22px'>Graduação - Análise e Desenvolvimento de Sistemas</Menu> -->
### Graduação - Análise e Desenvolvimento de Sistemas
<DescricaoMenu>Unipar - 2013/2015</DescricaoMenu>

Logo após terminar o 3º do ensino médio, fui direto para a faculdade, tinha algumas opções, entretanto optei por <Highlight color="#f52314">Análise e Desenvolvimento de Sistemas</Highlight> pois os horários possibilitava trabalhar durante o dia e estudar anoite. 

<!-- ### <Menu size='22px'>MBA - Segurança da Informação</Menu> -->
### MBA - Segurança da Informação
<DescricaoMenu>IGTI - 2016/2017</DescricaoMenu>

Assim que me formei, fiz uma pós-graduação, optei em fazer o curso de <Highlight color="#f52314">Segurança da Informação</Highlight> pois é algo que todas as empresas deveriam pensar, mas que geralmente fica em segundo plano ou quando sofrem algum ataque. O MBA ensinou muito, e com a vinda da LGPD (Lei Geral de Proteção de Dados) o assunto está mais em alta.

### Cursos

No tempo livre, uma das coisas que gosto é aprender novas tecnologias, tanto por curiosidade quanto por necessidade. Gosto de ver as documentações, mas para video aula, gosto de utilizar a plataforma [Udemy](https://www.udemy.com/).

Além de cursos técnicos, um dos cursos que gostei muito de ter feito foi o curso de Eneagrama, algo que ajudou muito no autoconhecimento, quanto a lidar com pessoas e solução de conflitos.

---

## Linguagens de programação

### Java
<DescricaoMenu>Atualmente é a linguagem principal que eu trabalho</DescricaoMenu>

Primeira linguagem que tive contato, começei a ver a linguagem na faculdade, em 2013, e trabalho com ela até o momento. Utilizo Java tanto para desktop quanto para web. Para o ambiente web utilizo JSF e <Highlight color="#f52314">Apache Tomcat</Highlight>

### SQL

Junto com Java, utilizo SQL no dia a dia para consultas e manipulação de dados em banco de dados relacional, principalmente utilizando <Highlight color="#f52314">PostgresSQL</Highlight>. Utilizo muito SQL para a criação de relatórios com <Highlight color="#f52314">iReport</Highlight>.

### Dart/Flutter
<DescricaoMenu>Atualmente é a linguagem principal que eu estudo e utilizo para projetos pessoais</DescricaoMenu>

Começei a estudar no inicio de 2020, e gostei muito da linguagem. Ela é uma mistura de Java, Javascript, Python, tem um pouco do que é o melhor de cada mundo, muito fácil de utilizar. Já o Flutter, torna o desenvolvimento de aplicativos Android e iOS algo simples de fazer.

### Ruby e Ruby on Rails
<DescricaoMenu>Tenho que melhorar, mas é o suficiente para manutenção de projetos</DescricaoMenu>

Alguns momentos no trabalho preciso realizar a manutenção em algumas aplicações em Ruby/RoR. Não tenho tanta familiaridade com as peculiaridades da linguagem, entretanto quem tem conhecimento de lógica, basta ver a documentação para confirmar os detalhes da linguagem.

### PHP
<DescricaoMenu >Tenho que melhorar, mas é o suficiente para manutenção de projetos</DescricaoMenu>  

Alguns momentos no trabalho preciso realizar a manutenção em algumas aplicações em PHP 7.2. Não tenho tanta familiaridade com as peculiaridades da linguagem, entretanto quem tem conhecimento de lógica, basta ver a documentação para confirmar os detalhes da linguagem.

---

## Objetivos/Desejos

### Algular e React

Tenho vontade de aprender algum dos principais frameworks para desenvolvimento Web. Tenho mais tendencia para utilizar Angular, pois gosto de linguagens tipadas, entretanto acho que o react, junto com *Next.js* abrem muitas oportunidades.

### PWA

Flutter tem a opção de exportar para a web, e por padrão ele cria um PWA, mas gostaria de aprender mais a parte de como transformar um site já existe para um site PWA.

---

## Frameworks

* **Nativescript**: Primeiro contato com desenvolvimento mobile, utilizei para criar aplicações com Typescript e Angular, mas achei mais complicado que Flutter.

--- 

## Experiencia

### Amazon

Aprendi a utilizar alguns recursos da Amazon Web Services (AWS) conforme foi surgindo a necessidade, dentro deles posso citar os abaixo: 

* **Identity and Access Management (IAM)**: Controle de acesso de usuários, nível de acesso de aplicações, chaves de acesso, tudo que é relacionado a governança de identidade.

* **Simple Storage Service (S3)**: Utilizado para salvar arquivos, principalmente para a distribuição da atualização do projeto, além de utilizar para fazer o host de sites estáticos.

* **Elastic Compute Cloud (EC2)**: Servidores virtualizados, com configurações personalizadas e com baixa latência para aplicações que necessita de um tempo de resposta mais baixo.

* **Lightsail**: Servidores virtualizados dentro de um <Highlight color="#f52314">pacote</Highlight> fixo. O tradicional serviço de VPS com um valor fixo por mês, apesar de não ter servidores no Brasil, acaba sendo muito bom para diversas aplicações, e que tem um custo menor que o **EC2**.

* **Route53**: Utilizo no gerenciamento de domínios, sub-domínios, rotas de serviços e aplicações. Extremamente simples e robusto de utilizar e implementar.

### Jenkins

No meu trabalho descobri essa ferramenta incrível, e por questão de mudança do quadro de funcionários, tive a oportunidade de gerenciar. Neste processo, realizei a implementação do zero do servidor do Jenkins, da criação do servidor, instalação, configuração dos plugins, e scripts. Fui o responsável pela integração continua (CI) e deploy automatizado (CD) dos principais sistemas da empresa.

Configurar do zero e realizar as integrações fizeram o tempo de uma melhoria ser feita até chegar no cliente cair drasticamente, além do conhecimento adquirido, principalmente com Shell Script* e Pipelines.

**Muitas ações foram feitas utilizando shell script para comunicar informações entre servidores e ferramentas.*

---

## Portfólio/Projetos pessoais

### Jogo da Velha *(Dart/Flutter)*

Para treinar meus conhecimentos, desenvolvi em Flutter um aplicativo de Jogo da Velha, é simples, mas ajudou no entendimento de vários recursos da linguagem.

Realizei a compilação do projeto para WEB e pode ser visto no link abaixo.
Projeto é um PWA, então se você acessar em um navegador compatível, pode ser que você consiga instalar a versão web em seu dispositivo.

:::note LINK
**[Acesse agora](https://lucasbaccan.com.br/tictactoe)** e jogue com um amigo, totalmente offline.
:::

### Calculadora Alhambra *(Dart/Flutter)*

Continuando os estudos em flutter, criei uma aplicação para calcular os pontos do jogo de tabuleiro [Alhambra](https://www.ludopedia.com.br/jogo/alhambra), esta aplicação eu utilizei provider para ajudar no controle do estado da aplicação.

Adicione até 6 jogadores, e a cada rodada, marque quantas peças de cada cor os jogadores tem, pois o APP se encarrega de calcular quem tem mais peças de cada dor e fazer a divisão dos pontos.

Realizei a compilação do projeto para WEB e pode ser visto no link abaixo.
Projeto é um PWA, então se você acessar em um navegador compatível, pode ser que você consiga instalar a versão web em seu dispositivo.

:::note LINK
**[Acesse agora](https://lucasbaccan.com.br/alhambra)** caso você tenha o jogo de tabuleiro [Alhambra](https://www.ludopedia.com.br/jogo/alhambra), totalmente offline.
:::


<Highlight color="#f52314"></Highlight>