"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="text-center max-w-5xl">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Le futur du
          <span className="text-indigo-500">
            {" "}commerce intelligent
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-zinc-400 text-lg md:text-xl"
        >
          Une expérience e-commerce assistée par IA,
          rapide, moderne et pensée pour convertir.
        </motion.p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="bg-indigo-600 hover:bg-indigo-500 transition px-8 py-4 rounded-2xl font-semibold">
            Commencer
          </button>

          <button className="border border-zinc-700 px-8 py-4 rounded-2xl">
            Découvrir
          </button>

        </div>

      </div>

    </section>
  );
}