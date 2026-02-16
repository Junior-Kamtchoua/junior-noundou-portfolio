"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-20 bg-slate-900 text-white text-center"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8 text-indigo-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h2>

      <motion.div
        className="space-y-4 text-gray-300 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p>
          Email:
          <a
            href="mailto:kamtchouajunior@gmail.com"
            className="text-blue-400 ml-2 hover:underline"
          >
            kamtchouajunior@gmail.com
          </a>
        </p>

        <p>
          LinkedIn:
          <a
            href="https://www.linkedin.com/in/junior-kamtchoua-noundou-40b481244/"
            target="_blank"
            className="text-blue-400 ml-2 hover:underline"
          >
            https://www.linkedin.com/in/junior-kamtchoua-noundou-40b481244/
          </a>
        </p>

        <p>Location: Cameroon — Open to Remote (US & Canada)</p>
      </motion.div>
    </section>
  );
}
