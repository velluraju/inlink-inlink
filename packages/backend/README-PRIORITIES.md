Prisma migration notes:

1. Run locally to generate migration SQL:
   npx prisma migrate dev --name init --create-only
2. Review generated SQL in prisma/migrations
3. Apply locally with: npx prisma migrate dev
4. Seed with: node prisma/seed.js (or ts-node)

Notes:
- Use DATABASE_URL env var pointing to local Postgres in docker-compose during dev.
- For CI: use a disposable Postgres service and run migrations in workflow before tests.
