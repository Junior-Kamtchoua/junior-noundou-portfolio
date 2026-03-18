import HeavyMoveLiveStats from "@/components/HeavyMoveLiveStats";

export default function FeaturedProject() {
  return (
    <section
      id="featured-project"
      className="relative isolate h-screen overflow-hidden"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/heavymove-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-slate-950/75" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/65 to-orange-950/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_28%)]" />

      {/* Glow */}
      <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1600px] px-3 md:px-6 lg:px-8">
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-200 backdrop-blur-md">
              Featured Build · Best Work
            </span>
          </div>

          <div className="grid h-[82vh] gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            {/* LEFT */}
            <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/8 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-7">
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-200">
                    Marketplace Platform
                  </span>
                  <span className="rounded-full border border-blue-400/25 bg-blue-400/10 px-3 py-1 text-[11px] font-medium text-blue-200">
                    Multi-Role Architecture
                  </span>
                  <span className="rounded-full border border-orange-400/25 bg-orange-400/10 px-3 py-1 text-[11px] font-medium text-orange-200">
                    Logistics / Freight Tech
                  </span>
                </div>

                <h2 className="max-w-4xl text-2xl font-bold leading-tight text-white md:text-4xl xl:text-5xl">
                  HeavyMove — Freight Transport Marketplace
                </h2>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200 md:text-base">
                  A full-stack Uber-style freight marketplace connecting
                  customers with freight drivers for heavy cargo transportation.
                  Built as a scalable multi-role platform with secure auth,
                  dynamic pricing, escrow payments, driver wallet flows, and
                  admin financial control.
                </p>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      Roles
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Admin / Driver / Customer
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      Payments
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Stripe + PayPal Escrow
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      Pricing Engine
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Real-Time Freight Quotes
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="https://heavy-move.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:scale-[1.02] hover:bg-orange-400"
                  >
                    View Live Demo
                    <span className="ml-2 transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>

                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:scale-[1.02] hover:bg-white/15"
                  >
                    View GitHub
                  </a>

                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-orange-300/40 hover:text-white"
                  >
                    Explore Other Projects
                  </a>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
                    What makes it strong
                  </h3>
                  <ul className="mt-3 space-y-3 text-sm text-slate-200">
                    <li className="rounded-2xl border border-white/10 bg-black/20 p-3">
                      Multi-role marketplace model connecting customers and
                      freight drivers.
                    </li>
                    <li className="rounded-2xl border border-white/10 bg-black/20 p-3">
                      Secure JWT authentication and role-based access control
                      for sensitive flows.
                    </li>
                    <li className="rounded-2xl border border-white/10 bg-black/20 p-3">
                      Escrow-based payment release after delivery completion.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                    Business + technical depth
                  </h3>
                  <ul className="mt-3 space-y-3 text-sm text-slate-200">
                    <li className="rounded-2xl border border-white/10 bg-black/20 p-3">
                      Dynamic freight pricing using vehicle type, weight,
                      distance, fragility, and insurance.
                    </li>
                    <li className="rounded-2xl border border-white/10 bg-black/20 p-3">
                      Driver wallets, withdrawals, balances, and admin revenue
                      dashboards.
                    </li>
                    <li className="rounded-2xl border border-white/10 bg-black/20 p-3">
                      Production-style stack with Next.js, Express, PostgreSQL,
                      Stripe, PayPal, AWS SES, and Vercel.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex h-full flex-col gap-5">
              <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-white/8 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <HeavyMoveLiveStats />

                <div className="pointer-events-none absolute -right-2 top-6 hidden w-44 rounded-2xl border border-orange-300/20 bg-orange-400/10 p-4 backdrop-blur-md md:block">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-orange-200">
                    Pricing Logic
                  </p>
                  <p className="mt-2 text-xs font-semibold text-white">
                    Vehicle + Weight + Distance + Fragility + Insurance
                  </p>
                </div>

                <div className="pointer-events-none absolute -left-2 bottom-8 hidden w-40 rounded-2xl border border-blue-300/20 bg-blue-400/10 p-4 backdrop-blur-md md:block">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-blue-200">
                    Finance Ops
                  </p>
                  <p className="mt-2 text-xs font-semibold text-white">
                    Wallets, payouts, balances, admin revenue
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/8 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                  Tech Stack
                </h3>

                <div className="mt-4 flex flex-wrap gap-2.5">
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
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-slate-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
