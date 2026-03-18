"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Smart Expense Tracker MVP",
    description:
      "Track, analyze, and manage personal and business expenses with a clean SaaS workflow and intuitive financial insights.",
    live: "https://saas-smart-expenses-tracker.vercel.app/",
    github: "https://github.com/Junior-Kamtchoua/Saas-Smart-Expenses-Tracker",
    video: "/videos/expense.mp4",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Subscription Billing Platform SaaS",
    description:
      "Simplifies managing plans, payments, and recurring invoices for businesses of any size with secure product workflows.",
    live: "https://saas-subscription-billing-platform.vercel.app/",
    github:
      "https://github.com/Junior-Kamtchoua/saas-subscription-billing-platform",
    video: "/videos/subscription.mp4",
    tags: ["SaaS", "Billing", "Auth"],
  },
  {
    title: "Workflow File Management B2B",
    description:
      "Organize, access, and share business documents effortlessly in a unified workflow built for team productivity.",
    live: "https://webflow-frontend.vercel.app/",
    github: "https://github.com/Junior-Kamtchoua/Webflow-File-Management",
    video: "/videos/workflow.mp4",
    tags: ["B2B", "Workflow", "Cloud"],
  },
  {
    title: "Health Appointment Booking System",
    description:
      "Allows patients to schedule, manage, and receive reminders for medical visits with their preferred doctor.",
    live: "https://mvp-health-appointment-system.vercel.app/",
    github: "https://github.com/Junior-Kamtchoua/MVP-health-appointment-system",
    video: "/videos/health.mp4",
    tags: ["Healthcare", "Booking", "Dashboard"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative -mt-12 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24"
    >
      <div className="pointer-events-none absolute top-0 left-0 h-24 w-full bg-gradient-to-b from-slate-900/0 to-slate-950" />
      <div className="absolute top-0 left-1/2 h-32 w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/10 to-orange-500/10 blur-3xl" />

      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-3 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300 backdrop-blur-md">
            Selected Projects
          </span>

          <h2 className="mt-5 text-3xl font-bold text-white md:text-5xl">
            Production-minded builds beyond the flagship platform
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-400 md:text-base">
            A curated selection of SaaS and product-focused applications
            showcasing clean architecture, backend logic, business workflows,
            and polished user experiences.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm"
            >
              {/* Video */}
              <video
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Lighter overlays */}
              <div className="absolute inset-0 bg-slate-950/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/15 to-transparent" />

              {/* Soft top shine */}
              <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/10 to-transparent" />

              {/* Optional subtle color tint */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-orange-500/8" />

              {/* Content */}
              <div className="relative z-10 flex min-h-[430px] flex-col justify-between p-6">
                <div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold leading-snug text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-xl bg-orange-500/90 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:scale-[1.02] hover:bg-orange-400"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:scale-[1.02] hover:bg-white/15"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Hover border glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 transition group-hover:ring-orange-400/30" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
