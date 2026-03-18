export default function FeaturedProject() {
  return (
    <section
      id="featured-project"
      className="relative isolate overflow-hidden py-24 md:py-32"
    >
      {/* ===== BACKGROUND VIDEO =====
          Remplace /videos/heavymove-bg.mp4 par ta vraie vidéo plus tard
      */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/heavymove-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark premium overlays */}
      <div className="absolute inset-0 bg-slate-950/80" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/75 to-orange-950/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_28%)]" />

      {/* Soft glow accents */}
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <span className="inline-flex items-center rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-orange-200 backdrop-blur-md">
            Featured Build · Best Work
          </span>
        </div>

        {/* Main premium card */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT SIDE */}
          <div className="rounded-3xl border border-white/10 bg-white/8 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-10">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
                Marketplace Platform
              </span>
              <span className="rounded-full border border-blue-400/25 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-200">
                Multi-Role Architecture
              </span>
              <span className="rounded-full border border-orange-400/25 bg-orange-400/10 px-3 py-1 text-xs font-medium text-orange-200">
                Logistics / Freight Tech
              </span>
            </div>

            <h2 className="max-w-4xl text-3xl font-bold leading-tight text-white md:text-5xl xl:text-6xl">
              HeavyMove — Freight Transport Marketplace
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
              A full-stack Uber-style freight marketplace built to connect
              customers with freight drivers for heavy cargo transportation.
              Designed as a scalable multi-role platform with secure payments,
              dynamic pricing, driver wallet flows, and admin-grade financial
              control.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Roles
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Admin / Driver / Customer
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Payments
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Stripe + PayPal Escrow
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Pricing Engine
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Real-Time Freight Quotes
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://heavy-move.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:scale-[1.02] hover:bg-orange-400"
              >
                View Live Demo
                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* ===== REMPLACE LE LIEN GITHUB CI-DESSOUS ===== */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:scale-[1.02] hover:bg-white/15"
              >
                View GitHub
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-orange-300/40 hover:text-white"
              >
                Explore Other Projects
              </a>
            </div>

            {/* Case-study style content */}
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">
                  What makes it strong
                </h3>
                <ul className="mt-5 space-y-4 text-slate-200">
                  <li className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Built a true marketplace model connecting customers and
                    freight drivers in one unified flow.
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Implemented secure JWT authentication and role-based access
                    control for sensitive booking and finance actions.
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Added escrow-style payments with controlled payout release
                    after delivery completion.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
                  Business + technical depth
                </h3>
                <ul className="mt-5 space-y-4 text-slate-200">
                  <li className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Dynamic pricing engine based on vehicle type, cargo weight,
                    distance, fragility, and insurance.
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Driver wallet system and admin finance dashboards for
                    withdrawals, balances, and platform revenue tracking.
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Production-style stack using Next.js, Express, PostgreSQL,
                    Tailwind, AWS SES, Stripe, PayPal, and Vercel.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* Visual panel */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/8 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-3">
                {/* ===== OPTION 1: IMAGE PREVIEW =====
                    Mets ici une capture premium du projet plus tard:
                    src="/images/heavymove-preview.png"
                */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                  <img
                    src="/images/heavymove-preview.png"
                    alt="HeavyMove project preview"
                    className="h-[260px] w-full object-cover md:h-[340px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                      Model
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Uber-style
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                      Security
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      JWT + RBAC
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                      Payments
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Escrow
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating premium cards */}
              <div className="pointer-events-none absolute -right-2 top-8 hidden w-48 rounded-2xl border border-orange-300/20 bg-orange-400/10 p-4 backdrop-blur-md md:block">
                <p className="text-xs uppercase tracking-[0.2em] text-orange-200">
                  Pricing Logic
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  Vehicle + Weight + Distance + Fragility + Insurance
                </p>
              </div>

              <div className="pointer-events-none absolute -left-2 bottom-10 hidden w-44 rounded-2xl border border-blue-300/20 bg-blue-400/10 p-4 backdrop-blur-md md:block">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-200">
                  Finance Ops
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  Wallets, payouts, balances, admin revenue
                </p>
              </div>
            </div>

            {/* Tech stack card */}
            <div className="rounded-3xl border border-white/10 bg-white/8 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                Tech Stack
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">
                {[
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Express",
                  "PostgreSQL",
                  "Stripe",
                  "PayPal",
                  "Tailwind",
                  "AWS SES",
                  "Vercel",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
