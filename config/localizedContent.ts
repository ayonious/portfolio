import { defaultContent, type ContentOverrides, type SiteContent } from "./content";
import { germanContent } from "./locales/de";
import { languageContent, resolveDomain, type Locale } from "./internationalization";

export function mergeContent<T>(base: T, override?: ContentOverrides<T>): T {
  if (override === undefined) return base;
  if (Array.isArray(base) || typeof base !== "object" || base === null) return override as T;
  const result = { ...base } as Record<string, unknown>;
  for (const [key, value] of Object.entries(override as object)) {
    if (value !== undefined) result[key] = mergeContent(result[key], value);
  }
  return result as T;
}

export function contentForLocale(locale: Locale) {
  return mergeContent<SiteContent>(defaultContent, locale === "de" ? germanContent : undefined);
}

export function messagesForLocale(locale: Locale) {
  const { homeContent, siteMetadata } = contentForLocale(locale);
  return { Home: homeContent, Metadata: siteMetadata, Language: languageContent[locale] };
}

export function resolveSite(host: string | null) {
  const { locale, domains } = resolveDomain(host);
  return { locale, domains, content: contentForLocale(locale), messages: messagesForLocale(locale) };
}
export type ResolvedSite = ReturnType<typeof resolveSite>;
