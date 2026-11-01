export type WorkHistoryEntry = {
  company: string;
  url?: string;
  end: string;
  highlights: string[];
  location: string;
  role: string;
  start: string;
  technologies?: string[];
};

export const workHistory: WorkHistoryEntry[] = [
  {
    company: "Omio",
    url: "https://www.omio.com/",
    role: "Senior Fullstack Software Engineer",
    location: "Berlin, Germany",
    start: "September 2025",
    end: "Present",
    technologies: ["Node.js", "TypeScript", "React", "React Native", "AI"],
    highlights: [
      "Leading the ongoing migration of web, React Native, and Node.js authentication to one centralized platform.",
      "Maintaining OAuth and SSO identity services used by more than 100,000 people per day.",
      "Developing live-update microservices that handle about 20,000 requests per second.",
      "Created authentication and payment microfrontends used by more than 20 internal teams.",
      "Maintaining shared Node.js packages for database access, logging, and Node.js version control across more than 20 internal teams.",
      "Mentoring teammates and engineers across the company as they integrate the authentication platform.",
      "Training Codex and Claude Code agents for code editing, knowledge sharing, pull-request review, reusable skills, and MCP servers.",
      "Helping recruit engineers and organize technical interviews.",
    ],
  },
  {
    company: "Omio",
    url: "https://www.omio.com/",
    role: "Software Engineer",
    location: "Berlin, Germany",
    start: "November 2016",
    end: "August 2025",
    technologies: [
      "Node.js",
      "TypeScript",
      "React",
      "React Native",
      "Java",
      "Spring Boot",
    ],
    highlights: [
      "Built and maintained PCI-compliant payment services handling about 1,000 transactions per minute and serving more than 100,000 people per day.",
      "Integrated card payments, PayPal, Apple Pay, Google Pay, iDEAL, Klarna Sofort, Alipay, and WeChat Pay through Adyen and Braintree.",
      "Built tooling to reconcile about 100,000 payments per day across payment-provider platforms, external sellers, and payment scenarios.",
      "Onboarded new payment service providers and trained the Payments Operations team to use the new payments back office.",
      "Created a booking back office that enabled non-technical operations teams to manage booking and payment operations.",
      "Built and maintained Google, Apple, Facebook, and email login flows with OAuth and SSO, serving at least 50,000 people per day.",
      "Led the end-to-end delivery of password login and passwordless two-factor authentication, bringing the hacker-attack rate below 0.001%.",
      "Built and maintained fraud-prevention capabilities that kept the fraud rate below 5%.",
    ],
  },
  {
    company: "European bank",
    role: "Software Consultant · Contractor",
    location: "Amsterdam, Netherlands",
    start: "August 2016",
    end: "October 2016",
    highlights: [
      "Worked as a software consultant for one of Europe's largest banks. Further details are protected by a non-disclosure agreement.",
    ],
  },
  {
    company: "Booking.com",
    url: "https://www.booking.com/",
    role: "Graduate Software Developer",
    location: "Amsterdam, Netherlands",
    start: "August 2015",
    end: "July 2016",
    highlights: [
      "Added functionality for surfacing user-generated content.",
      "Built post-sales features for offering additional products and extras after booking.",
      "Created more than 30 experiments running across millions of users per day to measure bookings, turnover, performance, and other business metrics.",
    ],
  },
];
