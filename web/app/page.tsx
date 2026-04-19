import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1d1d1d] font-sans text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-[#2a2a2a]">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">alfredo</span>
          <Image
            src="/alfredotie1-transparent.svg"
            alt="Alfredo"
            width={16}
            height={16}
          />
        </div>
        <a
          href="#"
          className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
        >
          Sign in
        </a>
      </nav>

      {/* Hero */}
      <section className="flex flex-col-reverse lg:flex-row items-center max-w-6xl mx-auto px-8 pt-20 pb-24 gap-16">

        {/* Left */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium text-zinc-400">Turn tabs into tasks in seconds</span>
          </div>

          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight">
            Your AI co-pilot,<br />right in the browser.
          </h1>

          <p className="text-lg text-zinc-400 max-w-md leading-relaxed">
            Chat with AI, manage tasks with timers, and learn anything — all without leaving your current tab.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-2">
            <input
              type="email"
              placeholder="Want to learn more? Enter your email"
              className="flex-1 max-w-xs h-12 rounded-lg border border-[#333] bg-[#252525] text-white placeholder-zinc-500 px-4 text-sm outline-none focus:border-zinc-500 transition-colors"
            />
            <button className="h-12 px-6 rounded-lg bg-[#E4D126] text-black text-sm font-semibold hover:bg-[#cebb1a] transition-colors whitespace-nowrap cursor-pointer">
              Add to Chrome
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-zinc-500">
            <span>✓ Generate drafts instantly</span>
            <span>✓ Always available </span>
            <span>✓ Optimize your workflow</span>
          </div>
        </div>

        {/* Right — product screenshot placeholder */}
        <div className="flex-1 w-full max-w-md lg:max-w-none aspect-4/3 rounded-2xl bg-[#252525] flex items-center justify-center">
          <span className="text-zinc-600 text-sm">[ Extension screenshot ]</span>
        </div>

      </section>

      {/* Features */}
      <section className="bg-[#252525] py-24 px-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-24">
          <h2 className="text-3xl font-bold text-center tracking-tight">
            Everything you need, in one sidebar.
          </h2>

          {/* Feature 1 — text left, image right */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#333] flex items-center justify-center text-xl">💬</div>
              <h3 className="text-2xl font-bold">AI Chat</h3>
              <p className="text-zinc-400 leading-relaxed max-w-md">
                Ask anything, get instant answers. Alfredo uses GPT to help you research, write, summarize, and more — right in your browser.
              </p>
            </div>
            <div className="flex-1 w-full aspect-video rounded-2xl bg-[#2a2a2a] border border-[#333] flex items-center justify-center">
              <span className="text-zinc-600 text-sm">[ AI Chat screenshot ]</span>
            </div>
          </div>

          {/* Feature 2 — image left, text right */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#333] flex items-center justify-center text-xl">✅</div>
              <h3 className="text-2xl font-bold">Task Manager</h3>
              <p className="text-zinc-400 leading-relaxed max-w-md">
                Create tasks with countdown timers. Get notified when time is up, and stay on top of your to-do list without switching apps.
              </p>
            </div>
            <div className="flex-1 w-full aspect-video rounded-2xl bg-[#2a2a2a] border border-[#333] flex items-center justify-center">
              <span className="text-zinc-600 text-sm">[ Task Manager screenshot ]</span>
            </div>
          </div>

          {/* Feature 3 — text left, image right */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#333] flex items-center justify-center text-xl">📚</div>
              <h3 className="text-2xl font-bold">Learn Mode</h3>
              <p className="text-zinc-400 leading-relaxed max-w-md">
                Turn any page into a learning session. Alfredo can explain, quiz, and guide you through content on the page you&apos;re reading.
              </p>
            </div>
            <div className="flex-1 w-full aspect-video rounded-2xl bg-[#2a2a2a] border border-[#333] flex items-center justify-center">
              <span className="text-zinc-600 text-sm">[ Learn Mode screenshot ]</span>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-8 text-center">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-4xl font-bold tracking-tight">Ready to work smarter?</h2>
          <p className="text-zinc-400 text-lg">Install Alfredo in seconds.</p>
          <button className="px-8 py-3 rounded-lg bg-[#E4D126] text-black text-sm font-semibold hover:bg-[#cebb1a] transition-colors cursor-pointer">
            Add to Chrome</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2a2a2a] py-8 px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-sm text-zinc-500">
          <span className="font-semibold text-white">alfredo</span>
          <span>© {new Date().getFullYear()} Alfredo. All rights reserved.</span>
        </div>
      </footer>

    </div>
  );
}
