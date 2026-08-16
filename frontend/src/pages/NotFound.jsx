import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'
import SEO from '../components/SEO.jsx'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <Compass className="text-gold mb-6" size={56} />
      <h1 className="text-4xl font-extrabold text-navy mb-3">404 — Page Not Found</h1>
      <p className="text-graytxt mb-8 max-w-md">The page you're looking for doesn't exist or may have moved. Let's get you back on track.</p>
      <Link to="/" className="btn-navy">Back to Homepage</Link>
    </div>
  )
}
