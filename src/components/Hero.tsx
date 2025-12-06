"use client";

import { motion } from "framer-motion";
import { AnimatedBackground } from "./AnimatedBackground";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <AnimatedBackground />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent dark:from-purple-400 dark:via-pink-400 dark:to-indigo-400 sm:text-7xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Sam Nakazaki
        </motion.h1>

        <motion.p
          className="mt-4 text-xl text-zinc-600 dark:text-zinc-400 sm:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Full Stack Developer
        </motion.p>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-zinc-500 dark:text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Building web applications with Ruby on Rails, React, and Next.js
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#projects"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 text-sm font-medium text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.a>
          <motion.a
            href="#contact"
            className="rounded-full border-2 border-zinc-300 px-8 py-3 text-sm font-medium text-zinc-700 backdrop-blur-sm transition-all hover:border-purple-500 hover:text-purple-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-purple-400 dark:hover:text-purple-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-zinc-400"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
