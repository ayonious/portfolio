import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const sharedProps: IconProps = {
  "aria-hidden": true,
  fill: "none",
  height: 28,
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  viewBox: "0 0 24 24",
  width: 28,
};

export function MegaphoneIcon(props: IconProps) {
  return (
    <svg {...sharedProps} height={24} strokeWidth={1} width={24} {...props}>
      <path d="M4 9h5l10-5v16L9 15H4ZM9 9v6M6 15l1 5h4l-2-5" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...sharedProps} height={24} width={24} strokeWidth={1} {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...sharedProps} height={24} width={24} strokeWidth={1} {...props}>
      <path d="m5 5 14 14M19 5 5 19" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...sharedProps} height={16} strokeWidth={2} width={16} {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...sharedProps} height={16} strokeWidth={2.25} width={16} {...props}>
      <path d="m5 12 4 4 10-10" />
    </svg>
  );
}

export function TheaterMaskIcon(props: IconProps) {
  return (
    <svg {...sharedProps} height={24} strokeWidth={1} width={24} {...props}>
      <path d="M3 4c4 2 7 2 11 0v9c-5 8-11 4-11-1ZM6 9h.01M11 9h.01M6 12c2 3 4 3 5 0M14 8c3 1 5 0 7-1v10c-3 6-8 6-11 2M17 12h.01M15 18c2-3 4-3 5 0" />
    </svg>
  );
}

export function WrenchIcon(props: IconProps) {
  return (
    <svg {...sharedProps} height={24} strokeWidth={1} width={24} {...props}>
      <path d="M14 4a6 6 0 0 0-7 8l-4 5a3 3 0 0 0 4 4l5-5a6 6 0 0 0 8-7l-4 3-4-4Z" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...sharedProps} height={24} strokeWidth={1.75} width={24} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.5 5.5 7 7m10 10 1.5 1.5m0-13L17 7M7 17l-1.5 1.5" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...sharedProps} height={24} strokeWidth={1.75} width={24} {...props}>
      <path d="M20 14A8.5 8.5 0 0 1 10 4a8.5 8.5 0 1 0 10 10Z" />
    </svg>
  );
}

export function SailboatIcon(props: IconProps) {
  return (
    <svg {...sharedProps} height={26} strokeWidth={1.75} width={26} {...props}>
      <path d="M12 3v14M12 3l-8 11h8m3-7 6 7h-6M3 17h18l-3 4H6Z" />
    </svg>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg {...sharedProps} height={24} strokeWidth={1} width={24} {...props}>
      <rect x="3.5" y="7" width="17" height="13" rx="2" />
      <path d="M8 7V4h8v3M3.5 12a21 21 0 0 0 17 0M12 12v3" />
    </svg>
  );
}

export function LightningIcon(props: IconProps) {
  return (
    <svg {...sharedProps} height={24} strokeWidth={1} width={24} {...props}>
      <path d="m13 3-9 11h7l-1 7L20 10h-7Z" />
    </svg>
  );
}

export function BooksIcon(props: IconProps) {
  return (
    <svg {...sharedProps} height={24} strokeWidth={1} width={24} {...props}>
      <path d="M3 4h4v17H3ZM10 3h4v18h-4ZM17 5l3-1 2 16-3 1ZM3 17h4M10 7h4" />
    </svg>
  );
}

export function DiplomaIcon(props: IconProps) {
  return (
    <svg {...sharedProps} height={24} strokeWidth={1} width={24} {...props}>
      <rect x="3" y="4" width="18" height="13" rx="1.5" />
      <path d="M7 8h10M7 12h4M14 17l-1 5 3-2 3 2-1-5" />
      <circle cx="16" cy="14" r="3" />
    </svg>
  );
}

export function RobotIcon(props: IconProps) {
  return (
    <svg {...sharedProps} height={24} strokeWidth={1} width={24} {...props}>
      <rect x="4" y="7" width="16" height="13" rx="1.5" />
      <path d="M12 7V3M10 3h4M2 11v5M22 11v5M9 16h6" />
      <circle cx="8" cy="12" r="1" />
      <circle cx="16" cy="12" r="1" />
    </svg>
  );
}

export function PawIcon(props: IconProps) {
  return (
    <svg {...sharedProps} height={24} strokeWidth={1} width={24} {...props}>
      <path d="M6 17c0-3 3-7 6-7s6 4 6 7c0 6-4 1-6 1s-6 5-6-1Z" />
      <circle cx="4" cy="10" r="2" />
      <circle cx="9" cy="5" r="2" />
      <circle cx="15" cy="5" r="2" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  );
}
