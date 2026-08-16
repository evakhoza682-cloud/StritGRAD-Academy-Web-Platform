import { useEffect, useRef, useState } from 'react'

export default function StatCounter({ end, suffix = '', prefix = '', label, duration = 1800 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(animate)
            else setValue(end)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <div ref={ref} className="text-center px-4">
      <p className="text-4xl md:text-5xl font-extrabold text-gold mb-2 tabular-nums">
        {prefix}{value.toLocaleString()}{suffix}
      </p>
      <p className="text-white/80 text-sm md:text-base font-medium uppercase tracking-wide">{label}</p>
    </div>
  )
}
