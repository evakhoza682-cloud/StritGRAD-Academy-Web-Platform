import { Router } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { body, validationResult } from 'express-validator'
import { pool } from '../db/pool.js'
import { requireAdmin } from '../middleware/auth.js'
import { asyncHandler } from '../utils/asyncHandler.js'

const router = Router()

const tables = {
  news: { columns: ['title', 'category', 'excerpt', 'date'] },
  events: { columns: ['title', 'category', 'location', 'date'] },
  resources: { columns: ['title', 'category', 'description'] },
  programmes: { columns: ['title', 'audience', 'short'] }
}

// --- Login ---
router.post('/login', [
  body('email').isEmail(),
  body('password').notEmpty()
], asyncHandler(async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({ error: 'Email and password are required.' })

  const { email, password } = req.body
  const { rows } = await pool.query('SELECT * FROM admins WHERE email = $1', [email])
  const admin = rows[0]
  if (!admin || !bcrypt.compareSync(password, admin.password_hash)) {
    return res.status(401).json({ error: 'Invalid email or password.' })
  }
  const token = jwt.sign({ id: admin.id, email: admin.email }, process.env.JWT_SECRET || 'dev_secret', {
    expiresIn: process.env.JWT_EXPIRES_IN || '8h'
  })
  res.json({ token })
}))

// --- Generic CRUD for content tables ---
Object.keys(tables).forEach((table) => {
  const { columns } = tables[table]

  router.get(`/${table}`, requireAdmin, asyncHandler(async (req, res) => {
    const { rows } = await pool.query(`SELECT * FROM ${table} ORDER BY id DESC`)
    res.json({ items: rows })
  }))

  router.post(`/${table}`, requireAdmin, asyncHandler(async (req, res) => {
    const values = columns.map((c) => req.body[c] ?? '')
    const placeholders = columns.map((_, i) => `$${i + 1}`).join(', ')
    const { rows } = await pool.query(
      `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders}) RETURNING id`,
      values
    )
    res.status(201).json({ id: rows[0].id })
  }))

  router.put(`/${table}/:id`, requireAdmin, asyncHandler(async (req, res) => {
    const setClause = columns.map((c, i) => `${c} = $${i + 1}`).join(', ')
    const values = columns.map((c) => req.body[c] ?? '')
    await pool.query(`UPDATE ${table} SET ${setClause} WHERE id = $${columns.length + 1}`, [...values, req.params.id])
    res.json({ updated: true })
  }))

  router.delete(`/${table}/:id`, requireAdmin, asyncHandler(async (req, res) => {
    await pool.query(`DELETE FROM ${table} WHERE id = $1`, [req.params.id])
    res.json({ deleted: true })
  }))
})

// --- Form submissions viewer ---
router.get('/submissions', requireAdmin, asyncHandler(async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM submissions ORDER BY id DESC LIMIT 200')
  const items = rows.map((r) => ({ id: r.id, form_type: r.form_type, ...r.payload, created_at: r.created_at }))
  res.json({ items })
}))

export default router
