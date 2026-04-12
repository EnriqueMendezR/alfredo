const upcomingFeatures = [
  {
    label: 'Tab-aware context capture',
    description: 'Alfredo knows which tabs you actually used, not just which ones you opened.',
  },
  {
    label: 'Workspace-level memory',
    description: 'Project-scoped context that persists between sessions and AI conversations.',
  },
  {
    label: 'Automatic briefings',
    description: 'One-click summaries ready to paste into any AI chat, formatted the way you need.',
  },
]

function BrowserMockup({ label }: { label: string }) {
  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-dim)',
        minWidth: 0,
      }}
    >
      {/* Browser chrome bar */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid var(--border-dim)' }}
      >
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }} />
          <div className="w-3 h-3 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }} />
        </div>
        <div
          className="flex-1 mx-3 h-6 rounded-md flex items-center px-3"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          <div className="w-24 h-2 rounded" style={{ background: 'rgba(255,255,255,0.08)' }} />
        </div>
      </div>

      {/* Content area */}
      <div className="p-5 flex flex-col gap-3">
        <div className="h-3 w-3/4 rounded" style={{ background: 'rgba(255,255,255,0.07)' }} />
        <div className="h-3 w-full rounded" style={{ background: 'rgba(255,255,255,0.05)' }} />
        <div className="h-3 w-5/6 rounded" style={{ background: 'rgba(255,255,255,0.05)' }} />
        <div className="h-3 w-2/3 rounded" style={{ background: 'rgba(255,255,255,0.04)' }} />
        <div className="mt-2 h-px" style={{ background: 'var(--border-dim)' }} />
        {/* Alfredo panel overlay */}
        <div
          className="mt-1 rounded-lg p-3 flex flex-col gap-2"
          style={{ background: 'rgba(59,228,255,0.06)', border: '1px solid rgba(59,228,255,0.2)' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
            <span className="text-xs font-semibold" style={{ color: 'var(--accent)' }}>
              Alfredo — {label}
            </span>
          </div>
          <div className="h-2 w-5/6 rounded" style={{ background: 'rgba(59,228,255,0.15)' }} />
          <div className="h-2 w-4/6 rounded" style={{ background: 'rgba(59,228,255,0.1)' }} />
        </div>
      </div>
    </div>
  )
}

export default function Preview() {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'var(--bg-surface)' }}
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(59,228,255,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 block"
            style={{ color: 'var(--accent)' }}
          >
            Coming soon
          </span>
          <h2
            className="text-4xl lg:text-5xl font-black tracking-tight mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            The dossier is being assembled.
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Alfredo is in early development. Here&apos;s what&apos;s coming.
          </p>
        </div>

        {/* Two-column: feature list + mockups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <ul className="flex flex-col gap-6">
            {upcomingFeatures.map((f) => (
              <li key={f.label} className="flex gap-4 items-start">
                <span
                  className="mt-1 flex-shrink-0 w-2 h-2 rounded-full"
                  style={{ background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }}
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
                    {f.label}
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {f.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* Browser mockups */}
          <div className="flex flex-col gap-4">
            <BrowserMockup label="3 tabs collected" />
            <BrowserMockup label="Context ready" />
          </div>
        </div>
      </div>
    </section>
  )
}
