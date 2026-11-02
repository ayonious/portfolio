"use client";

import { useSiteContent } from "./ContentProvider";

import type { ComponentPropsWithRef } from "react";

type HeadingLinkProps = ComponentPropsWithRef<"a"> & {
  tooltip?: string;
};

function destinationTooltip(linkContent: ReturnType<typeof useSiteContent>["linkContent"], href?: string) {
  if (!href) return linkContent.openWebsite;
  try {
    const { hostname } = new URL(href);
    return linkContent.destinations.find((destination) =>
      hostname === destination.hostname || hostname.endsWith(`.${destination.hostname}`),
    )?.tooltip ?? linkContent.openWebsite;
  } catch {
    return linkContent.openWebsite;
  }
}

export default function HeadingLink({ children, className = "", tooltip, ...props }: HeadingLinkProps) {
  const { linkContent } = useSiteContent();
  const tip = tooltip ?? destinationTooltip(linkContent, props.href);
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      title={props.title ?? tip}
      className={`heading-link group ${className}`}
    >
      {children}
      {tip && (
        <span aria-hidden="true" className="sidebar-tooltip absolute bottom-full left-0 mb-2 w-max group-hover:opacity-100 group-focus-visible:opacity-100">
          {tip}
        </span>
      )}
    </a>
  );
}
