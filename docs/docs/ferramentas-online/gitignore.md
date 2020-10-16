---
id: gitignore
title: Gitignore
description: https://gitignore.io/.
---

export const Highlight = ({children, color}) => (
    <span style={{color: color}}>{children}</span>
);

:::tip LINK
**LINK:** [https://gitignore.io/](https://gitignore.io/)
:::

## Git e .gitignore
Quando criamos um novo projeto, é uma boa pratica utilizar uma ferramenta de gerenciamento de código, a mais utilizada atualmente é o [Git](https://git-scm.com/). Quando rodamos ```git ini```, é criado uma pasta <Highlight color="#f52314">.git</Highlight>. Além desta pasta, podemos criar um arquivo <Highlight color="#f52314">.gitignore</Highlight>, do qual informamos quais arquivos e diretórios não queremos que o [Git](https://git-scm.com/) gerencie.

A forma que o [Git](https://git-scm.com/) utiliza para controlar quais arquivos ele <Highlight color="#f52314">não</Highlight> deve controlar é utilizando um arquivo <Highlight color="#f52314">.gitignore</Highlight>. Este arquivo deve ficar no mesmo local em que o arquivo <Highlight color="#f52314">.git</Highlight> está localizado.

<div style={{textAlign: 'center'}}>

![Local onde o arquivo '.gitignore' deve ficar](/img/docs/ferramentas-online/gitignore/gitignore1.png)  

</div>

## Como utilizar

Quando eu crio um projeto novo, utilizo o site [https://gitignore.io/](https://gitignore.io/) para gerar o arquivo <Highlight color="#f52314">.gitignore</Highlight>, basta informar qual a linguagem ou ferramenta está utilizando e o site gera um arquivo de exemplo.

<div style={{textAlign: 'center'}}>

![img](/img/docs/ferramentas-online/gitignore/gitignore2.png)

</div>

O arquivo gerado é o seguinte, nele contem varias configurações para evitar arquivos da linguagem <Highlight color="#f52314">java</Highlight>.

```
# Created by https://www.toptal.com/developers/gitignore/api/java
# Edit at https://www.toptal.com/developers/gitignore?templates=java

### Java ###
# Compiled class file
*.class

# Log file
*.log

# BlueJ files
*.ctxt

# Mobile Tools for Java (J2ME)
.mtj.tmp/

# Package Files #
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar
```

### Exemplo de múltiplas linguagens

O site contem centenas de opções, e você pode juntar mais de uma opção ao mesmo tempo.

<div style={{textAlign: 'center'}}>

![img](/img/docs/ferramentas-online/gitignore/gitignore3.png)

</div>

Então explore as opções sem medo, aposto que vai achar uma solução para seu projeto.