import pg from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const { Pool } = pg

if (!process.env.DATABASE_URL) {
  console.warn('[db] DATABASE_URL is not set. Set it to your Postgres connection string (Vercel Postgres, Neon, or Supabase all work).')
}

// Vercel Postgres / Neon / Supabase all require SSL in production.
// `rejectUnauthorized: false` is the standard setting these managed providers document.
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL && !process.env.DATABASE_URL.includes('localhost')
    ? { rejectUnauthorized: false }
    : false
})

export default pool
