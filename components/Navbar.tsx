"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "System", href: "#system" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div className="mx-auto w-full max-w-[1600px] px-3 md:px-6 lg:px-8 pt-3">
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "rounded-2xl border border-white/10 bg-slate-950/70 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              : "rounded-2xl border border-transparent bg-transparent"
          }`}
        >
          <div className="flex h-16 items-center justify-between px-4 md:px-6">
            {/* LOGO */}
            <a
              href="#home"
              className="group flex items-center gap-3"
              onClick={() => setMobileOpen(false)}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold text-white shadow-[0_0_30px_rgba(59,130,246,0.12)] backdrop-blur-md">
                JN
              </div>

              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-wide text-white">
                  Junior Noundou
                </p>
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                  Full-Stack Engineer
                </p>
              </div>
            </a>

            {/* DESKTOP MENU */}
            <ul className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group relative inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.name}
                    <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-blue-400 to-orange-400 transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>

            {/* RIGHT CTA + MOBILE BUTTON */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-400 md:inline-flex"
              >
                Let’s Talk
              </a>

              <button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileOpen((prev) => !prev)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-md transition hover:bg-white/10 md:hidden"
              >
                {mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="border-t border-white/10 bg-slate-950/90 px-4 py-4 backdrop-blur-xl md:hidden"
              >
                <ul className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}

                  <li className="pt-2">
                    <a
                      href="#contact"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-center rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
                    >
                      Let’s Talk
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
}
