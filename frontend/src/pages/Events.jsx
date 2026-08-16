import { useState } from 'react'
import { Calendar, MapPin, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import ImageBlock from '../components/ImageBlock.jsx'
import { events, pastEvents } from '../utils/content.js'

const categories = ['All', 'Entrepreneurship Tour', 'Masterclasses', 'Workshops', 'Conferences', 'Bootcamps', 'Networking']

export default function Events() {
  const [category, setCategory] = useState('All')
  const filtered = category === 'All' ? events : events.filter((e) => e.category === category)

  return (
    <div>
      <SEO title="Events" description="Discover upcoming StritGRAD Academy events including entrepreneurship tours, masterclasses, workshops, conferences and bootcamps." path="/events" />
      <PageHeader eyebrow="What's On" title="Events & Experiences" description="From national tours to intimate masterclasses — find an event near you and register today." />

      {/* Categories */}
      <section className="section pb-0">
        <div className="flex flex-wrap gap-3 mb-12">
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

        {/* Upcoming events list */}
        <h2 className="section-title">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {filtered.map((e) => (
            <div key={e.id} className="card flex flex-col sm:flex-row gap-5">
              <div className="w-full sm:w-32 shrink-0 rounded-lg overflow-hidden h-32">
                <ImageBlock icon={Calendar} tone="navy" />
              </div>
              <div className="flex-1">
                <span className="inline-block bg-gold-50 text-gold-700 text-[11px] font-semibold px-2.5 py-1 rounded-full mb-2">{e.category}</span>
                <h3 className="font-bold text-navy text-lg mb-2">{e.title}</h3>
                <p className="text-sm text-graytxt flex items-center gap-1.5 mb-1">
                  <Calendar size={14} className="text-gold" />
                  {new Date(e.date).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="text-sm text-graytxt flex items-center gap-1.5 mb-3">
                  <MapPin size={14} className="text-gold" /> {e.location}
                </p>
                <p className="text-sm text-graytxt leading-relaxed mb-4">{e.description}</p>
                <a href="/contact" className="btn-primary py-2 px-4 text-sm">
                  Register Now <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <p className="text-graytxt">No events found in this category right now — check back soon.</p>}
        </div>
      </section>

      {/* Calendar list view */}
      <section className="bg-white">
        <div className="section">
          <h2 className="section-title">Event Calendar</h2>
          <p className="section-subtitle">A chronological view of everything coming up.</p>
          <div className="divide-y divide-gray-200 rounded-xl overflow-hidden shadow-card bg-offwhite">
            {[...events].sort((a, b) => new Date(a.date) - new Date(b.date)).map((e) => (
              <div key={e.id} className="flex items-center gap-5 p-5 hover:bg-white transition">
                <div className="w-16 h-16 rounded-lg bg-navy text-white flex flex-col items-center justify-center shrink-0">
                  <span className="text-gold font-extrabold text-lg leading-none">{new Date(e.date).getDate()}</span>
                  <span className="text-[10px] uppercase tracking-wide">{new Date(e.date).toLocaleDateString('en-ZA', { month: 'short' })}</span>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-navy">{e.title}</p>
                  <p className="text-xs text-graytxt">{e.location} · {e.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past events */}
      <section className="section">
        <h2 className="section-title">Past Events</h2>
        <p className="section-subtitle">A look back at recent StritGRAD Academy events and their impact.</p>
        <div className="grid md:grid-cols-3 gap-8">
          {pastEvents.map((e) => (
            <div key={e.title} className="card p-0 overflow-hidden">
              <div className="h-44 bg-navy-50">
                {e.image ? (
                  <img src={e.image} alt={e.title} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                  <ImageBlock icon={Calendar} tone="light" />
                )}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-navy mb-1">{e.title}</h3>
                <p className="text-xs text-graytxt mb-3">{e.location} · {new Date(e.date).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long' })}</p>
                <p className="text-sm text-graytxt leading-relaxed">{e.recap}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
