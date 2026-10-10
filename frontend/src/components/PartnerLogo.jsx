import { useState, useMemo } from 'react'

const slug = (n) => n.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

/**
 * Partner logo. Looks in /public/images/partners/ for a file matching any of the
 * `logos` base names (png/jpg/jpeg/webp/svg, any case), then the dashed name
 * (e.g. absa-group.png), then the organisation's site icon, then a name badge.
 */
export default function PartnerLogo({ name, logos = [], domain, className = '' }) {
  const sources = useMemo(() => {
    const bases = [...logos, slug(name)]
    const exts = ['png', 'jpg', 'jpeg', 'webp', 'svg', 'PNG', 'JPG']
    const list = []
    bases.forEach((b) => exts.forEach((e) => list.push(encodeURI(`/images/partners/${b}.${e}`))))
    if (domain) list.push(`https://www.google.com/s2/favicons?domain=${domain}&sz=128`)
    return list
  }, [name, logos, domain])
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
        key={sources[idx]}
        src={sources[idx]}
        alt={`${name} logo`}
        onError={() => setIdx((i) => i + 1)}
        className="max-h-12 max-w-full object-contain"
      />
      <span className="text-[11px] text-navy/70 font-semibold text-center leading-tight">{name}</span>
    </div>
  )
}
