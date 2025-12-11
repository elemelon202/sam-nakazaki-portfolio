"use client";

import { createContext, useContext, ReactNode } from "react";
import { translations, Locale, TranslationKey } from "./translations";

type I18nContextType = {
  locale: Locale;
  t: TranslationKey;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const t = translations[locale];

  return (
    <I18nContext.Provider value={{ locale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }
  return context;
}
