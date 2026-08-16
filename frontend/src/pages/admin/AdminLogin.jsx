import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lock } from 'lucide-react'
import api from '../../utils/api.js'
import FormAlert from '../../components/FormAlert.jsx'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })
    try {
      const res = await api.post('/api/admin/login', { email, password })
      localStorage.setItem('sg_admin_token', res.data.token)
      navigate('/admin/dashboard')
    } catch {
      setStatus({ type: 'error', message: 'Invalid credentials. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-6">
      <div className="bg-white rounded-xl shadow-cardHover p-10 w-full max-w-md">
        <div className="flex items-center gap-2.5 mb-8 justify-center">
          <img src="/images/logo/stritgrad-logo.png" alt="StritGRAD Academy logo" className="w-11 h-11 object-contain" />
          <p className="font-extrabold text-navy text-lg">StritGRAD Admin</p>
        </div>
        <form onSubmit={submit}>
          <FormAlert type={status.type} message={status.message} />
          <label className="label">Email</label>
          <input type="email" required className="input mb-4" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@stritgradacademy.org.za" />
          <label className="label">Password</label>
          <input type="password" required className="input mb-6" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
          <button type="submit" disabled={loading} className="btn-navy w-full disabled:opacity-60">
            <Lock size={16} /> {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <p className="text-xs text-graytxt text-center mt-6">Demo credentials: admin@stritgradacademy.org.za / admin123</p>
      </div>
    </div>
  )
}
