import { I18nProvider, Locale, locales } from "@/i18n";
import { LanguageToggle } from "@/components/LanguageToggle";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <I18nProvider locale={locale as Locale}>
      <LanguageToggle locale={locale as Locale} />
      {children}
    </I18nProvider>
  );
}
