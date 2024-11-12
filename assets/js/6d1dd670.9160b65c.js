"use strict";(self.webpackChunkcode=self.webpackChunkcode||[]).push([[6329],{5079:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>t,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"pick-2024/docker/day3/index","title":"Day 3","description":"Sum\xe1rio","source":"@site/docs/cursos/pick-2024/docker/day3/index.md","sourceDirName":"pick-2024/docker/day3","slug":"/pick-2024/docker/day3/","permalink":"/cursos/pick-2024/docker/day3/","draft":false,"unlisted":false,"editUrl":"https://github.com/lucasbaccan/code/tree/master/docs/cursos/pick-2024/docker/day3/index.md","tags":[],"version":"current","lastUpdatedBy":"Lucas Elias Baccan","lastUpdatedAt":1731377114000,"frontMatter":{"id":"index","title":"Day 3","hide_title":false,"hide_table_of_contents":false,"sidebar_label":"Day 3"},"sidebar":"docs","previous":{"title":"Day 2","permalink":"/cursos/pick-2024/docker/day2/"},"next":{"title":"Day 4","permalink":"/cursos/pick-2024/docker/day4/"}}');var r=n(4848),s=n(8453),i=n(1470),c=n(9365);const t={id:"index",title:"Day 3",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Day 3"},l=void 0,d={},u=[{value:"Sum\xe1rio",id:"sum\xe1rio",level:2},{value:"Dia 3",id:"dia-3",level:2},{value:"Solu\xe7\xe3o do desafio do dia 2",id:"solu\xe7\xe3o-do-desafio-do-dia-2",level:3},{value:"Rodando a aplica\xe7\xe3o localmente",id:"rodando-a-aplica\xe7\xe3o-localmente",level:4},{value:"Dockerizando a aplica\xe7\xe3o",id:"dockerizando-a-aplica\xe7\xe3o",level:4},{value:"Melhorando a aplica\xe7\xe3o",id:"melhorando-a-aplica\xe7\xe3o",level:3},{value:"Melhorando a aplica\xe7\xe3o 2",id:"melhorando-a-aplica\xe7\xe3o-2",level:3},{value:"Distroless",id:"distroless",level:3},{value:"Trivy",id:"trivy",level:3},{value:"Docker Scout",id:"docker-scout",level:3},{value:"Assinando imagens com Cosign",id:"assinando-imagens-com-cosign",level:3},{value:"Desafio",id:"desafio",level:2},{value:"Objetivo",id:"objetivo",level:3},{value:"Solu\xe7\xe3o",id:"solu\xe7\xe3o",level:3}];function p(e){const a={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h2,{id:"sum\xe1rio",children:"Sum\xe1rio"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:"\ud83c\udfa5 Day3 - O que iremos ver no dia de hoje? - 02:16"}),"\n",(0,r.jsx)(a.li,{children:"\ud83c\udfa5 Day3 - Conhecendo a App que precisamos transformar em container - 10:24"}),"\n",(0,r.jsx)(a.li,{children:"\ud83c\udfa5 Day3 - Transformando a nossa aplica\xe7\xe3o em uma imagem de container - 17:07"}),"\n",(0,r.jsx)(a.li,{children:"\ud83c\udfa5 Day3 - Trabalhando com o tamanho e o n\xfamero de camadas da imagem - 07:37"}),"\n",(0,r.jsx)(a.li,{children:"\ud83c\udfa5 Day3 - O que \xe9 Distroless e otimizando nossa imagem - 19:37"}),"\n",(0,r.jsx)(a.li,{children:"\ud83d\udcd6 Day3 - O que s\xe3o imagens Distroless"}),"\n",(0,r.jsx)(a.li,{children:"\ud83c\udfa5 Day3 - Utilizando o Trivy para verificar vulnerabilidades e como ter uma imagem com 0 vulnerabiliades - 13:09"}),"\n",(0,r.jsx)(a.li,{children:"\ud83c\udfa5 Day3 - Utilizando o Docker Scout para checar o n\xfamero de vulnerabilidades - 08:17"}),"\n",(0,r.jsx)(a.li,{children:"\ud83d\udcd6 Day3 - O que \xe9 o Docker Scout?"}),"\n",(0,r.jsx)(a.li,{children:"\ud83c\udfa5 Day3 - Testando imagens Distroless - 02:08"}),"\n",(0,r.jsx)(a.li,{children:"\ud83c\udfa5 Day3 - Conhecendo o Cosign e a import\xe2ncia de assinar as suas imagens de container - 06:53"}),"\n",(0,r.jsx)(a.li,{children:"\ud83c\udfa5 Day3 - Assinando a nossa imagem e adicionando ao registry - 19:40"}),"\n",(0,r.jsx)(a.li,{children:"\ud83c\udfa5 Day3 - Encerramento - 02:39"}),"\n",(0,r.jsx)(a.li,{children:"\ud83d\udcdd Day3 - Exame te\xf3rico do Day-3 - 8 quest\xf5es"}),"\n",(0,r.jsx)(a.li,{children:"\u231b Day3 - Hora de Refletir sobre a sua resposta no Day3 - 1 quest\xf5es"}),"\n",(0,r.jsx)(a.li,{children:"\u231b Day3 - Seu di\xe1rio do Day3 - 1 quest\xf5es"}),"\n",(0,r.jsx)(a.li,{children:"\ud83c\udfa5 Day3 - V\xeddeo sobre o desafio - 02:05"}),"\n",(0,r.jsx)(a.li,{children:"\ud83d\udcdd Day3 - Desafio pr\xe1tico do Day3"}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.strong,{children:"Legenda"}),(0,r.jsx)(a.br,{}),"\n","\ud83c\udfa5 - Aula gravada\n\ud83d\udcd6 - Material complementar\n\ud83d\udcdd - Atividade\n\u231b - Revis\xe3o/Reflex\xe3o"]}),"\n",(0,r.jsx)(a.h2,{id:"dia-3",children:"Dia 3"}),"\n",(0,r.jsxs)(a.p,{children:["Day 3, o treinamento continua com foco em otimizar a cria\xe7\xe3o de imagens de container, verificando vulnerabilidades, assinando imagens, ",(0,r.jsx)(a.em,{children:"1 layer images"})," e ",(0,r.jsx)(a.em,{children:"distroless"}),"."]}),"\n",(0,r.jsx)(a.h3,{id:"solu\xe7\xe3o-do-desafio-do-dia-2",children:"Solu\xe7\xe3o do desafio do dia 2"}),"\n",(0,r.jsxs)(a.p,{children:["O ",(0,r.jsx)(a.a,{href:"/cursos/pick-2024/docker/day2/#desafio-2",children:"desafio do dia 2"})," era criar uma imagem da aplica\xe7\xe3o ",(0,r.jsx)(a.a,{href:"https://github.com/badtuxx/giropops-senhas",children:"giropops-senhas"})," e subir para o Docker Hub. A solu\xe7\xe3o minha pode ser vista ",(0,r.jsx)(a.a,{href:"/cursos/pick-2024/docker/day2/#solu%C3%A7%C3%A3o",children:"aqui"}),"."]}),"\n",(0,r.jsx)(a.h4,{id:"rodando-a-aplica\xe7\xe3o-localmente",children:"Rodando a aplica\xe7\xe3o localmente"}),"\n",(0,r.jsxs)(a.p,{children:["Jeferson come\xe7ou fazendo o clone do reposit\xf3rio e explicando o que precisaria ser feito para rodar localmente. Ele tinha j\xe1 o Python e o Redis instalados na maquina dele, s\xf3 ficou faltando instalar o ",(0,r.jsx)(a.code,{children:"requirements.txt"}),", criar a variavel de ambiente ",(0,r.jsx)(a.code,{children:"REDIS_HOST"})," e rodar o comando ",(0,r.jsx)(a.code,{children:"flask run --host=0.0.0.0"}),"."]}),"\n",(0,r.jsx)(a.h4,{id:"dockerizando-a-aplica\xe7\xe3o",children:"Dockerizando a aplica\xe7\xe3o"}),"\n",(0,r.jsx)(a.p,{children:"Agora seguimos para a cria\xe7\xe3o do Dockerfile. Criamos um Dockerfile com a seguinte estrutura:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-dockerfile",metastring:'showLineNumbers title="Dockerfile"',children:'FROM python:3.11\nWORKDIR /app\nCOPY requirements.txt .\nCOPY app.py .\nCOPY templates templates/\nCOPY static static/\nRUN pip install -r requirements.txt --no-cache-dir\nEXPOSE 5000\nCMD ["flask", "run", "--host=0.0.0.0"]\n'})}),"\n",(0,r.jsx)(a.p,{children:"E para criar a imagem, rodamos o comando:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"docker build --name giropops-senhas -t giropops-senhas:1.0 -f Dockerfile .\ndocker run -d -p 5000:5000 giropops-senhas:1.0\ndocker container logs giropops-senhas\n### ler os logs e ver que a aplica\xe7\xe3o est\xe1 rodando\n# A aplica\xe7\xe3o n\xe3o consegue se comunicar com o Redis\n"})}),"\n",(0,r.jsx)(a.p,{children:"Essa vers\xe3o vai dar erro, pois o Redis n\xe3o est\xe1 rodando. Para resolver isso, podemos rodar o Redis em um container separado e linkar os dois containers. Para isso, podemos rodar o comando:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"docker run -d -p 6379:6379 --name redis redis\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Isso ainda n\xe3o faz funcionar, pois est\xe1 faltando a vari\xe1vel de ambiente ",(0,r.jsx)(a.code,{children:"REDIS_HOST"}),". Para resolver isso, podemos rodar o comando:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"docker exec -it giropops-senhas bash\n### dentro do container\nexport REDIS_HOST=<IP do computador atual>\n### sair do container\ndocker container logs giropops-senhas\n### ler os logs e ver que a aplica\xe7\xe3o est\xe1 rodando\n# Aplica\xe7\xe3o ainda n\xe3o consegue se comunicar com o Redis\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Isso quer dize que estamos com um problema de comunica\xe7\xe3o entre os containers. Vamos resolver isso passando a vari\xe1vel de ambiente ",(0,r.jsx)(a.code,{children:"REDIS_HOST"})," para o container da aplica\xe7\xe3o. Para isso, podemos rodar o comando:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:'docker rm -f giropops-senhas\ndocker run -d -p 5000:5000 --name giropops-senhas -e REDIS_HOST=<IP do computador atual> giropops-senhas:1.0\ndocker container logs giropops-senhas\n### ler os logs e ver que a aplica\xe7\xe3o est\xe1 rodando\n# Aplica\xe7\xe3o consegue se comunicar com o Redis, funcionando corretamente com o "-e REDIS_HOST=<IP do computador atual>"\n'})}),"\n",(0,r.jsx)(a.p,{children:"Isso j\xe1 seria uma solu\xe7\xe3o para o problema, mas ainda n\xe3o \xe9 a melhor solu\xe7\xe3o, pois n\xe3o podemos passar o IP do computador atual para o container."}),"\n",(0,r.jsx)(a.h3,{id:"melhorando-a-aplica\xe7\xe3o",children:"Melhorando a aplica\xe7\xe3o"}),"\n",(0,r.jsxs)(a.p,{children:["Ao rodar o comando ",(0,r.jsx)(a.code,{children:"docker images"})," ou ",(0,r.jsx)(a.code,{children:"docker image ls"}),", podemos ver que a imagem que criamos tem 1GB. Isso \xe9 muito grande para uma aplica\xe7\xe3o t\xe3o simples. Vamos ent\xe3o trocar a imagem base para ",(0,r.jsx)(a.code,{children:"python:3.11-slim"}),":"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-dockerfile",metastring:'showLineNumbers title="Dockerfile"',children:'FROM python:3.11-slim\nWORKDIR /app\nCOPY requirements.txt .\nCOPY app.py .\nCOPY templates templates/\nCOPY static static/\nRUN pip install -r requirements.txt --no-cache-dir\nEXPOSE 5000\nCMD ["flask", "run", "--host=0.0.0.0"]\n'})}),"\n",(0,r.jsx)(a.p,{children:"e rodar o comando:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"docker build --name giropops-senhas -t giropops-senhas:2.0 -f Dockerfile .\ndocker images\n"})}),"\n",(0,r.jsx)(a.p,{children:"S\xf3 de trocar a imagem, a vers\xe3o 2.0 cai para 168MB, uma redu\xe7\xe3o de quase 90%. Por isso \xe9 importante conhecermos as imagens que estamos utilizando."}),"\n",(0,r.jsx)(a.p,{children:"Vamos inspecionar as camadas da imagem e analisar o tamanho de cada uma delas:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"docker history giropops-senhas:1.0\ndocker history giropops-senhas:2.0\n"})}),"\n",(0,r.jsx)(a.p,{children:"Com isso voc\xea consegue verificar o tamanho de cada camada e ver o que est\xe1 pesando mais na imagem, assim voc\xea consegue otimizar a imagem."}),"\n",(0,r.jsx)(a.h3,{id:"melhorando-a-aplica\xe7\xe3o-2",children:"Melhorando a aplica\xe7\xe3o 2"}),"\n",(0,r.jsxs)(a.p,{children:["A imagem ",(0,r.jsx)(a.code,{children:"python:3.11-slim"})," \xe9 menor, mas existe outra imagem menor ainda, que \xe9 a imagem baseada em ",(0,r.jsx)(a.code,{children:"Alpine"}),". Vamos ent\xe3o trocar a imagem atual para a ",(0,r.jsx)(a.code,{children:"python:3.11-alpine3.19"}),":"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-dockerfile",metastring:'showLineNumbers title="Dockerfile"',children:'FROM python:3.11-alpine3.19\nWORKDIR /app\nCOPY requirements.txt .\nCOPY app.py .\nCOPY templates templates/\nCOPY static static/\nRUN pip install -r requirements.txt --no-cache-dir\nEXPOSE 5000\nCMD ["flask", "run", "--host=0.0.0.0"]\n'})}),"\n",(0,r.jsx)(a.p,{children:"e rodar o comando:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"docker build --name giropops-senhas -t giropops-senhas:3.0 -f Dockerfile .\ndocker images\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Com a imagem ",(0,r.jsx)(a.code,{children:"Alpine"}),", o tamanho da imagem cai para 70MB, uma redu\xe7\xe3o de 93% em rela\xe7\xe3o a imagem baseada em ",(0,r.jsx)(a.code,{children:"python:3.11"}),". Isso faz tamb\xe9m cair o n\xfamero de vulnerabilidades, pois quanto menor a imagem, menor a chance de ter vulnerabilidades, pois tem menos pacotes instalados."]}),"\n",(0,r.jsx)(a.h3,{id:"distroless",children:"Distroless"}),"\n",(0,r.jsxs)(a.p,{children:["Distroless \xe9 uma imagem que n\xe3o tem sistema operacional, ela \xe9 uma imagem m\xednima, que s\xf3 tem o necess\xe1rio para rodar a aplica\xe7\xe3o, geralmente ela s\xf3 tem 1 camada. Uma empresa que trabalha convertendo imagens para distroless \xe9 a ",(0,r.jsx)(a.a,{href:"https://www.chainguard.dev/",children:"Chainguard"}),"."]}),"\n",(0,r.jsxs)(a.p,{children:["Vamos ent\xe3o trocar a imagem atual para a ",(0,r.jsx)(a.code,{children:"gcr.io/distroless/python3-debian11"}),":"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-dockerfile",metastring:'showLineNumbers title="Dockerfile"',children:'FROM cgr.dev/chainguard/python:3.11\nWORKDIR /app\nCOPY requirements.txt .\nCOPY app.py .\nCOPY templates templates/\nCOPY static static/\nRUN pip install -r requirements.txt --no-cache-dir\nEXPOSE 5000\nCMD ["flask", "run", "--host=0.0.0.0"]\n'})}),"\n",(0,r.jsx)(a.p,{children:"e rodar o comando:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"docker build --name giropops-senhas -t giropops-senhas:4.0 -f Dockerfile .\n# Error 'pip' not found\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Vamos ent\xe3o corrigir esse erro, para isso, temos que usar a imagem com ",(0,r.jsx)(a.code,{children:"-dev"})," no final e por ela como builder e copiar o resultado para a imagem final:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-dockerfile",metastring:'showLineNumbers title="Dockerfile"',children:'# FROM cgr.dev/chainguard/python:3.11-dev as builder # Somente latest \xe9 publico\nFROM cgr.dev/chainguard/python:latest-dev as builder\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install -r requirements.txt --no-cache-dir --user\n# FROM cgr.dev/chainguard/python:3.11 # Somente latest \xe9 publico\nFROM cgr.dev/chainguard/python:latest\nWORKDIR /app\nCOPY --from=builder /home/nonroot/.local/lib/python3.11/site-packages /home/nonroot/.local/lib/python3.11/site-packages\nCOPY app.py .\nCOPY templates templates/\nCOPY static static/\nEXPOSE 5000\nENTRYPOINT ["flask", "run", "--host=0.0.0.0"]\n'})}),"\n",(0,r.jsx)(a.p,{children:"e rodar o comando:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"docker build --name giropops-senhas -t giropops-senhas:4.0 -f Dockerfile .\ndocker images\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Com a imagem ",(0,r.jsx)(a.code,{children:"Distroless"}),", o tamanho da imagem cai para 60MB, uma redu\xe7\xe3o de 94% em rela\xe7\xe3o a imagem baseada em ",(0,r.jsx)(a.code,{children:"python:3.11"}),". Mas ao rodar a aplica\xe7\xe3o, ela n\xe3o funciona, pois n\xe3o localiza o ",(0,r.jsx)(a.code,{children:"flask"}),"."]}),"\n",(0,r.jsx)(a.h3,{id:"trivy",children:"Trivy"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"https://trivy.dev/",children:"Trivy"})," \xe9 uma ferramenta que verifica vulnerabilidades em imagens de container. Voc\xea pode rodar a ferramenta direto pelo bin\xe1rio ou pelo container. Vamos rodar pelo container:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"docker run --rm -v /var/run/docker.sock:/var/run/docker.sock ./cache:/root/.cache/aquasec/trivy image <IMAGEM>\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Para rodar pelo bin\xe1rio, voc\xea pode baixar o bin\xe1rio ",(0,r.jsx)(a.a,{href:"https://github.com/aquasecurity/trivy/releases/latest/",children:"aqui"})," e rodar o comando:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"trivy <IMAGEM>\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Mais informa\xe7\xf5es sobre a instala\xe7\xe3o podem ser encontrado ",(0,r.jsx)(a.a,{href:"https://aquasecurity.github.io/trivy/v0.38/getting-started/installation/",children:"aqui"}),"."]}),"\n",(0,r.jsx)(a.p,{children:"Se fizermos a verifica\xe7\xe3o das imagens que criamos, veremos que conforme a imagem foi ficando menor, o n\xfamero de vulnerabilidades foi diminuindo."}),"\n",(0,r.jsx)(a.h3,{id:"docker-scout",children:"Docker Scout"}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"https://dockerscout.com/",children:"Docker Scout"})," \xe9 uma ferramenta que verifica vulnerabilidades que \xe9 da pr\xf3pria Docker. Se voc\xea j\xe1 tem o Docker instalado, voc\xea pode rodar o comando:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"docker scout cves <IMAGEM>\n# ou\ndocker scout quickview <IMAGEM>\n"})}),"\n",(0,r.jsx)(a.h3,{id:"assinando-imagens-com-cosign",children:"Assinando imagens com Cosign"}),"\n",(0,r.jsx)(a.p,{children:"Assinar imagens \xe9 importante para garantir que a imagem n\xe3o foi alterada, para garantir a integridade da imagem. Assim podemos garantir que a imagem que est\xe1 rodando \xe9 a mesma que foi criada/baixada."}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"https://github.com/sigstore/cosign",children:"Cosign"})," \xe9 uma ferramenta que assina imagens de container. Para fazer a instala\xe7\xe3o, siga a documenta\xe7\xe3o ",(0,r.jsx)(a.a,{href:"https://docs.sigstore.dev/system_config/installation/",children:"aqui"}),"."]}),"\n",(0,r.jsx)(a.p,{children:"Quando tiver tudo instalado, voc\xea pode rodar o comando:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-bash",children:"# Antes de come\xe7ar, precisamos gerar um par de chaves\ncosign generate-key-pair\n# Assinar a imagem\ncosign sign -key cosign.pub lucasbaccan/linuxtips-giropops-senhas:2.0\n# Verificar a assinatura\ncosign verify --key cosign.pub lucasbaccan/linuxtips-giropops-senhas:2.0\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Com isso, basta voc\xea compartilhar a chave p\xfablica (",(0,r.jsx)(a.code,{children:"cosign.pub"}),") para quem for baixar a imagem, para que ele possa verificar a assinatura da imagem. Assim voc\xea garante que a imagem n\xe3o foi alterada."]}),"\n",(0,r.jsxs)(a.p,{children:["Caso queira ver a assinatura, ela est\xe1 no docker hub, voc\xea pode ver ",(0,r.jsx)(a.a,{href:"https://hub.docker.com/repository/docker/lucasbaccan/linuxtips-giropops-senhas/tags?page=1&ordering=last_updated",children:"aqui"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"desafio",children:"Desafio"}),"\n",(0,r.jsx)(a.h3,{id:"objetivo",children:"Objetivo"}),"\n",(0,r.jsxs)(a.p,{children:["Fazer a aplica\xe7\xe3o ",(0,r.jsx)(a.code,{children:"giropops-senhas"})," funcionar com a imagem ",(0,r.jsx)(a.code,{children:"Distroless"})," com a menor quantidade de vulnerabilidades poss\xedveis."]}),"\n",(0,r.jsx)(a.h3,{id:"solu\xe7\xe3o",children:"Solu\xe7\xe3o"}),"\n",(0,r.jsx)(a.p,{children:"Eu optei por fazer o checkout dentro do container, mas n\xe3o \xe9 recomendado, foi mais para para poder construir a imagem sem ter o c\xf3digo baixado na minha m\xe1quina."}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(c.A,{value:"dockerfile",label:"Dockerfile",default:!0,children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-dockerfile",metastring:"showLineNumbers",children:'FROM cgr.dev/chainguard/git:latest as source\nWORKDIR /app\nRUN git clone https://github.com/badtuxx/giropops-senhas.git /app && \\\n    cd /app && git checkout 6bc55efe13dbafc38ee6c2ae4790d380f5f4c942 && \\\n    rm -rf /app/.git\n\n# FROM cgr.dev/chainguard/python:3.11-dev as builder # Somente latest \xe9 publico\nFROM cgr.dev/chainguard/python:latest-dev as builder\nWORKDIR /app\nCOPY --from=source /app/requirements.txt .\nRUN python -m venv /app/venv && \\\n    . /app/venv/bin/activate && \\\n    pip install -r requirements.txt --no-cache-dir && \\\n    pip install Werkzeug==2.2.2 --no-cache-dir\n\n# FROM cgr.dev/chainguard/python:3.11 # Somente latest \xe9 publico\nFROM cgr.dev/chainguard/python:latest\nWORKDIR /app\nCOPY --from=builder /app/venv /app/venv\nCOPY --from=source /app .\nARG REDIS_HOST=localhost\nENV REDIS_HOST=$REDIS_HOST\nENV PATH="/app/venv/bin:$PATH"\nEXPOSE 5000\nENTRYPOINT ["flask", "run", "--host=0.0.0.0"]\n'})})}),(0,r.jsx)(c.A,{value:"makefile",label:"Makefile",children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-makefile",metastring:"showLineNumbers",children:"docker-login:\n  docker login\n\ncreate-network:\n  docker network create giropops-senhas || true\n\nredis-run: create-network redis-remove\n  docker run -d --network giropops-senhas --name=giropops-senhas-redis -p 6379:6379 -P redis:7.2.4-alpine3.19\n\nredis-remove:\n  docker container rm -f giropops-senhas-redis\n\ngiropops-senhas-build:\n  docker build -f Dockerfile.desafio -t giropops-senhas:latest --build-arg REDIS_HOST=giropops-senhas-redis .\n\ngiropops-senhas-run: create-network giropops-senhas-remove\n  docker run -d --network giropops-senhas --name=giropops-senhas -p 8080:5000 -P giropops-senhas:latest\n\ngiropops-senhas-tag: giropops-senhas-build\n  docker tag giropops-senhas:latest lucasbaccan/linuxtips-giropops-senhas:2.0\n\ngiropops-senhas-remove:\n  docker container rm -f giropops-senhas\n\ngiropops-senhas-push: giropops-senhas-tag\n  docker push lucasbaccan/linuxtips-giropops-senhas:2.0\n\ntrivy-scan: giropops-senhas-build\n  docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy image giropops-senhas:latest > trivy-scan.txt\n\ndocker-scout: giropops-senhas-build\n  docker scout cves giropops-senhas:latest > docker-scout.txt\n\nrun-dev: redis-run giropops-senhas-build giropops-senhas-run\n\nrun-prod: redis-run giropops-senhas-remove\n  docker run -d --network giropops-senhas --name=giropops-senhas -p 8080:5000 lucasbaccan/linuxtips-giropops-senhas:2.0\n"})})})]})]})}function m(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,a,n)=>{n.d(a,{A:()=>i});n(6540);var o=n(4164);const r={tabItem:"tabItem_Ymn6"};var s=n(4848);function i(e){let{children:a,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,i),hidden:n,children:a})}},1470:(e,a,n)=>{n.d(a,{A:()=>y});var o=n(6540),r=n(4164),s=n(3104),i=n(6347),c=n(205),t=n(7485),l=n(1682),d=n(679);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:n}=e;return(0,o.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:n,attributes:o,default:r}}=e;return{value:a,label:n,attributes:o,default:r}}))}(n);return function(e){const a=(0,l.XI)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function m(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:n}=e;const r=(0,i.W6)(),s=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,t.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(r.location.search);a.set(s,e),r.replace({...r.location,search:a.toString()})}),[s,r])]}function g(e){const{defaultValue:a,queryString:n=!1,groupId:r}=e,s=p(e),[i,t]=(0,o.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:a,tabValues:s}))),[l,u]=h({queryString:n,groupId:r}),[g,x]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,s]=(0,d.Dv)(n);return[r,(0,o.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),v=(()=>{const e=l??g;return m({value:e,tabValues:s})?e:null})();(0,c.A)((()=>{v&&t(v)}),[v]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);t(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=n(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(4848);function b(e){let{className:a,block:n,selectedValue:o,selectValue:i,tabValues:c}=e;const t=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),d=e=>{const a=e.currentTarget,n=t.indexOf(a),r=c[n].value;r!==o&&(l(a),i(r))},u=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=t.indexOf(e.currentTarget)+1;a=t[n]??t[0];break}case"ArrowLeft":{const n=t.indexOf(e.currentTarget)-1;a=t[n]??t[t.length-1];break}}a?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},a),children:c.map((e=>{let{value:a,label:n,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,ref:e=>t.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":o===a}),children:n??a},a)}))})}function j(e){let{lazy:a,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,o.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function k(e){const a=g(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,f.jsx)(b,{...a,...e}),(0,f.jsx)(j,{...a,...e})]})}function y(e){const a=(0,x.A)();return(0,f.jsx)(k,{...e,children:u(e.children)},String(a))}},8453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>c});var o=n(6540);const r={},s=o.createContext(r);function i(e){const a=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:a},e.children)}}}]);