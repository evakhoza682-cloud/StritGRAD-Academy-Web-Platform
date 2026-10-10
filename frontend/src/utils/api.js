import axios from 'axios'

const LIVE_BACKEND = 'https://strit-grad-academy-web-platform.vercel.app'
const baseURL = (import.meta.env.VITE_API_URL || (import.meta.env.DEV ? '' : LIVE_BACKEND)).replace(/\/+$/, '')

const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 20000
})

export default api
