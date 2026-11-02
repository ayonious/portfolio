import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
export default withNextIntl({ transpilePackages: ["next-intl", "use-intl", "intl-messageformat", "@formatjs/icu-messageformat-parser", "@formatjs/icu-skeleton-parser", "@formatjs/fast-memoize"] } satisfies NextConfig);
