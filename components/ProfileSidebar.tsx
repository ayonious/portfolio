"use client";

import { useSiteContent } from "./ContentProvider";

import LanguageSwitcher from "./LanguageSwitcher";
import InlineLink from "./InlineLink";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ColorPalette from "./ColorPalette";
import ThemeToggle from "./ThemeToggle";
import BrandIcon from "./BrandIcon";
import { type NavigationIcon } from "../config/siteContent";
import {
  BooksIcon,
  BriefcaseIcon,
  CloseIcon,
  DiplomaIcon,
  PawIcon,
  LightningIcon,
  MailIcon,
  MenuIcon,
  MegaphoneIcon,
  SailboatIcon,
  RobotIcon,
  TheaterMaskIcon,
  WrenchIcon,
} from "./icons/SidebarIcons";

const navigationIcons: Record<NavigationIcon, typeof BriefcaseIcon> = {
  books: BooksIcon,
  briefcase: BriefcaseIcon,
  diploma: DiplomaIcon,
  paw: PawIcon,
  lightning: LightningIcon,
  megaphone: MegaphoneIcon,
  robot: RobotIcon,
  theater: TheaterMaskIcon,
  wrench: WrenchIcon,
};

export default function ProfileSidebar() {
  const { sidebarContent } = useSiteContent();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const main = document.querySelector("main");
    const previousOverflow = document.body.style.overflow;
    const wasInert = main?.inert ?? false;
    document.body.style.overflow = "hidden";
    if (main) main.inert = true;
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      if (main) main.inert = wasInert;
    };
  }, [menuOpen]);

  return (
    <>
    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 px-4 py-2 dark:border-slate-700 sm:px-8 lg:hidden">
      <Link href="/" className="flex items-center gap-2 text-xl font-bold text-slate-950 no-underline dark:text-slate-50">
        <SailboatIcon className="shrink-0" />
        <span>{sidebarContent.name}</span>
      </Link>
      <div className="ml-auto flex shrink-0 items-center">
      <LanguageSwitcher />
      <ColorPalette />
      <ThemeToggle />
      <button
        ref={menuButtonRef}
        type="button"
        aria-label={menuOpen ? sidebarContent.closeMenuLabel : sidebarContent.openMenuLabel}
        aria-expanded={menuOpen}
        aria-controls="profile-sidebar"
        onClick={() => setMenuOpen((open) => !open)}
        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl text-[var(--accent)] hover:bg-[var(--accent-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
      >
        <MenuIcon />
      </button>
      </div>
    </div>
    <aside
      id="profile-sidebar"
      role={menuOpen ? "dialog" : undefined}
      aria-modal={menuOpen ? true : undefined}
      aria-label={menuOpen ? sidebarContent.menuLabel : undefined}
      onClickCapture={(event) => {
        if ((event.target as HTMLElement).closest("a") && menuOpen) closeMenu();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          event.preventDefault();
          closeMenu();
        }
        if (event.key === "Tab" && menuOpen) {
          const items = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
          const first = items[0];
          const last = items[items.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }
      }}
      className={`${menuOpen ? "fixed inset-0 z-50 block h-dvh overflow-y-auto" : "hidden"} min-w-0 border-b border-slate-200 bg-slate-50 px-4 pb-5 transition-colors dark:border-slate-700 dark:bg-slate-900 sm:px-8 sm:pb-8 lg:sticky lg:inset-auto lg:top-0 lg:z-auto lg:block lg:h-screen lg:overflow-y-auto lg:border-r lg:border-b-0 lg:px-7 lg:py-10`}
    >
      <div className="flex min-h-full flex-col">
        <div>
          <div className="-mx-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 px-4 py-2 dark:border-slate-700 sm:-mx-8 sm:px-8 lg:mx-0 lg:gap-3 lg:px-0 lg:pt-0 lg:pb-5">
            <Link
              className="flex items-center gap-2 text-xl font-bold text-slate-950 no-underline dark:text-slate-50 lg:text-2xl"
              href="/"
            >
              <SailboatIcon className="shrink-0" />
              <span>{sidebarContent.name}</span>
            </Link>
            <div className="ml-auto flex shrink-0 items-center lg:ml-0">
              <LanguageSwitcher />
              <ColorPalette />
              <ThemeToggle />
              <button ref={closeButtonRef} type="button" onClick={closeMenu} aria-label={sidebarContent.closeMenuLabel} className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl text-[var(--accent)] hover:bg-[var(--accent-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] lg:hidden">
                <CloseIcon />
              </button>
            </div>
          </div>
          <p className="mt-5 border-b border-slate-200 pb-5 text-slate-600 dark:border-slate-700 dark:text-slate-300 lg:max-w-xs">
            {sidebarContent.introduction.textBefore}
            <InlineLink
              href="/about"
            >
              {sidebarContent.introduction.linkText}
            </InlineLink>
            {sidebarContent.introduction.textAfter}
          </p>
        </div>

        <nav
          aria-label={sidebarContent.mainNavigationLabel}
          className="mx-auto mt-5 flex w-max max-w-full flex-col gap-2 lg:mx-0 lg:mt-8 lg:w-full lg:max-w-none"
        >
          {sidebarContent.navigation.map(({ href, label, icon }) => {
            const Icon = navigationIcons[icon];
            const isActive = pathname === href;
            const content = (
              <>
                <Icon className="shrink-0 text-[var(--accent)]" />
                <span>{label}</span>
              </>
            );
            const className = `flex min-h-11 min-w-0 items-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold no-underline transition-[color,background-color,translate] duration-200 ease-out sm:text-base lg:gap-3 lg:motion-safe:hover:translate-x-1 lg:motion-safe:focus-visible:translate-x-1 motion-reduce:transition-none ${
              isActive
                ? "lg:motion-safe:translate-x-1 border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                : "border-transparent text-slate-700 hover:bg-[var(--accent-soft)] hover:text-slate-950 dark:text-slate-200 dark:hover:text-white"
            }`;

            return (
              <Link
                key={href}
                href={href}
                className={className}
                aria-current={isActive ? "page" : undefined}
              >
                {content}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 flex flex-col items-center border-t border-slate-200 pt-5 dark:border-slate-700 lg:mt-auto">
          <div className="flex justify-center gap-2">
            {sidebarContent.socialLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.url.startsWith("/about#contact") ? sidebarContent.openContactFormLabel : `${sidebarContent.openProfilePrefix} ${link.label} ${sidebarContent.openProfileSuffix}`}
                title={link.url.startsWith("/about#contact") ? sidebarContent.openContactFormLabel : `${sidebarContent.openProfilePrefix} ${link.label} ${sidebarContent.openProfileSuffix}`}
                className="group relative flex h-10 w-10 items-center justify-center rounded-xl no-underline transition-[background-color,translate,scale] duration-200 ease-out hover:bg-[var(--accent-soft)] motion-safe:hover:-translate-y-1 motion-safe:hover:scale-110 motion-safe:focus-visible:-translate-y-1 motion-safe:focus-visible:scale-110 motion-reduce:transition-none"
              >
                {link.url.startsWith("/about#contact") ? (
                  <MailIcon className="h-5 w-5 text-[var(--accent)]" />
                ) : (
                  <BrandIcon name={link.label} className="h-5 w-5" />
                )}
                <span
                  role="tooltip"
                  className="sidebar-tooltip absolute bottom-12 left-1/2 w-max -translate-x-1/2 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  {link.label}
                </span>
              </a>
            ))}
          </div>
          <p className="mt-3 text-[length:var(--sidebar-label-font-size)] text-slate-500 dark:text-slate-400">
            {sidebarContent.footerCredit}
          </p>
        </div>
      </div>
    </aside>
    </>
  );
}
