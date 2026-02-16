"use client";

import { motion } from "framer-motion";

export default function SystemDesign() {
  return (
    <section
      id="system"
      className="py-20 px-6 md:px-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* LEFT */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-400">
            System Design
          </h2>

          <ul className="space-y-4 text-gray-300 text-lg">
            <li>• Serverless AWS Architecture</li>
            <li>• Secure Authentication & RBAC</li>
            <li>• Optimized Database Schemas</li>
            <li>• Scalable & Event-Driven Systems</li>
            <li>• Middleware Architecture</li>
            <li>• Logging & Error Handling Strategy</li>
          </ul>
        </motion.div>

        {/* RIGHT VIDEO */}
        <motion.div
          className="flex-1 hidden md:block rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <video
            src="/videos/system-design.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
