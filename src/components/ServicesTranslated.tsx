"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { useTranslation } from "@/i18n";

const CheckIcon = () => (
  <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = () => (
  <svg className="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export function ServicesTranslated() {
  const { t, locale } = useTranslation();

  const painPoints = [
    { icon: "clock", text: t.services.painPoints.agencies },
    { icon: "ghost", text: t.services.painPoints.freelancers },
    { icon: "mail", text: t.services.painPoints.emails },
    { icon: "money", text: t.services.painPoints.quotes },
  ];

  const comparisonData = [
    t.services.comparison.quote,
    t.services.comparison.reply,
    t.services.comparison.timeline,
    t.services.comparison.cost,
    t.services.comparison.language,
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden px-6 py-24">
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-purple-950/20" />
          <motion.div
            className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-purple-200/40 blur-3xl dark:bg-purple-900/20"
            animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-900/20"
            animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="mx-auto max-w-5xl">
          {/* Badge */}
          <FadeIn>
            <div className="flex justify-center">
              <motion.div
                className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 dark:border-purple-800 dark:bg-purple-950/50"
                whileHover={{ scale: 1.02 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
                </span>
                <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                  {t.services.badge}
                </span>
              </motion.div>
            </div>
          </FadeIn>

          {/* Main headline */}
          <FadeIn delay={0.1}>
            <h1 className="mt-8 pb-2 text-center text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-zinc-900 dark:text-white">{t.services.title}</span>
              <span className="mt-2 block bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text pb-2 text-transparent">
                {t.services.titleHighlight}
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
              {t.services.tagline}
            </p>
          </FadeIn>

          {/* Pain points grid */}
          <FadeIn delay={0.3}>
            <div className="mt-12">
              <p className="text-center text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                {t.services.tiredOf}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {painPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl border border-red-100 bg-gradient-to-b from-red-50 to-white p-4 text-center dark:border-red-900/30 dark:from-red-950/20 dark:to-zinc-900"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="mb-3 text-2xl">
                      {point.icon === "clock" && "⏰"}
                      {point.icon === "ghost" && "👻"}
                      {point.icon === "mail" && "📭"}
                      {point.icon === "money" && "💸"}
                    </div>
                    <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      {point.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Solution statement */}
          <FadeIn delay={0.4}>
            <div className="mt-16 text-center">
              <motion.p
                className="text-2xl font-semibold text-zinc-900 dark:text-white sm:text-3xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                {t.services.simplerWay}
              </motion.p>
            </div>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.5}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.a
                href="#services-contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{t.services.startProject}</span>
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full border-2 border-zinc-200 px-8 py-4 text-base font-semibold text-zinc-700 transition-all hover:border-purple-300 hover:text-purple-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-purple-600 dark:hover:text-purple-400"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.services.viewPricing}
              </motion.a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Me Section */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-2xl" />
                <div className="relative rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 dark:bg-purple-900/50">
                    <span className="text-sm font-medium text-purple-700 dark:text-purple-300">{t.services.aboutLocation}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
                    {t.services.aboutName}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {t.services.aboutDescription}
                  </p>
                  <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                    {t.services.aboutDetail}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      {t.services.nativeEnglish}
                    </span>
                    <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      {t.services.fluentJapanese}
                    </span>
                    <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      {t.services.leWagonAlumni}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-purple-100 dark:bg-purple-900/50">
                    <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{t.services.directComm.title}</h3>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">{t.services.directComm.description}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-900/50">
                    <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{t.services.fastTurnaround.title}</h3>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">{t.services.fastTurnaround.description}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-pink-100 dark:bg-pink-900/50">
                    <svg className="h-6 w-6 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{t.services.bilingualSupport.title}</h3>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">{t.services.bilingualSupport.description}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/50 to-white dark:from-zinc-950 dark:via-purple-950/10 dark:to-zinc-950" />
        </div>
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              {t.services.specializationsTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-zinc-600 dark:text-zinc-400">
              {t.services.specializationsSubtitle}
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.specializations.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div
                  className="group relative h-full overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-purple-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-purple-800"
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 text-2xl dark:from-purple-900/50 dark:to-indigo-900/50">
                    {item.icon === "cart" && "🛒"}
                    {item.icon === "payment" && "💳"}
                    {item.icon === "line" && "💬"}
                    {item.icon === "mobile" && "📱"}
                    {item.icon === "language" && "🌐"}
                    {item.icon === "form" && "📝"}
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-purple-100/50 blur-2xl transition-all group-hover:bg-purple-200/50 dark:bg-purple-900/20 dark:group-hover:bg-purple-800/30" />
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-zinc-50 px-6 py-24 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              {t.services.comparisonTitle}
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-12 space-y-4">
              {comparisonData.map((row, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-1 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 sm:grid-cols-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 border-b border-zinc-200 bg-zinc-50 px-6 py-4 dark:border-zinc-800 dark:bg-zinc-800/50 sm:border-b-0 sm:border-r">
                    <XIcon />
                    <span className="text-zinc-500 line-through dark:text-zinc-500">{row.usual}</span>
                  </div>
                  <div className="flex items-center gap-3 px-6 py-4">
                    <CheckIcon />
                    <span className="font-medium text-zinc-900 dark:text-white">{row.me}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              {t.services.pricingTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-zinc-600 dark:text-zinc-400">
              {t.services.pricingSubtitle}
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* Quick Builds Card */}
            <FadeIn delay={0.1}>
              <motion.div
                className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{t.services.quickBuilds.title}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-zinc-900 dark:text-white">{t.services.quickBuilds.price}</span>
                </div>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                  {t.services.quickBuilds.description}
                </p>
                <ul className="mt-8 space-y-4">
                  {t.services.quickBuilds.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                        <svg className="h-4 w-4 text-zinc-600 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-500">
                  {t.services.quickBuilds.bestFor}
                </p>
                <motion.a
                  href="#services-contact"
                  className="mt-8 block w-full rounded-xl border-2 border-zinc-200 py-4 text-center font-semibold text-zinc-700 transition-all hover:border-purple-300 hover:text-purple-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-purple-600 dark:hover:text-purple-400"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t.services.getStarted}
                </motion.a>
              </motion.div>
            </FadeIn>

            {/* Web Applications Card */}
            <FadeIn delay={0.2}>
              <motion.div
                className="relative overflow-hidden rounded-3xl border-2 border-purple-200 bg-white p-8 shadow-xl dark:border-purple-800 dark:bg-zinc-900"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-purple-100 blur-3xl dark:bg-purple-900/30" />
                <div className="relative">
                  <div className="inline-flex rounded-full bg-purple-100 px-3 py-1 dark:bg-purple-900/50">
                    <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">{t.services.mostPopular}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-white">{t.services.webApps.title}</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-zinc-900 dark:text-white">{t.services.webApps.price}</span>
                    <span className="text-zinc-500">{t.services.webApps.starting}</span>
                  </div>
                  <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                    {t.services.webApps.description}
                  </p>
                  <ul className="mt-8 space-y-4">
                    {t.services.webApps.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/50">
                          <svg className="h-4 w-4 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-500">
                    {t.services.webApps.bestFor}
                  </p>
                  <motion.a
                    href="#services-contact"
                    className="mt-8 block w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-4 text-center font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/30"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t.services.getStarted}
                  </motion.a>
                </div>
              </motion.div>
            </FadeIn>

            {/* Ongoing Support Card */}
            <FadeIn delay={0.3}>
              <motion.div
                className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{t.services.ongoingSupport.title}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-zinc-900 dark:text-white">{t.services.ongoingSupport.price}</span>
                </div>
                <p className="mt-1 text-sm text-zinc-500">{t.services.ongoingSupport.starting}</p>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                  {t.services.ongoingSupport.description}
                </p>
                <ul className="mt-8 space-y-4">
                  {t.services.ongoingSupport.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                        <svg className="h-4 w-4 text-zinc-600 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-500">
                  {t.services.ongoingSupport.bestFor}
                </p>
                <motion.a
                  href="#services-contact"
                  className="mt-8 block w-full rounded-xl border-2 border-zinc-200 py-4 text-center font-semibold text-zinc-700 transition-all hover:border-purple-300 hover:text-purple-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-purple-600 dark:hover:text-purple-400"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t.services.getStarted}
                </motion.a>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-zinc-900 px-6 py-24 dark:bg-black">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
              {t.services.howItWorksTitle}
            </h2>
          </FadeIn>

          <div className="mt-16">
            {t.services.howItWorks.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="group relative flex gap-6 pb-12 last:pb-0">
                  {index < t.services.howItWorks.length - 1 && (
                    <div className="absolute left-6 top-12 h-full w-px bg-gradient-to-b from-purple-500 to-transparent" />
                  )}
                  <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 opacity-20 blur transition-all group-hover:opacity-40" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/50 bg-zinc-900 text-sm font-bold text-purple-400">
                      {item.step}
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-zinc-400">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="services-contact" className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/20 dark:to-zinc-950" />
          <motion.div
            className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-purple-200/30 blur-3xl dark:bg-purple-900/10"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="mx-auto max-w-xl">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              {t.services.soundGood}
            </h2>
            <p className="mt-4 text-center text-lg text-zinc-600 dark:text-zinc-400">
              {t.services.contactSubtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              action="https://formspree.io/f/myzrnvek"
              method="POST"
              className="mt-10 space-y-6"
            >

              <div>
                <label htmlFor="services-name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {t.services.formName}
                </label>
                <input
                  type="text"
                  id="services-name"
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-4 text-zinc-900 transition-all focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/10 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:border-purple-400"
                  placeholder={t.services.formNamePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="services-email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {t.services.formEmail}
                </label>
                <input
                  type="email"
                  id="services-email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-4 text-zinc-900 transition-all focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/10 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:border-purple-400"
                  placeholder={t.services.formEmailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="services-project" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {t.services.formProject}
                </label>
                <textarea
                  id="services-project"
                  name="project"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-zinc-300 bg-white px-4 py-4 text-zinc-900 transition-all focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/10 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:border-purple-400"
                  placeholder={t.services.formProjectPlaceholder}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4 font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.services.formSend}
              </motion.button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl">
              {t.services.faqTitle}
            </h2>
          </FadeIn>

          <div className="mt-12 space-y-6">
            {t.services.faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-purple-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-purple-800">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                    {faq.answer}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Back to home */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-xl text-center">
          <motion.a
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-zinc-500 transition-colors hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400"
            whileHover={{ x: -4 }}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>{t.services.backToPortfolio}</span>
          </motion.a>
        </div>
      </section>
    </>
  );
}
