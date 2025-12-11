import { I18nProvider, Locale, locales } from "@/i18n";
import { LanguageToggle } from "@/components/LanguageToggle";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const isJapanese = locale === "ja";

  const title = isJapanese ? "中崎サム | デベロッパー" : "Sam Nakazaki | Developer";
  const description = isJapanese
    ? "Ruby on Rails、React、Next.jsでWebアプリケーションを開発するフルスタックデベロッパー"
    : "Full Stack Developer building web applications with Ruby on Rails, React, and Next.js";
  const ogImage = isJapanese ? "/og-ja.png" : "/og-en.png";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: isJapanese ? "ja_JP" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
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
