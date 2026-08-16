// Run this once against your production database before (or right after) your
// first deploy: `npm run migrate`
//
// Serverless functions are stateless and can cold-start many times concurrently,
// so running "CREATE TABLE" logic on every request (like the old SQLite setup did)
// is unsafe and wasteful. Instead, schema setup and admin bootstrap happen here,
// once, as a deliberate step you control.
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import { pool } from './pool.js'

dotenv.config()

async function migrate() {
  console.log('[migrate] Connecting to database...')

  await pool.query(`
    CREATE TABLE IF NOT EXISTS admins (
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS news (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      category TEXT,
      excerpt TEXT,
      body TEXT,
      date TEXT,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      category TEXT,
      location TEXT,
      date TEXT,
      description TEXT,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS resources (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      category TEXT,
      description TEXT,
      file_url TEXT,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS programmes (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      audience TEXT,
      short TEXT,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      created_at TIMESTAMPTZ DEFAULT now()
    );

    CREATE TABLE IF NOT EXISTS submissions (
      id SERIAL PRIMARY KEY,
      form_type TEXT NOT NULL,
      payload JSONB NOT NULL,
      created_at TIMESTAMPTZ DEFAULT now()
    );
  `)
  console.log('[migrate] Schema created/verified.')

  const adminEmail = process.env.ADMIN_EMAIL || 'admin@stritgradacademy.org.za'
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'

  const existing = await pool.query('SELECT id FROM admins WHERE email = $1', [adminEmail])
  if (existing.rows.length === 0) {
    const hash = bcrypt.hashSync(adminPassword, 10)
    await pool.query('INSERT INTO admins (email, password_hash) VALUES ($1, $2)', [adminEmail, hash])
    console.log(`[migrate] Bootstrapped admin account: ${adminEmail}`)
  } else {
    console.log(`[migrate] Admin account already exists: ${adminEmail}`)
  }

  console.log('[migrate] Done.')
  await pool.end()
}

migrate().catch((err) => {
  console.error('[migrate] Failed:', err)
  process.exit(1)
})
