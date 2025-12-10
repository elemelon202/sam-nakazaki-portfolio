"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

const highlights = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Full Stack",
    description: "End-to-end development from database to UI",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast Delivery",
    description: "Efficient workflows, quick turnarounds",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    title: "Bilingual",
    description: "Native English, fluent Japanese",
  },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-zinc-950 dark:via-purple-950/10 dark:to-zinc-950" />

      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text content */}
          <div>
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
                About Me
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                <p>
                  I&apos;m a developer passionate about building clean, efficient web
                  applications. With a strong foundation in Ruby on Rails, I&apos;ve
                  expanded my skills into the React ecosystem.
                </p>
                <p>
                  Based in Tokyo, I bridge the gap between Western and Japanese
                  business practices, bringing clear communication and reliable
                  delivery to every project.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                  Le Wagon Alumni
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                  Tokyo Based
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Highlight cards */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <FadeIn key={item.title} delay={0.1 * (index + 1)} direction="right">
                <motion.div
                  className="group flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-purple-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-purple-800"
                  whileHover={{ x: 8 }}
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/25">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
