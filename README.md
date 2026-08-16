# StritGRAD Academy NPC — Website

A complete, production-ready website for **StritGRAD Academy NPC**, a youth empowerment and
entrepreneurship development organisation in South Africa.

- **Frontend:** React 18 + Vite + React Router + Tailwind CSS — deployed to Vercel
- **Backend:** Node.js + Express, deployed as Vercel serverless functions — with PostgreSQL
- **Brand:** Navy Blue / Gold / White / Grey, Montserrat typeface

```
stritgrad-academy/
├── frontend/     React app (all public pages + admin panel)
└── backend/      Express API (forms, content, admin auth)
```

---

## 1. What's included

**Public pages:** Home, About, Programmes (6 detailed sections), Events, Resource Centre,
Alumni Network, Volunteer, Donate, Partners, News (+ article pages), Gallery, Contact,
Privacy Policy, POPIA, Terms & Conditions.

**Functionality:**
- Fully responsive, mobile-first design in the specified brand colours and Montserrat font
- Animated impact-statistic counters
- 8 working forms (contact, volunteer, mentor, facilitator, corporate volunteering, corporate
  sponsorship, partner enquiry, newsletter) — each posts to the backend, validates input, and
  shows a confirmation/error message
- Donate page with a donation-amount widget ready to connect to PayFast / PayPal / Stripe
- Admin panel (`/admin`) to log in and manage News, Events, Resources and Programmes, and to
  view form submissions
- SEO: per-page titles/descriptions, canonical URLs, Open Graph tags (`react-helmet-async`)
- Floating WhatsApp button with a pre-filled message
- Embedded Google Map on the Contact page

**Imagery:** Real StritGRAD Academy photography and the official logo are now built in
(`frontend/public/images/`) — hero, programme cards, About/Founder section, News, Events, Gallery
and Alumni all use actual photos from your Youth Economic Tour, Absa Financial Inclusion
Symposium, Business Site Visits, Harmony Gold engagement, and Founder Joseph Khoza's One Young
World 2025 feature. A few slots (leadership headshots, upcoming-event photos, video thumbnails)
still use the branded gradient-and-icon placeholder (`src/components/ImageBlock.jsx`) since no
photo was supplied for them yet — swap these in the same way, either via a `src` prop or a plain
`<img>` tag, as photos become available.

**Logo:** The real StritGRAD logo (`frontend/public/images/logo/stritgrad-logo.png`) is used in
the navbar, footer, admin panel, favicon, Open Graph image, and as a subtle low-opacity watermark
on the homepage hero and every inner-page banner.

**Partner logos:** The partner/funder grid (Home + Partners page) pulls real logos live from each
organisation's domain via a public logo-lookup service (`frontend/src/components/PartnerLogo.jsx`,
using `https://logo.clearbit.com/{domain}`) — this only requires an internet connection at
runtime (in the visitor's browser), not at build time. If a logo can't be found for a given
domain, that partner automatically falls back to a clean text badge instead of a broken image.
Domains are set in `frontend/src/utils/content.js` under `partners` — edit or add entries there.

---

## 2. Local development

### Prerequisites
- Node.js 18+ and npm
- (Optional) An SMTP account for outgoing form-notification emails

### Backend
```bash
cd backend
cp .env.example .env      # edit values as needed, especially DATABASE_URL
npm install
npm run migrate            # one-time: creates tables + bootstraps admin account
npm run dev                # http://localhost:5000
```
This backend uses **PostgreSQL** (required for the Vercel serverless deployment target
— see Section 5). For local development, point `DATABASE_URL` at either a local
Postgres instance or a free cloud instance (Neon/Supabase both work fine for dev too).
`npm run migrate` creates all tables and bootstraps an admin account using
`ADMIN_EMAIL` / `ADMIN_PASSWORD` from `.env` (defaults:
`admin@stritgradacademy.org.za` / `admin123` — **change this before going live**). It's
safe to re-run.

### Frontend
```bash
cd frontend
cp .env.example .env       # set VITE_API_URL if not using the Vite proxy
npm install
npm run dev                 # http://localhost:5173
```
The Vite dev server proxies `/api` requests to `http://localhost:5000` automatically (see
`vite.config.js`), so the two apps talk to each other out of the box in development.

### Admin panel
Visit `http://localhost:5173/admin`, log in with the bootstrap credentials above, and manage
News, Events, Resources, Programmes, or view form submissions.

---

## 3. Sending real emails

Form submissions are always saved to the database (visible in the admin panel under
**Form Submissions**). To *also* email your team when a form is submitted, fill in the SMTP
settings in `backend/.env`:

```
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
MAIL_FROM="StritGRAD Academy Website" <no-reply@stritgradacademy.org.za>
MAIL_TO=info@stritgradacademy.org.za
```
Any transactional email provider works (SendGrid, Mailgun, Postmark, Amazon SES, Google
Workspace SMTP, etc.). Without SMTP configured, the backend logs the submission to the console
instead of failing — so the site keeps working while you set email up.

---

## 4. Connecting a real payment gateway

The `/api/donate` endpoint currently records donation intent and returns a confirmation message.
To accept real payments:

1. Create an account with **PayFast** (most common for South African NPOs), PayPal, or Stripe.
2. In `backend/routes/public.js`, replace the donate handler's response with a call to your
   chosen gateway's API to create a checkout session, and return `{ redirectUrl }`.
3. In `frontend/src/pages/Donate.jsx`, redirect the browser to `redirectUrl` on success
   (`window.location.href = res.data.redirectUrl`).
4. Set up a webhook endpoint (e.g. `/api/donate/webhook`) to receive payment confirmations and
   update your records — most gateways require this for reliable payment reconciliation.

PayFast is generally the simplest and cheapest route for a South African NPC (ITSF/PBO
registration may qualify you for reduced fees) — see https://www.payfast.co.za for their
integration docs.

---

## 5. Deployment

Both the frontend and backend deploy to **Vercel** — as two separate Vercel projects
from the same repository (one with Root Directory `frontend`, one with Root Directory
`backend`). This is a common, well-supported pattern and keeps the frontend's static
build cleanly separate from the backend's serverless functions.

### Database: provision Postgres first
Vercel serverless functions have no persistent disk, so this backend uses **PostgreSQL**
(via `pg`) instead of the SQLite file used in earlier prototypes. Before deploying:

1. Provision a Postgres database — the easiest options are:
   - **Vercel Postgres**: in your Vercel dashboard, **Storage → Create Database →
     Postgres**. Vercel can auto-inject `DATABASE_URL` into your backend project.
   - **Neon** (https://neon.tech) or **Supabase** (https://supabase.com) — both have
     generous free tiers and work identically via a `DATABASE_URL` connection string.
2. Run the schema migration once, from your machine, pointed at that database:
   ```bash
   cd backend
   DATABASE_URL="postgres://..." npm run migrate
   ```
   This creates all tables and bootstraps the admin account. See `backend/db/README.md`
   for details.

### Backend → Vercel (serverless functions)
1. Push this repository to GitHub/GitLab/Bitbucket.
2. In Vercel, **New Project** → import the repo → set **Root Directory** to `backend`.
3. Framework preset: **Other**. Vercel will detect `backend/api/index.js` as a
   serverless function automatically (routing is handled by `backend/vercel.json`,
   which sends every request to that function — the Express app inside still does
   its own internal routing for `/api/contact`, `/api/admin/login`, etc., exactly as
   it does locally).
4. Add environment variables (from `backend/.env.example`): `DATABASE_URL`,
   `JWT_SECRET` (generate a long random value), `CLIENT_ORIGIN` (your frontend's
   Vercel URL — see below), `ADMIN_EMAIL`/`ADMIN_PASSWORD` (only used by the migration
   script, not at runtime), and SMTP settings if you want email notifications.
5. Deploy. Vercel gives you a `https://<backend-project-name>.vercel.app` URL and
   provisions SSL automatically.
6. **Important:** Node-API packages like `bcryptjs` and `pg` are pure-JS (no native
   compilation step), so they deploy cleanly on Vercel's Node runtime with no extra
   configuration.

### Frontend → Vercel (static build)
1. In Vercel, **New Project** → import the same repo → set **Root Directory** to
   `frontend`.
2. Framework preset: **Vite**. Build command: `npm run build`. Output directory:
   `dist` (all auto-detected).
3. Add an environment variable: `VITE_API_URL` = your backend project's URL from
   above (e.g. `https://stritgrad-backend.vercel.app`).
4. Deploy. Add your custom domain under **Project Settings → Domains** and follow
   Vercel's DNS instructions.
5. Once both are deployed, go back to the **backend** project's environment
   variables and set `CLIENT_ORIGIN` to your final frontend domain(s)
   (comma-separated if you have more than one, e.g. the `.vercel.app` preview URL
   plus your custom domain), then redeploy the backend so CORS allows requests from
   the right origin.

### Custom domain + SSL
Point your domain's DNS at Vercel for the frontend project as described above.
Optionally point a subdomain (e.g. `api.yourdomain.org.za`) at the backend project via
a `CNAME` record, then add that subdomain under the backend project's custom domain
settings — update `VITE_API_URL` on the frontend accordingly. Vercel provisions and
renews SSL certificates automatically (Let's Encrypt) on both projects — no manual
certificate management needed.

### A note on serverless behaviour
A few things behave differently on serverless vs. a traditional always-on server —
worth knowing before you rely on them at scale:
- **Rate limiting** (`express-rate-limit` in `app.js`) is per-function-instance, not
  globally shared — fine for casual abuse protection, but not a hard global limit
  under high concurrent traffic. For strict global rate limiting, front the API with
  a shared store like Upstash Redis.
- **Cold starts**: the first request after a period of inactivity will be a little
  slower as Vercel spins up a fresh function instance and the database pool
  reconnects. Subsequent requests are fast.
- **Local development is unaffected** — `npm run dev` in `backend/` runs the exact
  same Express app as a normal long-running server, so day-to-day development doesn't
  change at all.

### Performance notes already built in
- Images use `loading="lazy"` via the `ImageBlock` component
- Vite's production build automatically code-splits and minifies JS/CSS
- Tailwind's production build purges unused CSS (see the build output: ~30KB CSS gzip: ~6KB)

---

## 6. Security checklist before going live
- [ ] Change `ADMIN_EMAIL` / `ADMIN_PASSWORD` before running `npm run migrate` against production
- [ ] Generate a long, random `JWT_SECRET`
- [ ] Set `CLIENT_ORIGIN` on the backend to your real frontend domain(s) only
- [ ] Configure real SMTP credentials
- [ ] Wire up a real payment gateway and remove the donation stub
- [ ] Replace any remaining placeholder imagery with real, rights-cleared photography
- [ ] Fill in real leadership bios and alumni profiles (see the placeholder notes in
      `frontend/src/utils/content.js` — the About and Alumni pages currently show
      honest "add team member" / "get featured" placeholders rather than invented names)
- [ ] Update office address, phone number and social links in `Footer.jsx` and `Contact.jsx`
- [ ] Register your domain with the Information Regulator if required, and finalise the POPIA
      and Privacy Policy pages with your own legal counsel — the included text is a starting
      template, not legal advice

---

## 7. Content editing without touching code

Once deployed, day-to-day content (news articles, events, resources, programme summaries) can
be added, edited or removed through the **Admin Panel** at `/admin` — no code changes or
redeploys required for that content. Static structural content (page copy, mission/vision,
values, leadership bios) lives in `frontend/src/utils/content.js` and page components, and can
be edited there and redeployed as your organisation evolves.
