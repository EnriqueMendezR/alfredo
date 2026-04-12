export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(59,228,255,0.06) 0%, transparent 65%), radial-gradient(ellipse 60% 80% at 30% 60%, rgba(245,230,99,0.03) 0%, transparent 60%), linear-gradient(180deg, #050711 0%, #020218 100%)',
      }}
    >
      {/* Diagonal light beams */}
      <div className="hero-beams" aria-hidden="true" />

      {/* Spotlight cone from top-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 70% at 75% 0%, rgba(59,228,255,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — text content */}
        <div className="flex flex-col gap-8">
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: 'var(--accent)' }}
          >
            Your AI&apos;s silent partner
          </span>

          <h1
            className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Alfredo watches&nbsp;your tabs so&nbsp;your AI&nbsp;
            <span style={{ color: 'var(--accent)' }}>doesn&apos;t have&nbsp;to.</span>
          </h1>

          <p
            className="text-lg leading-relaxed max-w-xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            A browser extension that quietly collects the right context from
            your workflow and feeds it to your AI when it matters.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'var(--accent)',
                color: '#050711',
              }}
            >
              Add Alfredo to your browser
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              style={{
                border: '1px solid var(--border-accent)',
                color: 'var(--text-primary)',
              }}
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Right — Alfredo character */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative flex items-center justify-center">
            {/* Outer glow ring */}
            <div
              className="absolute rounded-full"
              style={{
                width: '340px',
                height: '340px',
                background:
                  'radial-gradient(circle, rgba(59,228,255,0.18) 0%, rgba(59,228,255,0.04) 50%, transparent 70%)',
                animation: 'glow-pulse 3.5s ease-in-out infinite',
              }}
              aria-hidden="true"
            />
            {/* Second glow ring — yellow tint */}
            <div
              className="absolute rounded-full"
              style={{
                width: '260px',
                height: '260px',
                background:
                  'radial-gradient(circle, rgba(245,230,99,0.08) 0%, transparent 70%)',
                animation: 'glow-pulse 3.5s ease-in-out infinite',
                animationDelay: '1.75s',
              }}
              aria-hidden="true"
            />
            {/* Alfredo */}
            <img
              src="/alfredo.svg"
              alt="Alfredo — your AI's silent partner"
              width={240}
              height={330}
              className="relative z-10 drop-shadow-[0_0_40px_rgba(59,228,255,0.25)]"
              style={{
                animation: 'float 4s ease-in-out infinite',
                imageRendering: 'pixelated',
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #020218)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
