// app/community/page.tsx
import Link from "next/link";

export default function CommunityPage() {
  return (
    <main className="content bg-gradient-to-r from-[#041c32] from-40% to-[#050c16] w-full min-h-screen h-auto text-white flex flex-col flex-grow">
      {/* Simple Header */}
      <header className="w-full border-b border-[hsla(0,0%,100%,.12)] bg-[#041c32]/40 backdrop-blur-md sticky top-0 z-[1000]">
        <div className="mx-auto max-w-[82rem] flex items-center justify-between py-4 px-[.85rem] md:px-[2.1rem] lg:px-[4rem] 2xl:px-0">
          <Link href="/" className="text-[1.2rem] md:text-[1.5rem] font-bold tracking-wide">
            <span className="text-blue-400">F</span>OLAGBADE
          </Link>

          <nav className="flex items-center gap-3">
            <Link
              href="/"
              className="uppercase text-sm font-[500] px-4 py-2 rounded-full border border-[hsla(0,0%,100%,.18)] hover:bg-white/5 transition"
            >
              Back Home
            </Link>

            <a
              href="https://t.co/Nwvc4b9GWl"
              target="_blank"
              className="uppercase text-sm font-[500] px-4 py-2 rounded-full bg-blue-500 border-2 border-blue-500 hover:bg-black hover:border-white transition"
            >
              {/* Join on X */}
              Join Community
            </a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <section className="mx-auto max-w-[82rem] w-full px-[.85rem] md:px-[2.1rem] lg:px-[4rem] 2xl:px-0 py-12 md:py-16">
        {/* Page Title */}
        <div className="mb-10">
          <span
            className="inline whitespace-nowrap text-white w-auto px-[12px] py-[5px] rounded-[4px] uppercase tracking-widest text-[14px] bg-[#063560]"
            style={{ inlineSize: "fit-content" }}
          >
            Community
          </span>

          <h1 className="mt-4 text-[34px] md:text-[44px] font-bold uppercase leading-tight">
            DevCoder
          </h1>

          <p className="mt-3 text-white/85 text-[16px] md:text-[18px] max-w-[70ch] leading-7">
            A growth-focused developer community helping frontend engineers move from tutorial dependency
            to confident product builders through practical conversations, weekly spaces, and structured learning themes.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
            //   href="https://x.com/deevcoder"
              href="https://t.co/Nwvc4b9GWl"
              target="_blank"
              className="uppercase text-center bg-blue-500 px-6 py-3 rounded-full border-2 border-blue-500 hover:bg-black hover:border-white transition font-[600]"
            >
              Join Community
            </a>

            <a
              href="#what-we-do"
              className="uppercase text-center px-6 py-3 rounded-full border border-[hsla(0,0%,100%,.2)] hover:bg-white/5 transition font-[600]"
            >
              See what we do
            </a>
          </div>
        </div>

        {/* 1. What is DevCoder? */}
        <div className="bg-[#052442] border border-[#0788ff]/[0.18] rounded-xl p-6 md:p-8 mb-6">
          <h2 className="text-[22px] md:text-[26px] font-bold uppercase">
            1. What is DevCoder?
          </h2>
          <p className="mt-3 text-white/85 leading-7 max-w-[85ch]">
            DevCoder is a focused learning circle for frontend developers who are tired of “watching more”
            and ready to start shipping. We learn in public, build in public, and grow through honest dev conversations.
          </p>
        </div>

        {/* 2. What We Do */}
        <div id="what-we-do" className="bg-[#052442] border border-[#0788ff]/[0.18] rounded-xl p-6 md:p-8 mb-6">
          <h2 className="text-[22px] md:text-[26px] font-bold uppercase">
            2. What We Do
          </h2>

          <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-white/85">
            <li className="p-4 rounded-lg bg-white/5 border border-[hsla(0,0%,100%,.12)]">
              <p className="font-semibold text-white">Weekly X Spaces</p>
              <p className="mt-1 leading-7">Focused technical topics that actually matter for real projects.</p>
            </li>

            <li className="p-4 rounded-lg bg-white/5 border border-[hsla(0,0%,100%,.12)]">
              <p className="font-semibold text-white">Real-world building discussions</p>
              <p className="mt-1 leading-7">How to structure apps, handle tradeoffs, and ship cleaner code.</p>
            </li>

            <li className="p-4 rounded-lg bg-white/5 border border-[hsla(0,0%,100%,.12)]">
              <p className="font-semibold text-white">Community accountability</p>
              <p className="mt-1 leading-7">Simple weekly goals, progress check-ins, and momentum.</p>
            </li>

            <li className="p-4 rounded-lg bg-white/5 border border-[hsla(0,0%,100%,.12)]">
              <p className="font-semibold text-white">Beginner → intermediate clarity</p>
              <p className="mt-1 leading-7">Less noise. More direction. Better fundamentals + practical patterns.</p>
            </li>
          </ul>
        </div>

        {/* 3. Why It Exists */}
        <div className="bg-[#052442] border border-[#0788ff]/[0.18] rounded-xl p-6 md:p-8 mb-6">
          <h2 className="text-[22px] md:text-[26px] font-bold uppercase">
            3. Why It Exists
          </h2>

          <p className="mt-3 text-white/85 leading-7 max-w-[90ch]">
            I created DevCoder because I’ve seen the same pattern over and over: tutorial fatigue, shallow learning,
            and too much noise online. People are “busy learning” but not getting confident enough to build.
            DevCoder exists to make learning practical again—so you can move from confusion to clarity, then clarity to shipping.
          </p>
        </div>

        {/* 4. Audience */}
        <div className="bg-[#052442] border border-[#0788ff]/[0.18] rounded-xl p-6 md:p-8 mb-6">
          <h2 className="text-[22px] md:text-[26px] font-bold uppercase">
            4. Audience
          </h2>

          <div className="mt-4 flex flex-wrap gap-3">
            {[
              "Early-stage frontend devs",
              "Self-taught engineers",
              "Developers stuck in tutorial loops",
              "Anyone learning React/Next.js seriously",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 rounded-full bg-white/5 border border-[hsla(0,0%,100%,.14)] text-white/90"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* 5. Vision */}
        <div className="bg-[#052442] border border-[#0788ff]/[0.18] rounded-xl p-6 md:p-8">
          <h2 className="text-[22px] md:text-[26px] font-bold uppercase">
            5. Vision
          </h2>

          <p className="mt-3 text-white/85 leading-7 max-w-[90ch]">
            The long-term goal is to build a strong mentorship and builder pipeline—where developers don’t just learn,
            they grow into people who can lead projects, contribute to open source, and mentor others.
          </p>

          <ul className="mt-4 space-y-3 text-white/85">
            <li className="flex gap-2">
              <span className="text-[#0788FF]">•</span> Live build sessions (from idea → MVP → deploy)
            </li>
            <li className="flex gap-2">
              <span className="text-[#0788FF]">•</span> Structured learning themes (weekly/monthly)
            </li>
            <li className="flex gap-2">
              <span className="text-[#0788FF]">•</span> Open-source collaborations + contribution support
            </li>
            <li className="flex gap-2">
              <span className="text-[#0788FF]">•</span> Mentorship tracks (accountability + code reviews)
            </li>
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="https://t.co/Nwvc4b9GWl"
              target="_blank"
              className="uppercase text-center bg-blue-500 px-6 py-3 rounded-full border-2 border-blue-500 hover:bg-black hover:border-white transition font-[600]"
            >
              Join DevCoder
            </a>

            <Link
              href="/#contact"
              className="uppercase text-center px-6 py-3 rounded-full border border-[hsla(0,0%,100%,.2)] hover:bg-white/5 transition font-[600]"
            >
              Partner / Sponsor
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#052442] border-t border-[hsla(0,0%,100%,.15)] mt-auto">
        <div className="py-5">
          <p className="text-center text-[14px] text-white opacity-75">
            © 2025 copyright all right reserved
          </p>
        </div>
      </footer>
    </main>
  );
}