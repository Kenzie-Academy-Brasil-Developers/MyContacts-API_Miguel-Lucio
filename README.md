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

<h2>Rota de Login</h2>

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

<h2>Rotas de Usuários</h2>

| Método | Endpoint   | Responsabilidade                     |
| ------ | ---------- | ------------------------------------ |
| POST   | /users     | Cadastro de usuário                  |
| GET    | /users     | Listagem de usuários                 |
| GET    | /users/:id | Listagem de usuário passando o id    |
| PATCH  | /users/:id | Atualização de usuário passando o id |
| DELETE | /users/:id | Deleção de usuário passando o id     |

<h3>POST /users</h3>
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

| Response                 |
| ------------------------ |
| Body: application/json   |
| Status : 400 BAD REQUEST |

```json
{
  "message": "Email already exists."
}
```

<h3>GET /users</h3>
Rota de listagem de usuários
(Apenas Usuários Admin podem acessar.)

| Request            |
| ------------------ |
| Body: No content   |
| Auth: Bearer Token |

| Response               |
| ---------------------- |
| Body: application/json |
| Status: 200 OK         |

```json
[
  {
    "id": "4027f9da-b32c-42ad-9faf-842483156e69",
    "fullName": "Admin",
    "email": "admin@mail.com",
    "admin": true,
    "phone": "129",
    "registeredAt": "2024-02-03"
  },
  {
    "id": "4a731054-9ec0-4e07-a309-f7112118a122",
    "fullName": "User",
    "email": "user@mail.com",
    "admin": false,
    "phone": "129",
    "registeredAt": "2024-02-03"
  },
  {
    "id": "27624bef-fa0c-4345-a31b-6a379ef9e1ba",
    "fullName": "User2",
    "email": "user2@mail.com",
    "admin": false,
    "phone": "129",
    "registeredAt": "2024-02-03"
  }
]
```

| Response                 |
| ------------------------ |
| Body: application/json   |
| Status: 401 UNAUTHORIZED |

```json
{
  "message": "Missing bearer token."
}
```

| Response               |
| ---------------------- |
| Body: application/json |
| Status: 403 FORBIDDEN  |

```json
{
  // Rsposta de usuário não admin
  "message": "Insufficient permission."
}
```

<h3>GET /users/:id</h3>
Rota de listagem de usuário pelo id
(Apenas o usuário proprietário da conta e usuários admin podem acessar.)

| Request            |
| ------------------ |
| Body: No content   |
| Auth: Bearer Token |

| Response               |
| ---------------------- |
| Body: application/json |
| Status: 200 OK         |

```json
{
  "id": "4a731054-9ec0-4e07-a309-f7112118a122",
  "fullName": "User",
  "email": "user@mail.com",
  "admin": false,
  "phone": "129",
  "registeredAt": "2024-02-03"
}
```

| Response                 |
| ------------------------ |
| Body: application/json   |
| Status: 401 UNAUTHORIZED |

```json
{
  "message": "Missing bearer token."
}
```

| Response               |
| ---------------------- |
| Body: application/json |
| Status: 403 FORBIDDEN  |

```json
{
  // Rsposta de usuário não admin
  "message": "Insufficient permission."
}
```

| Response               |
| ---------------------- |
| Body: application/json |
| Status: 404 NOT FOUND  |

```json
{
  "message": "User not found."
}
```

<h3>PATCH /users/:id</h3>
Atualização de usuário
(Apenas o usuário proprietário da conta e usuários admin podem acessar.)

| Request                |
| ---------------------- |
| Body: application/json |
| Auth: Bearer Token     |

```json
{
  "fullName": "User4",
  "email": "user4@mail.com",
  "phone": "12345"
  // o campo "admin não pode ser alterado
}
```

| Response               |
| ---------------------- |
| Body: application/json |
| Status: 200 OK         |

```json
{
  "id": "4a731054-9ec0-4e07-a309-f7112118a122",
  "fullName": "User4",
  "email": "user4@mail.com",
  "admin": false,
  "phone": "12345",
  "registeredAt": "2024-02-03"
}
```

| Response                 |
| ------------------------ |
| Body: application/json   |
| Status: 401 UNAUTHORIZED |

```json
{
  "message": "Missing bearer token."
}
```

| Response               |
| ---------------------- |
| Body: application/json |
| Status: 403 FORBIDDEN  |

```json
{
  // Rsposta de usuário não admin
  "message": "Insufficient permission."
}
```

| Response               |
| ---------------------- |
| Body: application/json |
| Status: 404 NOT FOUND  |

```json
{
  "message": "User not found."
}
```

<h3>DELETE /users/:id</h3>
Rota de delelção de usuário pelo id
(Apenas o usuário proprietário da conta e usuários admin podem acessar.)

| Request            |
| ------------------ |
| Body: No content   |
| Auth: Bearer Token |

| Response               |
| ---------------------- |
| Body: application/json |
| Status: 204 NO CONTENT |

| Response                 |
| ------------------------ |
| Body: application/json   |
| Status: 401 UNAUTHORIZED |

```json
{
  "message": "Missing bearer token."
}
```

| Response               |
| ---------------------- |
| Body: application/json |
| Status: 403 FORBIDDEN  |

```json
{
  // Rsposta de usuário não admin
  "message": "Insufficient permission."
}
```

| Response               |
| ---------------------- |
| Body: application/json |
| Status: 404 NOT FOUND  |

```json
{
  "message": "User not found."
}
```

<h2>Rotas de Contatos</h2>

| Método | Endpoint      | Responsabilidade                     |
| ------ | ------------- | ------------------------------------ |
| POST   | /contacts     | Cadastro de contato                  |
| GET    | /contacts     | Listagem de contatos                 |
| PATCH  | /contacts/:id | Atualização de contato passando o id |
| DELETE | /contacts/:id | Deleção de contato passando o id     |

<h3>POST /contacts </h3>
Rota de criação de Contato

| Request                |
| ---------------------- |
| Body: application/json |
| Auth: Bearer Token     |

```json
{
  "fullName": "contact3",
  "email": "contact3@mail.com",
  "phone": "118"
}
```

| Response               |
| ---------------------- |
| Body: application/json |
| Status: 201 CREATED    |

```json
{
  "id": "efefc789-1013-43f5-bfb5-a1b0b6c0931f",
  "fullName": "contact3",
  "email": "contact3@mail.com",
  "phone": "118",
  "registeredAt": "2024-02-04"
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
    "phone": ["Required"]
  }
}
```

| Response                 |
| ------------------------ |
| Body: application/json   |
| Status : 400 BAD REQUEST |

```json
{
  "message": "There is contact with this email."
}
```

| Response                 |
| ------------------------ |
| Body: application/json   |
| Status: 401 UNAUTHORIZED |

```json
{
  "message": "Missing bearer token."
}
```

<h3>GET /contacts</h3>
Rota de listagem de contatos
(O usuário só possui acesso aos seus próprios contatos)

| Request            |
| ------------------ |
| Body: No content   |
| Auth: Bearer Token |

| Response               |
| ---------------------- |
| Body: application/json |
| Status: 200 OK         |

```json
[
  {
    "id": "98516086-bb6f-4370-842f-286d84911a74",
    "fullName": "contact",
    "email": "contact@mail.com",
    "phone": "129",
    "registeredAt": "2024-02-04"
  },
  {
    "id": "7b35f4dc-e812-495c-9c87-5dadabfc9c34",
    "fullName": "contact2",
    "email": "contact2@mail.com",
    "phone": "118",
    "registeredAt": "2024-02-04"
  },
  {
    "id": "efefc789-1013-43f5-bfb5-a1b0b6c0931f",
    "fullName": "contact3",
    "email": "contact3@mail.com",
    "phone": "118",
    "registeredAt": "2024-02-04"
  }
]
```

| Response                 |
| ------------------------ |
| Body: application/json   |
| Status: 401 UNAUTHORIZED |

```json
{
  "message": "Missing bearer token."
}
```

<h3>PATCH /contacts/:id</h3>
Atualização de contato
(Apenas o usuário proprietário da conta pode executar alteração.)

| Request                |
| ---------------------- |
| Body: application/json |
| Auth: Bearer Token     |

```json
{
  "fullName": "osvaldo",
  "email": "osvaldo@mail.com",
  "phone": "1231218"
}
```

| Response               |
| ---------------------- |
| Body: application/json |
| Status: 200 OK         |

```json
{
  "id": "efefc789-1013-43f5-bfb5-a1b0b6c0931f",
  "fullName": "osvaldo",
  "email": "osvaldo@mail.com",
  "phone": "1231218",
  "registeredAt": "2024-02-04"
}
```

| Response                 |
| ------------------------ |
| Body: application/json   |
| Status : 400 BAD REQUEST |

```json
{
  "message": "There is contact with this email."
}
```

| Response                 |
| ------------------------ |
| Body: application/json   |
| Status: 401 UNAUTHORIZED |

```json
{
  "message": "Missing bearer token."
}
```

| Response               |
| ---------------------- |
| Body: application/json |
| Status: 404 NOT FOUND  |

```json
{
  "message": "User does not have this contact"
}
```

<h3>DELETE /contacts/:id</h3>
Rota de delelção de contatopelo id
(Apenas o usuário proprietário pode acessar.)

| Request            |
| ------------------ |
| Body: No content   |
| Auth: Bearer Token |

| Response               |
| ---------------------- |
| Body: application/json |
| Status: 204 NO CONTENT |

| Response                 |
| ------------------------ |
| Body: application/json   |
| Status: 401 UNAUTHORIZED |

```json
{
  "message": "Missing bearer token."
}
```

| Response               |
| ---------------------- |
| Body: application/json |
| Status: 404 NOT FOUND  |

```json
{
  "message": "User does not have this contact"
}
```
