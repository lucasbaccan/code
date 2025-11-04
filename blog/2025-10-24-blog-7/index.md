---
slug: "7"
title: "#7 - Home Lab - NAS"
authors: [LucasEliasBaccan]
tags: ["2025", "10/2025", "Lucas", "Elias", "Baccan", "Home Lab", "NAS"]
hide_table_of_contents: false
---

import Center from "@site/src/components/Center";

## Home Lab

Continuando a saga do meu [Home Lab](/info/setup#home-lab), hoje vou falar sobre o NAS (Network Attached Storage) que comprei para completar o setup.

<!-- truncate -->

<Center>

![NAS](./imagem.jpg)  
[DXP4800 Plus](https://nas.ugreen.com/products/ugreen-nasync-dxp4800-plus-nas-storage)

</Center>

### O que é um NAS?

Um NAS é um dispositivo de armazenamento conectado à rede que permite o acesso e o compartilhamento de arquivos entre vários dispositivos. Ele funciona como um servidor de arquivos dedicado, oferecendo uma solução centralizada para armazenar dados, fazer backup e compartilhar arquivos em uma rede local ou pela internet.

É como o Google Drive, iCloud ou OneDrive, mas roda na sua casa com o seu próprio hardware, e você tem controle total sobre ele.

### Por que eu comprei um NAS?

Eu tinha uma máquina virtual rodando no meu servidor Proxmox que mapeava dois HDs via porta USB. Porém, um dia o nó inteiro do Proxmox travou por algum problema no disco. Não cheguei a perder dados, mas fiquei preocupado, pois poderia ter sido pior.

### Escolhendo o NAS

Eu optei por um NAS da [Ugreen](https://nas.ugreen.com/), modelo [DXP4800 Plus](https://nas.ugreen.com/products/ugreen-nasync-dxp4800-plus-nas-storage). Foi até uma surpresa, já que a Ugreen não é muito conhecida por fazer NAS, mas as avaliações eram boas e o preço estava atrativo.

<Center>

![NAS](./imagem2.jpg)  
Lista de acessórios do NAS

</Center>

Eu já comprei outros produtos da Ugreen, e a qualidade parecia ser muito boa

### Especificações do NAS

- **Processador**: [Intel Pentium Gold 8505](https://www.intel.com.br/content/www/br/pt/products/sku/226262/intel-pentium-gold-processor-8505-8m-cache-up-to-4-40-ghz/specifications.html)
- **Memória RAM**: 8 GB DDR5 (expansível até 64 GB) — 2 slots SO-DIMM
- **Armazenamento**: Suporta até 4 discos rígidos SATA de 3,5" ou 2,5" + 2 SSDs M.2 NVMe
- **Conectividade**: 1 porta Ethernet 10 GbE, 1 porta Ethernet 2,5 GbE, 5 portas USB diversas, leitor de cartão SD
- **Sistema Operacional**: UGOS (sistema próprio da Ugreen, baseado em Linux)

<Center>

![NAS](./imagem3.jpg)  
Conectividade do NAS

</Center>

### Conclusão

Paguei cerca de R$ 5.000,00 no NAS (sem os discos) e estou muito satisfeito com a compra. Ele oferece uma solução robusta e escalável, além da qualidade de construção do aparelho, as configurações de hardware são excelentes para um NAS doméstico.
