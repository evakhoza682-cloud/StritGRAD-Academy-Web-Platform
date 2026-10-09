import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import api from '../utils/api.js'

export default function NewsletterForm({ compact = false }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [error, setError] = useState('')

  const emailValid = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const clean = email.trim()
    if (!emailValid(clean)) {
      setError('Please enter a valid email address.')
      return
    }
    setStatus('loading')
    try {
      await api.post('/api/newsletter', { email: clean })
      setStatus('success')
      setEmail('')
    } catch (err) {
      setStatus('error')
      const serverMsg = err?.response?.data?.error || err?.response?.data?.message
      setError(err?.response
        ? (serverMsg || 'Something went wrong. Please try again.')
        : 'Could not reach the server. Please check your connection and try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className={`flex items-center gap-2 ${compact ? 'text-sm text-gold' : 'text-navy bg-gold-50 rounded-md p-4'}`}>
        <CheckCircle2 size={18} /> Thanks for subscribing — welcome to the StritGRAD community!
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col sm:flex-row gap-3 w-full">
      <input
        type="email"
        aria-label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className={compact
          ? 'flex-1 px-4 py-2.5 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-gold'
          : 'input flex-1'}
      />
      <button type="submit" disabled={status === 'loading'} className="btn-primary shrink-0 disabled:opacity-60">
        <Send size={16} /> {status === 'loading' ? 'Sending...' : 'Subscribe'}
      </button>
      {error && <p role="alert" className="text-red-400 text-xs sm:basis-full">{error}</p>}
    </form>
  )
}
