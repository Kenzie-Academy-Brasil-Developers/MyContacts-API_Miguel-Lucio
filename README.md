# Lista de Contatos

Api feita com Express e TypeORM, onde usuários podem criar e gerenciar seus contatos.

## Configuração do ambiente:

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

# Endpoints da aplicação:

### **/login**

| Método | Endpoint | Responsabilidade |
| ------ | -------- | ---------------- |
| POST   | /login   | Login de usuário |

### **/users**

| Método | Endpoint   | Responsabilidade                     |
| ------ | ---------- | ------------------------------------ |
| POST   | /users     | Cadastro de usuário                  |
| GET    | /users     | Listagem de usuários                 |
| GET    | /users/:id | Listagem de usuário passando o id    |
| PATCH  | /users/:id | Atualização de usuário passando o id |
| DELETE | /users/:id | Deleção de usuário passando o id     |

### **/contacts**

| Método | Endpoint      | Responsabilidade                     |
| ------ | ------------- | ------------------------------------ |
| POST   | /contacts     | Cadastro de contato                  |
| GET    | /contacts     | Listagem de contatos                 |
| PATCH  | /contacts/:id | Atualização de contato passando o id |
| DELETE | /contacts/:id | Deleção de contato passando o id     |
