import { Target, Eye, Users, MapPin, UserPlus } from 'lucide-react'
import SEO from '../components/SEO.jsx'
import PageHeader from '../components/PageHeader.jsx'
import ImageBlock from '../components/ImageBlock.jsx'
import { founderPhoto } from '../utils/founderImage.js'
import { values, leadership, leadershipPlaceholderCount, provinces } from '../utils/content.js'

export default function About() {
  return (
    <div>
      <SEO title="About Us" description="Learn about StritGRAD Academy's story, mission, vision, values and leadership team driving youth empowerment across South Africa." path="/about" />
      <PageHeader
        eyebrow="About StritGRAD Academy"
        title="Building Africa's Next Generation of Entrepreneurs, Together"
        description="From a single community workshop to a national movement — this is our story, our purpose and the people driving it forward."
      />

      {/* OUR STORY */}
      <section className="section grid md:grid-cols-2 gap-14 items-center">
        <div className="order-2 md:order-1 rounded-xl overflow-hidden h-96">
          <img src="/images/gallery/gauteng-community-outreach.jpg" alt="StritGRAD Academy community outreach" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">Our Story</p>
          <h2 className="section-title">Why We Exist</h2>
          <p className="text-graytxt leading-relaxed mb-4">
            StritGRAD Academy was founded by Joseph Khoza out of a simple but urgent observation: too many talented young South Africans were leaving school and college with qualifications, but without the practical skills, networks or confidence to translate that potential into a livelihood. What began with a handful of community workshops has grown into a multi-programme organisation, including our enterprise development arm, StritGRAD Market Solutions.
          </p>
          <p className="text-graytxt leading-relaxed mb-4">
            What started as a grassroots response to youth unemployment has since grown into a structured, multi-programme organisation. Along the way, we've learned that sustainable change requires more than good intentions — it requires rigorous programme design, strong partnerships, and an unwavering focus on measurable outcomes.
          </p>
          <p className="text-graytxt leading-relaxed">
            Today, StritGRAD Academy continues to grow as a youth empowerment organisation — but our mission remains the same as it was on day one: to bridge the gap between education, employability and entrepreneurship for the young people who need it most.
          </p>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="bg-white">
        <div className="section">
          <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">Our Journey</p>
          <h2 className="section-title">Milestones Along the Way</h2>
          <div className="relative pl-8 border-l-2 border-gold-200 space-y-10 max-w-3xl">
            {[
              { year: '2022', title: 'StritGRAD Academy Founded', desc: 'Joseph Khoza launches StritGRAD Academy with a handful of community-based workshops.' },
              { year: '2023', title: 'National Expansion Begins', desc: 'Programmes expand beyond Gauteng, reaching learners and youth in additional provinces.' },
              { year: '2024', title: 'StritGRAD Market Solutions Launched', desc: 'Our enterprise-development arm launches, training and deploying youth on real, income-generating field and digital work.' },
              { year: '2025', title: 'Youth Economic Tour (YET) 2025', desc: 'A multi-day tour combining business site visits and the Absa Financial Inclusion Symposium reaches hundreds of young people in Gauteng.' },
              { year: '2025', title: 'One Young World, Munich', desc: 'Founder Joseph Khoza represents StritGRAD Academy on the global stage, speaking on financial inclusion through entrepreneurship.' }
            ].map((m) => (
              <div key={m.title} className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gold border-4 border-white shadow-card" />
                <p className="text-gold-700 font-extrabold text-sm mb-1">{m.year}</p>
                <h3 className="font-bold text-navy mb-1">{m.title}</h3>
                <p className="text-graytxt text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section>
        <div className="section grid md:grid-cols-2 gap-8">
          <div className="card border-t-4 border-gold">
            <Target className="text-gold mb-4" size={32} />
            <h3 className="text-2xl font-bold text-navy mb-3">Our Mission</h3>
            <p className="text-graytxt leading-relaxed">
              To equip young South Africans — particularly in township and rural communities — with the entrepreneurial skills, financial literacy and career readiness they need to build sustainable livelihoods for themselves, their families and their communities.
            </p>
          </div>
          <div className="card border-t-4 border-navy">
            <Eye className="text-navy mb-4" size={32} />
            <h3 className="text-2xl font-bold text-navy mb-3">Our Vision</h3>
            <p className="text-graytxt leading-relaxed">
              A thriving Africa where every young person has the opportunity, skills and support to become an economically active, self-sufficient contributor to their community — unlocking a continent powered by its own next generation of entrepreneurs.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">What We Stand For</p>
        <h2 className="section-title">Our Values</h2>
        <p className="section-subtitle">The principles that guide every programme, partnership and decision we make.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div key={v.title} className="card">
              <div className="w-10 h-10 rounded-full bg-navy text-gold flex items-center justify-center font-bold mb-4">{i + 1}</div>
              <h3 className="text-lg font-bold text-navy mb-2">{v.title}</h3>
              <p className="text-graytxt text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section className="bg-white">
        <div className="section grid md:grid-cols-3 gap-10 items-center">
          <div className="rounded-xl overflow-hidden h-[28rem] md:col-span-1 bg-navy-50 shadow-cardHover">
            <img
              src={founderPhoto}
              alt="Joseph Khoza, Founder of StritGRAD Academy"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-2">
            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">Meet Our Founder</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-1">Joseph Khoza</h2>
            <p className="text-gold-700 font-semibold mb-4">Founder & Executive Director</p>
            <p className="text-graytxt leading-relaxed mb-4">
              Joseph founded StritGRAD Academy to bridge the gap between education, employability and entrepreneurship for South African youth, later launching StritGRAD Market Solutions as a practical, income-generating training arm of the organisation.
            </p>
            <p className="text-graytxt leading-relaxed mb-4">
              An Absa x YAEI (Youth Africa Works Employability Initiative) beneficiary himself, Joseph represented StritGRAD Academy at One Young World 2025 in Munich, contributing to global discussions on financial inclusion through entrepreneurship.
            </p>
            <blockquote className="border-l-4 border-gold pl-4 italic text-navy/80 text-sm leading-relaxed">
              "Inclusion isn't a policy goal; it's a daily commitment to empowering people with the tools and opportunities to create their own livelihoods. Sustainable progress starts when entrepreneurship becomes accessible to all."
            </blockquote>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section">
        <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">Our People</p>
        <h2 className="section-title">Leadership Team</h2>
        <p className="section-subtitle">The team driving StritGRAD Academy's mission forward.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {leadership.map((l) => (
            <div key={l.name} className="text-center">
              <div className="rounded-full overflow-hidden w-36 h-36 mx-auto mb-4 shadow-card bg-navy-50">
                {l.name === 'Joseph Khoza' ? (
                  <img src={founderPhoto} alt={l.name} className="w-full h-full object-cover object-top" loading="lazy" />
                ) : (
                  <ImageBlock icon={Users} tone="gold" />
                )}
              </div>
              <h3 className="font-bold text-navy">{l.name}</h3>
              <p className="text-gold-700 text-sm font-medium">{l.role}</p>
            </div>
          ))}
          {Array.from({ length: leadershipPlaceholderCount }).map((_, i) => (
            <div key={`placeholder-${i}`} className="text-center">
              <div className="rounded-full w-36 h-36 mx-auto mb-4 border-2 border-dashed border-gray-300 flex items-center justify-center bg-white">
                <UserPlus className="text-gray-300" size={32} />
              </div>
              <h3 className="font-semibold text-graytxt text-sm">Add Team Member</h3>
              <p className="text-graytxt/60 text-xs">Role to be added</p>
            </div>
          ))}
        </div>
      </section>

      {/* NATIONAL REACH */}
      <section className="bg-navy">
        <div className="section">
          <div className="text-center mb-14">
            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3 flex items-center justify-center gap-2">
              <MapPin size={16} /> National Footprint
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Where We Work</h2>
            <p className="text-white/70 max-w-2xl mx-auto mt-4">
              StritGRAD Academy operates programmes in all nine South African provinces, with a growing footprint across townships, rural communities and metros.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 lg:grid-cols-9 gap-4">
            {provinces.map((p) => (
              <div key={p.name} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition">
                <MapPin className="text-gold mx-auto mb-2" size={20} />
                <p className="text-white font-semibold text-xs mb-1">{p.name}</p>
                <p className="text-gold text-sm font-bold">{p.youth}</p>
                <p className="text-white/50 text-[10px] uppercase tracking-wide">youth reached</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
