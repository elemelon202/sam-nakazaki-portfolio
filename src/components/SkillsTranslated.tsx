"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { useTranslation } from "@/i18n";

const colorClasses = {
  purple: {
    bg: "bg-purple-100 dark:bg-purple-900/50",
    text: "text-purple-600 dark:text-purple-400",
    badge: "bg-purple-50 text-purple-700 border-purple-200 hover:border-purple-400 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800 dark:hover:border-purple-600",
  },
  indigo: {
    bg: "bg-indigo-100 dark:bg-indigo-900/50",
    text: "text-indigo-600 dark:text-indigo-400",
    badge: "bg-indigo-50 text-indigo-700 border-indigo-200 hover:border-indigo-400 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800 dark:hover:border-indigo-600",
  },
  pink: {
    bg: "bg-pink-100 dark:bg-pink-900/50",
    text: "text-pink-600 dark:text-pink-400",
    badge: "bg-pink-50 text-pink-700 border-pink-200 hover:border-pink-400 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-800 dark:hover:border-pink-600",
  },
  emerald: {
    bg: "bg-emerald-100 dark:bg-emerald-900/50",
    text: "text-emerald-600 dark:text-emerald-400",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:border-emerald-400 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800 dark:hover:border-emerald-600",
  },
};

export function SkillsTranslated() {
  const { t } = useTranslation();

  const skills = [
    {
      category: t.skills.categories.languages,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      items: ["Ruby", "TypeScript", "JavaScript", "SQL"],
      color: "purple" as const,
    },
    {
      category: t.skills.categories.frameworks,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      items: ["Ruby on Rails", "React", "Next.js"],
      color: "indigo" as const,
    },
    {
      category: t.skills.categories.databases,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      items: ["PostgreSQL", "Redis", "MongoDB"],
      color: "pink" as const,
    },
    {
      category: t.skills.categories.tools,
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      items: ["Git", "Docker", "AWS", "Vercel"],
      color: "emerald" as const,
    },
  ];

  return (
    <section id="skills" className="relative overflow-hidden bg-zinc-50 px-6 py-24 dark:bg-zinc-900/50">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-purple-100/50 blur-3xl dark:bg-purple-900/10" />
        <div className="absolute -left-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-100/50 blur-3xl dark:bg-indigo-900/10" />
      </div>

      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              {t.skills.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              {t.skills.subtitle}
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {skills.map((skillGroup, groupIndex) => {
            const colors = colorClasses[skillGroup.color];
            return (
              <FadeIn key={skillGroup.category} delay={0.1 * (groupIndex + 1)}>
                <motion.div
                  className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${colors.bg} ${colors.text}`}>
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <motion.span
                        key={skill}
                        className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${colors.badge}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * (groupIndex + 1) + 0.05 * i }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
