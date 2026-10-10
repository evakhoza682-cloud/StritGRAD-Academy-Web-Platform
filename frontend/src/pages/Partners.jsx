import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Handshake, TrendingUp, Award, Megaphone, Users2, Send, Building2 } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import FormAlert from '../components/FormAlert.jsx'
import PartnerLogo from '../components/PartnerLogo.jsx'
import { partners, programmes } from '../utils/content.js'
import api from '../utils/api.js'

const benefits = [
  { icon: TrendingUp, title: 'Measurable Impact', desc: 'Detailed, data-driven impact reporting aligned to your CSR/ESG and B-BBEE objectives.' },
  { icon: Award, title: 'Brand Association', desc: 'Align your brand with one of Africa\'s leading youth empowerment organisations.' },
  { icon: Megaphone, title: 'Visibility & Recognition', desc: 'Featured recognition across our digital platforms, events and national tours.' },
  { icon: Users2, title: 'Talent Pipeline Access', desc: 'Early access to a pipeline of job-ready, entrepreneurial young talent.' },
  { icon: Handshake, title: 'Co-Created Programmes', desc: 'Opportunity to co-design bespoke programmes aligned to your sector and goals.' },
  { icon: Building2, title: 'Employee Engagement', desc: 'Meaningful corporate volunteering opportunities for your workforce.' }
]

function PartnerForm() {
  const [form, setForm] = useState({ company: '', contact: '', email: '', phone: '', type: 'Financial', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)
  const update = (f) => (e) => setForm((s) => ({ ...s, [f]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    if (!form.company || !form.contact || !form.email) {
      setStatus({ type: 'error', message: 'Please fill in company name, contact person and email.' })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }
    setLoading(true)
    try {
      await api.post('/api/partners', form)
      setStatus({ type: 'success', message: 'Thank you! Our partnerships team will contact you within 2 business days.' })
      setForm({ company: '', contact: '', email: '', phone: '', type: 'Financial', message: '' })
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="card">
      <FormAlert type={status.type} message={status.message} />
      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="label">Company Name *</label>
          <input className="input" required value={form.company} onChange={update('company')} />
        </div>
        <div>
          <label className="label">Contact Person *</label>
          <input className="input" required value={form.contact} onChange={update('contact')} />
        </div>
        <div>
          <label className="label">Email *</label>
          <input type="email" className="input" required value={form.email} onChange={update('email')} />
        </div>
        <div>
          <label className="label">Phone</label>
          <input className="input" value={form.phone} onChange={update('phone')} />
        </div>
        <div className="sm:col-span-2">
          <label className="label">Partnership Type</label>
          <select className="input" value={form.type} onChange={update('type')}>
            <option>Financial</option>
            <option>In-Kind</option>
            <option>Programme</option>
            <option>Volunteer</option>
          </select>
        </div>
      </div>
      <label className="label">Message</label>
      <textarea rows="4" className="input mb-6" value={form.message} onChange={update('message')} placeholder="Tell us more about your partnership interest..." />
      <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60">
        <Send size={16} /> {loading ? 'Sending...' : 'Submit Enquiry'}
      </button>
    </form>
  )
}

export default function Partners() {
  return (
    <div>
      <SEO title="Partners" description="Partner with StritGRAD Academy through financial, in-kind, programme or volunteer partnerships to scale youth empowerment across South Africa." path="/partners" />
      <PageHeader eyebrow="Mobilising a Movement" title="Partner With Us" description="Join corporates, government, development agencies and educational institutions helping build Africa's next generation of entrepreneurs." />

      {/* Benefits */}
      <section className="section">
        <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">Why Partner With StritGRAD</p>
        <h2 className="section-title">Benefits of Partnering</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="card">
              <b.icon className="text-gold mb-4" size={28} />
              <h3 className="font-bold text-navy mb-2">{b.title}</h3>
              <p className="text-graytxt text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Current Partners */}
      <section className="bg-white">
        <div className="section text-center">
          <h2 className="section-title">Current Partners</h2>
          <p className="section-subtitle mx-auto">We're proud to work alongside these organisations in service of South Africa's youth.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {partners.map((p) => (
              <PartnerLogo key={p.name} name={p.name} logos={p.logos} domain={p.domain} />
            ))}
          </div>
        </div>
      </section>

      {/* CSR + Programme Sponsorship */}
      <section className="section grid md:grid-cols-2 gap-8">
        <div className="card border-t-4 border-gold">
          <h3 className="text-xl font-bold text-navy mb-3">CSR Opportunities</h3>
          <p className="text-graytxt text-sm leading-relaxed mb-5">
            Corporates can get involved through funding, skills-based volunteering, mentorship, in-kind donations (venues, equipment, digital tools) and employee engagement campaigns tied to your CSR/ESG strategy.
          </p>
          <a href="#enquiry" className="text-gold-700 font-semibold text-sm hover:text-navy transition">Explore CSR Opportunities →</a>
        </div>
        <div className="card border-t-4 border-navy">
          <h3 className="text-xl font-bold text-navy mb-3">Programme Sponsorship</h3>
          <p className="text-graytxt text-sm leading-relaxed mb-4">
            Sponsor one of our six flagship programmes in a province of your choice, with full branding, reporting and stakeholder engagement.
          </p>
          <div className="flex flex-wrap gap-2">
            {programmes.map((p) => (
              <span key={p.id} className="bg-navy-50 text-navy text-xs font-medium px-3 py-1.5 rounded-full">{p.title}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer opportunities */}
      <section className="bg-white">
        <div className="section text-center">
          <h2 className="section-title">Volunteer Opportunities for Corporates</h2>
          <p className="section-subtitle mx-auto">Engage your workforce directly with our programmes, tours and events.</p>
          <Link to="/volunteer" className="btn-navy">
            <Handshake size={18} /> Explore Corporate Volunteering
          </Link>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="section" id="enquiry">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="section-title">Partner Enquiry Form</h2>
          <p className="text-graytxt">Tell us about your organisation and how you'd like to partner with us.</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <PartnerForm />
        </div>
      </section>
    </div>
  )
}
