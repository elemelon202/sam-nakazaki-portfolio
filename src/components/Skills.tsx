"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

const skills = [
  { category: "Languages", items: ["Ruby", "TypeScript", "JavaScript", "SQL"] },
  { category: "Frameworks", items: ["Ruby on Rails", "React", "Next.js"] },
  { category: "Databases", items: ["PostgreSQL", "Redis", "MongoDB"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-zinc-50 to-white px-6 py-24 dark:from-zinc-900 dark:to-zinc-950"
    >
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent dark:from-white dark:to-zinc-400">
            Skills
          </h2>
        </FadeIn>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {skills.map((skillGroup, groupIndex) => (
            <FadeIn key={skillGroup.category} delay={0.1 * (groupIndex + 1)}>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {skillGroup.category}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-md shadow-zinc-200/50 transition-all hover:shadow-lg hover:shadow-purple-200/50 dark:bg-zinc-800 dark:text-zinc-300 dark:shadow-none dark:hover:bg-zinc-700"
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
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
