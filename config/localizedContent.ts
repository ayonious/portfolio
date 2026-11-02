import { mergeContent } from "./content";
import { germanContent } from "./locales/de";
import { englishContent } from "./locales/en";
import { languageContent, resolveLocale, type Locale } from "./internationalization";

export { mergeContent };

export function contentForLocale(locale: Locale) {
  return locale === "de" ? germanContent : englishContent;
}

export function messagesForLocale(locale: Locale) {
  const { homeContent, siteMetadata } = contentForLocale(locale);
  return { Home: homeContent, Metadata: siteMetadata, Language: languageContent[locale] };
}

export function resolveSite(selectedLocale?: string | null) {
  const locale = resolveLocale(selectedLocale);
  return {
    locale,
    content: contentForLocale(locale),
    messages: messagesForLocale(locale),
  };
}
export type ResolvedSite = ReturnType<typeof resolveSite>;
