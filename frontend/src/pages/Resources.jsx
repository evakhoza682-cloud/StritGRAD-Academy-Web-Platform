import { useState } from 'react'
import { Download, FileText, Star } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { resources, resourceCategories } from '../utils/content.js'

export default function Resources() {
  const [category, setCategory] = useState('All')
  const filtered = category === 'All' ? resources : resources.filter((r) => r.category === category)
  const featured = resources

  return (
    <div>
      <SEO title="Resource Centre" description="Free business templates, pitch deck templates, funding guides and financial literacy resources from StritGRAD Academy." path="/resources" />
      <PageHeader eyebrow="Free & Open" title="Resource Centre" description="Practical tools, templates and guides to support your entrepreneurial journey — free to download." />

      {/* Featured */}
      <section className="section pb-0">
        <div className="flex items-center gap-2 mb-8">
          <Star className="text-gold" size={20} fill="#c9a84c" />
          <h2 className="text-2xl font-extrabold text-navy">Featured Resources</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {featured.map((r) => (
            <div key={r.id} className="card border-2 border-gold/40">
              <FileText className="text-gold mb-4" size={28} />
              <span className="text-[11px] font-semibold text-navy/60 uppercase tracking-wide">{r.category}</span>
              <h3 className="font-bold text-navy text-lg mt-1 mb-2">{r.title}</h3>
              <p className="text-sm text-graytxt leading-relaxed mb-5">{r.description}</p>
              <a href={r.file} download className="btn-navy w-full text-sm py-2.5">
                <Download size={16} /> Download
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Filter + grid */}
      <section className="bg-white">
        <div className="section">
          <h2 className="section-title">All Resources</h2>
          <div className="flex flex-wrap gap-3 mb-10">
            {resourceCategories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                  category === c ? 'bg-navy text-gold' : 'bg-offwhite text-navy hover:bg-navy-50'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r) => (
              <div key={r.id} className="card flex flex-col">
                <FileText className="text-navy mb-3" size={24} />
                <span className="text-[11px] font-semibold text-gold-700 uppercase tracking-wide">{r.category}</span>
                <h3 className="font-bold text-navy mt-1 mb-2">{r.title}</h3>
                <p className="text-sm text-graytxt leading-relaxed mb-5 flex-1">{r.description}</p>
                <a href={r.file} download className="btn-outline !border-navy !text-navy hover:!bg-navy hover:!text-white w-full text-sm py-2.5">
                  <Download size={16} /> Download
                </a>
              </div>
            ))}
            {filtered.length === 0 && <p className="text-graytxt col-span-full">No resources found in this category.</p>}
          </div>
        </div>
      </section>
    </div>
  )
}
