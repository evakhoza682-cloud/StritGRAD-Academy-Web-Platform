import { Link } from 'react-router-dom'
import {
  GraduationCap, Briefcase, Rocket, PiggyBank, Users, Bus,
  ArrowRight, Heart, HandHeart, HandshakeIcon, ChevronRight
} from 'lucide-react'
import SEO from '../components/SEO.jsx'
import ImageBlock from '../components/ImageBlock.jsx'
import StatCounter from '../components/StatCounter.jsx'
import NewsletterForm from '../components/NewsletterForm.jsx'
import PartnerLogo from '../components/PartnerLogo.jsx'
import { programmes, stats, successStories, partners, newsItems } from '../utils/content.js'

const programmeIcons = {
  'school-exit': GraduationCap,
  'cpi': Briefcase,
  'entrepreneurship': Rocket,
  'financial-literacy': PiggyBank,
  'youth-leadership': Users,
  'tours': Bus
}

export default function Home() {
  return (
    <div>
      <SEO
        title="Home"
        description="StritGRAD Academy NPC empowers South African youth with entrepreneurial skills, financial literacy, career readiness and access to opportunity."
        path="/"
      />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/gallery/academy-training-day.jpg" alt="StritGRAD Academy youth in training" className="w-full h-full object-cover opacity-50" loading="eager" />
        </div>
        <div className="absolute inset-0 bg-hero-gradient" />
        <img
          src="/images/logo/stritgrad-logo.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute -right-24 top-1/2 -translate-y-1/2 w-[560px] h-[560px] object-contain opacity-[0.07]"
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 w-full">
          <p className="text-gold font-semibold uppercase tracking-[0.25em] text-sm mb-5 animate-fade-up">
            StritGRAD Academy NPC
          </p>
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] max-w-3xl mb-6 animate-fade-up">
            Unlocking Africa's Next Generation of Entrepreneurs.
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mb-10 leading-relaxed animate-fade-up">
            We empower young people with entrepreneurial skills, financial literacy, career readiness and access to opportunities that transform potential into sustainable enterprises.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up">
            <Link to="/programmes" className="btn-primary">
              Join a Programme <ArrowRight size={18} />
            </Link>
            <Link to="/partners" className="btn-outline">
              Partner With Us
            </Link>
            <Link to="/donate" className="btn-outline">
              Donate
            </Link>
            <Link to="/volunteer" className="btn-outline">
              Volunteer
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-offwhite to-transparent" />
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">Who We Are</p>
          <h2 className="section-title">Bridging Education, Employability & Entrepreneurship</h2>
          <p className="text-graytxt text-lg leading-relaxed mb-6">
            StritGRAD Academy exists to bridge the gap between education, employability and entrepreneurship, particularly for township and rural youth. We believe every young person deserves the tools, networks and confidence to build a sustainable future — for themselves, their families and their communities.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold-700 transition group">
            Learn More About Us <ChevronRight size={18} className="group-hover:translate-x-1 transition" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 h-96">
          <div className="rounded-xl overflow-hidden h-full">
            <img src="/images/gallery/school-engagement-classroom.jpg" alt="Learners engaging in a StritGRAD school workshop" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-xl overflow-hidden h-full mt-8">
            <img src="/images/gallery/yaei-visit-group.jpg" alt="StritGRAD Academy team and beneficiaries" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="bg-white">
        <div className="section">
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">What We Do</p>
          <h2 className="section-title">Our Programmes</h2>
          <p className="section-subtitle">
            Six flagship programmes taking young people from the classroom, through career and financial readiness, into sustainable entrepreneurship.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmes.map((p) => {
              const Icon = programmeIcons[p.id]
              return (
                <div key={p.id} className="card group flex flex-col p-0 overflow-hidden">
                  <div className="h-40 relative overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-navy/30" />
                    <div className="absolute bottom-3 left-3 w-11 h-11 rounded-lg bg-gold flex items-center justify-center shadow-card">
                      <Icon className="text-navy" size={22} />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-navy mb-2">{p.title}</h3>
                    <p className="text-graytxt text-sm leading-relaxed mb-5 flex-1">{p.short}</p>
                    <Link to={`/programmes#${p.id}`} className="inline-flex items-center gap-1.5 text-gold-700 font-semibold text-sm hover:text-navy transition">
                      Learn More <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="section relative">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">Our Impact</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Numbers That Tell Our Story</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((s) => <StatCounter key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="section">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">Real Impact, Real People</p>
            <h2 className="section-title mb-0">Success Stories</h2>
          </div>
          <Link to="/alumni" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold-700 transition">
            View All Stories <ChevronRight size={18} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((s) => (
            <div key={s.name} className="card overflow-hidden p-0">
              <div className="h-52">
                {s.image ? (
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                  <ImageBlock icon={Users} tone="gold" />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-navy">{s.name}</h3>
                <p className="text-gold-700 text-sm font-semibold mb-1">{s.business}</p>
                <p className="text-xs text-graytxt mb-3">{s.location}</p>
                <p className="text-graytxt text-sm leading-relaxed">{s.story}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-white">
        <div className="section text-center">
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">Trusted By</p>
          <h2 className="section-title">Our Partners</h2>
          <p className="section-subtitle mx-auto">
            We work alongside corporates, government, development agencies and educational institutions to scale youth impact across South Africa.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-10">
            {partners.map((p) => (
              <PartnerLogo key={p.name} name={p.name} domain={p.domain} />
            ))}
          </div>
          <Link to="/partners" className="btn-navy">
            <HandHeart size={18} /> Become a Partner
          </Link>
        </div>
      </section>

      {/* NEWS */}
      <section className="section">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">Stay Informed</p>
            <h2 className="section-title mb-0">Latest News</h2>
          </div>
          <Link to="/news" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold-700 transition">
            View All News <ChevronRight size={18} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.slice(0, 3).map((n) => (
            <Link to={`/news/${n.slug}`} key={n.slug} className="card overflow-hidden p-0 block group">
              <div className="h-48">
                {n.image ? (
                  <img src={n.image} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                ) : (
                  <ImageBlock icon={Rocket} tone="light" />
                )}
              </div>
              <div className="p-6">
                <p className="text-xs text-gold-700 font-semibold uppercase tracking-wide mb-2">{n.category}</p>
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-gold-700 transition">{n.title}</h3>
                <p className="text-graytxt text-sm mb-3 leading-relaxed">{n.excerpt}</p>
                <p className="text-xs text-graytxt/70">{new Date(n.date).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-navy-900">
        <div className="section text-center max-w-2xl">
          <Heart className="text-gold mx-auto mb-4" size={32} />
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Stay Updated On Our Programmes and Impact</h2>
          <p className="text-white/70 mb-8">Join our mailing list for stories, opportunities and updates from across the StritGRAD community.</p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  )
}
