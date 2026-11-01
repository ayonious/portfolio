import Link from "next/link";
import type { ComponentProps } from "react";
import { localizedPath } from "../config/internationalization";
import { useSite } from "./ContentProvider";

/** Shared prose link with Next.js navigation and keyboard focus styling. */
export default function InlineLink({ className = "", ...props }: ComponentProps<typeof Link>) {
  const { locale } = useSite();
  const href = typeof props.href === "string" ? localizedPath(props.href, locale) : props.href;
  return (
    <Link
      {...props}
      href={href}
      className={`inline-block transition-[color,scale] duration-200 ease-out hover:text-[var(--accent)] motion-safe:hover:scale-103 motion-safe:hover:underline motion-safe:focus-visible:scale-103 motion-safe:focus-visible:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] motion-reduce:transition-none ${className}`}
    />
  );
}
