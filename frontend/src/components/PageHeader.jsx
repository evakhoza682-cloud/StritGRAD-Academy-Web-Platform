export default function PageHeader({ eyebrow, title, description, icon: Icon }) {
  return (
    <div className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-gold/10 blur-3xl" />
      <img
        src="/images/logo/stritgrad-logo.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-16 -bottom-16 w-80 h-80 object-contain opacity-[0.08]"
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
        {eyebrow && (
          <p className="text-gold font-semibold text-sm uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
            {Icon && <Icon size={16} />} {eyebrow}
          </p>
        )}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white max-w-3xl leading-tight">{title}</h1>
        {description && <p className="text-white/80 text-base md:text-lg max-w-2xl mt-5 leading-relaxed">{description}</p>}
      </div>
    </div>
  )
}
