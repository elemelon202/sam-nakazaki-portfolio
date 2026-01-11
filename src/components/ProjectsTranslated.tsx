"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { useTranslation } from "@/i18n";

function DeviceMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-full max-w-lg px-4 py-6">
      <div className="relative transition-transform duration-300 group-hover:scale-[1.02]">
        <div className="relative rounded-t-xl bg-zinc-800 p-2 shadow-2xl dark:bg-zinc-700">
          <div className="absolute left-1/2 top-1 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-zinc-600 dark:bg-zinc-500" />
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-zinc-900">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
        <div className="relative h-3 rounded-b-lg bg-gradient-to-b from-zinc-700 to-zinc-800 shadow-lg dark:from-zinc-600 dark:to-zinc-700">
          <div className="absolute left-1/2 top-0 h-1 w-16 -translate-x-1/2 rounded-b-lg bg-zinc-600 dark:bg-zinc-500" />
        </div>
        <div className="mx-auto h-1 w-1/3 rounded-b-lg bg-zinc-700 dark:bg-zinc-600" />
      </div>
    </div>
  );
}

export function ProjectsTranslated() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Kokai Soundworks",
      description: t.projects.kokai.description,
      tech: ["Ruby", "Rails", "Heroku", "Postgresql", "Redis"],
      github: "https://github.com/elemelon202/kokai-soundworks",
      live: "https://www.kokai-soundworks.com",
      image: "/projects/kokai-soundworks.png",
      featured: true,
    },
    {
      title: "Black Dog Express",
      description: t.projects.blackDog.description,
      tech: ["React", "TypeScript", "Ruby on Rails API", "PostgreSQL", "TailwindCSS", "React Query"],
      github: "https://github.com/elemelon202/black-dog",
      image: "/projects/black-dog.png",
      featured: true,
    },
    {
      title: "Game Hub",
      description: t.projects.gameHub.description,
      tech: ["React", "Typescript", "Vercel"],
      github: "https://github.com/elemelon202/game-hub",
      image: "/projects/game-hub.png",
      featured: false,
    },
    {
      title: "Koyo",
      description: t.projects.koyo.description,
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://koyo-three.vercel.app/ar.html",
      image: "/projects/koyo.png",
      featured: false,
    },
    {
      title: "Session Live",
      description: t.projects.sessionLive.description,
      tech: ["HTML", "CSS", "JavaScript", "Stripe", "GSAP"],
      live: "https://session-live.vercel.app/",
      image: "/projects/session-live.png",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="relative px-6 py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-purple-50/20 to-white dark:from-zinc-950 dark:via-purple-950/5 dark:to-zinc-950" />

      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              {t.projects.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              {t.projects.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 space-y-16">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={0.1 * (index + 1)}>
              <motion.div
                className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className={`relative grid gap-6 p-6 ${project.image ? "lg:grid-cols-2 lg:gap-8 lg:p-8" : ""}`}>
                  {/* Image */}
                  {project.image && (
                    <div className="relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                      <DeviceMockup
                        src={project.image}
                        alt={`${project.title} screenshot`}
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <div className="flex items-start justify-between">
                      <div>
                        {project.featured && (
                          <span className="mb-3 inline-flex rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-900/50 dark:text-purple-300">
                            {t.projects.featured}
                          </span>
                        )}
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex gap-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-400 transition-all hover:border-purple-300 hover:text-purple-600 dark:border-zinc-700 dark:hover:border-purple-600 dark:hover:text-purple-400"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label="View on GitHub"
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
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
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-400 transition-all hover:border-purple-300 hover:text-purple-600 dark:border-zinc-700 dark:hover:border-purple-600 dark:hover:text-purple-400"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="View live demo"
                          >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                    <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700 dark:border-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-600 transition-colors hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                        whileHover={{ x: 4 }}
                      >
                        {t.projects.visitSite}
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* GitHub link */}
        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <motion.a
              href="https://github.com/elemelon202"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-500 transition-colors hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400"
              whileHover={{ y: -2 }}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">{t.projects.seeMore}</span>
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
