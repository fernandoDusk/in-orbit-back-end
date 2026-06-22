# in.orbit — Back-end

Aplicação para cadastro e acompanhamento de metas a serem concluídas durante a semana. Este repositório contém a **API** do projeto **in.orbit**, desenvolvido durante o NLW Pocket: Javascript da Rocketseat.

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.dev/) — framework web
- [Drizzle ORM](https://orm.drizzle.team/) — ORM e migrations
- [PostgreSQL](https://www.postgresql.org/) — banco de dados
- [Docker](https://www.docker.com/) / Docker Compose — ambiente do banco de dados
- [Zod](https://zod.dev/) — validação de dados

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18+)
- [Docker](https://www.docker.com/)
- Um gerenciador de pacotes: `npm`, `yarn` ou `pnpm`

## ⚙️ Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/fernandoDusk/in-orbit-back-end.git
cd in.orbit/backend
npm install
```

## 🔑 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://docker:docker@localhost:5432/in-orbit"
```

## 🐳 Subindo o banco de dados (Docker)

O banco de dados PostgreSQL é executado via Docker Compose:

```bash
docker compose up -d
```

## 🗃️ Migrations

Após o banco estar no ar, execute as migrations com o Drizzle ORM:

```bash
npx drizzle-kit migrate
```

Para gerar uma nova migration a partir do schema:

```bash
npx drizzle-kit generate
```

Para visualizar os dados pelo Drizzle Studio:

```bash
npx drizzle-kit studio
```

## ▶️ Executando o projeto

Modo de desenvolvimento (com hot reload):

```bash
npm run dev
```

A API ficará disponível em:

```
http://localhost:3333
```

## 🧪 Testes

No projeto utilizei Postman para os testes


## 📌 Funcionalidades da API

- Criar uma meta (goal)
- Listar metas pendentes na semana
- Marcar uma meta como concluída
- Cancelar a conclusão de uma meta
- Obter o resumo (summary) semanal de metas concluídas e pendentes

## 📄 Licença

Este projeto está sob a licença MIT.

---
