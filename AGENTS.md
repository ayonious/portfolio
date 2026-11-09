# Portfolio repository guidance

## Content and configuration

- Keep user-editable text, URLs, labels, lists, profile details, and structured page data in `config/`.
- Keep page-specific data in focused files such as `books.ts`, `projects.ts`, `workHistory.ts`, and `certifications.ts`.
- Put shared page titles, introductions, navigation labels, metadata, and profile links in `config/locales/en.ts` (one file per language; `config/locales/index.ts` picks the default, `config/siteContent.ts` re-exports it).
- Put theme options and other visual configuration values in dedicated config files such as `config/theme.ts`.
- React files under `app/` and `components/` should primarily render configured content and handle interaction. Avoid introducing substantial hardcoded copy there.

## Components and assets

- Keep shared SVG icon components in `components/icons/SidebarIcons.tsx` and reference them from configured navigation through an icon key.
- Store site images under `public/images/` and keep their paths and alternative text in config when they are content assets.
- Preserve the palette-aware CSS variables and light/dark theme behavior when adding UI.
- Show relevant icons beside named technologies, platforms, payment methods, login providers, and brands wherever they appear in content, including prose, work highlights, project descriptions, and tags—not only technology lists. Reuse `BrandIcon` and `BrandText`, and extend the shared icon mapping when adding a missing brand.
- Keep the visible name alongside each icon, mark decorative icons as hidden from assistive technology, and ensure icons remain legible in both themes. Use an appropriate generic icon for unbranded concepts such as email login; do not substitute an unrelated brand logo. Match full names so Apple Pay and Google Pay keep their payment logos.

## Validation

- Run `yarn test --runInBand`, `yarn build`, and `git diff --check` after meaningful changes.
- Do not add Storybook unless the user explicitly requests it again.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->
