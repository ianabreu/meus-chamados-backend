# Meus Chamados - Backend

![Node.js](https://img.shields.io/badge/Node.js-18.x-green) ![Express](https://img.shields.io/badge/Express-4.x-blue) ![Prisma](https://img.shields.io/badge/Prisma-5.x-purple) ![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen)

API desenvolvida para gerenciar chamados de suporte, permitindo a criação, edição, exclusão e listagem de chamados e clientes.

## 📌 Principais Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express.js** - Framework para criação de APIs
- **Prisma ORM** - Gerenciamento do banco de dados
- **MongoDB** - Banco de dados NoSQL

## 🚀 Como Executar

### 1. Clonar o Repositório

```sh
git clone https://github.com/ianabreu/meus-chamados-backend.git
cd meus-chamados-backend
```

### 2. Instalar Dependências

```sh
npm install
```

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione as variáveis conforme necessário:

```env
CLIENT_ID=SEU_CLIENT_ID_IMGUR
PORT=3333
DATABASE_URL=
SECRET_JWT=
```

### 4. Rodar as Migrações (Prisma)

```sh
npx prisma db push
```

### 5. Iniciar o Servidor

```sh
npm run dev
```

A API estará disponível em `http://localhost:3333`

## 📖 Documentação

A documentação completa da API pode ser acessada através do Postman:
[Documentação da API](https://documenter.getpostman.com/view/37427895/2sAYX6ngQn)

## 🛠 Funcionalidades

✅ Autenticação de usuários com JWT
✅ Criar chamados  
✅ Listar chamados com paginação  
✅ Atualizar informações do chamado  
✅ Criar clientes  
✅ Listar clientes com paginação

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e contribuir!

---

📌 **Repositório:** [GitHub](https://github.com/ianabreu/meus-chamados-backend)
