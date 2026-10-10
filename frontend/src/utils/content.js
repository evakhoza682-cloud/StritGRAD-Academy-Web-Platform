import { founderPhoto } from './founderImage.js'
export const programmes = [
  {
    id: 'school-exit',
    title: 'School Exit Programme',
    short: 'Equipping high school learners with career guidance, financial literacy and work readiness before they leave the classroom.',
    audience: 'High school learners (Grade 10–12)',
    objectives: [
      'Prepare learners for life beyond matric with practical, real-world skills',
      'Build awareness of career, further-study and entrepreneurship pathways',
      'Instil financial literacy and workplace-readiness from an early age'
    ],
    components: ['Career guidance & pathway planning', 'Financial literacy fundamentals', 'Introduction to entrepreneurship', 'Work readiness & professionalism', 'Life skills & self-leadership'],
    structure: 'Delivered over two school terms through in-school workshops, one-on-one career coaching sessions and a culminating "Future Ready" showcase day.',
    impact: '8,500+ learners reached across 120 schools',
    cta: 'Register Now',
    image: '/images/gallery/school-engagement-classroom.jpg'
  },
  {
    id: 'cpi',
    title: 'Candidate Preparatory Initiative (CPI)',
    short: 'Bridging the gap between graduation and employment for graduates and TVET college students.',
    audience: 'Graduates & TVET college students',
    objectives: [
      'Improve graduate employability and job-readiness',
      'Build confidence and competence in interviews and workplace conduct',
      'Open pathways into internships, learnerships and entrepreneurship'
    ],
    components: ['Graduate readiness coaching', 'CV & interview preparation', 'Employment readiness assessments', 'Entrepreneurial capability building'],
    structure: 'A 6-week intensive bootcamp combining workshops, mock interviews, employer engagement sessions and personalised coaching.',
    cta: 'Apply Now',
    image: '/images/programmes/computer-literacy-training.jpg'
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship Development',
    short: 'Supporting aspiring and early-stage entrepreneurs to build investable, sustainable businesses — delivered through our StritGRAD Market Solutions arm.',
    audience: 'Aspiring & early-stage entrepreneurs',
    objectives: [
      'Strengthen business planning and execution capability',
      'Build confidence to pitch and engage investors and stakeholders',
      'Support sustainable enterprise growth and job creation'
    ],
    components: ['Business plan development', 'Pitching & storytelling', 'Business model design', 'Stakeholder & investor engagement', 'Enterprise growth support'],
    structure: 'A 12-week structured accelerator with masterclasses, one-on-one mentoring and a demo day in front of funders and corporate partners.',
    cta: 'Join the Programme',
    image: '/images/gallery/academy-training-day.jpg'
  },
  {
    id: 'financial-literacy',
    title: 'Financial Literacy',
    short: 'Practical money-management skills for youth and entrepreneurs to build lasting financial resilience.',
    audience: 'Youth & entrepreneurs',
    objectives: [
      'Build sound personal and business financial management habits',
      'Grow awareness of savings and investment vehicles',
      'Promote responsible borrowing and credit management'
    ],
    components: ['Personal finance basics', 'Business finance & bookkeeping', 'Savings culture', 'Investment awareness', 'Responsible borrowing & credit'],
    structure: 'Modular workshops (in-person and online) that can be taken individually or as a full certified pathway, including our annual Absa Financial Inclusion Symposium.',
    cta: 'Learn More',
    image: '/images/gallery/absa-financial-inclusion-symposium.jpg'
  },
  {
    id: 'youth-leadership',
    title: 'Youth Leadership',
    short: 'Developing the next generation of civic-minded, innovative young leaders driving change in their communities.',
    audience: 'Young leaders (18–30)',
    objectives: [
      'Develop confident, ethical and community-minded young leaders',
      'Encourage innovation and social entrepreneurship',
      'Strengthen civic participation and community leadership'
    ],
    components: ['Leadership development', 'Innovation & design thinking', 'Civic participation', 'Social entrepreneurship'],
    structure: 'A residential leadership academy followed by a 6-month community action project with ongoing mentorship.',
    cta: 'Apply Now',
    image: '/images/gallery/yaei-visit-group.jpg'
  },
  {
    id: 'tours',
    title: 'Entrepreneurship Tours',
    short: 'National roadshows and business site visits bringing masterclasses, pitch competitions and networking directly to communities.',
    audience: 'Youth, entrepreneurs & communities',
    objectives: [
      'Take opportunity directly to underserved communities nationwide',
      'Create platforms for youth to pitch, network and access funding',
      'Showcase local township and rural businesses'
    ],
    components: ['National roadshows', 'Business site visits', 'Masterclasses', 'Pitch competitions', 'Networking sessions', 'Business exhibitions'],
    structure: 'Multi-day tour stops in each province — including our annual Youth Economic Tour (YET) — featuring masterclasses, business site visits, an exhibition hall and a live pitch competition with prizes.',
    cta: 'Register for a Tour',
    image: '/images/programmes/fieldwork-outreach.png'
  }
]

export const stats = [
  { end: 15000, suffix: '+', label: 'Youth Reached' },
  { end: 9, suffix: '', label: 'Provinces' },
  { end: 500, suffix: '+', label: 'Workshops Delivered' },
  { end: 2000, suffix: '+', label: 'Jobs Supported' },
  { end: 1200, suffix: '+', label: 'Businesses Developed' },
  { end: 50, prefix: 'R', suffix: 'M+', label: 'Funding Facilitated' }
]

export const successStories = [
  {
    name: 'Joseph Khoza',
    business: 'Founder, StritGRAD Academy',
    location: 'Johannesburg, Gauteng',
    story: 'An Absa x YAEI beneficiary himself, Joseph represented StritGRAD Academy at One Young World 2025 in Munich, speaking on financial inclusion through entrepreneurship — reinforcing that inclusion is a daily commitment to giving people the tools to build their own livelihoods.',
    image: founderPhoto
  },
  {
    name: 'SpazaEats Founder',
    business: 'SpazaEats — Street Food Enterprise',
    location: 'Gauteng',
    story: 'A StritGRAD Market Solutions beneficiary who turned an informal food stall into a growing street-food brand, SpazaEats now serves communities at markets and events across Gauteng — a proud example of township entrepreneurship in action.',
    image: '/images/people/spazaeats-alumni-business.png'
  },
  {
    name: 'StritGRAD Market Solutions Cohort',
    business: 'Digital & Field Enterprise Training',
    location: 'Johannesburg, Gauteng',
    story: 'Through StritGRAD Market Solutions, young people are trained and deployed on real market-research and field-enterprise engagements — building income, experience and a professional track record while they train.',
    image: '/images/gallery/academy-training-day.jpg'
  }
]

// Corporate, government and development partners.
// `domain` is used to pull an official logo via a public logo lookup service —
// see PartnerLogo.jsx. If a logo fails to load, a clean text badge is shown instead.
export const partners = [
  { name: 'Absa Group', logos: ['absa'], domain: 'absa.africa' },
  { name: 'Standard Bank', logos: ['standard bank', 'standardbank', 'standard-bank', 'standard'], domain: 'standardbank.co.za' },
  { name: 'Nedbank', logos: ['nedbank', 'Nedbank'], domain: 'nedbank.co.za' },
  { name: 'MTN Foundation', logos: ['mtn', 'mtn foundation', 'mtn-foundation'], domain: 'mtn.com' },
  { name: 'Coca-Cola Beverages SA', logos: ['cocacola', 'coca cola', 'coca-cola'], domain: 'ccbsa.co.za' },
  { name: 'Harmony Gold', logos: ['harmony', 'harmony gold', 'harmony-gold'], domain: 'harmony.co.za' },
  { name: 'National Youth Development Agency', logos: ['NYDA', 'nyda'], domain: 'nyda.gov.za' },
  { name: 'Dept. of Small Business Development', logos: ['depart.of small business development', 'dsbd', 'DSBD'], domain: 'dsbd.gov.za' },
  { name: 'Dept. of Basic Education', logos: ['basic education', 'dbe', 'DBE'], domain: 'education.gov.za' },
  { name: 'GIZ South Africa', logos: ['giz', 'GIZ'], domain: 'giz.de' },
  { name: 'USAID Southern Africa', logos: ['USAID', 'usaid'], domain: 'usaid.gov' },
  { name: 'British Council', logos: ['british coucil', 'british council', 'british-council'], domain: 'britishcouncil.org' },
  { name: 'University of Johannesburg', logos: ['UJ', 'uj'], domain: 'uj.ac.za' },
  { name: 'Tshwane University of Technology', logos: ['TUT', 'tut'], domain: 'tut.ac.za' },
  { name: 'Wits Enterprise', logos: ['WITS ENTERPRISE', 'wits enterprise', 'wits'], domain: 'wits.ac.za' }
]

export const newsItems = [
  {
    slug: 'one-young-world-2025-munich',
    title: 'StritGRAD Founder Represents South Africa at One Young World 2025',
    date: '2025-11-20',
    category: 'Impact Stories',
    excerpt: 'Founder Joseph Khoza joined global change-makers in Munich to discuss financial inclusion through entrepreneurship as an Absa x YAEI beneficiary delegate.',
    body: "StritGRAD Academy Founder Joseph Khoza represented the organisation at One Young World 2025 in Munich, contributing to discussions on financial inclusion through entrepreneurship. Reflecting on the summit, Joseph said the experience reinforced that inclusion isn't a policy goal — it's a daily commitment to equipping people with the tools and opportunities to build their own livelihoods. He attended as an Absa x YAEI (Youth Africa Works Employability Initiative) beneficiary, a partnership that has been instrumental in StritGRAD's growth.",
    image: founderPhoto,
    portrait: true
  },
  {
    slug: 'yet2025-absa-financial-inclusion-symposium',
    title: "Day 3 — Absa Financial Inclusion Symposium Closes Out YET2025 (Gauteng Edition)",
    date: '2025-09-12',
    category: 'Programme Updates',
    excerpt: 'The Youth Economic Tour 2025 (Gauteng Edition) closed with a packed Absa Financial Inclusion Symposium bringing together youth from across the province.',
    body: "StritGRAD Academy closed out the Gauteng Edition of its Youth Economic Tour (YET) 2025 with a full-house Absa Financial Inclusion Symposium. Hundreds of young people filled the auditorium for a day of practical financial literacy content, expert panels and direct engagement with the Absa team — capping off a three-day tour that also included business site visits and hands-on workshops across Johannesburg.",
    image: '/images/gallery/absa-financial-inclusion-symposium.jpg'
  },
  {
    slug: 'business-site-visits-jozi-edition',
    title: 'Day 1 — Business Site Visits, Jozi Edition',
    date: '2025-09-10',
    category: 'Programme Updates',
    excerpt: "Johannesburg, the heartbeat of South Africa's economy, gave StritGRAD youth a first-hand look inside real, operating businesses.",
    body: "Kicking off the Youth Economic Tour 2025, StritGRAD Academy took young entrepreneurs on a series of business site visits across Johannesburg — described by participants as 'the heartbeat of South Africa's economy'. The day gave learners a first-hand look at how real businesses operate day-to-day, from small township enterprises to established commercial operations, grounding classroom learning in lived business reality.",
    image: '/images/gallery/absa-tour-workshop.jpg'
  },
  {
    slug: 'harmony-gold-partnership-engagement',
    title: 'StritGRAD Deepens Community Partnership with Harmony Gold',
    date: '2025-07-25',
    category: 'Programme Updates',
    excerpt: 'A renewed community engagement with Harmony Gold continues to open doors for youth-focused skills and enterprise development.',
    body: "StritGRAD Academy's team met with Harmony Gold representatives to strengthen an ongoing community partnership focused on youth skills development and local enterprise support. The engagement forms part of StritGRAD's growing network of mining-sector and corporate partnerships that channel CSR investment directly into measurable youth outcomes.",
    image: '/images/gallery/harmony-partnership.jpg',
    compact: true
  },
  {
    slug: 'stritgrad-market-solutions-training-day',
    title: 'Inside a StritGRAD Market Solutions Training Day',
    date: '2025-06-18',
    category: 'Programme Updates',
    excerpt: 'A look inside how StritGRAD Market Solutions trains and deploys young people on real, income-generating field and digital engagements.',
    body: "StritGRAD Market Solutions — StritGRAD Academy's enterprise development arm — continues to train young people in practical digital and field-based work, from market research to client engagement. Participants build a professional track record and earn an income while completing their training, turning classroom learning into real workplace experience from day one.",
    image: '/images/gallery/academy-training-day.jpg'
  },
  {
    slug: 'gauteng-community-outreach-schools',
    title: 'StritGRAD Academy Brings the School Exit Programme to Gauteng Communities',
    date: '2025-08-14',
    category: 'Programme Updates',
    excerpt: 'A community outreach day brought career guidance and entrepreneurship exposure directly to learners and youth in Gauteng.',
    body: "As part of its ongoing community outreach, StritGRAD Academy — working alongside Gauteng Province partners — brought its School Exit Programme content directly to youth and learners in local communities, combining career guidance sessions with hands-on exposure to entrepreneurship and further-study pathways.",
    image: '/images/gallery/gauteng-community-outreach.jpg'
  },
  {
    slug: 'fieldwork-outreach-digital-enumerators',
    title: 'Meet the StritGRAD Field Team Powering Our Community Research',
    date: '2025-05-05',
    category: 'Impact Stories',
    excerpt: 'Trained StritGRAD youth are earning income and experience as field enumerators supporting community and market research projects.',
    body: "A growing cohort of StritGRAD-trained young people now works as professional field researchers, going door-to-door across communities to gather data that helps businesses, funders and government better understand local needs. It's a clear example of how our Entrepreneurship Tours and Market Solutions training translate directly into paid work.",
    image: '/images/programmes/fieldwork-outreach.png'
  }
]

export const events = [
  { id: 1, title: 'Gauteng Entrepreneurship Tour Stop', category: 'Entrepreneurship Tour', date: '2026-09-05', location: 'Sandton Convention Centre, Johannesburg', description: 'A full day of masterclasses, exhibitions and a live pitch competition for Gauteng youth entrepreneurs.' },
  { id: 2, title: 'Pitch Perfect Masterclass', category: 'Masterclasses', date: '2026-09-19', location: 'Online (Zoom)', description: 'Learn how to craft and deliver a winning investor pitch from experienced venture coaches.' },
  { id: 3, title: 'Financial Literacy Workshop Series', category: 'Workshops', date: '2026-10-02', location: 'Durban Youth Centre, KwaZulu-Natal', description: 'A practical, hands-on workshop covering budgeting, saving and responsible borrowing for young entrepreneurs.' },
  { id: 4, title: 'National Youth Development Conference', category: 'Conferences', date: '2026-10-21', location: 'Cape Town International Convention Centre', description: 'Bringing together youth, funders, government and civil society to shape the future of youth development in SA.' },
  { id: 5, title: 'Start-Up Bootcamp: Idea to Business', category: 'Bootcamps', date: '2026-11-08', location: 'Polokwane Enterprise Hub, Limpopo', description: 'A 3-day intensive bootcamp turning business ideas into structured, investable business plans.' },
  { id: 6, title: 'Funders & Founders Networking Evening', category: 'Networking', date: '2026-11-27', location: 'The Venue, Rosebank, Johannesburg', description: 'An evening connecting StritGRAD alumni entrepreneurs directly with funders and corporate partners.' }
]

export const pastEvents = [
  { title: 'Youth Economic Tour (YET) 2025 — Gauteng Edition', date: '2025-09-12', location: 'Johannesburg', recap: 'A 3-day tour combining business site visits, workshops and the Absa Financial Inclusion Symposium — closing out to a full house.', image: '/images/gallery/absa-financial-inclusion-symposium.jpg' },
  { title: 'Business Site Visits — Jozi Edition', date: '2025-09-10', location: 'Johannesburg', recap: "Young entrepreneurs toured real operating businesses across Johannesburg, 'the heartbeat of South Africa's economy'.", image: '/images/gallery/absa-tour-workshop.jpg' },
  { title: 'Harmony Gold Community Partnership Engagement', date: '2025-07-25', location: 'Gauteng', recap: 'StritGRAD and Harmony Gold met to strengthen an ongoing community skills-development partnership.', image: '/images/gallery/harmony-partnership.jpg' },
  { title: 'Gauteng School & Community Outreach Day', date: '2025-08-14', location: 'Gauteng', recap: 'The School Exit Programme reached learners and youth directly in their communities alongside Gauteng Province partners.', image: '/images/gallery/gauteng-community-outreach.jpg' }
]

// Real, downloadable resource files live in /public/resources/.
// Each entry's `file` points to the actual file so the Download button works.
export const resources = [
  { id: 1, title: 'Business Plan Template', category: 'Business Templates', description: 'A structured, fill-in business plan template covering every section funders expect to see — from executive summary to financial projections.', file: '/resources/StritGRAD-Business-Plan-Template.docx' },
  { id: 2, title: 'Investor Pitch Deck Template', category: 'Pitch Deck Templates', description: 'An 11-slide, brand-ready pitch deck template used in our Entrepreneurship Development programme — problem, solution, market, traction, ask and more.', file: '/resources/StritGRAD-Pitch-Deck-Template.pptx' },
  { id: 3, title: 'Guide to Youth Funding Opportunities in SA', category: 'Funding Guides', description: 'An orientation guide to government agencies, development finance and incubators supporting South African youth entrepreneurs.', file: '/resources/StritGRAD-Youth-Funding-Guide.pdf' },
  { id: 4, title: 'Personal Budgeting Workbook', category: 'Financial Literacy Resources', description: 'A ready-to-use spreadsheet with a monthly budget, savings tracker and expense log — formulas already built in.', file: '/resources/StritGRAD-Personal-Budgeting-Workbook.xlsx' }
]

export const resourceCategories = ['All', 'Business Templates', 'Pitch Deck Templates', 'Funding Guides', 'Financial Literacy Resources']

export const alumni = [
  { name: 'SpazaEats Founder', business: 'SpazaEats', year: 2025, image: '/images/people/spazaeats-alumni-business.png' }
  // Add real alumni here as { name, business, year, image? }.
  // Only verified profiles should be listed — the Alumni page shows an
  // "invite alumni" prompt to fill remaining space until more are added.
]

export const galleryPhotos = [
  { id: 1, category: 'Graduations', src: '/images/gallery/yaei-visit-group.jpg', caption: 'StritGRAD Academy & Market Solutions team' },
  { id: 2, category: 'Training Workshops', src: '/images/gallery/academy-training-day.jpg', caption: 'Academy training day' },
  { id: 3, category: 'Training Workshops', src: '/images/programmes/computer-literacy-training.jpg', caption: 'Computer literacy training, Jozi Edition' },
  { id: 4, category: 'Entrepreneurship Tours', src: '/images/programmes/fieldwork-outreach.png', caption: 'Field team on outreach' },
  { id: 5, category: 'Entrepreneurship Tours', src: '/images/gallery/absa-tour-workshop.jpg', caption: 'Business site visits, Jozi Edition' },
  { id: 6, category: 'Events', src: '/images/gallery/absa-financial-inclusion-symposium.jpg', caption: 'Absa Financial Inclusion Symposium' },
  { id: 7, category: 'Events', src: '/images/gallery/harmony-partnership.jpg', caption: 'Harmony Gold partnership engagement' },
  { id: 8, category: 'Community Engagement', src: '/images/gallery/gauteng-community-outreach.jpg', caption: 'Gauteng community outreach' },
  { id: 9, category: 'Community Engagement', src: '/images/gallery/school-engagement-classroom.jpg', caption: 'School Exit Programme in session' },
  { id: 10, category: 'Competitions', src: '/images/gallery/partnership-handover.jpg', caption: 'StritGRAD Club recognition handover' },
  { id: 11, category: 'Graduations', src: founderPhoto, caption: 'Founder Joseph Khoza at One Young World 2025' },
  { id: 12, category: 'Community Engagement', src: '/images/people/spazaeats-alumni-business.png', caption: 'SpazaEats — alumni-owned enterprise' }
]

export const galleryCategories = ['Graduations', 'Training Workshops', 'Entrepreneurship Tours', 'Events', 'Competitions', 'Community Engagement']

export const values = [
  { title: 'Ubuntu', description: 'We believe in humanity through others — community, connection and collective upliftment guide everything we do.' },
  { title: 'Excellence', description: 'We hold ourselves to the highest standard in every programme, partnership and interaction.' },
  { title: 'Integrity', description: 'We act honestly and transparently with the youth, funders and communities who trust us.' },
  { title: 'Innovation', description: 'We embrace new ideas and approaches to solve South Africa\'s youth unemployment challenge.' },
  { title: 'Empowerment', description: 'We equip, don\'t rescue — building capability and agency, not dependency.' },
  { title: 'Sustainability', description: 'We design programmes and businesses built to last, long after our direct involvement ends.' }
]

// Only Joseph Khoza is a confirmed real profile. No placeholder team
// members are added — the About page shows only what's listed here.
export const leadership = [
  { name: 'Joseph Khoza', role: 'Founder & Executive Director' }
]

export const leadershipPlaceholderCount = 0

export const provinces = [
  { name: 'Gauteng', youth: '4,200+' },
  { name: 'Western Cape', youth: '2,100+' },
  { name: 'KwaZulu-Natal', youth: '2,600+' },
  { name: 'Eastern Cape', youth: '1,900+' },
  { name: 'Limpopo', youth: '1,300+' },
  { name: 'Mpumalanga', youth: '900+' },
  { name: 'North West', youth: '700+' },
  { name: 'Free State', youth: '650+' },
  { name: 'Northern Cape', youth: '400+' }
]

// LinkedIn intentionally omitted — not currently used by the organisation.
export const socials = {
  facebook: 'https://www.facebook.com/p/Stritgrad-Academy-100092981051739/',
  instagram: 'https://www.instagram.com/stritgrad/',
  instagramHandle: '@stritgrad'
}
