---
id: menu
title: Menu
description: Menu inicial, quem sabe o que procura está por aqui.
slug: /
---
export const Menu = ({children, url, size}) => (
    <a href={url} style={{
        fontSize: size,
        fontWeight: 'bold',
        paddingLeft: '20px',
    }}>{children}</a>
);

export const DescricaoMenu = ({children}) => (
    <p style={{
        fontSize: '16px',
        paddingLeft: '20px',
        margingTop: '-10px !important'
    }}>{children}</p>
);

Abaixo tem uma lista de links de materiais ou utilize o campo de busca.


## Último Post

Nenhum

---

## Tópicos fixados

## <Menu url='/info/solicitacao' size='22px'>Solicitação</Menu>
<DescricaoMenu >Não achou o que queria, tire um tempo e crie uma solicitação.</DescricaoMenu>

## <Menu url='/info/setup' size='22px'>Meu setup</Menu>
<DescricaoMenu >Descubra mais o que utilizo no dia a dia para programar, estudar e quando sobra um tempo, jogar.</DescricaoMenu>

## <Menu url='/info/creditos' size='22px'>Créditos</Menu>
<DescricaoMenu >Agradecimento ao material de terceiros utilizado neste site.</DescricaoMenu>






