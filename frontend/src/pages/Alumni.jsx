import { Link } from 'react-router-dom'
import { Users, Award, Handshake, Globe, ArrowRight, UserPlus } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import ImageBlock from '../components/ImageBlock.jsx'
import { alumni, successStories, events } from '../utils/content.js'

export default function Alumni() {
  const featuredBusinesses = alumni.slice(0, 3)
  const networkingEvents = events.filter((e) => e.category === 'Networking')

  return (
    <div>
      <SEO title="Alumni Network" description="Connect with the StritGRAD Academy alumni network — showcasing graduate businesses, mentorship opportunities and success stories." path="/alumni" />
      <PageHeader eyebrow="Our Growing Community" title="The StritGRAD Alumni Network" description="Building a growing community of StritGRAD Academy and Market Solutions graduates across South Africa." />

      {/* Alumni Directory */}
      <section className="section">
        <h2 className="section-title">Alumni Directory</h2>
        <p className="section-subtitle">A snapshot of our growing alumni community.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {alumni.map((a) => (
            <div key={a.name} className="card text-center">
              <div className="rounded-full overflow-hidden w-24 h-24 mx-auto mb-4 bg-navy-50">
                {a.image ? (
                  <img src={a.image} alt={a.name} className="w-full h-full object-cover object-top" loading="lazy" />
                ) : (
                  <ImageBlock icon={Users} tone="navy" />
                )}
              </div>
              <h3 className="font-bold text-navy text-sm">{a.name}</h3>
              <p className="text-gold-700 text-xs font-medium mb-1">{a.business}</p>
              <p className="text-graytxt text-[11px]">Class of {a.year}</p>
            </div>
          ))}
          <Link to="/contact" className="card text-center border-2 border-dashed border-gray-300 flex flex-col items-center justify-center hover:border-gold transition">
            <div className="rounded-full w-24 h-24 mx-auto mb-4 border-2 border-dashed border-gray-300 flex items-center justify-center">
              <UserPlus className="text-gray-300" size={26} />
            </div>
            <h3 className="font-semibold text-graytxt text-sm">Are You a StritGRAD Alumnus?</h3>
            <p className="text-gold-700 text-xs font-medium">Get featured here →</p>
          </Link>
        </div>
      </section>

      {/* Business Showcase */}
      <section className="bg-white">
        <div className="section">
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3 flex items-center gap-2"><Award size={16} /> Business Showcase</p>
          <h2 className="section-title">Featured Alumni Businesses</h2>
          <p className="section-subtitle">Real businesses built by StritGRAD graduates — more coming soon as our alumni community grows.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredBusinesses.map((a) => (
              <div key={a.name} className="card p-0 overflow-hidden">
                <div className="h-44 bg-navy-50 flex items-center justify-center py-2">
                  {a.image ? (
                    <img src={a.image} alt={a.business} className="h-full w-auto max-w-[60%] object-contain rounded-md" loading="lazy" />
                  ) : (
                    <ImageBlock icon={Award} tone="gold" />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-navy">{a.business}</h3>
                  <p className="text-sm text-graytxt">Founded by {a.name} · Class of {a.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship */}
      <section className="section grid md:grid-cols-2 gap-8">
        <div className="card border-t-4 border-gold">
          <Handshake className="text-gold mb-4" size={28} />
          <h3 className="text-xl font-bold text-navy mb-3">Become a Mentor</h3>
          <p className="text-graytxt text-sm leading-relaxed mb-5">
            Experienced alumni and industry professionals can give back by mentoring current programme participants — sharing guidance, networks and lived experience with the next generation.
          </p>
          <Link to="/volunteer" className="btn-navy text-sm py-2.5">Apply to Mentor <ArrowRight size={16} /></Link>
        </div>
        <div className="card border-t-4 border-navy">
          <Users className="text-navy mb-4" size={28} />
          <h3 className="text-xl font-bold text-navy mb-3">Find a Mentor</h3>
          <p className="text-graytxt text-sm leading-relaxed mb-5">
            Current programme participants and recent graduates can request to be matched with an experienced mentor from our alumni and partner network.
          </p>
          <Link to="/contact?subject=Request%20a%20Mentor" className="btn-outline !border-navy !text-navy hover:!bg-navy hover:!text-white text-sm py-2.5">Request a Mentor <ArrowRight size={16} /></Link>
        </div>
      </section>

      {/* Networking */}
      <section className="bg-white">
        <div className="section">
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3 flex items-center gap-2"><Globe size={16} /> Stay Connected</p>
          <h2 className="section-title">Networking</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-navy mb-4">Upcoming Networking Events</h3>
              <div className="space-y-4">
                {networkingEvents.map((e) => (
                  <div key={e.id} className="card flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-navy text-gold flex flex-col items-center justify-center shrink-0 font-bold">
                      <span>{new Date(e.date).getDate()}</span>
                      <span className="text-[10px]">{new Date(e.date).toLocaleDateString('en-ZA', { month: 'short' })}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-navy text-sm">{e.title}</p>
                      <p className="text-xs text-graytxt">{e.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card">
              <h3 className="font-bold text-navy mb-3">Join the Online Community</h3>
              <p className="text-graytxt text-sm leading-relaxed mb-5">
                Connect with fellow alumni, share opportunities and get support anytime through our online community platforms.
              </p>
              <div className="flex flex-col gap-3">
                <Link to="/contact?subject=Join%20the%20Alumni%20Community" className="btn-outline !border-navy !text-navy hover:!bg-navy hover:!text-white text-sm py-2.5 justify-start">Request to Join the Alumni Community</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="section">
        <h2 className="section-title">Featured Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((s) => (
            <div key={s.name} className="card overflow-hidden p-0">
              <div className="h-48 bg-navy-50">
                {s.image ? (
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                  <ImageBlock icon={Users} tone="light" />
                )}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-navy">{s.name}</h3>
                <p className="text-gold-700 text-sm font-semibold mb-3">{s.business}</p>
                <p className="text-graytxt text-sm leading-relaxed">{s.story}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
