"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    {
      name: "AWS Certified Developer- Microservice & Serverless",
      img: "/images/aws.PNG",
    },
    { name: "Meta Full-Stack Developer", img: "/images/meta.PNG" },
    { name: "IBM Full-Stack JavaScript", img: "/images/ibm.PNG" },
    { name: "Microsoft Python Developer", img: "/images/microsoft.PNG" },
  ];

  return (
    <section id="certifications" className="py-28 px-6 md:px-20 bg-gray-50">
      {/* TITLE */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-20 text-slate-900"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            className="group relative bg-white p-10 rounded-3xl text-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          >
            {/* Glow background effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-200/40 via-purple-200/30 to-blue-200/40 blur-xl -z-10"></div>

            {/* Shadow layer */}
            <div className="absolute inset-0 rounded-3xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500"></div>

            {/* IMAGE */}
            <div className="flex justify-center mb-8 overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={cert.img}
                  alt={cert.name}
                  width={200}
                  height={200}
                  className="object-contain transition-transform duration-500"
                />
              </motion.div>
            </div>

            {/* TITLE */}
            <p className="text-xl font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors duration-300">
              {cert.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
