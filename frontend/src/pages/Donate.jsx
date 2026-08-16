import { useState } from 'react'
import { Heart, GraduationCap, School, Rocket, ShieldCheck, Send, Lock } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import FormAlert from '../components/FormAlert.jsx'
import StatCounter from '../components/StatCounter.jsx'
import api from '../utils/api.js'

const amounts = [150, 350, 750, 1500]

function DonationWidget() {
  const [frequency, setFrequency] = useState('once')
  const [amount, setAmount] = useState(350)
  const [custom, setCustom] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const finalAmount = custom ? Number(custom) : amount

  const handleDonate = async (e) => {
    e.preventDefault()
    if (!finalAmount || finalAmount <= 0) {
      setStatus({ type: 'error', message: 'Please select or enter a valid donation amount.' })
      return
    }
    setLoading(true)
    setStatus({ type: '', message: '' })
    try {
      // In production this calls your backend, which creates a PayFast/Stripe/PayPal
      // checkout session and returns a redirect URL.
      const res = await api.post('/api/donate', { amount: finalAmount, frequency })
      setStatus({ type: 'success', message: res?.data?.message || 'Redirecting you to our secure payment partner...' })
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again or contact us directly.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleDonate} className="card">
      <FormAlert type={status.type} message={status.message} />
      <div className="flex bg-offwhite rounded-lg p-1 mb-6">
        {['once', 'monthly'].map((f) => (
          <button
            type="button"
            key={f}
            onClick={() => setFrequency(f)}
            className={`flex-1 py-2.5 rounded-md text-sm font-semibold transition ${
              frequency === f ? 'bg-navy text-gold' : 'text-navy/70'
            }`}
          >
            {f === 'once' ? 'One-Time Donation' : 'Monthly Donation'}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {amounts.map((a) => (
          <button
            type="button"
            key={a}
            onClick={() => { setAmount(a); setCustom('') }}
            className={`py-3 rounded-md border-2 font-bold transition ${
              amount === a && !custom ? 'border-gold bg-gold-50 text-navy' : 'border-gray-200 text-navy/70 hover:border-gold'
            }`}
          >
            R{a}
          </button>
        ))}
      </div>
      <label className="label">Or enter a custom amount (ZAR)</label>
      <input type="number" min="10" className="input mb-6" placeholder="e.g. 500" value={custom} onChange={(e) => setCustom(e.target.value)} />
      <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
        <Heart size={18} /> {loading ? 'Processing...' : `Donate R${finalAmount || 0} ${frequency === 'monthly' ? '/ month' : ''}`}
      </button>
      <p className="flex items-center justify-center gap-2 text-xs text-graytxt mt-4">
        <Lock size={12} /> Secured by PayFast, PayPal or Stripe — your payment details are never stored on our servers.
      </p>
    </form>
  )
}

function CorporateSponsorForm() {
  const [form, setForm] = useState({ company: '', fullName: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)
  const update = (f) => (e) => setForm((s) => ({ ...s, [f]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    if (!form.fullName || !form.email) {
      setStatus({ type: 'error', message: 'Please fill in your name and email.' })
      return
    }
    setLoading(true)
    try {
      await api.post('/api/corporate-sponsorship', form)
      setStatus({ type: 'success', message: 'Thank you! Our partnerships team will be in touch shortly.' })
      setForm({ company: '', fullName: '', email: '', phone: '', message: '' })
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
          <label className="label">Company Name</label>
          <input className="input" value={form.company} onChange={update('company')} />
        </div>
        <div>
          <label className="label">Contact Person *</label>
          <input className="input" required value={form.fullName} onChange={update('fullName')} />
        </div>
        <div>
          <label className="label">Email *</label>
          <input type="email" className="input" required value={form.email} onChange={update('email')} />
        </div>
        <div>
          <label className="label">Phone</label>
          <input className="input" value={form.phone} onChange={update('phone')} />
        </div>
      </div>
      <label className="label">Message</label>
      <textarea rows="4" className="input mb-6" value={form.message} onChange={update('message')} placeholder="Tell us about your sponsorship interest..." />
      <button type="submit" disabled={loading} className="btn-navy disabled:opacity-60">
        <Send size={16} /> {loading ? 'Sending...' : 'Send Sponsorship Enquiry'}
      </button>
    </form>
  )
}

const sponsorOptions = [
  { icon: GraduationCap, title: 'Sponsor a Learner', desc: 'R2,500 covers a full year of programme access, materials and mentorship for one young person.' },
  { icon: School, title: 'Sponsor a School', desc: 'R45,000 brings the full School Exit Programme to an entire matric grade at one school.' },
  { icon: Rocket, title: 'Sponsor a Programme', desc: 'Fund an entire flagship programme in a province of your choice, with full impact reporting.' }
]

export default function Donate() {
  return (
    <div>
      <SEO title="Donate" description="Support StritGRAD Academy's mission with a one-time or monthly donation, or sponsor a learner, school or programme." path="/donate" />
      <PageHeader eyebrow="Make an Impact" title="Your Donation Changes Lives" description="Every rand helps us reach more young people with the skills, tools and opportunities they need to build a sustainable future." />

      {/* Impact message + stats */}
      <section className="bg-navy">
        <div className="section text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Your donation helps us reach more young people</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-12">Here's the impact your generosity has already made possible.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter end={15000} suffix="+" label="Youth Reached" />
            <StatCounter end={1200} suffix="+" label="Businesses Developed" />
            <StatCounter end={2000} suffix="+" label="Jobs Supported" />
            <StatCounter end={50} prefix="R" suffix="M+" label="Funding Facilitated" />
          </div>
        </div>
      </section>

      {/* Donation options */}
      <section className="section grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">Give Today</p>
          <h2 className="section-title">Donation Options</h2>
          <p className="text-graytxt leading-relaxed mb-6">
            Choose a one-time gift or become a monthly supporter — recurring donations help us plan and sustain our programmes with confidence.
          </p>
          <div className="flex items-center gap-2 text-sm text-graytxt mb-2">
            <ShieldCheck size={16} className="text-gold" /> StritGRAD Academy is a registered NPC — Section 18A tax certificates available on request.
          </div>
        </div>
        <DonationWidget />
      </section>

      {/* Sponsor options */}
      <section className="bg-white">
        <div className="section">
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">Targeted Giving</p>
          <h2 className="section-title">Sponsorship Options</h2>
          <p className="section-subtitle">Direct your giving to a specific learner, school or programme.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {sponsorOptions.map((s) => (
              <div key={s.title} className="card">
                <s.icon className="text-gold mb-4" size={30} />
                <h3 className="font-bold text-navy text-lg mb-2">{s.title}</h3>
                <p className="text-graytxt text-sm leading-relaxed mb-5">{s.desc}</p>
                <a href="/contact" className="text-gold-700 font-semibold text-sm hover:text-navy transition">Get Started →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate sponsorship */}
      <section className="section grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">For Companies</p>
          <h2 className="section-title">Corporate Sponsorship</h2>
          <p className="text-graytxt leading-relaxed mb-4">
            Partner with StritGRAD Academy to align your CSR, ESG and B-BBEE skills development spend with measurable, reportable youth impact. We offer tailored sponsorship packages, branded programme opportunities and full impact reporting for your stakeholders.
          </p>
          <p className="text-graytxt leading-relaxed">
            Speak to our partnerships team about a sponsorship package that fits your company's goals and budget.
          </p>
        </div>
        <CorporateSponsorForm />
      </section>
    </div>
  )
}
