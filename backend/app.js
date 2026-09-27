import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'
import publicRoutes from './routes/public.js'
import contentRoutes from './routes/content.js'
import adminRoutes from './routes/admin.js'

dotenv.config()

const app = express()

// --- CORS ---
const allowedOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((o) => o.trim())

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true)
      callback(new Error('Not allowed by CORS'))
    },
    credentials: true
  })
)

app.use(express.json({ limit: '1mb' }))

// --- Rate limiting for form submission endpoints (basic abuse protection) ---
// Note: on serverless, rate-limit state resets per cold start / is per-instance,
// not globally shared. For strict production rate limiting at scale, front the
// API with Vercel's own rate limiting or a shared store (e.g. Upstash Redis).
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please try again later.' }
})
app.use('/api', formLimiter)

// --- Health check ---
app.get('/health', (req, res) => res.json({ status: 'ok', service: 'stritgrad-academy-backend' }))
app.get('/', (req, res) => res.json({ status: 'ok', message: 'StritGRAD Academy API is running.' }))
app.get('/debug-db', (req, res) => { const raw = process.env.DATABASE_URL || ''; try { const parsed = new URL(raw); res.json({ hasValue: !!raw, length: raw.length, protocol: parsed.protocol, hostname: parsed.hostname, port: parsed.port, pathname: parsed.pathname }); } catch (e) { res.json({ hasValue: !!raw, length: raw.length, firstChars: raw.slice(0, 20), lastChars: raw.slice(-20), parseError: e.message }); } });

// --- Routes ---
app.use('/api', publicRoutes)
app.use('/api', contentRoutes)
app.use('/api/admin', adminRoutes)

// --- 404 handler ---
app.use((req, res) => {
  res.status(404).json({ error: 'Not found.' })
})

// --- Error handler ---
app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).json({ error: err.message || 'Internal server error.' })
})

export default app
