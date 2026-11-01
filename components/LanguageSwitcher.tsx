"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useSite } from "./ContentProvider";
import { languageContent, languageUrl, supportedLocales } from "../config/internationalization";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const { locale, domains, showLanguageSwitcher } = useSite();
  const [currentUrl, setCurrentUrl] = useState<string>();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setCurrentUrl(window.location.href); }, [pathname]);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  if (!showLanguageSwitcher || !domains || !currentUrl) return null;
  const labels = languageContent[locale];

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label={labels.label}
        aria-expanded={open}
        title={labels.label}
        onClick={() => setOpen((current) => !current)}
        className="hover-lift flex h-10 min-w-10 cursor-pointer items-center justify-center rounded-xl px-2 text-xs font-bold uppercase tracking-wide text-[var(--accent)] hover:bg-[var(--accent-soft)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
      >
        {locale}
      </button>

      {open && (
        <div className="absolute top-12 left-1/2 z-30 min-w-32 -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg dark:border-slate-700 dark:bg-slate-900">
          {supportedLocales.map((language) => {
            const href = languageUrl(currentUrl, language);
            return href ? (
              <a
                key={language}
                href={href}
                hrefLang={language}
                lang={language}
                onClick={(event) => {
                  const destination = languageUrl(window.location.href, language);
                  if (destination) event.currentTarget.href = destination;
                  setOpen(false);
                }}
                aria-current={language === locale ? "true" : undefined}
                className={`block rounded-lg px-3 py-2 text-sm font-semibold no-underline ${language === locale ? "bg-[var(--accent-soft)] text-[var(--accent)]" : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"}`}
              >
                {labels[language]}
              </a>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
}
