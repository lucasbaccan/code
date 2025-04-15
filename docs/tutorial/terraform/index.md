---
id: index
title: Terraform
hide_title: false
hide_table_of_contents: false
# sidebar_label: Cursos
# description: Cursos
---

import Center from "@site/src/components/Center";


:::info Observação
🚧 Em construção 🚧
:::

Fala pessoal, tudo bem? Nesse tutorial vou falar um pouco sobre o Terraform, uma ferramenta que permite a criação de infraestrutura como código. Eu não domino, mas estou estudando e vou compartilhar o que eu for aprendendo.

## O que é Terraform?

O Terraform é uma ferramenta de infraestrutura como código (IaC) que permite a criação, atualização e destruição de recursos de infraestrutura de forma segura e eficiente. Ele é desenvolvido pela HashiCorp e era open source, mas por causa de algumas mudanças na licença, a partir da versão 1.6.0. Existe um fork chamado [Open Tofu](https://opentofu.org/) que é uma versão open source do Terraform, mas não é o foco desse tutorial.

## Instalação

Para instalar o Terraform, basta acessar o [site oficial](https://www.terraform.io/downloads.html) e baixar a versão compatível com o seu sistema operacional. Depois de baixar, basta descompactar o arquivo e adicionar o binário no PATH do sistema.

Você pode utilizar também o docker para rodar o Terraform. Para isso, basta rodar o comando abaixo:

```bash
docker run -it --rm -v $(pwd):/app -w /app hashicorp/terraform <comando>

# Exemplo
docker run -it --rm -v $(pwd):/app -w /app hashicorp/terraform:1.10 init
```

## Como funciona?

O Terraform utiliza uma linguagem chamada HashiCorp Configuration Language (HCL) para descrever a infraestrutura. Com essa linguagem, é possível descrever os recursos que você deseja criar, atualizar ou destruir.

Ele utiliza do binário do Terraform para interpretar o código HCL e criar um plano de execução. Esse plano é uma representação do que o Terraform irá fazer na sua infraestrutura. Ele irá criar, atualizar ou destruir os recursos necessários para que a sua infraestrutura fique de acordo com o código HCL.

Ele "conversa" com diversos recursos, como AWS, Azure, Google Cloud... mas não só isso. Ele também pode se comunicar com recursos locais, como Docker, Kubernetes, entre outros. Então é uma ferramenta bem versátil.

Para "conversar" com os recursos remotos, provavelmente você terá que configurar as credenciais de acesso e alguma ferramenta de CLI. Por exemplo, para se comunicar com a AWS, você terá que configurar o AWS CLI, para se comunicar com o Azure, você terá que configurar o Azure CLI e assim por diante.

## O que é HCL?

A HashiCorp Configuration Language (HCL) é uma linguagem de configuração que é usada para definir recursos e configurações de infraestrutura. Ela é usada pelo Terraform para descrever a infraestrutura que você deseja criar, atualizar ou destruir.

A HCL é uma linguagem declarativa, ou seja, você descreve o que você deseja e o Terraform se encarrega de fazer isso. Ela é bem simples e fácil de entender, então não se preocupe se você não conhece.

### Blocos

Os blocos são a base da HCL. Eles são usados para agrupar configurações relacionadas. Por exemplo, você pode ter um bloco de recurso que define um servidor web e um bloco de variável que define o nome do servidor.

```hcl showLineNumbers
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}
```

Nesse exemplo, o bloco é aberto com `{` na linha 1 e fechado com `}` na linha 4. A palavra `resource` é uma palavra-chave que define o tipo de bloco. O nome `aws_instance` é o tipo de recurso e `web` é o nome do recurso.

Em resumo:

- `resource` é uma palavra-chave que define o tipo de bloco.
- `aws_instance` é o tipo de recurso
- `web` é o nome do recurso

:::info Observação
O tipo de recurso é definido pelo provedor. No exemplo acima, o tipo de recurso é [`aws_instance`](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/instance), que é um recurso da AWS. Cada provedor tem seus próprios tipos de recursos. Utilize a documentação do provedor para saber mais sobre os tipos de recursos disponíveis.
:::

### Argumentos

Os argumentos são usados para definir as configurações de um bloco. Eles são definidos como `chave = valor`. Por exemplo, no bloco de recurso acima, `ami` e `instance_type` são argumentos, e `ami-0c55b159cbfafe1f0` e `t2.micro` são os valores desses argumentos respectivamente.

:::info Observação
Os argumentos são definidos pelo tipo de recurso. Utilize a documentação do provedor para saber mais sobre os argumentos disponíveis para cada tipo de recurso. No exemplo acima, o tipo de recurso é [`aws_instance`](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/instance).
:::

### Identificadores

Os identificadores são usados para identificar os blocos. Eles são definidos como `tipo.nome`. Por exemplo, no bloco de recurso acima, `aws_instance.web` é o identificador do bloco. `aws_instance` é o tipo de recurso e `web` é o nome do recurso.

### Atributos

Os atributos são usados para acessar os valores dos argumentos de um bloco. Eles são definidos como `tipo.nome.argumento`. Por exemplo, no bloco de recurso acima, `aws_instance.web.ami` é o atributo do argumento `ami` do bloco de recurso `aws_instance.web`.

```hcl
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}

output "ami" {
  value = aws_instance.web.ami
}

output "instance_type" {
  value = aws_instance.web.instance_type
}
```

Além dos argumentos, você pode acessar outros atributos do bloco, como o `instance_type` do bloco de recurso `aws_instance.web`, que não foi definido no bloco de recurso, mas é um atributo do bloco de recurso.

:::info Observação
Os atributos são definidos pelo tipo de recurso. Utilize a documentação do provedor para saber mais sobre os atributos disponíveis para cada tipo de recurso. No exemplo acima, o tipo de recurso é [`aws_instance`](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/instance).
:::

### Comentários

Os comentários são usados para documentar o código. Eles são ignorados pelo Terraform e não afetam a execução do código. Eles são definidos com `#`, `//` ou `/* */`. Mas o Terraform recomenda o uso de `#`.

```hcl
# Isso é um comentário utilizando # e é a melhor forma de comentar o código

// Isso é um comentário utilizando // e é uma forma de comentar o código

/*
Isso é um comentário utilizando /* */ e é uma forma de comentar o código
*/
```

### Arquivo

A extensão dos arquivos HCL é `.tf`. Por exemplo, `main.tf`, `variables.tf`, `outputs.tf`...

Eles tem que ter o encoding UTF-8, além disso, o arquivo deve ter o final de linha LF (Unix) e não CRLF (Windows). Isso é importante, pois o Terraform pode ter problemas para interpretar o arquivo.

:::info Observação
O Terraform não interpreta o nome do arquivo. Existem convenções de nomes para os arquivos, como `main.tf` para o arquivo principal, `variables.tf` para as variáveis, `outputs.tf` para os outputs, `provider.tf` para o provedor, `backend.tf` para o backend, entre outros. Mas você pode nomear os arquivos como quiser, o Terraform irá interpretar o conteúdo de todos os arquivos `.tf` no diretório de trabalho.
:::

## Comandos

Agora que você já sabe o básico sobre o Terraform, vamos ver alguns comandos que você pode utilizar para gerenciar a sua infraestrutura.

### terraform init

O comando `terraform init` é utilizado para inicializar o diretório de trabalho. Ele baixa os plugins necessários para o provedor que você está utilizando e cria um arquivo chamado `terraform.tfstate` que armazena o estado da infraestrutura.

### terraform plan

O comando `terraform plan` é utilizado para criar um plano de execução. Ele mostra o que o Terraform irá fazer na sua infraestrutura. Ele não executa nenhuma ação, apenas mostra o que será feito.

Você pode utilizar a flag `-out` para salvar o plano de execução em um arquivo. Por exemplo:

```bash
terraform plan -out plano.tfplan
```

### terraform apply

O comando `terraform apply` é utilizado para aplicar o plano de execução. Ele cria, atualiza ou destrói os recursos necessários para que a sua infraestrutura fique de acordo com o código HCL.

Você pode utilizar a flag `-auto-approve` para aprovar automaticamente o plano de execução. Por exemplo:

```bash
terraform apply -auto-approve
```

Você pode aplicar um plano de execução específico passando o arquivo como argumento. Por exemplo:

```bash
terraform apply plano.tfplan
```

### terraform destroy

O comando `terraform destroy` é utilizado para destruir os recursos criados pelo Terraform. Ele irá perguntar se você realmente deseja destruir os recursos, então você terá que confirmar.

Você pode utilizar a flag `-auto-approve` para aprovar automaticamente a destruição dos recursos. Por exemplo:

```bash
terraform destroy -auto-approve
```

Você pode salvar o `destroy` em um arquivo e aplicar depois. Por exemplo:

```bash
terraform plan -destroy -out destroy.tfplan
```

e depois:

```bash
terraform apply destroy.tfplan
```

## [State file](https://www.terraform.io/docs/language/state)

O arquivo de estado (`terraform.tfstate`) é um arquivo que armazena o estado da infraestrutura. Ele contém informações sobre os recursos criados, atualizados ou destruídos pelo Terraform.

Ele é importante para o Terraform saber o que ele precisa fazer na sua infraestrutura. Por exemplo, se você criar um recurso e depois destruí-lo, o Terraform irá saber que ele precisa destruir o recurso.

O arquivo de estado é criado automaticamente pelo Terraform quando você executa o comando `terraform init`. Ele é salvo no diretório de trabalho e não deve ser versionado, mas sim armazenado em um local seguro. Se você versionar o arquivo de estado, você pode ter problemas de concorrência e corrupção do arquivo.

### Backend

O backend é um recurso que o Terraform utiliza para armazenar o arquivo de estado de forma remota. Ele é configurado no arquivo `backend.tf` e pode ser configurado para utilizar diversos backends, como AWS S3, Google Cloud Storage, Azure Blob Storage, entre outros.

Se você estiver em um ambiente de equipe, é recomendado utilizar um backend remoto para armazenar o arquivo de estado. Assim qualquer pessoa da equipe pode acessar o arquivo de estado e saber o que está acontecendo na infraestrutura.

Vamos ver um exemplo de como configurar o backend para utilizar o AWS S3:

```hcl title="backend.tf" showLineNumbers
terraform {
  backend "s3" {
    bucket         = "my-terraform-state"
    key            = "terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-lock"
  }
}
```

- `bucket` é o nome do bucket do AWS S3 que será utilizado para armazenar o arquivo de estado, você pode armazenar vários arquivos de estado em um mesmo bucket se quiser ou até outros arquivos.
- `key` é o nome do arquivo de estado que será armazenado no bucket. No exemplo acima, o arquivo de estado será armazenado no bucket `my-terraform-state` com o nome `terraform.tfstate`, mas você pode escolher o nome que quiser.
- `region` é a região do AWS S3 que será utilizada para configurar o bucket. No exemplo acima, a região é `us-east-1`, mas você pode escolher a região que quiser.
- `dynamodb_table` é o nome da tabela do AWS DynamoDB que será utilizada para armazenar o [lock](#lock) do arquivo de estado. No exemplo acima, a tabela é `terraform-lock`, mas você pode escolher o nome que quiser.

### [Lock](https://www.terraform.io/docs/language/state/locking)

O lock é um mecanismo de controle de concorrência que o Terraform utiliza para evitar que duas pessoas modifiquem o arquivo de estado ao mesmo tempo. Ele é armazenado em um arquivo chamado `terraform.tfstate.lock`.

Ele é importante para evitar problemas de concorrência e corrupção do arquivo de estado. Se duas pessoas modificarem o arquivo de estado ao mesmo tempo, ele pode ficar corrompido e você pode perder os recursos criados ou criar recursos duplicados.

## [Expressões](https://developer.hashicorp.com/terraform/language/expressions)

As expressões são usadas para definir valores dinâmicos em HCL. Elas são definidas entre `${}`. Por exemplo, `${var.ami}` é uma expressão que acessa o valor da variável `ami`.

As expressões podem ser usadas em argumentos, atributos, variáveis, outputs, entre outros. Elas são avaliadas pelo Terraform e substituídas pelo valor correspondente.

### [Tipos](https://developer.hashicorp.com/terraform/language/expressions/types)

As expressões podem ser de diversos tipos, como string, número, booleano, lista, mapa, objeto, função, entre outros. Elas são inferidas pelo Terraform e não precisam ser declaradas.

- [String](https://developer.hashicorp.com/terraform/language/expressions/types#strings): `"hello world"`, é o valor informado entre aspas duplas.
- [Numbers](https://developer.hashicorp.com/terraform/language/expressions/types#numbers): `42`, é o valor informado sem aspas.
- [Boolean](https://developer.hashicorp.com/terraform/language/expressions/types#bools): `true` ou `false`, é o valor informado sem aspas, sendo `true` verdadeiro e `false` falso.
- [List](https://developer.hashicorp.com/terraform/language/expressions/types#lists-tuples): `["hello", "world"]`, é um conjunto de valores informados entre colchetes, que pode ser acessado por índice.
- [Set](https://developer.hashicorp.com/terraform/language/expressions/types#sets): `toSet(["hello", "world"])`, é um conjunto de valores informados entre parênteses, mas é um conjunto, então não aceita valores duplicados e não tem ordem.
- [Maps](https://developer.hashicorp.com/terraform/language/expressions/types#maps-objects): `{hello = "world"}`, é um conjunto de pares chave-valor informados entre chaves, que pode ser acessado pela chave. No exemplo, a chave é `hello` e o valor é `world`.
- [Null](https://developer.hashicorp.com/terraform/language/expressions/types#null-1): `null`, é um valor nulo, que pode ser utilizado para representar a ausência de valor. Ele não é um tipo, mas sim um valor.

## [Providers](https://developer.hashicorp.com/terraform/language/providers)

O Terraform utiliza os provedores para se comunicar com os recursos. Eles são plugins que fornecem os recursos necessários para criar, atualizar ou destruir a infraestrutura.

Existem dois meta-argumentos que são comuns a todos os recursos:

- `alias`: é um identificador único para o recurso. Ele é utilizado para acessar o recurso em outros recursos. Por exemplo, você pode ter dois recursos com o mesmo tipo e nome, mas com aliases diferentes.
- `version`: é a versão do provedor que será utilizada. Ela é definida no bloco de provedor.

Vamos ver um exemplo de como utilizar o provedor da AWS:

```
provider "aws" {
  region = "us-east-1"
}

provider "aws" {
  alias  = "west"
  region = "us-west-1"
}

resource "aws_instance" "web1" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}

resource "aws_instance" "web2" {
  provider = aws.west
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}

module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  version = "3.0.0"
}

module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "3.0.0"
  providers = {
    aws = aws.west
  }
}
```

Nesse exemplo temos dois blocos de provedor da AWS. O primeiro bloco é o provedor padrão e o segundo bloco é um provedor com um alias. O alias é utilizado para acessar o provedor em outros recursos, pois nesse caso, eles estão em regiões diferentes.

Mas você poderia ter `alias` para usar usuários diferentes, contas diferentes, cloud diferentes, entre outros.

## [Variáveis](https://developer.hashicorp.com/terraform/language/values/variables)

As variáveis são usadas para definir valores que podem ser reutilizados em todo o código. Elas são definidas no bloco de variáveis e podem ser de diversos tipos, como string, número, booleano, lista, mapa, objeto, função, entre outros.

Isso permite que você defina valores dinâmicos em um único lugar e os utilize em todo o código sem precisar repetir o valor, o que facilita a manutenção e a reutilização do código.

Vamos ver um exemplo de como utilizar variáveis:

```hcl title="variables.tf" showLineNumbers
variable "ami" {
  type    = string
  default = "ami-0c55b159cbfafe1f0"
}

variable "instance_type" {
  type    = string
  default = "t2.micro"
}
```

Nesse exemplo temos dois blocos de variáveis. O primeiro bloco define a variável `ami` com o tipo `string` e o valor padrão `ami-0c55b159cbfafe1f0`. O segundo bloco define a variável `instance_type` com o tipo `string` e o valor padrão `t2.micro`.

Você pode acessar as variáveis em todo o código utilizando a expressão `${var.ami}` e `${var.instance_type}`. Por exemplo:

```hcl
resource "aws_instance" "web" {
  ami           = var.ami
  instance_type = var.instance_type
}
```

Nesse exemplo, o recurso `aws_instance.web` utiliza as variáveis `ami` e `instance_type` para definir o AMI e o tipo de instância do servidor web.

Caso não tenha o valor padrão, você pode passar o valor como argumento na linha de comando:

```bash
terraform apply -var 'ami=ami-0c55b159cbfafe1f0' -var 'instance_type=t2.micro'
```

Você pode utilizar a flag `-var-file` para passar um arquivo de variáveis. Por exemplo:

```bash
terraform apply -var-file=variables.tfvars
```

```hcl title="variables.tfvars" showLineNumbers
ami           = "ami-0c55b159cbfafe1f0"
instance_type = "t2.micro"
```

E você pode utilizar variáveis de ambiente para passar valores para as variáveis. Por exemplo:

```bash
export TF_VAR_ami=ami-0c55b159cbfafe1f0
export TF_VAR_instance_type=t2.micro
terraform apply
```

Nesse exemplo, as variáveis `ami` e `instance_type` são definidas como variáveis de ambiente e são acessadas pelo Terraform. Você precisa adicionar o prefixo `TF_VAR_` antes do nome da variável para que o Terraform consiga acessá-la.

### [Variáveis - Argumentos](https://developer.hashicorp.com/terraform/language/values/variables#arguments)

<!-- 
default - A default value which then makes the variable optional.
type - This argument specifies what value types are accepted for the variable.
description - This specifies the input variable's documentation.
validation - A block to define validation rules, usually in addition to type constraints.
ephemeral - This variable is available during runtime, but not written to state or plan files.
sensitive - Limits Terraform UI output when the variable is used in configuration.
nullable - Specify if the variable can be null within the module.
 -->

 Existem alguns argumentos que você pode utilizar para definir as variáveis:

- `default`: é um valor padrão que torna a variável opcional. Se você não passar um valor para a variável, ela utilizará o valor padrão.
- `type`: é o tipo de valor que a variável aceita. Por exemplo, `string`, `number`, `bool`, `list`, `map`, `object`, `function`, entre outros.
- `description`: é a documentação da variável. Ela é utilizada para descrever o propósito da variável.
- `validation`: é um bloco para definir regras de validação. Por exemplo, você pode definir um valor mínimo, máximo, padrão, entre outros.
- `ephemeral`: é uma variável que está disponível durante a execução, mas não é escrita nos arquivos de estado ou de plano.
- `sensitive`: é uma variável que limita a saída da UI do Terraform quando a variável é utilizada na configuração.
- `nullable`: é uma variável que pode ser nula dentro do módulo.

A diferença entre `ephemeral` e `sensitive` é que `ephemeral` não é escrita nos arquivos de estado ou de plano, enquanto `sensitive` limita a saída da UI do Terraform.

Exemplo de um campo que tem que tem que ter um tamanho de 5 a 10 caracteres:

```hcl
variable "name" {
  type        = string
  description = "The name of the resource."
  validation {
    condition     = length(var.name) > 5 && length(var.name) < 10
    error_message = "The name must be between 5 and 10 characters."
  }
}
```

Exemplo de um campo que não pode ser nulo:

```hcl
variable "name" {
  type        = string
  description = "The name of the resource."
  validation {
    condition     = var.name != null
    error_message = "The name cannot be null."
  }
}
```

Exemplo de um campo que tem que ser maior que 0:

```hcl
variable "count" {
  type        = number
  description = "The number of resources."
  validation {
    condition     = var.count > 0
    error_message = "The count must be greater than 0."
  }
}
```

Exemplo de um campo que só aceita uma lista de strings:

```hcl
variable "names" {
  type        = list(string)
  description = "The names of the resources."
}
```
