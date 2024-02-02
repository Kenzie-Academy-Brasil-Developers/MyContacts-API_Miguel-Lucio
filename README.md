# Lista de Contatos

Api feita com Express e TypeORM, onde usuários podem criar e gerenciar seus contatos.

# Endpoints da aplicação:

| Método | Endpoint      | Responsabilidade                     |
| ------ | ------------- | ------------------------------------ |
| POST   | /login        | Login de usuário                     |
| ------ | ----------    | ---------------------------------    |
| POST   | /users        | Cadastro de usuário                  |
| GET    | /users        | Listagem de usuários                 |
| GET    | /users/:id    | Listagem de usuário passando o id    |
| PATCH  | /users/:id    | Atualização de usuário passando o id |
| DELETE | /users/:id    | Deleção de usuário passando o id     |
| ------ | ----------    | ---------------------------------    |
| POST   | /contacts     | Cadastro de contato                  |
| GET    | /contacts     | Listagem de contatos                 |
| PATCH  | /contacts/:id | Atualização de contato passando o id |
| DELETE | /contacts/:id | Deleção de contato passando o id     |
