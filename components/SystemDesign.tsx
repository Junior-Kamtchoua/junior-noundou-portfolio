"use client";

import { motion } from "framer-motion";

const systemItems = [
  "Serverless AWS Architecture",
  "Secure Authentication & RBAC",
  "Optimized Database Schemas",
  "Scalable & Event-Driven Systems",
  "Middleware Architecture",
  "Logging & Error Handling Strategy",
];

export default function SystemDesign() {
  return (
    <section
      id="system"
      className="relative -mt-10 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 text-white"
    >
      {/* Soft transition */}
      <div className="pointer-events-none absolute top-0 left-0 h-24 w-full bg-gradient-to-b from-slate-900/0 to-slate-950" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-slate-950/0 to-slate-950" />

      {/* Ambient glow */}
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="absolute top-0 left-1/2 h-32 w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/10 to-orange-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-3 md:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">
              Architecture Focus
            </span>

            <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
              System Design
            </h2>

            <p className="max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              I build systems with scalability, security, maintainability, and
              operational clarity in mind — from authentication and data design
              to event-driven workflows and production-grade backend structure.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {systemItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition hover:bg-white/10"
                >
                  <p className="text-sm font-medium text-slate-100">{item}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { value: "AWS", label: "Cloud Ready" },
                { value: "RBAC", label: "Secure Access" },
                { value: "API", label: "Scalable Logic" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-black/20 p-4 text-center"
                >
                  <p className="text-lg font-bold text-white">{item.value}</p>
                  <p className="mt-1 text-xs text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85 }}
          >
            <div className="group relative">
              {/* glow */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-2xl opacity-70 transition group-hover:opacity-100" />

              {/* video frame */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <div className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950/70">
                  <video
                    src="/videos/system-design.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* floating cards */}
                <div className="pointer-events-none absolute -left-3 top-8 hidden rounded-2xl border border-blue-300/20 bg-blue-400/10 px-4 py-3 backdrop-blur-md lg:block">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-blue-200">
                    Security Layer
                  </p>
                  <p className="mt-1 text-xs font-semibold text-white">
                    Auth, RBAC, middleware
                  </p>
                </div>

                <div className="pointer-events-none absolute -right-3 bottom-10 hidden rounded-2xl border border-orange-300/20 bg-orange-400/10 px-4 py-3 backdrop-blur-md lg:block">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-orange-200">
                    Scalability
                  </p>
                  <p className="mt-1 text-xs font-semibold text-white">
                    Events, APIs, DB design
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
