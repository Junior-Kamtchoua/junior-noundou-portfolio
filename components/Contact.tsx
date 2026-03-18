"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24"
    >
      {/* Top soft transition */}
      <div className="pointer-events-none absolute top-0 left-0 h-24 w-full bg-gradient-to-b from-slate-900/0 to-slate-950" />
      <div className="absolute top-0 left-1/2 h-32 w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/10 to-orange-500/10 blur-3xl" />

      {/* Glow effects */}
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-slate-950/0 to-slate-950" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-3 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-12"
        >
          <span className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">
            Contact
          </span>

          <motion.h2
            className="mt-6 text-4xl font-bold text-white md:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h2>

          <motion.p
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Open to remote full-stack opportunities, SaaS product development,
            and cloud-focused engineering roles.
          </motion.p>

          <motion.div
            className="mt-10 grid gap-4 md:grid-cols-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 text-left">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                Email
              </p>
              <a
                href="mailto:kamtchouajunior@gmail.com"
                className="mt-3 block break-all text-sm font-semibold text-blue-300 transition hover:text-blue-200"
              >
                kamtchouajunior@gmail.com
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 text-left">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/junior-kamtchoua-noundou-40b481244/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block break-all text-sm font-semibold text-blue-300 transition hover:text-blue-200"
              >
                View LinkedIn Profile
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5 text-left">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                Location
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-200">
                Cameroon — Open to Remote (US & Canada)
              </p>
            </div>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <a
              href="mailto:kamtchouajunior@gmail.com"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:scale-[1.02] hover:bg-blue-500"
            >
              Send Email
            </a>

            <a
              href="https://www.linkedin.com/in/junior-kamtchoua-noundou-40b481244/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:scale-[1.02] hover:bg-white/15"
            >
              Connect on LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
