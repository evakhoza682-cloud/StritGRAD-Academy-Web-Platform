import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Heart } from 'lucide-react'

const programmeLinks = [
  { label: 'School Exit Programme', to: '/programmes#school-exit' },
  { label: 'Candidate Preparatory Initiative', to: '/programmes#cpi' },
  { label: 'Entrepreneurship Development', to: '/programmes#entrepreneurship' },
  { label: 'Financial Literacy', to: '/programmes#financial-literacy' },
  { label: 'Youth Leadership', to: '/programmes#youth-leadership' },
  { label: 'Entrepreneurship Tours', to: '/programmes#tours' }
]

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Programmes', to: '/programmes', dropdown: programmeLinks },
  { label: 'Events', to: '/events' },
  { label: 'Resources', to: '/resources' },
  { label: 'Alumni', to: '/alumni' },
  { label: 'News', to: '/news' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy shadow-lg' : 'bg-navy/95'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/images/logo/stritgrad-logo.png" alt="StritGRAD Academy logo" className="w-11 h-11 object-contain" />
          <div className="leading-tight">
            <p className="text-white font-extrabold text-lg tracking-tight">StritGRAD</p>
            <p className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase">Academy NPC</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.to}
              className="relative group"
              onMouseEnter={() => link.dropdown && setDropdownOpen(link.to)}
              onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive ? 'text-gold' : 'text-white/90 hover:text-gold'
                  }`
                }
              >
                {link.label}
                {link.dropdown && <ChevronDown size={14} />}
              </NavLink>
              {link.dropdown && dropdownOpen === link.to && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-cardHover py-2 animate-fade-up">
                  {link.dropdown.map((d) => (
                    <Link key={d.to} to={d.to} className="block px-5 py-2.5 text-sm text-navy hover:bg-offwhite hover:text-gold-700 transition">
                      {d.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/volunteer" className="text-white/90 hover:text-gold text-sm font-medium px-3">Volunteer</Link>
          <Link to="/partners" className="text-white/90 hover:text-gold text-sm font-medium px-3">Partner With Us</Link>
          <Link to="/donate" className="btn-primary py-2.5 px-5">
            <Heart size={16} /> Donate
          </Link>
        </div>

        <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-800 border-t border-white/10 px-6 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-3 text-sm font-medium border-b border-white/5 ${isActive ? 'text-gold' : 'text-white/90'}`
                }
              >
                {link.label}
              </NavLink>
              {link.dropdown && (
                <div className="pl-4 py-1 space-y-1">
                  {link.dropdown.map((d) => (
                    <Link key={d.to} to={d.to} onClick={() => setOpen(false)} className="block py-2 text-xs text-white/70 hover:text-gold">
                      {d.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <Link to="/volunteer" onClick={() => setOpen(false)} className="btn-outline w-full">Volunteer</Link>
            <Link to="/donate" onClick={() => setOpen(false)} className="btn-primary w-full"><Heart size={16} /> Donate</Link>
          </div>
        </div>
      )}
    </header>
  )
}
