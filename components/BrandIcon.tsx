import {
  siVuedotjs,
  siStorybook,
  siVite,
  siAdyen,
  siDocusaurus,
  siGatsby,
  siMui,
  siStyledcomponents,
  siWebpack,
  siBabel,
  siNetlify,
  siApachemaven,
  siJunit5,
  siHtml5,
  siCss,
  siGit,
  siGithubpages,
  siSwagger,
  siZod,
  siSaltproject,
  siGradle,
  siSwc,
  siNestjs,
  siFastify,
  siMarkdown,
  siHomebrew,
  siJenkins,
  siOpenjdk,

  siVercel,
  siTestinglibrary,
  siOpengl,
  siVagrant,
  siApple,
  siGoogle,
  siFacebook,
  siAndroid,
  siIos,
  siAlipay,
  siApplepay,
  siGooglepay,
  siKlarna,
  siPaypal,
  siWechat,
  siAnthropic,
  siBookingdotcom,
  siBraintree,
  siCouchbase,
  siCplusplus,
  siCursor,
  siCypress,
  siDocker,
  siExpress,
  siGithub,
  siGoodreads,
  siGooglebigquery,
  siGooglecloud,
  siGrafana,
  siGraphql,
  siJest,
  siJavascript,
  siKibana,
  siKotlin,
  siKubernetes,
  siMdx,
  siMysql,
  siNodedotjs,
  siNextdotjs,
  siNpm,
  siPhp,
  siPostgresql,
  siReact,
  siRuby,
  siSimpleicons,
  siSpringboot,
  siSwift,
  siTailwindcss,
  siTypescript,
  siWordpress,
  siYarn,
  type SimpleIcon,
} from "simple-icons";
import type { CSSProperties } from "react";
import { MailIcon, WrenchIcon } from "./icons/SidebarIcons";

const icons: Record<string, SimpleIcon> = {
  "Vue.js": siVuedotjs,
  Adyen: siAdyen,
  Storybook: siStorybook,
  Vite: siVite,
  "Docusaurus": siDocusaurus,
  "Gatsby": siGatsby,
  "Material UI": siMui,
  "Styled Components": siStyledcomponents,
  "Webpack": siWebpack,
  "Babel": siBabel,
  "Netlify": siNetlify,
  "Maven": siApachemaven,
  "JUnit": siJunit5,
  "HTML": siHtml5,
  "CSS": siCss,
  "Git": siGit,
  "GitHub Pages": siGithubpages,
  "Swagger": siSwagger,
  "Zod": siZod,
  "SaltStack": siSaltproject,
  "Gradle": siGradle,
  "SWC": siSwc,
  "NestJS": siNestjs,
  Fastify: siFastify,
  "Markdown": siMarkdown,
  "Homebrew": siHomebrew,
  Jenkins: siJenkins,
  Java: siOpenjdk,

  Vercel: siVercel,
  "React Testing Library": siTestinglibrary,
  OpenGL: siOpengl,
  Vagrant: siVagrant,
  Apple: siApple,
  Google: siGoogle,
  Facebook: siFacebook,
  Android: siAndroid,
  iOS: siIos,
  Alipay: siAlipay,
  "Apple Pay": siApplepay,
  "Google Pay": siGooglepay,
  "Klarna Sofort": siKlarna,
  PayPal: siPaypal,
  "WeChat Pay": siWechat,
  Anthropic: siAnthropic,
  "Booking.com": siBookingdotcom,
  Braintree: siBraintree,
  Couchbase: siCouchbase,
  "C++": siCplusplus,
  Cursor: siCursor,
  Cypress: siCypress,
  Docker: siDocker,
  "Express.js": siExpress,
  GitHub: siGithub,
  "Console Table Printer": siGithub,
  Goodreads: siGoodreads,
  BigQuery: siGooglebigquery,
  "Google Cloud": siGooglecloud,
  "Google Cloud Storage": siGooglecloud,
  Grafana: siGrafana,
  GraphQL: siGraphql,
  Jest: siJest,
  "Jest and Testing Library": siJest,
  JavaScript: siJavascript,
  Kibana: siKibana,
  Kotlin: siKotlin,
  Kubernetes: siKubernetes,
  MDX: siMdx,
  MySQL: siMysql,
  "Node.js": siNodedotjs,
  "Next.js": siNextdotjs,
  npm: siNpm,
  PHP: siPhp,
  PostgreSQL: siPostgresql,
  React: siReact,
  "React Native": siReact,
  Ruby: siRuby,
  "Spring Boot": siSpringboot,
  "Simple Icons": siSimpleicons,
  Swift: siSwift,
  "Tailwind CSS": siTailwindcss,
  TypeScript: siTypescript,
  WordPress: siWordpress,
  Yarn: siYarn,
};

export const brandNames = [...Object.keys(icons), "LinkedIn", "Slack API", "email login"];

type BrandIconProps = {
  name: string;
  className?: string;
};

export default function BrandIcon({ name, className = "h-5 w-5" }: BrandIconProps) {
  if (name === "Slack API") {
    return <WrenchIcon className={className} />;
  }

  if (name === "email login") {
    return <MailIcon className={className} />;
  }

  if (name === "LinkedIn") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={className}
        fill="#0A66C2"
      >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    );
  }

  const icon = icons[name];

  if (!icon) {
    return null;
  }

  const darkColor = ["Express.js", "Fastify", "GitHub", "Console Table Printer", "Next.js", "Apple", "Apple Pay", "Braintree", "iOS", "Vercel"].includes(
    name,
  )
    ? "#ffffff"
    : `#${icon.hex}`;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`${className} text-[var(--brand-color)] dark:text-[var(--brand-dark-color)]`}
      style={
        {
          "--brand-color": `#${icon.hex}`,
          "--brand-dark-color": darkColor,
        } as CSSProperties
      }
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  );
}
