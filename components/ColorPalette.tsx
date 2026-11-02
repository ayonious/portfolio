"use client";

import { useEffect, useRef, useState } from "react";
import { accentPalette, type Accent } from "../config/theme";
import { useSiteContent } from "./ContentProvider";

function isAccent(value: string | null): value is Accent {
  return accentPalette.some((option) => option.value === value);
}

function applyAccent(accent: Accent) {
  document.documentElement.dataset.accent = accent;
  window.localStorage.setItem("accent", accent);
}

export default function ColorPalette() {
  const { sidebarContent } = useSiteContent();
  const [accent, setAccent] = useState<Accent>("blue");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedAccent = window.localStorage.getItem("accent");
    const initialAccent = isAccent(savedAccent) ? savedAccent : "blue";

    setAccent(initialAccent);
    applyAccent(initialAccent);
  }, []);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  const currentColor = accentPalette.find((option) => option.value === accent)?.color;

  return (
    <div ref={containerRef} className="group relative">
      <button
        type="button"
        aria-label={sidebarContent.chooseAccentColorLabel}
        aria-expanded={open}
        title={sidebarContent.chooseAccentColorLabel}
        onClick={() => setOpen((current) => !current)}
        className="hover-lift peer flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl hover:bg-[var(--accent-soft)]"
      >
        <span
          aria-hidden="true"
          className="h-4 w-4 rounded-full"
          style={{ backgroundColor: currentColor }}
        />
      </button>

      {!open && (
        <span
          role="tooltip"
          className="sidebar-tooltip absolute top-12 left-1/2 w-max max-w-44 -translate-x-1/2 group-hover:opacity-100 peer-focus-visible:opacity-100"
        >
          {sidebarContent.chooseColorPaletteLabel}
        </span>
      )}

      {open && (
        <div className="absolute top-12 left-1/2 z-20 flex -translate-x-1/2 flex-col gap-1 rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-900">
          {accentPalette.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-label={`${sidebarContent.useAccentPrefix} ${sidebarContent.accentNames[option.value]} ${sidebarContent.useAccentSuffix}`}
              aria-pressed={accent === option.value}
              title={sidebarContent.accentNames[option.value]}
              onClick={() => {
                setAccent(option.value);
                applyAccent(option.value);
                setOpen(false);
              }}
              className="hover-lift flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <span
                aria-hidden="true"
                className="h-4 w-4 rounded-full"
                style={{ backgroundColor: option.color }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
