"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import { languageContent, localizedPath, supportedLocales } from "../config/internationalization";
import { useSite } from "./ContentProvider";
import { CheckIcon } from "./icons/SidebarIcons";

export default function LanguageSwitcher() {
  const { locale } = useSite();
  const labels = languageContent[locale];
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams?.toString() ?? "";
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="group relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          event.currentTarget.querySelector<HTMLButtonElement>("button")?.focus();
        }
      }}
    >
      <button
        type="button"
        aria-label={labels.changeLabel}
        aria-expanded={open}
        aria-haspopup="menu"
        title={labels.changeLabel}
        onClick={() => setOpen((current) => !current)}
        className="hover-lift peer flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl text-xs font-bold uppercase tracking-wide text-[var(--accent)] hover:bg-[var(--accent-soft)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
      >
        <span aria-hidden="true">{locale}</span>
      </button>

      {!open && (
        <span
          role="tooltip"
          className="sidebar-tooltip absolute top-12 left-1/2 w-max max-w-44 -translate-x-1/2 group-hover:opacity-100 peer-focus-visible:opacity-100"
        >
          {labels.changeLabel}
        </span>
      )}

      {open && (
        <div
          role="menu"
          aria-label={labels.label}
          className="absolute top-12 left-1/2 z-30 min-w-36 -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-1.5 shadow-lg dark:border-slate-700 dark:bg-slate-900"
        >
          {supportedLocales.map((language) => (
            <a
              key={language}
              lang={language}
              role="menuitemradio"
              aria-checked={language === locale}
              aria-current={language === locale ? "true" : undefined}
              href={`${localizedPath(pathname || "/", language)}${query ? `?${query}` : ""}`}
              onClick={() => setOpen(false)}
              className={`flex w-full cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm font-semibold disabled:cursor-wait ${language === locale ? "bg-[var(--accent-soft)] text-[var(--accent)]" : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"}`}
            >
              <span>{labels[language]}</span>
              {language === locale ? <CheckIcon /> : null}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
