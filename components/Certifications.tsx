"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    { name: "AWS Certified Developer", img: "/images/aws.PNG" },
    { name: "Meta Full-Stack Developer", img: "/images/meta.PNG" },
    { name: "IBM Full-Stack JavaScript", img: "/images/ibm.PNG" },
    { name: "Microsoft Python Developer", img: "/images/microsoft.PNG" },
  ];

  return (
    <section id="certifications" className="py-20 px-6 md:px-20 bg-white">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Certifications
      </motion.h2>

      <div className="grid md:grid-cols-4 gap-8">
        {certs.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-slate-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Image
              src={cert.img}
              alt={cert.name}
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <p className="font-semibold text-indigo-600">{cert.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
