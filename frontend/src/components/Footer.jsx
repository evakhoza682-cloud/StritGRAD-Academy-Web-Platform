import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react'
import NewsletterForm from './NewsletterForm.jsx'
import { socials } from '../utils/content.js'

const socialLinks = [
  { Icon: Facebook, href: socials.facebook, label: 'Facebook' },
  { Icon: Instagram, href: socials.instagram, label: 'Instagram' },
  { Icon: Linkedin, href: socials.linkedin, label: 'LinkedIn' },
  { Icon: Youtube, href: socials.youtube, label: 'YouTube' }
]

const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Programmes', to: '/programmes' },
  { label: 'Events', to: '/events' },
  { label: 'Resource Centre', to: '/resources' },
  { label: 'Alumni Network', to: '/alumni' },
  { label: 'News & Stories', to: '/news' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' }
]

const getInvolved = [
  { label: 'Donate', to: '/donate' },
  { label: 'Partner With Us', to: '/partners' },
  { label: 'Volunteer', to: '/volunteer' },
  { label: 'Become a Mentor', to: '/volunteer#mentor' }
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-navy-950 text-white/80 pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <img src="/images/logo/stritgrad-logo.png" alt="StritGRAD Academy logo" className="w-10 h-10 object-contain" />
            <div>
              <p className="text-white font-extrabold">StritGRAD Academy NPC</p>
              <p className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase">Unlock. Empower. Grow.</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed mb-6 max-w-sm">
            A youth empowerment and entrepreneurship development organisation bridging the gap between education, employability and entrepreneurship for South Africa's young people.
          </p>
          <div className="flex gap-3">
            {socialLinks.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition">
                <Icon size={16} />
              </a>
            ))}
          </div>
          <p className="text-xs text-white/50 mt-3">Follow us on Instagram <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">{socials.instagramHandle}</a></p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-gold transition">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Get Involved</h4>
          <ul className="space-y-2 text-sm mb-6">
            {getInvolved.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-gold transition">{l.label}</Link></li>
            ))}
          </ul>
          <div className="space-y-2 text-sm">
            <p className="flex items-start gap-2"><MapPin size={16} className="text-gold shrink-0 mt-0.5" /> 12 Enterprise Way, Sandton, Johannesburg, South Africa</p>
            <p className="flex items-center gap-2"><Phone size={16} className="text-gold shrink-0" /> +27 11 234 5678</p>
            <p className="flex items-center gap-2"><Mail size={16} className="text-gold shrink-0" /> info@stritgradacademy.org.za</p>
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-1">
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Newsletter</h4>
          <p className="text-sm mb-4">Stay updated on our programmes and impact.</p>
          <NewsletterForm compact />
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>&copy; {year} StritGRAD Academy NPC. All rights reserved. Registered Non-Profit Company, South Africa.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/popia" className="hover:text-gold">POPIA</Link>
            <Link to="/terms" className="hover:text-gold">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
