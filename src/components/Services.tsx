"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

const painPoints = [
  { icon: "clock", text: "Agencies that take months to deliver" },
  { icon: "ghost", text: "Freelancers who vanish mid-project" },
  { icon: "mail", text: "Emails that go unanswered for weeks" },
  { icon: "money", text: "Quotes that mysteriously double" },
];

const comparisonData = [
  { usual: "Weeks to get a quote", me: "Quote within 48 hours", icon: "fast" },
  { usual: '"We\'ll get back to you"', me: "Replies within 24 hours", icon: "reply" },
  { usual: "6–8 week timelines", me: "1–2 weeks, delivered", icon: "rocket" },
  { usual: "Surprise costs mid-project", me: "Clear pricing upfront", icon: "price" },
  { usual: "Lost in translation", me: "Native English + Japanese", icon: "language" },
];

const howItWorks = [
  { step: "01", title: "You reach out", description: "Tell me what you're building and when you need it" },
  { step: "02", title: "I reply within 24 hours", description: "With questions or a clear quote" },
  { step: "03", title: "We agree on scope", description: "No surprises later" },
  { step: "04", title: "I build it", description: "You'll get updates, not silence" },
  { step: "05", title: "You launch", description: "Usually within 1–2 weeks" },
];

const specializations = [
  {
    icon: "cart",
    title: "EC Websites",
    description: "Full e-commerce solutions with Japanese payment gateways, inventory management, and mobile-first design.",
  },
  {
    icon: "payment",
    title: "Payment Systems",
    description: "Stripe, PayPay, LINE Pay, and konbini payment integration. The options Japanese customers actually use.",
  },
  {
    icon: "line",
    title: "LINE Integration",
    description: "LINE Official Account setup, messaging APIs, login integration, and LINE Mini App development.",
  },
  {
    icon: "mobile",
    title: "Mobile & SEO",
    description: "Mobile-first responsive design with Japanese SEO optimization, schema markup, and Core Web Vitals.",
  },
  {
    icon: "language",
    title: "Multi-language",
    description: "Japanese/English bilingual sites with proper i18n, URL structure, and hreflang for international SEO.",
  },
  {
    icon: "form",
    title: "Forms & Booking",
    description: "Contact forms, reservation systems, and inquiry management tailored for Japanese business etiquette.",
  },
];

const faqs = [
  {
    question: "How do you scope larger projects?",
    answer: "We start with a call to understand what you need. I'll ask about your users, your workflow, and what success looks like. Then I send a clear proposal with scope, timeline, and cost—no surprises.",
  },
  {
    question: "Can you work with our existing systems?",
    answer: "Yes. I can integrate with your current tools, APIs, or databases. If you're starting fresh, I'll recommend what makes sense for your use case.",
  },
  {
    question: "Do you work with Japanese companies too?",
    answer: "Yes—I'm fully bilingual and comfortable working in either language.",
  },
  {
    question: "What happens after launch?",
    answer: "I offer ongoing support if you need it—maintenance, updates, fixes. Or I can hand everything over and you're set. Your call.",
  },
];

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

export function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden px-6 py-24">
        {/* Animated gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-purple-950/20" />
          <motion.div
            className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-purple-200/40 blur-3xl dark:bg-purple-900/20"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute -right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-indigo-200/40 blur-3xl dark:bg-indigo-900/20"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
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
                  Available for new projects
                </span>
              </motion.div>
            </div>
          </FadeIn>

          {/* Main headline */}
          <FadeIn delay={0.1}>
            <h1 className="mt-8 pb-2 text-center text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-zinc-900 dark:text-white">Web Tools for</span>
              <span className="mt-2 block bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text pb-2 text-transparent">
                Foreign Businesses in Japan
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-zinc-600 dark:text-zinc-400 sm:text-xl">
              From simple sites to custom applications. Fast, clear, delivered.
            </p>
          </FadeIn>

          {/* Pain points grid */}
          <FadeIn delay={0.3}>
            <div className="mt-12">
              <p className="text-center text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                Tired of this?
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
                There&apos;s a simpler way.
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
                <span>Start your project</span>
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
                View pricing
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
                    <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Tokyo, Japan</span>
                  </div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
                    I&apos;m Sam Nakazaki
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                    A bilingual developer who builds web tools for foreign businesses in Japan—from simple sites to custom applications.
                  </p>
                  <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                    I reply fast, communicate in plain English (or Japanese), and actually deliver when I say I will.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      Native English
                    </span>
                    <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      Fluent Japanese
                    </span>
                    <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                      Le Wagon Alumni
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
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Direct communication</h3>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">No project managers. No endless meetings. You talk directly to me.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-900/50">
                    <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Fast turnaround</h3>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">Most projects delivered in 1–2 weeks, not months.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-pink-100 dark:bg-pink-900/50">
                    <svg className="h-6 w-6 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Bilingual support</h3>
                    <p className="mt-1 text-zinc-600 dark:text-zinc-400">I bridge Western expectations with Japanese market needs.</p>
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
              Built for Japan
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-zinc-600 dark:text-zinc-400">
              Solutions designed for the Japanese market
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specializations.map((item, index) => (
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
              What&apos;s different?
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
              Simple, transparent pricing
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-zinc-600 dark:text-zinc-400">
              No hidden fees. No surprise costs. You know exactly what you&apos;re paying for.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* Quick Builds Card */}
            <FadeIn delay={0.1}>
              <motion.div
                className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Quick Builds</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-zinc-900 dark:text-white">¥80,000 – ¥150,000</span>
                </div>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                  Landing pages, single-page sites. Get online fast.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "1–2 week delivery",
                    "Mobile responsive",
                    "Basic SEO setup",
                    "You own everything",
                  ].map((feature, i) => (
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
                  Best for: Companies who need a simple site, fast.
                </p>
                <motion.a
                  href="#services-contact"
                  className="mt-8 block w-full rounded-xl border-2 border-zinc-200 py-4 text-center font-semibold text-zinc-700 transition-all hover:border-purple-300 hover:text-purple-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-purple-600 dark:hover:text-purple-400"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get started
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
                    <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">Most Popular</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-white">Web Applications</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-zinc-900 dark:text-white">¥300,000+</span>
                    <span className="text-zinc-500">scoped per project</span>
                  </div>
                  <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                    Booking systems, dashboards, internal tools. Built to spec.
                  </p>
                  <ul className="mt-8 space-y-4">
                    {[
                      "User authentication",
                      "Database & admin panels",
                      "Custom functionality",
                      "Timeline depends on scope",
                    ].map((feature, i) => (
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
                    Best for: Businesses needing custom tools that work.
                  </p>
                  <motion.a
                    href="#services-contact"
                    className="mt-8 block w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-4 text-center font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/30"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get started
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
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Ongoing Support</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-zinc-900 dark:text-white">Monthly retainer</span>
                </div>
                <p className="mt-1 text-sm text-zinc-500">price on request</p>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                  Keep your site running smoothly. I handle the technical side.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Maintenance & updates",
                    "Bug fixes & iterations",
                    "Hosting management",
                    "Priority response",
                  ].map((feature, i) => (
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
                  Best for: Teams who want reliable, ongoing support.
                </p>
                <motion.a
                  href="#services-contact"
                  className="mt-8 block w-full rounded-xl border-2 border-zinc-200 py-4 text-center font-semibold text-zinc-700 transition-all hover:border-purple-300 hover:text-purple-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-purple-600 dark:hover:text-purple-400"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get started
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
              How it works
            </h2>
          </FadeIn>

          <div className="mt-16">
            {howItWorks.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="group relative flex gap-6 pb-12 last:pb-0">
                  {/* Connector line */}
                  {index < howItWorks.length - 1 && (
                    <div className="absolute left-6 top-12 h-full w-px bg-gradient-to-b from-purple-500 to-transparent" />
                  )}
                  {/* Step number */}
                  <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 opacity-20 blur transition-all group-hover:opacity-40" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-purple-500/50 bg-zinc-900 text-sm font-bold text-purple-400">
                      {item.step}
                    </div>
                  </div>
                  {/* Content */}
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
              Sound good?
            </h2>
            <p className="mt-4 text-center text-lg text-zinc-600 dark:text-zinc-400">
              Tell me about your project. I&apos;ll get back to you within 24 hours.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              name="services"
              method="POST"
              action="/success"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="mt-10 space-y-6"
            >
              <input type="hidden" name="form-name" value="services" />
              <input type="hidden" name="bot-field" />

              <div>
                <label htmlFor="services-name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Name
                </label>
                <input
                  type="text"
                  id="services-name"
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-4 text-zinc-900 transition-all focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/10 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:border-purple-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="services-email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Email
                </label>
                <input
                  type="email"
                  id="services-email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-4 text-zinc-900 transition-all focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/10 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:border-purple-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="services-project" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Tell me about your project
                </label>
                <textarea
                  id="services-project"
                  name="project"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-zinc-300 bg-white px-4 py-4 text-zinc-900 transition-all focus:border-purple-500 focus:outline-none focus:ring-4 focus:ring-purple-500/10 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:focus:border-purple-400"
                  placeholder="What are you building? When do you need it?"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4 font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
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
              Questions?
            </h2>
          </FadeIn>

          <div className="mt-12 space-y-6">
            {faqs.map((faq, index) => (
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
            href="/"
            className="inline-flex items-center gap-2 text-zinc-500 transition-colors hover:text-purple-600 dark:text-zinc-400 dark:hover:text-purple-400"
            whileHover={{ x: -4 }}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>Back to portfolio</span>
          </motion.a>
        </div>
      </section>
    </>
  );
}
