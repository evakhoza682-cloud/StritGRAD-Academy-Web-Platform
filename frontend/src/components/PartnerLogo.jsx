import { useState } from 'react'

/**
 * Renders a partner/funder logo using the organisation's domain via a public
 * logo lookup service. Falls back to a clean text badge if the logo can't be
 * loaded (offline, domain typo, or the service being unavailable) so the
 * partners grid never shows a broken image.
 */
export default function PartnerLogo({ name, domain, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed || !domain) {
    return (
      <div className={`h-20 rounded-lg bg-offwhite flex items-center justify-center px-3 ${className}`}>
        <span className="text-navy/70 font-semibold text-xs text-center leading-tight">{name}</span>
      </div>
    )
  }

  return (
    <div className={`h-20 rounded-lg bg-white border border-gray-100 flex items-center justify-center px-4 ${className}`} title={name}>
      <img
        src={`https://logo.clearbit.com/${domain}?size=160`}
        alt={`${name} logo`}
        loading="lazy"
        onError={() => setFailed(true)}
        className="max-h-10 max-w-full object-contain grayscale hover:grayscale-0 transition"
      />
    </div>
  )
}
