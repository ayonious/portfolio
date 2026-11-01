export const supportedLocales = ["en", "de"] as const;
export type Locale = (typeof supportedLocales)[number];
export const defaultLocale: Locale = "en";
export const localeHeader = "x-portfolio-locale";

export const languageContent = {
  en: { label: "Language", changeLabel: "Change language", en: "English", de: "Deutsch" },
  de: { label: "Sprache", changeLabel: "Sprache wechseln", en: "English", de: "Deutsch" },
};

export function resolveLocale(value: string | null | undefined): Locale {
  return supportedLocales.find((locale) => locale === value) ?? defaultLocale;
}

export function localizedPath(path: string, locale: Locale) {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  const withoutLocale = path.replace(/^\/(?:en|de)(?=\/|$)/, "") || "/";
  return `/${locale}${withoutLocale === "/" ? "" : withoutLocale}`;
}
