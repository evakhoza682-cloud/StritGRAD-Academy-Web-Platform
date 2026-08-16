// Branded placeholder used across the site wherever real photography should go.
// Swap the `src` prop with a real image URL/path once photography is available —
// the component falls back to this gradient+icon treatment automatically if no src is passed.
export default function ImageBlock({ src, alt = '', icon: Icon, className = '', tone = 'navy' }) {
  const tones = {
    navy: 'from-navy-900 via-navy-700 to-gold-600',
    gold: 'from-gold-600 via-gold-500 to-navy-800',
    light: 'from-navy-100 via-gold-100 to-navy-200'
  }
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`object-cover w-full h-full ${className}`}
      />
    )
  }
  return (
    <div className={`bg-gradient-to-br ${tones[tone]} flex items-center justify-center w-full h-full ${className}`}>
      {Icon && <Icon className="text-white/70" size={48} strokeWidth={1.5} />}
    </div>
  )
}
