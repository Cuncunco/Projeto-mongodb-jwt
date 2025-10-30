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
- [Possíveis Melhorias](#-possíveis-melhorias)
- [Licença](#-licença)

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