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
    if (!emailValid(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setStatus('loading')
    try {
      await api.post('/api/newsletter', { email })
      setStatus('success')
      setEmail('')
    } catch (err) {
      setStatus('error')
      setError('Something went wrong. Please try again.')
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
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
      <input
        type="email"
        required
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
      {error && <p className="text-red-400 text-xs mt-1 sm:hidden">{error}</p>}
      {error && <p className="hidden sm:block text-red-400 text-xs absolute mt-12">{error}</p>}
    </form>
  )
}
