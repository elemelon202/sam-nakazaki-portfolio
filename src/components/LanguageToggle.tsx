"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "@/i18n";

export function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  // Get the path without the locale prefix
  const getPathWithoutLocale = () => {
    if (pathname.startsWith("/en")) {
      return pathname.replace(/^\/en/, "") || "/";
    }
    if (pathname.startsWith("/ja")) {
      return pathname.replace(/^\/ja/, "") || "/";
    }
    return pathname;
  };

  const pathWithoutLocale = getPathWithoutLocale();
  const otherLocale = locale === "en" ? "ja" : "en";
  const newPath = `/${otherLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;

  return (
    <motion.div
      className="fixed left-6 top-6 z-50"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Link href={newPath}>
        <motion.button
          className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-4 py-2 text-sm font-medium text-zinc-700 shadow-lg backdrop-blur-sm transition-all hover:border-purple-300 hover:text-purple-600 dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-300 dark:hover:border-purple-600 dark:hover:text-purple-400"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
            />
          </svg>
          <span>{locale === "en" ? "日本語" : "English"}</span>
        </motion.button>
      </Link>
    </motion.div>
  );
}
