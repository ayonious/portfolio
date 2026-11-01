export const siteMetadata = {
  title: "Nahiyan Kamal — Software Engineer",
  description:
    "Personal portfolio of Nahiyan Kamal, a Senior Fullstack Software Engineer based in Munich.",
};

export const homeContent = {
  location: "Munich, Germany",
  title: "Hey, I'm Nahiyan!",
  introduction:
    "I'm a Senior Fullstack Software Engineer who builds reliable web and mobile products with TypeScript, React, React Native, and Node.js.",
  currentWork:
    "I currently work at Omio, focusing on authentication, payments, and services used by travelers around the world.",
  openSource:
    "I also build open-source tools and playful experiments that help me learn by making.",
  outsideWork:
    "Away from the keyboard, I travel, learn languages, and read philosophy and psychology to better understand people, society, and the world. 🌍",
};

export type NavigationIcon =
  | "briefcase"
  | "wrench"
  | "lightning"
  | "robot"
  | "books"
  | "diploma"
  | "theater"
  | "paw"
  | "megaphone";

export const sidebarContent = {
  openMenuLabel: "Open navigation menu",
  closeMenuLabel: "Close navigation menu",
  menuLabel: "Navigation menu",
  mainNavigationLabel: "Main navigation",
  openContactFormLabel: "Open contact form",
  openProfilePrefix: "Open",
  openProfileSuffix: "profile",
  switchToLightThemeLabel: "Switch to light theme",
  switchToDarkThemeLabel: "Switch to dark theme",
  chooseAccentColorLabel: "Choose accent color",
  chooseColorPaletteLabel: "Choose color palette",
  useAccentPrefix: "Use",
  useAccentSuffix: "accent",
  accentNames: {
    lavender: "Lavender",
    pink: "Pink",
    amber: "Amber",
    green: "Green",
    blue: "Blue",
  },
  name: "Nahiyan",
  introduction: {
    linkText: "Nahiyan",
    textBefore: "I'm ",
    textAfter:
      ", a software engineer and open-source creator. This is my digital introduction. 🙋🏻",
  },
  navigation: [
    { href: "/work", label: "Work", icon: "briefcase" },
    { href: "/projects", label: "Open source", icon: "wrench" },
    { href: "/skills", label: "Skills", icon: "lightning" },
    { href: "/ai", label: "AI", icon: "robot" },
    { href: "/reading", label: "Books", icon: "books" },
    { href: "/certifications", label: "Certifications", icon: "diploma" },
    { href: "/blog", label: "Blog", icon: "megaphone" },
    { href: "/about", label: "About me", icon: "theater" },
    { href: "/about-this-site", label: "About this site", icon: "paw" },
  ] satisfies Array<{ href: string; label: string; icon: NavigationIcon }>,
  socialLinks: [
    { label: "GitHub", url: "https://github.com/ayonious" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/nahiyan-k-0782743a",
    },
    { label: "Mail", url: "/about#contact" },
  ],
  footerCredit: "Made with ❤️ by Nahiyan",
};

export const aboutContent = {
  title: "About me",
  paragraphs: [
    {
      parts: [
        { text: "I'm Nahiyan, a " },
        { text: "Senior Fullstack Software Engineer", href: "/work" },
        {
          text: " based in Munich. 👨‍💻 I build web, mobile, backend, payment, authentication, and travel products used at scale.",
        },
      ],
    },
    {
      parts: [
        { text: "I also maintain " },
        { text: "open-source tools", href: "/projects" },
        { text: " 🛠️, create " },
        { text: "AI-assisted engineering workflows", href: "/ai" },
        {
          text: " 🤖, and enjoy turning complicated systems into practical, reliable software.",
        },
      ],
    },
    {
      parts: [
        { text: "Outside engineering, I enjoy traveling 🌍, learning languages 🗣️, and reading " },
        { text: "philosophy and psychology", href: "/reading" },
        {
          text: " 🧠 to better understand people, society, and the world.",
        },
      ],
    },
  ],
  image: {
    src: "/images/nahiyan-cartoon-profile.webp",
    alt: "Cartoon portrait of Nahiyan at a black-sand beach",
  },
  contactForm: {
    title: "Send me a message",
    introduction:
      "Have an idea, question, or opportunity to discuss? Send me a note and I’ll get back to you.",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    submitLabel: "Send message",
    sendingLabel: "Sending…",
    successMessage: "Thanks — your message has been sent.",
    errorMessage: "Your message could not be sent. Please try again.",
    verificationUnavailable:
      "The contact form verification is not configured yet.",
  },
  profilesTitle: "Connect with me on other social platforms",
  profiles: [
    {
      name: "LinkedIn",
      emoji: "💼",
      description: "My professional experience and career updates.",
      url: "https://www.linkedin.com/in/nahiyan-k-0782743a",
    },
    {
      name: "GitHub",
      emoji: "💻",
      description: "My personal projects and open-source contributions.",
      url: "https://github.com/ayonious",
    },
  ],
};

export const pageContent = {
  work: {
    title: "Work history",
    introduction:
      "My career building web, mobile, payments, authentication, and travel products.",
    projectsTitle: "Selected work projects",
    projectsIntroduction:
      "Each project is presented as a concise narrative and includes every service-scale figure available in my career records.",
    scaleTitle: "Documented service scale",
  },
  projects: {
    title: "Open-source projects",
    introduction:
      "Projects I maintain personally and with the Console Table Printer organization.",
    openInNpm: "Open in npm",
    openLink: "Open link",
    openOnGitHub: "Open on GitHub",
    openProject: "Open project",
    viewOnGitHub: "View on GitHub →",
    projectsLabel: "projects",
    githubStarsLabel: "GitHub stars",
    technologiesUsedLabel: "Technologies used",
  },
  skills: {
    title: "Skills",
    introduction:
      "Technologies, engineering practices, and product domains I have worked with throughout my career.",
  },
  ai: {
    title: "AI",
    introduction:
      "I use AI as an engineering tool and build LLM-powered product experiences, automations, reusable skills, and tool integrations.",
    workTitle: "Production work",
    toolsTitle: "Tools I use",
    capabilitiesTitle: "AI capabilities",
  },
  books: {
    title: "Books",
    introduction:
      "Books that shape how I think about software, leadership, people, and the world around me.",
    goodreadsLabel: "Let’s be friends on Goodreads →",
    goodreadsUrl: "https://www.goodreads.com/user/show/95339067-nahiyan-k",
    programmingTitle: "Software Engineering and Computer Science related books",
    otherTitle: "Other books",
  },
  certifications: {
    title: "Education, Certifications and Courses",
    introduction:
      "My university education, professional credentials, and continued learning.",
    sections: [
      { category: "education", title: "Education", emoji: "🎓", dateLabel: "Graduated", statusLabel: "Graduated" },
      { category: "certification", title: "Certifications", emoji: "📜", dateLabel: "Issued", statusLabel: "Completed" },
      { category: "course", title: "Courses", emoji: "📚", dateLabel: "Completed", statusLabel: "Completed" },
    ],
    completedLabel: "Completed",
    resultLabel: "Result",
  },
  blog: {
    title: "Blog",
    introduction:
      "Read my notes about software engineering, projects, and things I am learning.",
    linkLabel: "Visit my blog ↗",
    url: "https://that-it-guy.netlify.app",
  },
};

export const aboutSiteContent = {
  title: "About this site",
  introduction:
    "This portfolio is built with open-source software and is designed to adapt to phones, tablets, and desktop screens. The layout, navigation, and contact form adjust to the space available. Thank you to the maintainers and contributors behind every package that makes it possible.",
  majorTitle: "Major technologies",
  deployment: {
    title: "Deployment and contact delivery",
    introduction:
      "The portfolio and its contact workflow are deployed together on Vercel.",
    details: [
      {
        title: "Vercel hosting",
        description:
          "Vercel builds and hosts the Next.js application, including production deployments and preview deployments for pull requests.",
      },
      {
        title: "Vercel Function",
        description:
          "The /api/contact Route Handler becomes an on-demand Vercel Function. It starts when the form is submitted, validates the request, and stops after the request finishes. A Vercel Firewall rate-limit rule protects the endpoint before excessive requests reach the Function.",
      },
      {
        title: "Resend email delivery",
        description:
          "The server-side Function uses a private Resend API key to send the submitted name, email address, and message to the configured contact inbox. The visitor's address is used as the reply-to address.",
      },
      {
        title: "Cloudflare Turnstile",
        description:
          "Cloudflare Turnstile helps protect the contact form from automated spam. It usually checks your browser automatically and may ask you to tick a checkbox. Before sending your message, the site checks that this verification passed. This helps keep unwanted messages out of my inbox.",
      },
    ],
  },
  creditsTitle: "Design and assets",
  reuse: {
    title: "Use this site for your own profile 🧰",
    introduction:
      "You can use this portfolio as a starting point for building your own profile site.",
    notes: [
      "♻️ I do not provide any guarantee for using this website, but I try to keep the project as reusable as possible.",
      "⚠️ Use the project at your own risk.",
      "📝 Credit the original authors, projects, and packages when required by their licenses.",
    ],
    repositoryLabel: "View and reuse this site on GitHub →",
    repositoryUrl: "https://github.com/ayonious/oyon-portfolio",
  },
  credits: [
    {
      name: "Tania Rascia's website",
      role: "Layout inspiration",
      emoji: "🎨",
      url: "https://www.taniarascia.com/",
    },
    {
      name: "Icons For Free",
      role: "Interface icons",
      emoji: "✨",
      url: "https://iconsforfree.com/",
    },
    {
      name: "Simple Icons",
      role: "Brand and technology icons (CC0; trademarks still apply)",
      emoji: "🏷️",
      url: "https://simpleicons.org/",
    },
    {
      name: "Vercel",
      role: "Deployment",
      emoji: "🚀",
      url: "https://vercel.com/",
    },
  ],
};

export const linkContent = {
  openWebsite: "Open website",
  seeInGoodreads: "See in Goodreads",
  destinations: [
    { hostname: "coursera.org", tooltip: "See in Coursera" },
    { hostname: "udemy.com", tooltip: "See in Udemy" },
    { hostname: "goodreads.com", tooltip: "See in Goodreads" },
  ],
};

export const tagContent = {
  topicsPrefix: "Topics for",
  technologies: "Technologies",
  technologiesUsed: "Technologies used",
};
