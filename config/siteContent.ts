import { defaultLocale, locales } from "./locales";

export type { NavigationIcon } from "./locales/en";

// The text itself lives in config/locales/<language>.ts.
export const {
  siteMetadata,
  homeContent,
  sidebarContent,
  aboutContent,
  pageContent,
  aboutSiteContent,
  linkContent,
  tagContent,
} = locales[defaultLocale];
