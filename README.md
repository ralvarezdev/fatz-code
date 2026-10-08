# fatz-code

**Note:** This repository is archived and read-only.

Practice code and small projects written while following courses from the Fatz Code YouTube channel.

## Contents

- **`curso-de-prisma-orm/`** — Prisma ORM course (in Spanish): a Node.js ES modules project using `prisma` and `@prisma/client` (`^5.19.1`) with SQLite.
  - `prisma/schema.prisma` defines `User` (`id`, unique `email`, `name`, optional `lastName`, `posts`) and `Post` (`id`, `title`, optional `content`, `authorId`). The datasource reads `DATABASE_URL`.
  - One migration (`prisma/migrations/20240919013855_init`) and a sample database (`prisma/dev.db`) are committed.
  - `index.js` walks through the Prisma Client API: `createMany`, `create` (nested and `connect`), `findMany` with `include`, `findFirst`, `deleteMany`, `updateMany`, `update`, `upsert`.

## Running

```bash
cd curso-de-prisma-orm
npm install
export DATABASE_URL="file:./dev.db"   # example; path is relative to prisma/schema.prisma
npx prisma migrate dev
node index.js
```

## License

GNU General Public License v3.0. See [LICENSE](LICENSE).
