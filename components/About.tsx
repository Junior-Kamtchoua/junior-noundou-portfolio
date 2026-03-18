"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 -mt-12"
    >
      {/* Glow effects */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-3 md:px-6 lg:px-8">
        {/* TITLE */}
        <motion.h2
          className="mb-16 text-center text-3xl font-bold text-white md:text-5xl"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          About Me
        </motion.h2>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT - TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-slate-300 text-[15px] leading-7"
          >
            <p>
              Full-Stack engineer with{" "}
              <span className="text-orange-400 font-semibold">
                3+ years of experience
              </span>{" "}
              building scalable SaaS platforms. I specialize in authentication
              systems, RBAC, backend architecture, and cloud-based deployments.
            </p>

            <p>
              I design{" "}
              <span className="text-blue-400 font-semibold">
                production-ready systems
              </span>{" "}
              with a strong focus on performance, security, and maintainability.
            </p>

            <p>
              Passionate about{" "}
              <span className="text-emerald-400 font-semibold">
                system design
              </span>
              , clean architecture, and solving real-world business problems
              through technology.
            </p>

            {/* STATS (VERY PREMIUM) */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "5+", label: "Production Projects" },
                { value: "100%", label: "Focus on SaaS" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md"
                >
                  <p className="text-xl font-bold text-white">{item.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT - IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/30 to-orange-500/30 blur-2xl opacity-70 group-hover:opacity-100 transition" />

              {/* 3D Image container */}
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                <motion.img
                  src="/profile.jpg" // 🔥 MET TON IMAGE ICI
                  alt="profile"
                  className="w-[260px] md:w-[320px] rounded-2xl"
                  whileHover={{
                    rotateY: 12,
                    rotateX: 6,
                    scale: 1.05,
                  }}
                  transition={{ type: "spring", stiffness: 120 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
