# Hero API 🦸

API REST para gerenciamento de heróis, construída com NestJS.

## Tecnologias

- NestJS
- TypeScript
- TypeORM (ou Prisma)
- PostgreSQL / MySQL / SQLite

## Instalação

```bash
# Clonar o repositório
git clone <url-do-repositorio>

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env

# Rodar a aplicação
npm run start:dev
```

A API estará disponível em `http://localhost:3000`

## Endpoints

### Criar Herói

```http
POST /hero
```

**Body:**

```json
{
  "civilName": "Bruce Wayne",
  "heroName": "Batman",
  "age": 38,
  "team": "Liga da Justiça"
}
```

**Resposta (201 Created):**

```json
{
  "id": 1,
  "civilName": "Bruce Wayne",
  "heroName": "Batman",
  "age": 38,
  "team": "Liga da Justiça"
}
```

### Listar Heróis

```http
GET /hero
```

**Resposta (200 OK):**

```json
[
  {
    "id": 1,
    "civilName": "Bruce Wayne",
    "heroName": "Batman",
    "age": 38,
    "team": "Liga da Justiça"
  }
]
```

### Buscar Herói por ID

```http
GET /hero/:id
```

**Resposta (200 OK):**

```json
{
  "id": 1,
  "civilName": "Bruce Wayne",
  "heroName": "Batman",
  "age": 38,
  "team": "Liga da Justiça"
}
```

### Atualizar Herói

```http
PUT /hero/:id
```

**Body:**

```json
{
  "age": 39
}
```

### Deletar Herói

```http
DELETE /hero/:id
```

**Resposta (200 OK)**

## Estrutura do Projeto

```
src/
├── hero/
│   ├── dto/
│   │   ├── create-hero.dto.ts
│   │   └── update-hero.dto.ts
│   ├── entities/
│   │   └── hero.entity.ts
│   ├── hero.controller.ts
│   ├── hero.service.ts
│   └── hero.module.ts
├── app.module.ts
└── main.ts
```

## Autor

Juan Vicente

## Licença

MIT
