interface ValueCard {
  title: string
  description: string
  icon: string
}

const values: ValueCard[] = [
  {
    icon: '⚡',
    title: 'Always-on context',
    description:
      'Stop copy-pasting the same URLs and summaries into your AI. Alfredo keeps a running brief, automatically.',
  },
  {
    icon: '👤',
    title: 'Invisible until needed',
    description:
      "Alfredo doesn't get in your way. He quietly keeps notes in the background, surfacing only when it counts.",
  },
  {
    icon: '🔗',
    title: 'AI-agnostic',
    description:
      "Works with whatever AI you're using. He's loyal to you, not to a single model or platform.",
  },
  {
    icon: '🔒',
    title: 'Private by default',
    description:
      'Your context stays on your side of the screen. No cloud sync, no telemetry, no surprises.',
  },
]

export default function WhyAlfredo() {
  return (
    <section
      className="relative py-28 px-6"
      style={{ background: 'var(--bg-base)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 block"
            style={{ color: 'var(--accent-alt)' }}
          >
            Why Alfredo
          </span>
          <h2
            className="text-4xl lg:text-5xl font-black tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Built for people who think fast.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((card) => (
            <div
              key={card.title}
              className="rounded-xl p-8 flex flex-col gap-4 transition-all duration-300 cursor-default"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-dim)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.transform = 'translateY(-4px)'
                el.style.borderColor = 'rgba(245,230,99,0.3)'
                el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.4)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.transform = 'translateY(0px)'
                el.style.borderColor = 'var(--border-dim)'
                el.style.boxShadow = 'none'
              }}
            >
              <span className="text-3xl" role="img" aria-label={card.title}>
                {card.icon}
              </span>
              <h3
                className="text-xl font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
