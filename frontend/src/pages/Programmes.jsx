import { GraduationCap, Briefcase, Rocket, PiggyBank, Users, Bus, CheckCircle2, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import ImageBlock from '../components/ImageBlock.jsx'
import { programmes } from '../utils/content.js'

const icons = {
  'school-exit': GraduationCap,
  'cpi': Briefcase,
  'entrepreneurship': Rocket,
  'financial-literacy': PiggyBank,
  'youth-leadership': Users,
  'tours': Bus
}

export default function Programmes() {
  return (
    <div>
      <SEO title="Programmes" description="Explore StritGRAD Academy's six flagship programmes: School Exit, CPI, Entrepreneurship Development, Financial Literacy, Youth Leadership and Entrepreneurship Tours." path="/programmes" />
      <PageHeader
        eyebrow="What We Offer"
        title="Programmes Designed to Unlock Potential at Every Stage"
        description="From the classroom to the boardroom — our six flagship programmes meet young people where they are and equip them for what's next."
      />

      {/* quick nav */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex gap-3 overflow-x-auto">
          {programmes.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="whitespace-nowrap text-sm font-semibold text-navy/70 hover:text-gold-700 px-3 py-1.5 rounded-full hover:bg-offwhite transition">
              {p.title}
            </a>
          ))}
        </div>
      </div>

      <div className="divide-y divide-gray-200">
        {programmes.map((p, idx) => {
          const Icon = icons[p.id]
          const reverse = idx % 2 === 1
          return (
            <section key={p.id} id={p.id} className="scroll-mt-40 bg-offwhite even:bg-white">
              <div className={`max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-start ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
                <div className="rounded-xl overflow-hidden h-72 md:h-full min-h-[320px] bg-navy-50">
                  {p.image ? (
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <ImageBlock icon={Icon} tone={idx % 2 === 0 ? 'navy' : 'gold'} />
                  )}
                </div>
                <div>
                  <div className="w-14 h-14 rounded-lg bg-navy flex items-center justify-center mb-5">
                    <Icon className="text-gold" size={26} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-2">{p.title}</h2>
                  <p className="inline-block bg-gold-50 text-gold-700 text-xs font-semibold px-3 py-1 rounded-full mb-5">
                    Target Audience: {p.audience}
                  </p>
                  <p className="text-graytxt leading-relaxed mb-6">{p.short}</p>

                  <h3 className="font-bold text-navy mb-3 text-sm uppercase tracking-wide">Objectives</h3>
                  <ul className="space-y-2 mb-6">
                    {p.objectives.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-sm text-graytxt">
                        <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" /> {o}
                      </li>
                    ))}
                  </ul>

                  <h3 className="font-bold text-navy mb-3 text-sm uppercase tracking-wide">Key Components</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.components.map((c) => (
                      <span key={c} className="bg-navy-50 text-navy text-xs font-medium px-3 py-1.5 rounded-full">{c}</span>
                    ))}
                  </div>

                  <h3 className="font-bold text-navy mb-2 text-sm uppercase tracking-wide">Programme Structure</h3>
                  <p className="text-graytxt text-sm leading-relaxed mb-6">{p.structure}</p>

                  {p.impact && (
                    <div className="bg-navy text-white rounded-lg px-5 py-4 mb-6 inline-block">
                      <p className="text-gold font-bold text-lg">{p.impact}</p>
                      <p className="text-white/70 text-xs uppercase tracking-wide">Impact to date</p>
                    </div>
                  )}

                  {p.id === 'tours' && (
                    <div className="mb-6">
                      <h3 className="font-bold text-navy mb-2 text-sm uppercase tracking-wide">Upcoming Tour Dates</h3>
                      <p className="text-graytxt text-sm">See our full national tour schedule on the <a href="/events" className="text-gold-700 font-semibold underline">Events page</a>.</p>
                    </div>
                  )}

                  <a href="/contact" className="btn-navy">
                    {p.cta} <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}
