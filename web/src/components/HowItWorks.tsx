interface Step {
  number: string
  title: string
  description: string
  icon: React.ReactNode
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Watch',
    description:
      'Alfredo sits in your browser, quietly watching the tabs and documents you actually use.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="7" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="14" cy="14" r="2.5" fill="currentColor"/>
        <path d="M2 14c3-6 7.5-9 12-9s9 3 12 9c-3 6-7.5 9-12 9S5 20 2 14Z" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Collect',
    description:
      'He pulls out the important bits — docs, links, snippets — and organizes them as context.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M9 10h10M9 14h10M9 18h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="21" cy="21" r="4" fill="var(--bg-card)" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M21 19v4M19 21h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Deliver',
    description:
      'When your AI needs context, Alfredo is already there with a dossier, not a data dump.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M4 14l7 7L24 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'var(--bg-surface)' }}
    >
      {/* Section label + title */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 block"
            style={{ color: 'var(--accent)' }}
          >
            How it works
          </span>
          <h2
            className="text-4xl lg:text-5xl font-black tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Three moves. Zero friction.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-xl p-8 flex flex-col gap-6 transition-all duration-300 cursor-default"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-dim)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--border-accent)'
                el.style.boxShadow = '0 0 28px rgba(59,228,255,0.12)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = 'var(--border-dim)'
                el.style.boxShadow = 'none'
              }}
            >
              {/* Step number pill */}
              <span
                className="self-start text-xs font-bold tracking-widest px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(59,228,255,0.1)',
                  color: 'var(--accent)',
                  border: '1px solid rgba(59,228,255,0.2)',
                }}
              >
                {step.number}
              </span>

              {/* Icon */}
              <div style={{ color: 'var(--accent)' }}>{step.icon}</div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3
                  className="text-xl font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {step.description}
                </p>
              </div>

              {/* Connector line (between cards on desktop) */}
              <div
                className="absolute top-12 -right-3 hidden md:block w-6 h-px last:hidden"
                style={{ background: 'var(--border-dim)' }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
