Samsung RV411
Intel pentium P6100 - 2 cores 2 threads, 2.0 GHz
4GB DDR3 1066 MHz
HD 240 SSD

F2 para entrar na BIOS e trocar as ordem de boot para USB

Roda o sistema "https://minios.dev/pt/"

Versão: Ultra

Monstar pendrive com Rufus

Seguir instalação padrão

Configuração do Roteador para entregar IP fixo para o MAC do computador
Utilizo placa de rede USB pois a placa de rede do computador é lenta

Apos iniciar, procure por "Instalar o MiniOS". Ele está no menu "Engrenagem" no canto inferior esquerdo

Não marque a opção "EFI" e utilize o sistema de arquivos "btrfs"

Depois de instalar, reiniciei e vamos começar a configurar

Procure o arquivo "/etc/minios/minios.conf".
Altere as senhas de root e de usuário para algo que você lembre

Altere tb o campo "ENABLE_SERVICES" para "ssh,docker"

USER_NAME="live"
USER_PASSWORD="live"
ROOT_PASSWORD="root"
HOST_NAME="minios"
DEFAULT_TARGET="graphical"
ENABLE_SERVICES="ssh,docker"
DISABLE_SERVICES=""
SSH_KEY="authorized_keys"""
SCRIPTS="false"
HIDE_CREDENTIALS="false"
AUTOLOGIN="true"
SYSTEM_TYPE="classic"
EXPORT_LOGS="f""lse"

Instalar o anydesk para acessar remotamente

```bash
wget -qO - https://keys.anydesk.com/repos/DEB-GPG-KEY | apt-key add -
echo "deb http://deb.anydesk.com/ all main" > /etc/apt/sources.list.d/anydesk-stable.list
apt update
apt install anydesk
```

Volte em "/etc/minios/minios.conf" e adicione "anydesk" na lista de "ENABLE_SERVICES"

```bash
ENABLE_SERVICES="ssh,docker,anydesk"
```

<!-- Opcional -->
Vamos configurar o acesso não supervisionado do anydesk, configure uma senha e salve a conexão no seu computador.

Configurar para desligar a tela após 1 minuto e desabilitar sensor de tela fechada, pois o notebook vai ficar fechado.

```bash
nano /etc/systemd/logind.conf
# #HandleLidSwitch=suspend
HandleLidSwitch=ignore

sudo systemctl restart systemd-logind.service
```

<!-- Instalar o CasaOS -->
Instalar o CasaOS

```bash 
curl -fsSL https://get.casaos.io | sudo bash
```

Casa os vai estar disponível no IP do dispositivo, na porta 80

Mude a porta do CasaOS para 8080, pois vamos utilizar a porta 80 para o Nginx Proxy Manager

Depois de logar e confiugrar a senha, vamos instalar o "Nginx Proxy Manager" para gerenciar os domínios

Utilize a propria interface do CasaOS para instalar o Nginx Proxy Manager

O primeiro login é feito com o usuário "admin@example.com" e a senha "changeme"

Depois basta configurar o SSL e os domínios que você quer utilizar

