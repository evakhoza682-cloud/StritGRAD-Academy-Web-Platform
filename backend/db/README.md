# Database

This backend uses **PostgreSQL** via the `pg` package — required for deployment as
Vercel serverless functions, since serverless functions have no persistent local disk
(the SQLite file approach used in earlier versions of this project would lose data
between invocations).

## Provisioning a database

Any of these work — pick whichever is easiest to wire into your Vercel project:

- **Vercel Postgres** (via Neon under the hood) — provision directly from your Vercel
  project dashboard under **Storage → Create Database → Postgres**. Vercel
  automatically injects `DATABASE_URL` into your project's environment variables.
- **Neon** (https://neon.tech) — free tier, works great with serverless (connection
  pooling built in). Copy the connection string into `DATABASE_URL`.
- **Supabase** (https://supabase.com) — free tier, also Postgres-based.

## Running the schema migration

Before your first deploy (or right after), run the migration script once against your
production database:

```bash
cd backend
DATABASE_URL="postgres://..." npm run migrate
```

This creates all required tables (`news`, `events`, `resources`, `programmes`,
`newsletter_subscribers`, `submissions`, `admins`) and bootstraps the admin account
from `ADMIN_EMAIL` / `ADMIN_PASSWORD`. It's safe to re-run — it only creates tables
that don't already exist and won't duplicate the admin account.

Local development works the same way against a local or remote Postgres instance —
just set `DATABASE_URL` in `backend/.env` and run `npm run migrate` once, then
`npm run dev` as usual.
