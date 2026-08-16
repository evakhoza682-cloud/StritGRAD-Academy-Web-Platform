import { useState } from 'react'
import { X, Video } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { galleryCategories, galleryPhotos } from '../utils/content.js'

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const filtered = filter === 'All' ? galleryPhotos : galleryPhotos.filter((p) => p.category === filter)

  return (
    <div>
      <SEO title="Gallery" description="Browse photos and videos from StritGRAD Academy's graduations, workshops, entrepreneurship tours, events and community engagement." path="/gallery" />
      <PageHeader eyebrow="See Our Impact" title="Photo & Video Gallery" description="Moments from graduations, workshops, tours, competitions and community engagement across the country." />

      <section className="section">
        <h2 className="section-title">Photo Gallery</h2>
        <div className="flex flex-wrap gap-3 mb-10">
          {['All', ...galleryCategories].map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                filter === c ? 'bg-navy text-gold' : 'bg-white text-navy hover:bg-navy-50 shadow-card'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filtered.map((p) => (
            <button
              key={p.id}
              onClick={() => setLightbox(p)}
              className="aspect-square rounded-lg overflow-hidden group relative bg-navy-50"
            >
              <img src={p.src} alt={p.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition flex items-end p-3 opacity-0 group-hover:opacity-100">
                <span className="text-white text-xs font-semibold">{p.caption}</span>
              </div>
            </button>
          ))}
          {filtered.length === 0 && <p className="text-graytxt col-span-full text-center py-10">No photos in this category yet.</p>}
        </div>
      </section>

      <section className="bg-white">
        <div className="section">
          <h2 className="section-title">Video Gallery</h2>
          <p className="section-subtitle">Testimonials and programme highlights, coming soon.</p>
          <div className="border-2 border-dashed border-gray-300 rounded-xl py-16 text-center">
            <Video className="text-gray-300 mx-auto mb-4" size={40} />
            <p className="text-graytxt font-medium mb-1">Video content is on its way</p>
            <p className="text-graytxt/70 text-sm max-w-md mx-auto">
              Once testimonial and event videos are ready, they'll embed here automatically —
              this section is wired up and ready to go via the admin panel.
            </p>
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 bg-navy-950/95 z-[100] flex items-center justify-center p-6" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white" onClick={() => setLightbox(null)} aria-label="Close">
            <X size={32} />
          </button>
          <div className="max-w-3xl w-full max-h-[85vh] rounded-xl overflow-hidden flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.caption} className="max-h-[75vh] object-contain rounded-xl" />
            <p className="text-white/80 text-sm mt-4">{lightbox.caption}</p>
          </div>
        </div>
      )}
    </div>
  )
}
