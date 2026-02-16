"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-white">
      {/* Animated Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      {/* Animated Content */}
      <motion.div
        className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed space-y-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Full-Stack developer with{" "}
          <span className="font-semibold text-indigo-600">
            3+ years of experience
          </span>{" "}
          building SaaS applications. Strong expertise in authentication
          systems, role-based access control, scalable backend architecture, and
          AWS cloud deployment.
        </motion.p>

        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I design{" "}
          <span className="text-indigo-500 font-medium">
            production-ready applications
          </span>{" "}
          with performance, security, and maintainability in mind. Passionate
          about clean architecture, system design, and solving real-world
          business problems.
        </motion.p>

        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I constantly explore{" "}
          <span className="text-blue-400 font-semibold">new technologies</span>
          and best practices to deliver high-quality, scalable, and efficient
          SaaS solutions.
        </motion.p>
      </motion.div>
    </section>
  );
}
