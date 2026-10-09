import { useState } from 'react'

const slug = (n) => n.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

/**
 * Partner logo with a fallback chain:
 *  1. an official file you drop in /public/images/partners/<slug>.png
 *  2. the organisation's site icon (via its domain)
 *  3. a clean name badge
 */
export default function PartnerLogo({ name, domain, className = '' }) {
  const sources = [`/images/partners/${slug(name)}.png`]
  if (domain) sources.push(`https://www.google.com/s2/favicons?domain=${domain}&sz=128`)
  const [idx, setIdx] = useState(0)

  if (idx >= sources.length) {
    return (
      <div className={`h-24 rounded-lg bg-offwhite flex items-center justify-center px-3 ${className}`}>
        <span className="text-navy font-bold text-xs text-center leading-tight">{name}</span>
      </div>
    )
  }

  return (
    <div className={`h-24 rounded-lg bg-white border border-gray-100 flex flex-col items-center justify-center px-3 gap-1 ${className}`} title={name}>
      <img
        src={sources[idx]}
        alt={`${name} logo`}
        loading="lazy"
        onError={() => setIdx(idx + 1)}
        className="max-h-10 max-w-full object-contain"
      />
      <span className="text-[11px] text-navy/70 font-semibold text-center leading-tight">{name}</span>
    </div>
  )
}
