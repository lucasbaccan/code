"use strict";(self.webpackChunkcode=self.webpackChunkcode||[]).push([[883],{164:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>d,toc:()=>t});var r=o(5893),a=o(1151);const n={id:"arara_gtech_site",title:"arara.gtech.site"},i=void 0,d={id:"germantech/arara_gtech_site",title:"arara.gtech.site",description:"Projeto privado de Lucas Baccan//github.com/lucasbaccan/arara.gtech.site",source:"@site/docs/off/germantech/08_arara_gtech_site.md",sourceDirName:"germantech",slug:"/germantech/arara_gtech_site",permalink:"/off/germantech/arara_gtech_site",draft:!1,unlisted:!1,editUrl:"https://github.com/lucasbaccan/code/tree/master/docs/off/germantech/08_arara_gtech_site.md",tags:[],version:"current",lastUpdatedBy:"Lucas Elias Baccan",lastUpdatedAt:1722798949e3,sidebarPosition:8,frontMatter:{id:"arara_gtech_site",title:"arara.gtech.site"},sidebar:"germantech_sidebar",previous:{title:"AWS Route 53",permalink:"/off/germantech/aws_route53"}},c={},t=[{value:"Como clonar",id:"como-clonar",level:2},{value:"Requisitos",id:"requisitos",level:2},{value:"Containers",id:"containers",level:2},{value:"postgres_db",id:"postgres_db",level:3},{value:"postgres_cron",id:"postgres_cron",level:3},{value:"Rotinas",id:"rotinas",level:4},{value:"pgadmin (opcional)",id:"pgadmin-opcional",level:3},{value:"grafana",id:"grafana",level:3},{value:"prometheus",id:"prometheus",level:3},{value:"postgres_exporter",id:"postgres_exporter",level:3},{value:"node_exporter (opcional)",id:"node_exporter-opcional",level:3},{value:"Como instalar/iniciar o servidor",id:"como-instalariniciar-o-servidor",level:2}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.admonition,{title:"Projeto",type:"tip",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Projeto privado de Lucas Baccan:"})," ",(0,r.jsx)(s.a,{href:"https://github.com/lucasbaccan/arara.gtech.site",children:"https://github.com/lucasbaccan/arara.gtech.site"})]})}),"\n",(0,r.jsx)(s.h2,{id:"como-clonar",children:"Como clonar"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"git clone https://github.com/lucasbaccan/arara.gtech.site.git\n"})}),"\n",(0,r.jsx)(s.h2,{id:"requisitos",children:"Requisitos"}),"\n",(0,r.jsx)(s.p,{children:"Certifique-se que o servidor tenha os seguintes programas instalados:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://git-scm.com/",children:"Git"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://www.docker.com/",children:"Docker"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://docs.docker.com/compose/",children:"Docker-Compose"})}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"containers",children:"Containers"}),"\n",(0,r.jsx)(s.p,{children:"Esse projeto sobe alguns containers para o funcionamento do banco de dados. S\xe3o eles:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://www.postgresql.org/",children:"PostgreSQL"})}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.a,{href:"https://www.pgadmin.org/",children:"PgAdmin"})," (opcional)"]}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://grafana.com/",children:"Grafana"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://prometheus.io/",children:"Prometheus"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/prometheus-community/postgres_exporter",children:"Postgres Exporter"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://github.com/prometheus/node_exporter",children:"Node Exporter"})}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["A imagem do PostgreSQL \xe9 a oficial do Docker Hub, na vers\xe3o ",(0,r.jsx)(s.a,{href:"https://hub.docker.com/layers/library/postgres/11.16/images/sha256-fdfb434d69d7884d6366840279dc3e721d1bd67cc1d02d51aeea7497f323fc5e?context=explore",children:"postgres:11.16"}),", o que significa que a vers\xe3o do Postgres \xe9 a 11.16 e o SO \xe9 Debian. J\xe1 o PgAdmin \xe9 a imagem ",(0,r.jsx)(s.a,{href:"https://hub.docker.com/layers/dpage/pgadmin4/6.13/images/sha256-8f6a7197c89e4817669596b4edac8a21a8d087dadb2a7639ec99999b507f3052",children:"dpage/pgadmin4:6.13"}),", que \xe9 a vers\xe3o 6.13 do PgAdmin4, que est\xe1 rodando em um SO Alpine."]}),"\n",(0,r.jsx)(s.h3,{id:"postgres_db",children:"postgres_db"}),"\n",(0,r.jsxs)(s.p,{children:["Esse container \xe9 o banco de dados em si, onde todos os bancos de dados v\xe3o rodar. Todos os dados s\xe3o salvos em um volume, que \xe9 o ",(0,r.jsx)(s.code,{children:"postgres-db-data:/var/lib/postgresql/data"}),", ent\xe3o caso o container seja removido, os dados n\xe3o ser\xe3o perdidos.\nPara configurar, deve ser editado o arquivo ",(0,r.jsx)(s.code,{children:"env.sh"}),", que cont\xe9m as seguintes vari\xe1veis:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"POSTGRES_USER"}),": usu\xe1rio do banco de dados"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"POSTGRES_PASSWORD"}),": senha do usu\xe1rio do banco de dados"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"POSTGRES_HOST"}),": host do banco de dados (deve ser ",(0,r.jsx)(s.code,{children:"postgres_db"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"POSTGRES_PORT"}),": porta do banco de dados (deve ser ",(0,r.jsx)(s.code,{children:"5432"}),")"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"postgres_cron",children:"postgres_cron"}),"\n",(0,r.jsxs)(s.p,{children:["Esse container utiliza a mesma imagem do ",(0,r.jsx)(s.code,{children:"postgres_db"}),", mas \xe9 utilizado para rodar scripts que precisam dos bin\xe1rios do postgres, mas que n\xe3o precisa ter o banco rodando. Ent\xe3o a rotina de backup, por exemplo, \xe9 rodada nesse container. Todos os dados s\xe3o salvos em um volume do tipo ",(0,r.jsx)(s.em,{children:"bind"}),", que \xe9 o ",(0,r.jsx)(s.code,{children:"./backups/:/backups/"}),", que faz com que os arquivos gerados pelo container sejam salvos na pasta ",(0,r.jsx)(s.code,{children:"backups"})," do host.\nPara configurar, deve ser editado o arquivo ",(0,r.jsx)(s.code,{children:"env.sh"}),", que cont\xe9m as seguintes vari\xe1veis:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"POSTGRES_USER"}),": usu\xe1rio do banco de dados"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"POSTGRES_PASSWORD"}),": senha do usu\xe1rio do banco de dados"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"POSTGRES_HOST"}),": host do banco de dados (deve ser ",(0,r.jsx)(s.code,{children:"postgres_db"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"POSTGRES_PORT"}),": porta do banco de dados (deve ser ",(0,r.jsx)(s.code,{children:"5432"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"S3_BUCKET_BACKUPS"}),": bucket do S3 onde os backups ser\xe3o salvos"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"DIRETORIO_SAIDA_BACKUPS"}),": diret\xf3rio onde os backups ser\xe3o salvos no container"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"SSH_PASSWORD"}),": senha do usu\xe1rio ",(0,r.jsx)(s.code,{children:"root"})," do container ",(0,r.jsx)(s.code,{children:"postgres_cron"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"rotinas",children:"Rotinas"}),"\n",(0,r.jsxs)(s.p,{children:["Todas as rotinas est\xe3o dentro da pasta ",(0,r.jsx)(s.code,{children:"crontab"})," sendo o arquivo ",(0,r.jsx)(s.code,{children:"crontab"})," o arquivo de configura\xe7\xe3o do cron. As rotinas s\xe3o copiadas para o container, basta colocar em ",(0,r.jsx)(s.code,{children:"crontab/jobs"}),"."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"/crontab/jobs/backup_todos_bancos.sh"}),": faz o backup de todos os bancos de dados do postgres.","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Pode receber um par\xe2metro ",(0,r.jsx)(s.code,{children:"true"}),"ou ",(0,r.jsx)(s.code,{children:"false"}),", que indica se o backup deve ser enviado para o S3 ou n\xe3o. Por padr\xe3o n\xe3o \xe9 enviado."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"/crontab/jobs/drop_loop.sh"}),": verifica as conex\xf5es indevidas no banco de dados e mata elas."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"pgadmin-opcional",children:"pgadmin (opcional)"}),"\n",(0,r.jsxs)(s.p,{children:["Este container \xe9 opcional, e serve para facilitar a visualiza\xe7\xe3o dos bancos de dados. Ele \xe9 acessado atrav\xe9s do endere\xe7o ",(0,r.jsx)(s.code,{children:"http://IP-SERVIDOR:8080"}),", e o usu\xe1rio e senha padr\xe3o s\xe3o ",(0,r.jsx)(s.code,{children:"admin@admin.com"})," e ",(0,r.jsx)(s.code,{children:"admin"}),", respectivamente."]}),"\n",(0,r.jsx)(s.h3,{id:"grafana",children:"grafana"}),"\n",(0,r.jsxs)(s.p,{children:["Esse container \xe9 o respons\xe1vel por exibir os gr\xe1ficos de m\xe9tricas do Prometheus. Ele \xe9 acessado atrav\xe9s do endere\xe7o ",(0,r.jsx)(s.code,{children:"http://IP-SERVIDOR:3000"}),", e o usu\xe1rio e senha padr\xe3o s\xe3o ",(0,r.jsx)(s.code,{children:"admin"})," e ",(0,r.jsx)(s.code,{children:"admin"}),", respectivamente. No primeiro login da para alterar a senha."]}),"\n",(0,r.jsx)(s.h3,{id:"prometheus",children:"prometheus"}),"\n",(0,r.jsx)(s.p,{children:"Esse container \xe9 o respons\xe1vel por coletar as m\xe9tricas dos bancos de dados e dos containers. O padr\xe3o seria exportar a porta 9090, mas ela s\xf3 \xe9 vis\xedvel para os containers."}),"\n",(0,r.jsx)(s.h3,{id:"postgres_exporter",children:"postgres_exporter"}),"\n",(0,r.jsx)(s.p,{children:"Esse container \xe9 o respons\xe1vel por exportar as m\xe9tricas do banco de dados para o Prometheus. O padr\xe3o seria exportar a porta 9187, mas ela s\xf3 \xe9 vis\xedvel para os containers."}),"\n",(0,r.jsx)(s.h3,{id:"node_exporter-opcional",children:"node_exporter (opcional)"}),"\n",(0,r.jsx)(s.p,{children:"Esse container \xe9 o respons\xe1vel por exportar as m\xe9tricas do servidor para o Prometheus. O padr\xe3o seria exportar a porta 9100, mas ela s\xf3 \xe9 vis\xedvel para os containers."}),"\n",(0,r.jsx)(s.h2,{id:"como-instalariniciar-o-servidor",children:"Como instalar/iniciar o servidor"}),"\n",(0,r.jsxs)(s.p,{children:["Ap\xf3s o clone do projeto, vai existir alguns arquivos ",(0,r.jsx)(s.code,{children:".sh"}),", basta executar eles:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Configura\xe7\xe3o"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"server_install.sh"}),": script para instalar o servidor, \xe9 resultado dos comandos utilizados na cria\xe7\xe3o do servidor utilizando ",(0,r.jsx)(s.strong,{children:"AWS Linux"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"env.sh"}),": arquivo de configura\xe7\xe3o do ambiente do servidor."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"ssh_key_generate.sh"}),": script para gerar a chave SSH para o container ",(0,r.jsx)(s.code,{children:"postgres_cron"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"criar_ambiente.sh"}),": script para criar o ambiente do servidor, utilizado na primeira vez."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Status do servidor"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"start.sh"}),": script para iniciar o servidor (pode passar o par\xe2metro ",(0,r.jsx)(s.code,{children:"true"})," para ver o log)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"stop.sh"}),": script para parar o servidor."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"restart.sh"}),": script para reiniciar o servidor."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Restaurar backup"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"restore.sh"}),": script para restaurar os backups do S3."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"restore_stop.sh"}),": script para parar o script de restaura\xe7\xe3o."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"restore_continue.sh"}),": script para continuar o script de restaura\xe7\xe3o."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Outros"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"convert_unix.sh"}),": script para converter os arquivos da pasta atual para o formato UNIX, caso estejam no formato Windows. Requer o pacote ",(0,r.jsx)(s.code,{children:"dos2unix"})," instalado."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,s,o)=>{o.d(s,{Z:()=>d,a:()=>i});var r=o(7294);const a={},n=r.createContext(a);function i(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);