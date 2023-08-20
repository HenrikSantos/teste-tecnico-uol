# Teste Fullstack: Aplicativo de Gerenciamento de Clientes

## Descrição

Este é um desafio de desenvolvimento fullstack para a vaga de Pessoa Desenvolvedora [uol](https://www.linkedin.com/company/uol/), envolve a criação de um aplicativo para gerenciamento de clientes.

O projeto é composto por duas partes principais: o frontend e o backend.

O frontend é responsável pela interface do usuário e interação com a API fornecida pelo backend. O backend lida com o armazenamento e gerenciamento dos dados dos clientes.

## Frontend
- Exibir listagem de clientes com informações de acordo com o layout fornecido.
- Permitir a criação de novos clientes através de um formulário.
- Fornecer alertas de validação ao editar dados inválidos.
- Realizar validação de CPF e telefone durante a edição.
- Comunicar-se com a API para obter dados dos clientes.

### Tecnologias

- Next.js;
- Tailwind CSS;
- Cypress (para testes automatizados e2e);

## Backend

O backend oferece os seguintes endpoints para interação com os dados dos clientes:
- `GET /customer`: Obter a lista de clientes cadastrados.
- `GET /customer/:id`: Obter informações de um cliente específico.
- `POST /customer`: Cadastrar um novo cliente com informações válidas.
- `PUT /customer/:id`: Atualizar informações de um cliente existente.

### Tecnologias

- Fastify;
- Sequelize (ORM);
- SQLite (banco de dados);
