import { Router } from 'express'
import { pool } from '../db/pool.js'
import { asyncHandler } from '../utils/asyncHandler.js'

const router = Router()

router.get('/news', asyncHandler(async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM news ORDER BY date DESC, id DESC')
  res.json({ items: rows })
}))

router.get('/events', asyncHandler(async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM events ORDER BY date ASC, id ASC')
  res.json({ items: rows })
}))

router.get('/resources', asyncHandler(async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM resources ORDER BY id DESC')
  res.json({ items: rows })
}))

router.get('/programmes', asyncHandler(async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM programmes ORDER BY id ASC')
  res.json({ items: rows })
}))

export default router
