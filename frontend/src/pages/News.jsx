import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, Rocket } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import ImageBlock from '../components/ImageBlock.jsx'
import { newsItems } from '../utils/content.js'

const categories = ['All', 'Impact Stories', 'Programme Updates', 'Media Coverage', 'Blog', 'Research']

export default function News() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return newsItems.filter((n) => {
      const matchCategory = category === 'All' || n.category === category
      const matchQuery = query === '' || n.title.toLowerCase().includes(query.toLowerCase()) || n.excerpt.toLowerCase().includes(query.toLowerCase())
      return matchCategory && matchQuery
    })
  }, [category, query])

  return (
    <div>
      <SEO title="News & Stories" description="Read the latest news, impact stories, programme updates and research from StritGRAD Academy." path="/news" />
      <PageHeader eyebrow="Stay Informed" title="News & Stories" description="Impact stories, programme updates, media coverage and research from across the StritGRAD community." />

      <section className="section">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-10">
          <div className="flex flex-wrap gap-3">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  category === c ? 'bg-navy text-gold' : 'bg-white text-navy hover:bg-navy-50 shadow-card'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-graytxt" size={18} />
            <input
              className="input pl-10"
              placeholder="Search articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((n) => (
            <Link to={`/news/${n.slug}`} key={n.slug} className="card overflow-hidden p-0 block group">
              <div className="h-48 bg-navy-50">
                {n.image ? (
                  <img src={n.image} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                ) : (
                  <ImageBlock icon={Rocket} tone="light" />
                )}
              </div>
              <div className="p-6">
                <p className="text-xs text-gold-700 font-semibold uppercase tracking-wide mb-2">{n.category}</p>
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-gold-700 transition">{n.title}</h3>
                <p className="text-graytxt text-sm mb-3 leading-relaxed">{n.excerpt}</p>
                <p className="text-xs text-graytxt/70">{new Date(n.date).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </Link>
          ))}
          {filtered.length === 0 && <p className="text-graytxt col-span-full text-center py-10">No articles match your search.</p>}
        </div>
      </section>
    </div>
  )
}
