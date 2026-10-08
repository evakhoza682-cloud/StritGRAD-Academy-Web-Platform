import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Youtube } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import FormAlert from '../components/FormAlert.jsx'
import api from '../utils/api.js'
import { socials } from '../utils/content.js'

const socialLinks = [
  { Icon: Facebook, href: socials.facebook, label: 'Facebook' },
  { Icon: Instagram, href: socials.instagram, label: 'Instagram' },
  { Icon: Youtube, href: socials.youtube, label: 'YouTube' }
]

const enquiryTypes = ['Programme Enquiry', 'School Enquiry', 'Corporate Partnership', 'Media Enquiry', 'Volunteer Enquiry', 'General Enquiry']

export default function Contact() {
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', enquiryType: 'General Enquiry', subject: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)
  const update = (f) => (e) => setForm((s) => ({ ...s, [f]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    if (!form.fullName || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please fill in your name, email and message.' })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }
    setLoading(true)
    try {
      await api.post('/api/contact', form)
      setStatus({ type: 'success', message: "Thank you for reaching out — we'll get back to you within 2 business days." })
      setForm({ fullName: '', email: '', phone: '', enquiryType: 'General Enquiry', subject: '', message: '' })
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong sending your message. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <SEO title="Contact Us" description="Get in touch with StritGRAD Academy NPC — programme enquiries, partnerships, media and general questions." path="/contact" />
      <PageHeader eyebrow="We'd Love to Hear From You" title="Contact Us" description="Whether you're a young person, a school, a funder or a corporate partner — reach out and let's talk." />

      <section className="section grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <form onSubmit={submit} className="card">
            <FormAlert type={status.type} message={status.message} />
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="label">Full Name *</label>
                <input className="input" required value={form.fullName} onChange={update('fullName')} />
              </div>
              <div>
                <label className="label">Email *</label>
                <input type="email" className="input" required value={form.email} onChange={update('email')} />
              </div>
              <div>
                <label className="label">Phone (optional)</label>
                <input className="input" value={form.phone} onChange={update('phone')} />
              </div>
              <div>
                <label className="label">Enquiry Type</label>
                <select className="input" value={form.enquiryType} onChange={update('enquiryType')}>
                  {enquiryTypes.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="label">Subject</label>
                <input className="input" value={form.subject} onChange={update('subject')} />
              </div>
            </div>
            <label className="label">Message *</label>
            <textarea rows="5" required className="input mb-6" value={form.message} onChange={update('message')} />
            <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60">
              <Send size={16} /> {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="card">
            <h3 className="font-bold text-navy mb-4">Office Details</h3>
            <div className="space-y-4 text-sm text-graytxt">
              <p className="flex items-start gap-3"><MapPin size={18} className="text-gold shrink-0 mt-0.5" /> 12 Enterprise Way, Sandton, Johannesburg, 2196, South Africa</p>
              <p className="flex items-center gap-3"><Phone size={18} className="text-gold shrink-0" /> +27 11 234 5678</p>
              <p className="flex items-center gap-3"><Mail size={18} className="text-gold shrink-0" /> info@stritgradacademy.org.za</p>
              <p className="flex items-start gap-3"><Clock size={18} className="text-gold shrink-0 mt-0.5" /> Monday – Friday: 08:00 – 17:00<br />Saturday: 09:00 – 13:00</p>
            </div>
          </div>

          <div className="card p-0 overflow-hidden">
            <iframe
              title="StritGRAD Academy Office Location"
              src="https://www.google.com/maps?q=Sandton,Johannesburg,South+Africa&output=embed"
              width="100%"
              height="240"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="card">
            <h3 className="font-bold text-navy mb-4">Follow Us</h3>
            <div className="flex gap-3 mb-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-full bg-navy text-gold flex items-center justify-center hover:bg-gold hover:text-navy transition">
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-xs text-graytxt">Instagram: <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gold-700 font-semibold hover:underline">{socials.instagramHandle}</a></p>
          </div>
        </div>
      </section>
    </div>
  )
}
