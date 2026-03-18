"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    {
      name: "AWS Certified Developer — Microservices & Serverless",
      img: "/images/aws.PNG",
    },
    { name: "Meta Full-Stack Developer", img: "/images/meta.PNG" },
    { name: "IBM Full-Stack JavaScript", img: "/images/ibm.PNG" },
    { name: "Microsoft Python Developer", img: "/images/microsoft.PNG" },
  ];

  return (
    <section
      id="certifications"
      className="relative -mt-12 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24"
    >
      {/* Soft transition from previous section */}
      <div className="pointer-events-none absolute top-0 left-0 h-24 w-full bg-gradient-to-b from-slate-900/0 to-slate-950" />
      <div className="absolute top-0 left-1/2 h-32 w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/10 to-orange-500/10 blur-3xl" />

      {/* Glow effects */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-slate-950/0 to-slate-950" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-3 md:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-300 backdrop-blur-md">
            Credentials
          </span>

          <h2 className="mt-5 text-3xl font-bold text-white md:text-5xl">
            Certifications
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Industry-recognized certifications that reinforce my expertise in
            full-stack development, cloud systems, and production-ready software
            engineering.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {certs.map((cert, index) => (
            <motion.article
              key={cert.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-500"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.14),transparent_30%)]" />

              {/* Top accent line */}
              <div className="relative z-10 mb-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-blue-400 to-orange-400" />

              {/* Image block */}
              <div className="relative z-10 flex min-h-[180px] items-center justify-center rounded-2xl border border-white/10 bg-slate-950/40 p-6">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={cert.img}
                    alt={cert.name}
                    width={180}
                    height={180}
                    className="h-auto max-h-[120px] w-auto object-contain"
                  />
                </motion.div>
              </div>

              {/* Text */}
              <div className="relative z-10 mt-6 space-y-3">
                <h3 className="text-lg font-semibold leading-7 text-white transition-colors duration-300 group-hover:text-blue-300">
                  {cert.name}
                </h3>

                <p className="text-sm leading-6 text-slate-400">
                  Verified learning across modern web development, backend
                  systems, and cloud-oriented engineering practices.
                </p>
              </div>

              {/* Corner glow badge */}
              <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300 backdrop-blur-md">
                Certified
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
