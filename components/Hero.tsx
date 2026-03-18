"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const titles = [
  "Full-Stack Software Engineer",
  "SaaS Applications Engineer",
  "Frontend Engineer",
];

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    let typingTimeout: ReturnType<typeof setTimeout>;
    let nextTitleTimeout: ReturnType<typeof setTimeout>;

    const type = () => {
      const fullText = titles[currentTitle];
      setDisplayedText(fullText.slice(0, i + 1));
      i++;

      if (i < fullText.length) {
        typingTimeout = setTimeout(type, 75);
      } else {
        nextTitleTimeout = setTimeout(() => {
          setDisplayedText("");
          setCurrentTitle((prev) => (prev + 1) % titles.length);
        }, 1800);
      }
    };

    type();

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(nextTitleTimeout);
    };
  }, [currentTitle]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 pt-28 text-white"
    >
      {/* Background glow */}
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.12),transparent_30%)]" />

      {/* Soft bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-slate-950 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-3 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}
          <motion.div
            className="space-y-7"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-200 backdrop-blur-md">
              Available for Remote Roles
            </div>

            {/* Name */}
            <div className="space-y-3">
              <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl xl:text-[88px] xl:leading-[0.95]">
                Junior{" "}
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-orange-300 bg-clip-text text-transparent">
                  Noundou
                </span>
              </h1>

              <h2 className="min-h-[40px] text-xl font-medium text-slate-200 md:min-h-[48px] md:text-2xl">
                <span className="border-r-2 border-orange-300 pr-1">
                  {displayedText}
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              I build scalable SaaS platforms and production-ready web
              applications using{" "}
              <span className="font-semibold text-white">
                Next.js, React, Node.js, PostgreSQL, AWS, and secure role-based
                architectures
              </span>
              . Focused on authentication, payments, dashboards, cloud
              deployment, and clean system design.
            </p>

            {/* Quick highlights */}
            <div className="flex flex-wrap gap-3">
              {[
                "React / Next.js",
                "Node.js / Express",
                "PostgreSQL / AWS",
                "Authentication & RBAC",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#featured-project"
                className="group inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:scale-[1.02] hover:bg-orange-400"
              >
                View Best Project
                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:scale-[1.02] hover:bg-white/15"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 px-6 py-3.5 text-sm font-semibold text-blue-100 transition hover:scale-[1.02] hover:bg-blue-400/15"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85 }}
          >
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-blue-500/25 to-orange-500/20 blur-2xl" />

              {/* Main frame */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/80">
                  <video
                    src="/videos/hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-[520px] w-full object-cover"
                  />
                </div>

                {/* Floating cards */}
                <div className="pointer-events-none absolute -left-5 bottom-8 rounded-2xl border border-blue-300/20 bg-blue-400/10 px-4 py-3 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-blue-200">
                    Core Focus
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    SaaS + Cloud Systems
                  </p>
                </div>

                <div className="pointer-events-none absolute -right-4 top-8 rounded-2xl border border-orange-300/20 bg-orange-400/10 px-4 py-3 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-orange-200">
                    Production Mindset
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Secure • Scalable • Clean
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
