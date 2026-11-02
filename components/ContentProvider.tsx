"use client";

import { createContext, useContext, type ReactNode } from "react";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import { resolveSite, type ResolvedSite } from "../config/localizedContent";

const SiteContext = createContext<ResolvedSite>(resolveSite(null));

function TranslatedContent({ site, children }: { site: ResolvedSite; children: ReactNode }) {
  const t = useTranslations("Home");
  const homeContent = Object.fromEntries(
    Object.keys(site.content.homeContent).map((key) => [key, t(key)]),
  ) as ResolvedSite["content"]["homeContent"];
  return <SiteContext.Provider value={{ ...site, content: { ...site.content, homeContent } }}>{children}</SiteContext.Provider>;
}

export function ContentProvider({ site, children }: { site: ResolvedSite; children: ReactNode }) {
  return (
    <NextIntlClientProvider locale={site.locale} messages={site.messages} timeZone="Europe/Berlin">
      <TranslatedContent site={site}>{children}</TranslatedContent>
    </NextIntlClientProvider>
  );
}
export function useSiteContent() { return useContext(SiteContext).content; }
export function useSite() { return useContext(SiteContext); }
