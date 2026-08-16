// Local development entry point only.
// In production this app runs as a Vercel serverless function via api/index.js —
// see that file and vercel.json. This file is never used by Vercel.
import app from './app.js'

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`StritGRAD Academy backend running locally on port ${PORT}`)
  console.log('(This file is for local development only — production uses api/index.js on Vercel.)')
})
