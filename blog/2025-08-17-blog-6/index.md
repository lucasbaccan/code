---
slug: "6"
title: "#6 - Home Lab - Parte 3"
authors: [LucasEliasBaccan]
tags:
  ["2025", "08/2025", "Lucas", "Elias", "Baccan", "Home Lab", "Proxmox", "Rack"]
hide_table_of_contents: false
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Center from "@site/src/components/Center";

## Home Lab

No [post anterior](/blog/5#upgrade-rede), comentei sobre o hack que realizei no meu cluster. Agora, vou detalhar como configurei o Proxmox e quais foram as principais configurações adotadas para o ambiente.

<!-- truncate -->

## Proxmox

No dia [5 de agosto de 2025, foi anunciado a nova versão do Proxmox](https://www.proxmox.com/en/about/company-details/press-releases/proxmox-virtual-environment-9-0), a 9.0, então aproveitei para reinstalar o Proxmox e começar do zero e documentar o processo de instalação e configuração.

Para quem não conhece, o Proxmox é um sistema operacional baseado em Debian, voltado para virtualização e gerenciamento de containers. Ele é uma ótima opção para quem quer criar um cluster de alta disponibilidade, pois possui suporte a Ceph, que é um sistema de armazenamento distribuído.

## Instalação

Não tem muito segredo, só ir _next_, _next_ e _next_.

### Disco

Eu optei por utilizar um SSD Sata de 240GB para o sistema operacional, que foi formatado em **btrfs**.

### Rede

Eu tenho 3 nós que foram configurados com as seguintes informações:

<Tabs groupId="proxmox-nodes">
  <TabItem value="node-1" label="Nó 1">
  | Configuração | Valor              |
  |--------------|--------------------|
  | CIDR         | 192.168.50.10/24   |
  | Gateway      | 192.168.50.1       |
  | DNS          | 192.168.50.1       |
  </TabItem>
  <TabItem value="node-2" label="Nó 2">
  | Configuração | Valor              |
  |--------------|--------------------|
  | CIDR         | 192.168.50.20/24   |
  | Gateway      | 192.168.50.1       |
  | DNS          | 192.168.50.1       |
  </TabItem>
  <TabItem value="node-3" label="Nó 3">
  | Configuração | Valor              |
  |--------------|--------------------|
  | CIDR         | 192.168.50.30/24   |
  | Gateway      | 192.168.50.1       |
  | DNS          | 192.168.50.1       |
  </TabItem>
</Tabs>

## Pós instalação

Após a instalação, é necessário realizar algumas configurações para deixar o Proxmox pronto para uso. As principais configurações são:

### Hostname

<Tabs groupId="proxmox-nodes">
  <TabItem value="node-1" label="Nó 1">
```bash
hostnamectl set-hostname pve1-MJ04XX69
```
  </TabItem>
  <TabItem value="node-2" label="Nó 2">
```bash
hostnamectl set-hostname pve2-MJ04T5J8
```
  </TabItem>
  <TabItem value="node-3" label="Nó 3">
```bash
hostnamectl set-hostname pve3-MJ05B30K
```
  </TabItem>
</Tabs>

Após alterar o hostname, é necessário atualizar o arquivo `/etc/hosts` para que o Proxmox reconheça os novos nomes dos nós, se você reiniciar o sistema nesse momento, o proxmox não vai subir corretamente, e você vai precisar acessar por SSH e corrigir o arquivo `/etc/hosts` manualmente com as configurações de [hosts](#hosts) abaixo.

### Hosts

<Tabs groupId="proxmox-nodes">
  <TabItem value="node-1" label="Nó 1">
```bash
sed -i '2s/.*/192.168.50.10 pve1.lenovo.m900.MJ04XX69 pve1-MJ04XX69/' /etc/hosts
```
  </TabItem>
  <TabItem value="node-2" label="Nó 2">
```bash
sed -i '2s/.*/192.168.50.20 pve2.lenovo.m900.MJ04T5J8 pve2-MJ04T5J8/' /etc/hosts
```
  </TabItem>
  <TabItem value="node-3" label="Nó 3">
```bash
sed -i '2s/.*/192.168.50.30 pve3.lenovo.m900.MJ05B30K pve3-MJ05B30K/' /etc/hosts
```
  </TabItem>
</Tabs>

Após a configuração do hostname e do arquivo `/etc/hosts`, é possível reiniciar a maquina e verificar se tudo está funcionando corretamente.

```bash
reboot -h now
```

### Rede

Como visto no [post anterior](/blog/4), existem 2 placas de rede, então agora vamos configurar o failover e o bonding.

<Tabs groupId="proxmox-nodes">
  <TabItem value="node-1" label="Nó 1">

```bash
echo "" >> /etc/network/interfaces

cat << EOF > /etc/network/interfaces
auto lo
iface lo inet loopback

auto eno1
iface eno1 inet manual

auto enp2s0
iface enp2s0 inet manual

auto bond0
iface bond0 inet manual
        bond-slaves eno1 enp2s0
        bond-miimon 100
        bond-mode active-backup
        bond-primary enp2s0

auto vmbr0
iface vmbr0 inet static
        address 192.168.50.10/24
        gateway 192.168.50.1
        bridge-ports bond0
        bridge-stp off
        bridge-fd 0

source /etc/network/interfaces.d/*
EOF
```

  </TabItem>
  <TabItem value="node-2" label="Nó 2">

```bash
echo "" >> /etc/network/interfaces

cat << EOF > /etc/network/interfaces
auto lo
iface lo inet loopback

auto eno1
iface eno1 inet manual

auto enp2s0
iface enp2s0 inet manual

auto bond0
iface bond0 inet manual
        bond-slaves eno1 enp2s0
        bond-miimon 100
        bond-mode active-backup
        bond-primary enp2s0

auto vmbr0
iface vmbr0 inet static
        address 192.168.50.20/24
        gateway 192.168.50.1
        bridge-ports bond0
        bridge-stp off
        bridge-fd 0

source /etc/network/interfaces.d/*
EOF
```

  </TabItem>
  <TabItem value="node-3" label="Nó 3">

```bash
echo "" >> /etc/network/interfaces

cat << EOF > /etc/network/interfaces
auto lo
iface lo inet loopback

auto eno1
iface eno1 inet manual

auto enp2s0
iface enp2s0 inet manual

auto bond0
iface bond0 inet manual
        bond-slaves eno1 enp2s0
        bond-miimon 100
        bond-mode active-backup
        bond-primary enp2s0

auto vmbr0
iface vmbr0 inet static
        address 192.168.50.30/24
        gateway 192.168.50.1
        bridge-ports bond0
        bridge-stp off
        bridge-fd 0

source /etc/network/interfaces.d/*
EOF
```

  </TabItem>
</Tabs>

e ai é só reiniciar a rede

```bash
systemctl restart networking
```

<Center>

![Network](./network.png)  
Como deve ficar a configuração de rede

</Center>

### Wake on LAN - WOL

Agora vamos ativar a configuração de Wake on Lan(WOL) para que eu possa ligar os nós remotamente. Para isso vamos em Datacenter > Node > System > Options. Precisamos configurar o `MAC address for Wake on LAN` e inserir o MAC da placa de rede principal, que geralmente é a `eno1`, e depois habilitar o `Wake on LAN`.

![Wake on Lan](wol1.png)

Para pegar o MAC da placa de rede, podemos utilizar o seguinte comando:

```bash
ip link show eno1 | awk '/ether/ {print $2}'
```

<Tabs groupId="proxmox-nodes">
<TabItem value="node-1" label="Nó 1">
```bash
ip link show eno1 | awk '/ether/ {print $2}'
# 00:23:24:D9:9D:EF
```
</TabItem>
<TabItem value="node-2" label="Nó 2">
```bash
ip link show eno1 | awk '/ether/ {print $2}'
# 00:23:24:C0:73:2C
```
</TabItem>
<TabItem value="node-3" label="Nó 3">
```bash
ip link show eno1 | awk '/ether/ {print $2}'
# E0:4F:43:21:A7:78
```
</TabItem>
</Tabs>

### Tailscale

Eu gosto de utilizar o Tailscale para acessar o Proxmox remotamente, então vou instalar ele também em cada nó, basta seguir a instalação oficial do Tailscale.

```bash
curl -fsSL https://tailscale.com/install.sh | sh && sudo tailscale up --auth-key=tskey-auth-XXXXXXXXXXXXXXXXXXXXXXX
```

Após instalar, eu gosto de utilizar a seguinte configuração:

```bash
tailscale up --reset --ssh --advertise-routes=192.168.50.0/24 --accept-dns=false
```

Essa configuração vai anunciar a rota da minha rede local, para que eu possa acessar os dispositivos da minha rede local através do Tailscale, habilitar o SSH e não aceitar as configurações de DNS do Tailscale, pois tive problema com o MagicDNS do Tailscale em outras maquinas virtuais.

:::info
Ao utilizar o MagicDNS do Tailscale, as maquinas virtuais não conseguiam resolver os nomes dos hosts, então optei por não utilizar o MagicDNS e configurar o DNS manualmente.
:::

## Pós-instalação Scripts

### [Proxmox VE Post Install](https://community-scripts.github.io/ProxmoxVE/scripts?id=post-pve-install)

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/community-scripts/ProxmoxVE/main/tools/pve/post-pve-install.sh)"
```

Deve ser selecionado os seguintes itens:

- 'pve-enterprise' - Desabilitar o repositório enterprise
- 'pve-no-subscription' - Habilitar o repositório no subscription
- 'pvetest' - Desabilitar o repositório test
- Disable subscription nag - Desabilitar a mensagem de assinatura, se puder contribuir, compre uma assinatura.
- Disable high availability - Habilitar, pois vamos criar um cluster de alta disponibilidade.

<Center>

![Proxmox VE Post Install](./post-install-script.png)  
Após rodar o script, deve ter essa mensagem.

</Center>

### [Proxmox VE Processor Microcode](https://community-scripts.github.io/ProxmoxVE/scripts?id=microcode)

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/community-scripts/ProxmoxVE/main/tools/pve/microcode.sh)"
```

Não sei muito bem as opções, então seleciono a do processador.

<Center>

![Proxmox VE Processor Microcode](./proxmox-microcode.png)  
Opção que seleciono.

</Center>

Após a instalação, é necessário reiniciar o sistema.

```bash
reboot -h now
```

E pode verificar se o microcode foi instalado corretamente.

```bash
journalctl -k | grep -E "microcode" | head -n 1
```

### [Proxmox VE CPU Scaling Governor](https://community-scripts.github.io/ProxmoxVE/scripts?id=scaling-governor)

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/community-scripts/ProxmoxVE/main/tools/pve/scaling-governor.sh)"
```

## Cluster High Availability

Agora que configuramos cada nó, vamos criar um cluster de alta disponibilidade, vou utilizar a interface web do Proxmox para isso, mas também é possível fazer via linha de comando.

No nó 1, vamos criar o cluster. Basta clicar em Datacenter > Cluster > Create Cluster.

<Center>

![Criar cluster](./cluster1.png)  
Criar um cluster

</Center>

basta dar um nome, eu vou utilizar `home-lab`.

<Center>

![Nome](./cluster2.png)  
De um nome ao cluster

</Center>

Agora na tela, vai ter nosso cluster criado e um botão novo ficou disponível, o `Join Information`, que é onde vamos pegar as informações para adicionar os outros nós ao cluster.

<Center>

![Join information](./cluster3.png)  
Copie as informações utilizando o botão `Copy Information`

</Center>

Agora vamos nos outros nós, e vamos clicar em Datacenter > Cluster > Join Cluster e colar as informações copiadas do nó 1. Pode ser que a tela trave no meio, pois a conexão é perdida, pois você precisa fazer o login novamente, e assim que fizer, vera o nó a esquerda junto ao nó 1.

<Center>

![Join cluster](./cluster4.png)  
Copie as informações utilizando o botão `Join 'Home-Lab'`

</Center>

Após adicionar todos os nós, você verá a tela do cluster com os nós adicionados.

<Center>

![Cluster](./cluster5.png)  
Tela do cluster com os nós adicionados

</Center>

## Ceph Storage

Como visto no [post anterior](/blog/5#upgrade-armazenamento), existem 2 SSDs em cada nó, um para o sistema operacional(Proxmox) e outro para o Ceph Storage, que será utilizado para armazenar os dados dos containers e VMs.

O Ceph é um sistema de armazenamento distribuído, que permite criar um cluster de armazenamento de alta disponibilidade, escalável e tolerante a falhas. Ele é integrado ao Proxmox, o que facilita a criação e gerenciamento do cluster de armazenamento.

Na configuração atual do cluster, se um nó falhar, os dados dos containers e VMs não serão perdidos, pois eles estarão replicados nos outros nós do cluster. Isso garante alta disponibilidade e tolerância a falhas.

Para fazer a instalação do Ceph, vamos utilizar a interface web do Proxmox, que é bem intuitiva. Basta clicar em Nó > Storage > Add > Ceph. Isso deve ser feito para cada nó do cluster.

<Center>

![Cluster](./ceph1.png)  
Tela de instalação do Ceph

</Center>

Depois de instalado em todos os nós, eu gosto de criar `monitor`s e `manager`s para cada nó, para garantir que o Ceph esteja sempre funcionando corretamente, mesmo se um nó falhar.

<Center>

![Monitor e Manager](./ceph2.png)  
Tela de criação de Monitor e Manager

</Center>

Após criar os Monitores e Managers, você verá a tela do Ceph com os nós adicionados.

<Center>

![Monitor e Manger](ceph3.png)  
Tela do Ceph com os nós adicionados

</Center>

Agora temos que adicionar os discos que serão utilizados pelo Ceph, para isso, vamos clicar em Nó > Storage > Add > OSD. Isso deve ser feito para cada nó do cluster, selecionando o disco que será utilizado pelo Ceph.

Caso o disco não esteja aparecendo, no meu caso ele estava listado em LVM, então eu precisei remover o disco do LVM e depois adicionar o disco ao Ceph.

<Center>

![OSDs](ceph4.png)  
OSDs do Ceph

</Center>

Agora, para finalizar a configuração do Ceph, crie o pool de armazenamento, que será utilizado pelos containers e VMs. Para isso, clique em Nó > Ceph > Pool > Create.

<Center>

![Pool](ceph5.png)  
OSDs do Ceph

</Center>

## Considerações Finais

Esses foram os principais passos que segui para configurar meu cluster de Proxmox com Ceph Storage. Sei que existem outras configurações, mas optei por focar nas principais após instalar o Proxmox.

<!-- <Tabs groupId="proxmox-nodes">
<TabItem value="node-1" label="Nó 1">
</TabItem>
<TabItem value="node-2" label="Nó 2">
</TabItem>
<TabItem value="node-3" label="Nó 3">
</TabItem>
</Tabs> -->
