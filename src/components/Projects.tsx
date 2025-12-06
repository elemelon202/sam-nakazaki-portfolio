"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

const projects = [
  {
    title: "Kokai Soundworks",
    description:
      "A network to connect local musicians with each other, fans, and venues. Crowd funding to support local artists and venues.",
    tech: ["Ruby", "Rails", "Heroku", "Postgresql", "Redis"],
    github: "https://github.com/elemelon202/kokai-soundworks",
    live: "https://www.kokai-soundworks.com",
  },
  {
    title: "Dream Hero",
    description:
      "A web app that utilizes AI to generate imaginative bedtime stories for children",
    tech: ["Ruby on Rails", "PostgreSQL", "OpenAI", "Gemini"],
    github: "https://github.com/yourusername/project-two",
    live: "https://project-two.herokuapp.com",
  },
  {
    title: "Project Three",
    description:
      "A third project demonstrating full-stack development capabilities.",
    tech: ["React", "Rails API", "AWS"],
    github: "https://github.com/yourusername/project-three",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent dark:from-white dark:to-zinc-400">
            Projects
          </h2>
        </FadeIn>
        <div className="mt-10 space-y-6">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={0.1 * (index + 1)}>
              <motion.div
                className="group relative overflow-hidden rounded-xl border border-zinc-200/50 bg-white p-6 shadow-lg shadow-zinc-200/20 transition-all dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none"
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 opacity-0 transition-opacity group-hover:opacity-100 dark:from-purple-500/10 dark:to-indigo-500/10" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="View on GitHub"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.a>
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="View live demo"
                        >
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-gradient-to-r from-purple-50 to-indigo-50 px-3 py-1 text-xs font-medium text-purple-700 dark:from-purple-900/30 dark:to-indigo-900/30 dark:text-purple-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
