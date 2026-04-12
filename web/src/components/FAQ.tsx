const faqs = [
  {
    q: 'Is Alfredo reading everything I do?',
    a: "No. Alfredo only processes context you actively work with — tabs you visit and documents you interact with during a session. It doesn't log keystrokes, passwords, or background tabs you never open.",
  },
  {
    q: 'Does it work with ChatGPT, Claude, and other AIs?',
    a: 'Yes. Alfredo is AI-agnostic. It prepares context as clean, copyable text that works with any AI assistant — ChatGPT, Claude, Gemini, or anything else you use.',
  },
  {
    q: 'Where does my data go?',
    a: 'Your context stays local. Nothing is sent to a server unless you explicitly share it with an AI. Alfredo runs entirely in your browser.',
  },
  {
    q: 'When can I use it?',
    a: "Soon. Alfredo is in early development. Join the waitlist and you'll be among the first to get access when we launch.",
  },
]

export default function FAQ() {
  return (
    <section
      id="waitlist"
      className="relative py-28 px-6"
      style={{ background: 'var(--bg-base)' }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 block"
            style={{ color: 'var(--accent)' }}
          >
            FAQ
          </span>
          <h2
            className="text-4xl lg:text-5xl font-black tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Questions from the field.
          </h2>
        </div>

        {/* Q&A list */}
        <dl className="flex flex-col gap-0">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="py-7"
              style={{
                borderBottom: i < faqs.length - 1 ? '1px solid var(--border-dim)' : 'none',
              }}
            >
              <dt
                className="text-base font-bold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                {item.q}
              </dt>
              <dd
                className="text-sm leading-relaxed m-0"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.a}
              </dd>
            </div>
          ))}
        </dl>

        {/* Final CTA */}
        <div
          className="mt-20 rounded-2xl p-10 text-center flex flex-col items-center gap-6"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-dim)',
          }}
        >
          {/* Mini Alfredo accent */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle, rgba(59,228,255,0.15) 0%, transparent 70%)',
              border: '1px solid rgba(59,228,255,0.2)',
            }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M14 4v16M6 12l8 8 8-8" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h3
            className="text-2xl lg:text-3xl font-black"
            style={{ color: 'var(--text-primary)' }}
          >
            Ready when you are.
          </h3>
          <p className="text-base max-w-sm" style={{ color: 'var(--text-secondary)' }}>
            Join the waitlist and be first to know when Alfredo is ready for the field.
          </p>
          <a
            href="mailto:hello@alfredo.app?subject=Alfredo waitlist"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-sm tracking-wide transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: 'var(--accent)',
              color: '#050711',
            }}
          >
            Join the waitlist
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <p className="text-xs" style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>
            No spam. Just a heads-up when we launch.
          </p>
        </div>
      </div>
    </section>
  )
}
