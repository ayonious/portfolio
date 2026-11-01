"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSite } from "./ContentProvider";
import { languageContent, languageUrl, supportedLocales } from "../config/internationalization";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const { locale, domains, showLanguageSwitcher } = useSite();
  const [currentUrl, setCurrentUrl] = useState<string>();
  useEffect(() => { setCurrentUrl(window.location.href); }, [pathname]);
  if (!showLanguageSwitcher || !domains || !currentUrl) return null;
  const labels = languageContent[locale];
  return (
    <div aria-label={labels.label} className="mt-4 flex flex-wrap justify-center gap-2">
      {supportedLocales.map((language) => {
        const href = languageUrl(currentUrl, language);
        return href ? (
          <a key={language} href={href} hrefLang={language} lang={language}
            onClick={(event) => {
              const destination = languageUrl(window.location.href, language);
              if (destination) event.currentTarget.href = destination;
            }}
            aria-current={language === locale ? "true" : undefined}
            className="rounded-lg px-3 py-2 text-sm text-[var(--accent)] hover:bg-[var(--accent-soft)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]">
            {labels[language]}
          </a>
        ) : null;
      })}
    </div>
  );
}
