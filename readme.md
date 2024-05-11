# Semana 10 - Introdução ao Sequelize

# Organização: 
### database/migrate - Representa as tabelas do banco de dados -> crio a tabela 

### database/connection.js - Permite o acesso ao banco de dados

### Models - Permite acessar as tabelas do banco de dados -> e depois o model para acessar a tabela (por isso que chamo o connection para estabelecer a conexão)

### Config - Todas as configurações do projeto

### Routes - Representa todas as rotas da aplicação - CRUD (get, post,...)

### Server.js - Organiza a inicialização do projeto

### Index.js - Chama o server e starta o projeto 
###
### Package.json - salva as bibliotecas do projeto -> identidade do projeto
### .env - variáveis ambiente
### .gitignore - partes que quero ignorar ao mandar para o Github
### .sequelizerc - faz as funcionalidades do sequelize


## Rodar o repositório:

### Na primeira vez é necessário instalar as dependencias:
1. `npm install`
2. Se for em ambiente local: `npm install --dev`
3. `cp .env_example .env`

### Para rodar o repositório em ambiente local
1. `npm run start:dev`

## Trabalhando com migrations:

### Criar uma migration
1. `sequelize migration:generate --name criar_tabela_alunos`
2. `npx sequelize-cli migration:generate --name criar_tabela_alunos`
### Rodar uma migration. Opções:
1. Opção nº 1: `sequelize db:migrate`
2. Opção nº 2: `npx sequelize db:migrate`

### Reverter a última migration:
1. `sequelize-cli db:migrate:undo`
2. `npx sequelize-cli db:migrate:undo`

## Documentação do Sequelize:
https://sequelize.org/docs/v6/core-concepts/model-basics/

## Novas Bibliotecas utilizadas:

### instalar o sequelize
`npm install sequelize` 
### instalar o driver do PostgreSQL
`npm install pg` 
### instalar o CLI do sequelize
`npm install -g sequelize-cli` 
### instalar o dotenv
`npm install dotenv`
### instalar o JsonWebToken ( JWT )
`npm install jsonwebtoken`