export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="py-8 px-6"
      style={{
        background: 'var(--bg-base)',
        borderTop: '1px solid var(--border-dim)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className="text-sm"
          style={{ color: 'var(--text-secondary)' }}
        >
          &copy; {year} Alfredo. All rights reserved.
        </p>
        <nav className="flex items-center gap-6" aria-label="Footer navigation">
          <a
            href="#"
            className="text-sm transition-colors duration-150 hover:text-[var(--text-primary)]"
            style={{ color: 'var(--text-secondary)' }}
          >
            Privacy
          </a>
          <a
            href="mailto:hello@alfredo.app"
            className="text-sm transition-colors duration-150 hover:text-[var(--text-primary)]"
            style={{ color: 'var(--text-secondary)' }}
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
