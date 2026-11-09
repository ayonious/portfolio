export type DownloadStat = { label: string; url: string; period: string; icon: string };

export type OpenSourceProject = {
  downloadStat?: DownloadStat;
  demoLabel?: string;
  demoUrl?: string;
  description: string;
  language?: string;
  name: string;
  pinned?: boolean;
  stars: number;
  technologies?: string[];
  url: string;
};

export const openSourceProjectsConfig = {
  profile: {
    label: "Pinned personal repositories",
    description: "A selection of my pinned repositories and long-running experiments.",
    onlyPinned: true,
    url: "https://github.com/ayonious",
    projects: [
      { name: "File-Compression", url: "https://github.com/ayonious/File-Compression", description: "Zip and unzip files using Huffman coding and the LZW algorithm.", language: "Java", pinned: true, technologies: ["Maven", "JUnit", "Java Swing"], stars: 47 },
      { name: "Vagrant-Best-Practices", url: "https://github.com/ayonious/Vagrant-Best-Practices", description: "Examples for learning useful Vagrant features.", technologies: ["Vagrant", "SaltStack", "Shell"], stars: 17 },
      { name: "lombok-examples", url: "https://github.com/ayonious/lombok-examples", description: "Practical examples for using Project Lombok.", language: "Java", technologies: ["Lombok", "Maven"], stars: 8 },
      { name: "Java-Best-Practices-Java8", url: "https://github.com/ayonious/Java-Best-Practices-Java8", description: "Examples of Java 8 functional programming, streams, functions, and predicates.", language: "Java", stars: 7 },
      { name: "C-Code-Beautifier", url: "https://github.com/ayonious/C-Code-Beautifier", description: "A parser that formats code written in C and C++.", language: "C++", stars: 5 },
      { name: "nested-rules-engine", url: "https://github.com/ayonious/nested-rules-engine", description: "A decision-tree-based rules engine.", language: "TypeScript", technologies: ["Node.js", "Jest", "npm"], stars: 4 },
      { name: "random-names", url: "https://github.com/ayonious/random-names", description: "A random-name viewer.", language: "TypeScript", technologies: ["React", "Material UI", "Styled Components", "Webpack", "Babel", "Jest", "React Testing Library", "Cypress", "Netlify"], stars: 4 },
      { name: "react-context-example", url: "https://github.com/ayonious/react-context-example", description: "An example of changing themes with React Context.", language: "TypeScript", technologies: ["React", "Material UI", "Styled Components", "Webpack", "Babel", "Jest", "React Testing Library"], stars: 3 },
      { name: "saltstack-best-practices-basics", url: "https://github.com/ayonious/saltstack-best-practices-basics", description: "Simple examples for learning SaltStack.", technologies: ["SaltStack"], stars: 2 },
      { name: "that-it-guy-tech-blog", demoUrl: "https://ayonious.github.io/that-it-guy-tech-blog", demoLabel: "Read the blog live", url: "https://github.com/ayonious/that-it-guy-tech-blog", description: "My personal technology blog.", language: "MDX", technologies: ["Gatsby", "React", "MDX", "Styled Components", "Jest", "React Testing Library", "Cypress", "GitHub Pages"], pinned: true, stars: 2 },
      { name: "portfolio", demoUrl: "https://www.nahiyan.de", demoLabel: "View portfolio live", url: "https://github.com/ayonious/oyon-portfolio", description: "My personal portfolio built with Next.js, TypeScript, and Tailwind CSS.", language: "TypeScript", technologies: ["Next.js", "React", "Tailwind CSS", "Jest", "React Testing Library", "Cypress", "Vercel"], pinned: true, stars: 0 },
      { name: "git-network-trainline", url: "https://github.com/ayonious/git-network-trainline", description: "Show a city's train lines as a Git network.", language: "JavaScript", stars: 0 },
      { name: "gradle-tutorial", url: "https://github.com/ayonious/gradle-tutorial", description: "Examples for learning useful Gradle features.", language: "Java", technologies: ["Gradle"], stars: 1 },
      { name: "interview-cheatsheet", demoUrl: "https://interview-cheatsheet.netlify.app", demoLabel: "Explore the interview guide live", url: "https://github.com/ayonious/interview-cheatsheet", description: "A collection of common technical interview questions.", language: "TypeScript", pinned: true, technologies: ["React", "Docusaurus", "MDX", "Styled Components", "Jest", "React Testing Library", "Cypress", "Netlify"], stars: 1 },
    ] satisfies OpenSourceProject[],
  },
  gamified: {
    label: "Gamified projects",
    description: "Playful interfaces and visual experiments that turn technical ideas into something interactive.",
    url: "https://github.com/ayonious",
    projects: [
      {
        name: "Random Names",
        url: "https://github.com/ayonious/random-names",
        demoUrl: "https://ayonious.github.io/random-names",
        demoLabel: "Try Random Names live",
        description:
          "Explore randomly generated names from different regions in an interactive React app.",
        language: "TypeScript",
        technologies: ["React", "Material UI", "Styled Components", "Webpack", "Babel", "Jest", "React Testing Library", "Cypress", "Netlify"],
        stars: 4,
      },
      {
        name: "Explorer Bug",
        url: "https://github.com/ayonious/explorer-bug",
        demoUrl: "https://ayonious.github.io/explorer-bug",
        demoLabel: "Play Explorer Bug",
        description:
          "Move a small bug around a two-dimensional world while exploring keyboard interaction and interface boundaries.",
        language: "TypeScript",
        technologies: ["React", "Material UI", "Styled Components", "Webpack", "Babel", "Jest", "React Testing Library", "Cypress", "Netlify"],
        stars: 0,
      },
      {
        name: "Git Network Trainline",
        url: "https://github.com/ayonious/git-network-trainline",
        demoUrl: "https://github.com/ayonious/git-network-trainline/network",
        demoLabel: "Explore the train network",
        description:
          "Turn a city's railway lines into a navigable Git network graph using graph theory and Git branches.",
        language: "JavaScript",
        technologies: ["Node.js", "Git", "Graph theory"],
        stars: 0,
      },
    ] satisfies OpenSourceProject[],
  },
  engineering: {
    label: "For Software Engineers",
    description: "Hands-on examples for learning libraries and development tools.",
    showStats: false,
    view: "list" as const,
    projects: [
      { name: "lombok-examples", url: "https://github.com/ayonious/lombok-examples", description: "Practical Java examples for learning Project Lombok.", language: "Java", technologies: ["Lombok", "Maven"], stars: 8 },
      { name: "Vagrant-Best-Practices", url: "https://github.com/ayonious/Vagrant-Best-Practices", description: "Practice useful Vagrant features through simple examples.", technologies: ["Vagrant", "SaltStack", "Shell"], stars: 17 },
    ] satisfies OpenSourceProject[],
  },
  university: {
    label: "University animation projects",
    description: "Graphics and animation projects from my university studies.",
    showStats: false,
    view: "list" as const,
    projects: [
      {
        name: "tower-of-hanoi-simulation",
        url: "https://github.com/ayonious/tower-of-hanoi-simulation",
        description: "Watch the Tower of Hanoi solution animated with Java graphics.",
        language: "Java",
        technologies: ["Java AWT"], stars: 0,
      },
      {
        name: "OPENGL-St.-Basil-s-Cathedral",
        url: "https://github.com/ayonious/OPENGL-St.-Basil-s-Cathedral",
        description: "An OpenGL graphics project modeling the complex architecture of St. Basil’s Cathedral.",
        language: "C++",
        technologies: ["OpenGL", "GLUT"],
        stars: 0,
      },
      {
        name: "OPENGL-House-Furnitures",
        url: "https://github.com/ayonious/OPENGL-House-Furnitures",
        description: "An OpenGL scene exploring household objects, furniture, and camera movement.",
        language: "C++",
        technologies: ["OpenGL", "GLUT"],
        stars: 0,
      },
    ] satisfies OpenSourceProject[],
  },
  organization: {
    label: "Console Table Printer organization",
    downloadStat: {
      label: "3.4M downloads / Week",
      url: "https://www.npmjs.com/package/console-table-printer",
      period: "Weekly npm downloads",
      icon: "npm",
    },
    description: "Open-source tools and documentation from the Console Table Printer organization, focused on readable terminal output.",
    limit: 4,
    url: "https://github.com/console-table-printer",
    projects: [
      { name: "console-table-printer", downloadStat: { label: "3.4M downloads / Week", url: "https://www.npmjs.com/package/console-table-printer", period: "Weekly npm downloads", icon: "npm" }, demoUrl: "https://console-table.netlify.app", demoLabel: "Explore live documentation", url: "https://github.com/console-table-printer/console-table-printer", description: "Print colorful, readable tables in the console.", language: "TypeScript", technologies: ["Node.js", "npm", "Jest", "SWC"], stars: 227 },
      { name: "simple-wcswidth", downloadStat: { label: "2.43M downloads / Week", url: "https://www.npmjs.com/package/simple-wcswidth", period: "October 16–22, 2026", icon: "npm" }, url: "https://github.com/console-table-printer/simple-wcswidth", description: "A simple TypeScript implementation of Markus Kuhn's wcswidth function.", language: "TypeScript", technologies: ["Node.js", "npm", "Jest"], stars: 5 },
      { name: "table-printer-cli", downloadStat: { label: "91 downloads / Week", url: "https://www.npmjs.com/package/table-printer-cli", period: "October 16–22, 2026", icon: "npm" }, url: "https://github.com/console-table-printer/table-printer-cli", description: "A command-line tool for printing terminal tables.", language: "TypeScript", technologies: ["Node.js", "CLI", "npm", "Jest", "Commander.js"], stars: 2 },
      { name: "console-table-docu", url: "https://github.com/console-table-printer/console-table-docu", description: "Documentation for Console Table Printer.", language: "TypeScript", technologies: ["React", "Docusaurus", "Markdown", "Styled Components", "Node.js", "Jest", "React Testing Library", "Cypress", "Netlify"], stars: 1 },
      { name: "chrome-extension-table-printer", url: "https://github.com/console-table-printer/chrome-extension-table-printer", description: "A Chrome extension for formatting JSON.", language: "JavaScript", technologies: ["HTML", "CSS", "Chrome Extensions"], stars: 0 },
      { name: "e2e", url: "https://github.com/console-table-printer/e2e", description: "End-to-end tests for the organization's packages and websites.", language: "TypeScript", technologies: ["Node.js", "Jest"], stars: 0 },
      { name: "homebrew-console-table", url: "https://github.com/console-table-printer/homebrew-console-table", description: "The Homebrew tap for installing Console Table CLI.", language: "Ruby", technologies: ["Homebrew", "Node.js"], stars: 0 },
    ] satisfies OpenSourceProject[],
  },
};
