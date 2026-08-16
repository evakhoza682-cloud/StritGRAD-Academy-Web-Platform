import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOut, Newspaper, Calendar, FileText, Layers, Plus, Trash2, RefreshCw, Inbox } from 'lucide-react'
import api from '../../utils/api.js'

const tabs = [
  { id: 'news', label: 'News', icon: Newspaper },
  { id: 'events', label: 'Events', icon: Calendar },
  { id: 'resources', label: 'Resources', icon: FileText },
  { id: 'programmes', label: 'Programmes', icon: Layers },
  { id: 'submissions', label: 'Form Submissions', icon: Inbox }
]

const emptyItem = { news: { title: '', category: '', excerpt: '', date: '' }, events: { title: '', category: '', location: '', date: '' }, resources: { title: '', category: '', description: '' }, programmes: { title: '', audience: '', short: '' } }

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('news')
  const [items, setItems] = useState([])
  const [form, setForm] = useState(emptyItem.news)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('sg_admin_token')
    if (!token) navigate('/admin')
  }, [navigate])

  const load = async (t = tab) => {
    setLoading(true)
    try {
      const res = await api.get(`/api/admin/${t}`, { headers: authHeader() })
      setItems(res.data.items || [])
    } catch {
      setItems([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (tab !== 'submissions') setForm(emptyItem[tab] || {})
    load(tab)
    // eslint-disable-next-line
  }, [tab])

  const authHeader = () => ({ Authorization: `Bearer ${localStorage.getItem('sg_admin_token')}` })

  const createItem = async (e) => {
    e.preventDefault()
    try {
      await api.post(`/api/admin/${tab}`, form, { headers: authHeader() })
      setForm(emptyItem[tab] || {})
      load()
    } catch {
      alert('Failed to save. Please check the backend is running.')
    }
  }

  const deleteItem = async (id) => {
    if (!confirm('Delete this item?')) return
    try {
      await api.delete(`/api/admin/${tab}/${id}`, { headers: authHeader() })
      load()
    } catch {
      alert('Failed to delete.')
    }
  }

  const logout = () => {
    localStorage.removeItem('sg_admin_token')
    navigate('/admin')
  }

  return (
    <div className="min-h-screen bg-offwhite flex">
      <aside className="w-64 bg-navy text-white flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-2.5 border-b border-white/10">
          <img src="/images/logo/stritgrad-logo.png" alt="StritGRAD Academy logo" className="w-10 h-10 object-contain" />
          <p className="font-extrabold">Admin Panel</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition ${
                tab === t.id ? 'bg-gold text-navy' : 'hover:bg-white/10 text-white/90'
              }`}
            >
              <t.icon size={18} /> {t.label}
            </button>
          ))}
        </nav>
        <button onClick={logout} className="m-4 flex items-center gap-2 px-4 py-3 rounded-md bg-white/10 hover:bg-white/20 text-sm font-medium">
          <LogOut size={16} /> Log Out
        </button>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-extrabold text-navy capitalize">Manage {tab}</h1>
          <button onClick={() => load()} className="flex items-center gap-2 text-sm text-navy font-semibold hover:text-gold-700">
            <RefreshCw size={16} /> Refresh
          </button>
        </div>

        {tab !== 'submissions' && (
          <form onSubmit={createItem} className="bg-white rounded-xl shadow-card p-6 mb-8 grid sm:grid-cols-2 gap-4">
            {Object.keys(emptyItem[tab]).map((key) => (
              <div key={key}>
                <label className="label capitalize">{key}</label>
                <input
                  className="input"
                  value={form[key] || ''}
                  onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                />
              </div>
            ))}
            <div className="sm:col-span-2">
              <button type="submit" className="btn-primary">
                <Plus size={16} /> Add {tab.slice(0, -1)}
              </button>
            </div>
          </form>
        )}

        <div className="bg-white rounded-xl shadow-card overflow-hidden">
          {loading ? (
            <p className="p-8 text-graytxt text-sm">Loading...</p>
          ) : items.length === 0 ? (
            <p className="p-8 text-graytxt text-sm">
              No items yet — {tab === 'submissions' ? 'form submissions will appear here once the backend is connected and forms are used.' : `add your first ${tab.slice(0, -1)} above.`}
            </p>
          ) : (
            <table className="w-full text-sm">
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100 last:border-0">
                    <td className="p-4 text-graytxt whitespace-pre-wrap">{JSON.stringify(item, null, 0)}</td>
                    <td className="p-4 text-right">
                      <button onClick={() => deleteItem(item.id)} className="text-red-500 hover:text-red-700">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  )
}
