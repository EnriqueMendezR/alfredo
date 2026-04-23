import Image from "next/image";

export default function ContextPage() {
  return (
    <div className="min-h-screen bg-[#1d1d1d] font-sans text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-[#2a2a2a]">
        <a href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">alfredo</span>
          <Image
            src="/alfredotie1-transparent.svg"
            alt="Alfredo"
            width={16}
            height={16}
          />
        </a>
        <a
          href="#"
          className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
        >
          Sign in
        </a>
      </nav>

      {/* Page header */}
      <div className="max-w-3xl mx-auto px-8 pt-16 pb-8">
        <div className="flex flex-col gap-2 mb-10">
          <h1 className="text-3xl font-bold tracking-tight">Your AI Context</h1>
          <p className="text-zinc-400 text-base leading-relaxed">
            Tell Alfredo who you are and how you like to work. This context shapes every conversation.
          </p>
        </div>

        <form className="flex flex-col gap-8">

          {/* Identity */}
          <section className="flex flex-col gap-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#2a2a2a]">
              <div className="w-8 h-8 rounded-lg bg-[#333] flex items-center justify-center text-base">👤</div>
              <h2 className="text-lg font-semibold">Identity</h2>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-300">Your name</label>
              <input
                type="text"
                placeholder="e.g. Alex"
                className="h-11 rounded-lg border border-[#333] bg-[#252525] text-white placeholder-zinc-600 px-4 text-sm outline-none focus:border-zinc-500 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-300">Role or occupation</label>
              <input
                type="text"
                placeholder="e.g. Software engineer, student, designer…"
                className="h-11 rounded-lg border border-[#333] bg-[#252525] text-white placeholder-zinc-600 px-4 text-sm outline-none focus:border-zinc-500 transition-colors"
              />
            </div>
          </section>

          {/* Goals */}
          <section className="flex flex-col gap-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#2a2a2a]">
              <div className="w-8 h-8 rounded-lg bg-[#333] flex items-center justify-center text-base">🎯</div>
              <h2 className="text-lg font-semibold">Goals &amp; Focus</h2>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-300">What are you mainly using Alfredo for?</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { icon: "✍️", label: "Writing" },
                  { icon: "🔍", label: "Research" },
                  { icon: "💻", label: "Coding" },
                  { icon: "📖", label: "Learning" },
                  { icon: "📋", label: "Planning" },
                  { icon: "💡", label: "Brainstorming" },
                ].map(({ icon, label }) => (
                  <label
                    key={label}
                    className="flex items-center gap-3 h-11 px-4 rounded-lg border border-[#333] bg-[#252525] cursor-pointer hover:border-zinc-500 transition-colors has-[:checked]:border-[#E4D126] has-[:checked]:bg-[#2a2800]"
                  >
                    <input type="checkbox" className="sr-only" />
                    <span className="text-base">{icon}</span>
                    <span className="text-sm font-medium">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-300">Current projects or topics you&apos;re focused on</label>
              <textarea
                rows={3}
                placeholder="e.g. Building a Chrome extension with React, studying for a certification exam…"
                className="rounded-lg border border-[#333] bg-[#252525] text-white placeholder-zinc-600 px-4 py-3 text-sm outline-none focus:border-zinc-500 transition-colors resize-none"
              />
            </div>
          </section>

          {/* AI Behavior */}
          <section className="flex flex-col gap-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#2a2a2a]">
              <div className="w-8 h-8 rounded-lg bg-[#333] flex items-center justify-center text-base">🤖</div>
              <h2 className="text-lg font-semibold">AI Behavior</h2>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-300">Response style</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { value: "concise", label: "Concise", desc: "Short, to the point" },
                  { value: "balanced", label: "Balanced", desc: "Moderate detail" },
                  { value: "detailed", label: "Detailed", desc: "Thorough explanations" },
                ].map(({ value, label, desc }) => (
                  <label
                    key={value}
                    className="flex flex-col gap-1 px-4 py-3 rounded-lg border border-[#333] bg-[#252525] cursor-pointer hover:border-zinc-500 transition-colors has-[:checked]:border-[#E4D126] has-[:checked]:bg-[#2a2800]"
                  >
                    <input type="radio" name="style" value={value} className="sr-only" />
                    <span className="text-sm font-semibold">{label}</span>
                    <span className="text-xs text-zinc-500">{desc}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-300">Tone</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["Professional", "Friendly", "Direct", "Casual"].map((tone) => (
                  <label
                    key={tone}
                    className="flex items-center justify-center h-11 rounded-lg border border-[#333] bg-[#252525] text-sm font-medium cursor-pointer hover:border-zinc-500 transition-colors has-[:checked]:border-[#E4D126] has-[:checked]:bg-[#2a2800]"
                  >
                    <input type="radio" name="tone" value={tone.toLowerCase()} className="sr-only" />
                    {tone}
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* Custom instructions */}
          <section className="flex flex-col gap-5">
            <div className="flex items-center gap-3 pb-3 border-b border-[#2a2a2a]">
              <div className="w-8 h-8 rounded-lg bg-[#333] flex items-center justify-center text-base">📝</div>
              <h2 className="text-lg font-semibold">Custom Instructions</h2>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-zinc-300">
                Anything else Alfredo should always know or keep in mind
              </label>
              <textarea
                rows={5}
                placeholder="e.g. Always respond in Spanish. When writing code, prefer TypeScript. Don't use bullet points unless I ask…"
                className="rounded-lg border border-[#333] bg-[#252525] text-white placeholder-zinc-600 px-4 py-3 text-sm outline-none focus:border-zinc-500 transition-colors resize-none"
              />
              <p className="text-xs text-zinc-600">These instructions are added to every conversation.</p>
            </div>
          </section>

          {/* Save */}
          <div className="flex items-center justify-end gap-4 pt-2 pb-12">
            <button
              type="button"
              className="h-11 px-6 rounded-lg border border-[#333] text-sm font-medium text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
            >
              Reset to defaults
            </button>
            <button
              type="submit"
              className="h-11 px-6 rounded-lg bg-[#E4D126] text-black text-sm font-semibold hover:bg-[#cebb1a] transition-colors"
            >
              Save context
            </button>
          </div>

        </form>
      </div>

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
