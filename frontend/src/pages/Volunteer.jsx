import { useState } from 'react'
import { HandHeart, Users, GraduationCap, Building2, Send } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import FormAlert from '../components/FormAlert.jsx'
import api from '../utils/api.js'

function useSimpleForm(initial, endpoint) {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const validate = () => {
    if (!form.fullName || !form.email) return 'Please fill in your name and email address.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email address.'
    return null
  }

  const submit = async (e) => {
    e.preventDefault()
    const err = validate()
    if (err) { setStatus({ type: 'error', message: err }); return }
    setLoading(true)
    setStatus({ type: '', message: '' })
    try {
      await api.post(endpoint, form)
      setStatus({ type: 'success', message: 'Thank you! Your application has been received — our team will be in touch soon.' })
      setForm(initial)
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong submitting your form. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return { form, update, submit, status, loading }
}

function VolunteerRegForm() {
  const { form, update, submit, status, loading } = useSimpleForm(
    { fullName: '', email: '', phone: '', location: '', skills: '', availability: 'Part-time', why: '' },
    '/api/volunteer'
  )
  return (
    <form onSubmit={submit} className="card">
      <FormAlert type={status.type} message={status.message} />
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="label">Full Name *</label>
          <input className="input" required value={form.fullName} onChange={update('fullName')} placeholder="Your full name" />
        </div>
        <div>
          <label className="label">Email *</label>
          <input type="email" className="input" required value={form.email} onChange={update('email')} placeholder="you@example.com" />
        </div>
        <div>
          <label className="label">Phone</label>
          <input className="input" value={form.phone} onChange={update('phone')} placeholder="+27 XX XXX XXXX" />
        </div>
        <div>
          <label className="label">Location</label>
          <input className="input" value={form.location} onChange={update('location')} placeholder="City / Province" />
        </div>
        <div className="sm:col-span-2">
          <label className="label">Skills / Interests</label>
          <input className="input" value={form.skills} onChange={update('skills')} placeholder="e.g. business coaching, digital marketing, finance" />
        </div>
        <div>
          <label className="label">Availability</label>
          <select className="input" value={form.availability} onChange={update('availability')}>
            <option>Part-time</option>
            <option>Full-time</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label className="label">Why do you want to volunteer?</label>
        <textarea rows="4" className="input" value={form.why} onChange={update('why')} placeholder="Tell us a bit about your motivation..." />
      </div>
      <button type="submit" disabled={loading} className="btn-primary mt-6 disabled:opacity-60">
        <Send size={16} /> {loading ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  )
}

function MentorForm() {
  const { form, update, submit, status, loading } = useSimpleForm(
    { fullName: '', email: '', phone: '', profession: '', expertise: '', why: '' },
    '/api/mentor'
  )
  return (
    <form onSubmit={submit} className="card" id="mentor">
      <FormAlert type={status.type} message={status.message} />
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="label">Full Name *</label>
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
        <div>
          <label className="label">Profession / Industry</label>
          <input className="input" value={form.profession} onChange={update('profession')} />
        </div>
        <div className="sm:col-span-2">
          <label className="label">Area of Expertise</label>
          <input className="input" value={form.expertise} onChange={update('expertise')} placeholder="e.g. retail, tech, agri-business, finance" />
        </div>
      </div>
      <div className="mt-5">
        <label className="label">Why do you want to mentor?</label>
        <textarea rows="3" className="input" value={form.why} onChange={update('why')} />
      </div>
      <button type="submit" disabled={loading} className="btn-navy mt-6 disabled:opacity-60">
        <Send size={16} /> {loading ? 'Submitting...' : 'Register as a Mentor'}
      </button>
    </form>
  )
}

function FacilitatorForm() {
  const { form, update, submit, status, loading } = useSimpleForm(
    { fullName: '', email: '', phone: '', experience: '', programme: '', why: '' },
    '/api/facilitator'
  )
  return (
    <form onSubmit={submit} className="card" id="facilitator">
      <FormAlert type={status.type} message={status.message} />
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="label">Full Name *</label>
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
        <div>
          <label className="label">Facilitation Experience</label>
          <input className="input" value={form.experience} onChange={update('experience')} placeholder="Years of experience" />
        </div>
        <div className="sm:col-span-2">
          <label className="label">Preferred Programme</label>
          <select className="input" value={form.programme} onChange={update('programme')}>
            <option value="">Select a programme</option>
            <option>School Exit Programme</option>
            <option>Candidate Preparatory Initiative</option>
            <option>Entrepreneurship Development</option>
            <option>Financial Literacy</option>
            <option>Youth Leadership</option>
            <option>Entrepreneurship Tours</option>
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label className="label">Tell us about your background</label>
        <textarea rows="3" className="input" value={form.why} onChange={update('why')} />
      </div>
      <button type="submit" disabled={loading} className="btn-navy mt-6 disabled:opacity-60">
        <Send size={16} /> {loading ? 'Submitting...' : 'Register as a Facilitator'}
      </button>
    </form>
  )
}

function CorporateForm() {
  const { form, update, submit, status, loading } = useSimpleForm(
    { fullName: '', email: '', company: '', phone: '', message: '' },
    '/api/corporate-volunteering'
  )
  return (
    <form onSubmit={submit} className="card">
      <FormAlert type={status.type} message={status.message} />
      <div className="grid sm:grid-cols-2 gap-5">
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
      <div className="mt-5">
        <label className="label">Tell us about your corporate volunteering interest</label>
        <textarea rows="4" className="input" value={form.message} onChange={update('message')} />
      </div>
      <button type="submit" disabled={loading} className="btn-primary mt-6 disabled:opacity-60">
        <Send size={16} /> {loading ? 'Submitting...' : 'Send Enquiry'}
      </button>
    </form>
  )
}

export default function Volunteer() {
  return (
    <div>
      <SEO title="Volunteer" description="Volunteer, mentor or facilitate with StritGRAD Academy — or bring your company on board through corporate volunteering." path="/volunteer" />
      <PageHeader eyebrow="Give Your Time" title="Volunteer With Us" description="Whether you have an hour a month or a full-time passion for youth development, there's a place for you at StritGRAD Academy." />

      <section className="section">
        <div className="flex items-center gap-3 mb-8">
          <HandHeart className="text-gold" size={28} />
          <h2 className="text-2xl font-extrabold text-navy">Volunteer Registration</h2>
        </div>
        <VolunteerRegForm />
      </section>

      <section className="bg-white">
        <div className="section grid md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Users className="text-gold" size={28} />
              <h2 className="text-2xl font-extrabold text-navy">Become a Mentor</h2>
            </div>
            <MentorForm />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-gold" size={28} />
              <h2 className="text-2xl font-extrabold text-navy">Become a Facilitator</h2>
            </div>
            <FacilitatorForm />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="flex items-center gap-3 mb-6">
          <Building2 className="text-gold" size={28} />
          <h2 className="text-2xl font-extrabold text-navy">Corporate Volunteering</h2>
        </div>
        <p className="text-graytxt max-w-3xl leading-relaxed mb-10">
          We partner with corporates to offer structured employee volunteering opportunities — from skills-based volunteering and workshop facilitation, to mentoring and hands-on support at our national tours and events. It's a powerful way to activate your CSR and ESG commitments while making a direct, visible impact on youth livelihoods.
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="grid sm:grid-cols-2 gap-4 content-start">
            {['Skills-based volunteering', 'Workshop facilitation', 'Mentoring programme participants', 'Event & tour support', 'Judging pitch competitions', 'Resource development'].map((i) => (
              <div key={i} className="card text-sm font-medium text-navy">{i}</div>
            ))}
          </div>
          <CorporateForm />
        </div>
      </section>
    </div>
  )
}
