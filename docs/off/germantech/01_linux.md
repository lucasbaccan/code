---
id: linux
title: Linux
---

## Introdução

Quando falamos de servidores, a grande maioria roda Linux. Por isso, é importante saber como funciona o sistema operacional e seus comandos.

Uma forma fácil de aprender é através do [copy.sh](https://copy.sh/v86/?profile=linux26), um emulador de Linux que roda no navegador.

Além disso, utilize **Cheatsheets** para consultar os comandos mais utilizados.
- [Lista 1](https://cheatography.com/davechild/cheat-sheets/linux-command-line/)
- [Lista 2](https://www.linuxtrainingacademy.com/linux-commands-cheat-sheet/)
- [Lista 3](https://www.guru99.com/linux-commands-cheat-sheet.html)

## Comandos

### `ls` - Listar arquivos

O comando `ls` é usado para listar os arquivos e diretórios do diretório atual. Para listar os arquivos e diretórios de outro diretório, basta passar o caminho do diretório como parâmetro.

```bash
ls
```

```bash
ls /home
```

### `cd` - Mudar de diretório

O comando `cd` é usado para navegar entre os diretórios. Para navegar para um diretório, basta passar o caminho do diretório como parâmetro.

```bash
cd /home
```

### `mkdir` - Criar diretório

O comando `mkdir` é usado para criar um diretório. Para criar um diretório, basta passar o nome do diretório como parâmetro.

```bash
mkdir /home/root
```

### `rm` - Apagar arquivo(s)

O comando `rm` é usado para remover um arquivo ou diretório. Para remover um arquivo, basta passar o caminho do arquivo como parâmetro.

```bash
rm /home/root/file.txt
```

Para remover um diretório, basta passar o caminho do diretório como parâmetro e adicionar a opção `-r`.

```bash
rm -r /home/root
```

### `cp` - Copiar arquivo(s)

O comando `cp` é usado para copiar um arquivo ou diretório. Para copiar um arquivo, basta passar o caminho do arquivo como parâmetro.

```bash
cp /home/root/file.txt /home/root/file2.txt
```

Para copiar um diretório, basta passar o caminho do diretório como parâmetro e adicionar a opção `-r`.

```bash
cp -r /home/root /home/root2
```

### `mv` - Mover arquivo(s)

O comando `mv` é usado para mover um arquivo ou diretório ou renomear um arquivo ou diretório. Para mover um arquivo, basta passar o caminho do arquivo como parâmetro.

```bash
mv /home/root/file.txt /home/root/file2.txt
```

Para mover um diretório, basta passar o caminho do diretório como parâmetro e adicionar a opção `-r`.

```bash
mv -r /home/root /home/root2
```

### `cat` - Exibir conteúdo de arquivo

O comando `cat` é usado para exibir o conteúdo de um arquivo. Para exibir o conteúdo de um arquivo, basta passar o caminho do arquivo como parâmetro.

```bash
cat /home/root/file.txt
```

### `echo` - Exibir mensagem

O comando `echo` é usado para exibir uma mensagem na tela. Para exibir uma mensagem, basta passar a mensagem como parâmetro.

```bash
echo "Hello World"
```

### `sudo` - Executar comando como administrador

O comando `sudo` é usado para executar um comando como super usuário. Para executar um comando como super usuário, basta passar o comando como parâmetro.

```bash
sudo chmod 777 /home/root/file.txt
```

### `chmod` - Alterar permissões

O comando `chmod` é usado para alterar as permissões de um arquivo ou diretório. Para alterar as permissões de um arquivo, basta passar o caminho do arquivo como parâmetro.

As permissões são representadas por três números, sendo o primeiro número para o dono do arquivo, o segundo número para o grupo do arquivo e o terceiro número para os outros usuários. Cada número representa as permissões de leitura, escrita e execução. 

As permissões são números que vão de 0 a 7. 
O número 0 representa que o usuário não tem permissão de leitura, escrita e execução.
O número 1 representa que o usuário tem permissão de execução.
O número 2 representa que o usuário tem permissão de escrita.
O número 3 representa que o usuário tem permissão de escrita e execução.
O número 4 representa que o usuário tem permissão de leitura.
O número 5 representa que o usuário tem permissão de leitura e execução.
O número 6 representa que o usuário tem permissão de leitura e escrita.
O número 7 representa que o usuário tem permissão de leitura, escrita e execução.

Em resumo:
- 0 = Sem permissão
- **1 = Execução**
- **2 = Escrita**
- 3 = Escrita e execução (2 + 1)
- **4 = Leitura**
- 5 = Leitura e execução (4 + 1)
- 6 = Leitura e escrita (4 + 2)
- 7 = Leitura, escrita e execução (4 + 2 + 1)

```bash
chmod 777 /home/root/file.txt
```

Na duvida, utilize sites para converter as permissões.

- [https://chmod-calculator.com/](https://chmod-calculator.com/)
- [https://www.easyunitconverter.com/chmod-calculator](https://www.easyunitconverter.com/chmod-calculator)

### `chown` - Alterar dono

O comando `chown` é usado para alterar o dono de um arquivo ou diretório. Para alterar o dono de um arquivo, basta passar o caminho do arquivo como parâmetro.

```bash 
chown root /home/root/file.txt
```

Além disso, é possível alterar o dono e o grupo de um arquivo ou diretório, basta adicionar o grupo após o dono.

```bash
chown root:root /home/root/file.txt
```

### `df` - Exibir espaço em disco

O comando `df` é usado para exibir o espaço em disco. Para exibir o espaço em disco ou um diretório, basta passar o caminho do diretório como parâmetro.

```bash
df
```

```bash
df /home/root
```

### `du` - Exibir tamanho de arquivo ou diretório

O comando `du` é usado para exibir o tamanho de um arquivo ou diretório. 

```bash
du 
```

Sem parâmetros, o comando `du` exibe o tamanho de todos os arquivos e diretórios do diretório atual. Por isso, é recomendado passar o caminho do diretório como parâmetro além da opção `-h` para exibir o tamanho em formato legível e `--max-depth=1` para exibir o tamanho de apenas um nível de diretórios.

```bash
du -h --max-depth=1 / | sort -h
```

### `find` - Buscar arquivo(s)

O comando `find` é usado para buscar um arquivo ou diretório. Para buscar um arquivo, basta passar o caminho do arquivo como parâmetro.

```bash
find / --name file.txt
```

### `grep` - Buscar por palavra em arquivo

O comando `grep` é usado para buscar por uma palavra em um arquivo. Para buscar por uma palavra em um arquivo, basta passar a palavra como parâmetro.

```bash
grep "Hello" /home/root/file.txt
```

### `ifconfig` - Exibir endereços de rede

O comando `ifconfig` é usado para exibir os endereços de rede. Para exibir os endereços de rede, basta passar o caminho do arquivo como parâmetro.

```bash
ifconfig
```

### `ping` - Testar conexão com host

O comando `ping` é usado para testar a conexão com um host. Para testar a conexão com um host, basta passar o host como parâmetro.

```bash
ping google.com
```

### `ps` - Exibir processos

O comando `ps` é usado para exibir os processos. Para exibir os processos, basta passar o caminho do arquivo como parâmetro.

```bash
ps
```

### `top` - Exibir processos em tempo real

O comando `top` é usado para exibir os processos em tempo real. Para exibir os processos em tempo real, basta passar o caminho do arquivo como parâmetro.

```bash
top
```

Em alguns casos, é necessário passar a opção `-u` para exibir os processos de um usuário específico.

```bash
top -u root
```

### `kill` - Finalizar processo

O comando `kill` é usado para finalizar um processo. Para finalizar um processo, basta passar o PID do processo como parâmetro.

```bash
kill 1234
```

### `service` - Iniciar/Parar/Reiniciar/Status de serviço

O comando `service` é usado para iniciar, parar, reiniciar e verificar o status de um serviço. Para iniciar, parar, reiniciar e verificar o status de um serviço, basta passar o nome do serviço como parâmetro.

```bash
service apache2 start
```

```bash
service apache2 stop
```

```bash
service apache2 restart
```

```bash
service apache2 status
```