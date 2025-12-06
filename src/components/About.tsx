"use client";

import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent dark:from-white dark:to-zinc-400">
            About Me
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m a developer passionate about building clean, efficient web
              applications. With a strong foundation in Ruby on Rails, I&apos;m
              expanding my skills into the React ecosystem.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new technologies
              and contributing to open source projects.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
