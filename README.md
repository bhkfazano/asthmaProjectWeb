# Asthma Project WebApp (React based)


Esse repositório consta do WebApp do projeto de monitoramento e tratamento de pacientes com doenças pulmonares crônicas do Hospital das Clínicas da USP em parceria com a disciplina PCS3443 da EPUSP. 


## Execução e Utilização

O deploy do projeto em modo de desenvolvimento ja está disponível e pode ser acessado em: https://asthma-project-web.herokuapp.com/.
Todos os deploys são feitos a partir da branch master.

Caso deseje executar o projeto localmente, é necessário clonar o projeto e ter **instalado em sua máquina o Nodejs e o NPM** (são instalados em conjunto). Com esses softwares instalados, executar num terminal (cmd):

```shell
# Navegar para a pasta onde se encontra o respositório
cd filePath/asthmaProjectWeb

# Instalar a react-cli globalmente
npm install -g react-cli

# Instalar as dependências do projeto
npm install

# Executar o projeto
npm run dev
```

A aplicaçao pode ser acessada em http://localhost:3000 e o acesso pode ser feito utilizando as credenciais:

```shell
cpf: admin
senha: 280597
```

## Rotas

- **/ -** Página inicial com formulario para login do profissional de saúde.
- **/dashboard#statistics -** Página destino após redirecionamento de login, apresenta dados gerais dos pacientes (em desenvolvimento).
- **dashboard#patients -** Página para gerenciamento dos pacientes do profissinal logado.
- **dashboard#patient?id=<id> -** Página de visualização dos dados de um paciente específico
- **dashboard#team -** Página para gerenciamento da equipe de profissionais de saúde (disponvel apenas se admin).
- **dashboard#settings -** Configurações (em desenvolvimento).

## Deploy

A aplicação está configurada para deploy automático a partir da branch master deste repositório. Para atualizar a versão corrente:

```shell
cd filePath/asthmaProjectWeb
npm run build
git add .
git commit -m "deploy"
git push origin master
```
