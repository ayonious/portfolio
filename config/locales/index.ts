import * as en from "./en";

// To add a language: copy en.ts to e.g. de.ts, translate it, import it here and
// add it to `locales`. Set `defaultLocale` to choose the language of the site.
export const locales = { en } satisfies Record<string, typeof en>;

export const defaultLocale: keyof typeof locales = "en";
