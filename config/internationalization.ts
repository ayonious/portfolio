export const supportedLocales = ["en", "de"] as const;
export type Locale = (typeof supportedLocales)[number];
export const defaultLocale: Locale = "en";

// Exact hostnames only. Configure their DNS and hosting separately.
// A group defines the destinations available in its language switcher.
export const domainGroups: Array<Record<Locale, string>> = [
  { en: "en.localhost", de: "de.localhost" },
  { en: "en.nahiyan.de", de: "de.nahiyan.de" },
];
export const domainAliases: Record<string, { group: number; locale: Locale }> = {
  localhost: { group: 0, locale: "en" },
  "nahiyan.de": { group: 1, locale: "en" },
  "www.nahiyan.de": { group: 1, locale: "en" },
};

export const languageContent = {
  en: { label: "Language", en: "English", de: "Deutsch" },
  de: { label: "Sprache", en: "English", de: "Deutsch" },
};

export function normalizeHost(host: string | null) {
  return (host ?? "").trim().toLowerCase().replace(/:\d+$/, "").replace(/\.$/, "");
}

export function isLocalDevelopmentHost(host: string | null) {
  const hostname = normalizeHost(host);
  return hostname === "localhost" || hostname.endsWith(".localhost");
}

export function resolveDomain(host: string | null) {
  const hostname = normalizeHost(host);
  for (const group of domainGroups) {
    for (const locale of supportedLocales) {
      if (group[locale] === hostname) return { locale, domains: group };
    }
  }
  const alias = Object.hasOwn(domainAliases, hostname) ? domainAliases[hostname] : undefined;
  if (alias && domainGroups[alias.group]) {
    return { locale: alias.locale, domains: domainGroups[alias.group] };
  }
  return { locale: defaultLocale, domains: null };
}

// Derive only the destination hostname from trusted configuration. Preserve path,
// query, hash, protocol and local dev port; never infer domains from an unknown host.
export function languageUrl(currentUrl: string, locale: Locale) {
  const url = new URL(currentUrl);
  const { domains } = resolveDomain(url.host);
  if (!domains) return null;
  url.hostname = domains[locale];
  return url.href;
}
