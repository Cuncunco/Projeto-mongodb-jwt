# 🔐 API de Autenticação com JWT

Uma API REST desenvolvida em **Node.js** e **Express**, com autenticação segura usando **JWT (JSON Web Token)** e criptografia de senhas com **bcrypt**.  
O projeto implementa cadastro, login e verificação de token para proteger rotas privadas.

---

## Sumário
- [Sobre](#-sobre)
- [Tecnologias](#-tecnologias)
- [Instalação](#-instalação)
- [Configuração do Ambiente](#-configuração-do-ambiente)
- [Rotas da API](#-rotas-da-api)
- [Exemplo de Uso](#-exemplo-de-uso)
- [Estrutura do Projeto](#-estrutura-do-projeto)


---

## Sobre

Este projeto tem como objetivo demonstrar uma **API de autenticação segura**, incluindo:

- Registro de usuários com senhas criptografadas.
- Login com geração de token JWT.
- Acesso protegido a rotas privadas.
- Middleware para validação de token.

Ideal para servir de base em aplicações Node.js que precisam de controle de acesso.

---

## Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) (ou outro banco que você estiver usando)
- [Mongoose](https://mongoosejs.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Postman](https://www.postman.com/) (para testes)

---

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Cuncunco/Projeto-mongodb-jwt

2. Acesse o diretório: 
   cd jwt-auth-api   

3. Instale as dependências:
   npm install

## Configuração do Ambiente

Crie um arquivo .env na raiz do projeto com as variáveis:
PORT=3000
MONGO_URI=sua_string_de_conexao
JWT_SECRET=seu_token_secreto

## Rotas da API

 Registro

POST /api/register

Exemplo de corpo (JSON):
{
  "name": "Victor",
  "email": "victor@email.com",
  "password": "123456"
}

Resposta de sucesso:
{
  "message": "Usuário criado com sucesso!"
}

## Login

POST /api/login

Exemplo de corpo (JSON):
{
  "email": "victor@email.com",
  "password": "123456"
}

Resposta de sucesso:
{
  "message": "Autenticação realizada com sucesso!",
  "token": "jwt_token_aqui"
}

## Rota Protegida

GET /api/user/:id

Cabeçalho necessário:
Authorization: Bearer seu_token_jwt

Resposta de sucesso:
{
  "id": "abc123",
  "name": "Victor",
  "email": "victor@email.com"
}

## Exemplo de Uso (Postman)

Envie um POST para /api/register para criar um usuário.

Faça um POST para /api/login e copie o token retornado.

Use o token no header Authorization para acessar /api/user/:id.

## Estrutura do projeto

project/
├── models/
├── node_modules/
├── .env
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md