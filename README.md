<h1 align = center>Lista de contatos</h1>

Api feita com Express e TypeORM, onde usuários podem criar e gerenciar seus contatos.

<h2>Configuração do ambiente</h1>

1. Dentro do diretório, abra o terminal e instale as dependências necessárias para rodar a aplicação localmente:

```shell
npm install
```

2. Crie o arquivo .env com as variáveis declaradas no arquivo .env.example

```shell
# Exemplo de como preencher o .env
PORT=3000
DATABASE_URL="postgres://User:1234@localhost:5432/BancoDeDados"
SECRET_KEY="stringAleatoria"
EXPIRES_IN="3h"
```

3. Rode as migrações do banco de dados vinculado utilizando o seguinte comando no terminal:

```shell
npm run typeorm migration:run -- -d src/data-source
```

4. Para Rodar a aplicação utilize o comando abaixo:

```shell
npm run dev
```

Após Rodar a aplicalção a API poderá ser acessada a partir da URL:
http://localhost:3000

<h1 align = center>Endpoints da aplicação</h1>

<h2>/login</h2>

| Método | Endpoint | Responsabilidade |
| ------ | -------- | ---------------- |
| POST   | /login   | Login de usuário |

<h3>POST /login</h3>
Rota de login de usuário

| Request                |
| ---------------------- |
| Body: application/json |

```json
{
  "password": "1234",
  "email": "admin@mail.com"
}
```

| Response               |
| ---------------------- |
| Body: application/json |
| Status: 200 OK         |

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiaWF0IjoxNzA2OTgyMDc0LCJleHAiOjE3MDY5OTI4NzQsInN1YiI6IjQwMjdmOWRhLWIzMmMtNDJhZC05ZmFmLTg0MjQ4MzE1NmU2OSJ9.vfKwefIlFm_ea6Q1bJHNvjwGQyZ7gp134SH3WWpYKD4"
}
```

| Response                |
| ----------------------- |
| Body: application/json  |
| Status: 400 BAD REQUEST |

```json
{
  "message": {
    "email": ["Required"],
    "password": ["Required"]
  }
}
```

| Response                 |
| ------------------------ |
| Body: application/json   |
| Status: 401 UNAUTHORIZED |

```json
{
  "message": "Invalid credentials."
}
```

<h2>/users</h2>

| Método | Endpoint   | Responsabilidade                     |
| ------ | ---------- | ------------------------------------ |
| POST   | /users     | Cadastro de usuário                  |
| GET    | /users     | Listagem de usuários                 |
| GET    | /users/:id | Listagem de usuário passando o id    |
| PATCH  | /users/:id | Atualização de usuário passando o id |
| DELETE | /users/:id | Deleção de usuário passando o id     |

<h3>POST /users </h3>
Rota de criação de usuário

| Request                |
| ---------------------- |
| Body: application/json |

```json
{
  "fullName": "Admin",
  "password": "1234",
  "email": "admin@mail.com",
  "phone": "129",
  "admin": true
  //   o envio de "admin" não é obrigatório (default: false).
}
```

| Response               |
| ---------------------- |
| Body: application/json |
| Status: 201 CREATED    |

```json
{
  "id": "4027f9da-b32c-42ad-9faf-842483156e69",
  "fullName": "Admin",
  "email": "admin@mail.com",
  "admin": true,
  "phone": "129",
  "registeredAt": "2024-02-03"
}
```

| Response                 |
| ------------------------ |
| Body: application/json   |
| Status : 400 BAD REQUEST |

```json
{
  "message": {
    "fullName": ["Required"],
    "email": ["Required"],
    "password": ["Required"],
    "phone": ["Required"]
  }
}
```

### **/contacts**

| Método | Endpoint      | Responsabilidade                     |
| ------ | ------------- | ------------------------------------ |
| POST   | /contacts     | Cadastro de contato                  |
| GET    | /contacts     | Listagem de contatos                 |
| PATCH  | /contacts/:id | Atualização de contato passando o id |
| DELETE | /contacts/:id | Deleção de contato passando o id     |
