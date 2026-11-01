import type { ContentOverrides, SiteContent } from "../content";

// Missing content falls back to English; lists replace their English counterparts.
export const germanContent: ContentOverrides<SiteContent> = {
  siteMetadata: {
    title: "Nahiyan Kamal — Softwareentwickler",
    description: "Persönliches Portfolio von Nahiyan Kamal, Senior Fullstack Software Engineer in München.",
  },
  homeContent: {
    location: "München, Deutschland",
    title: "Hallo, ich bin Nahiyan!",
    introduction: "Ich bin Senior Fullstack Software Engineer und entwickle zuverlässige Web- und Mobile-Produkte mit TypeScript, React, React Native und Node.js.",
    currentWork: "Zurzeit arbeite ich bei Omio an Authentifizierung, Zahlungen und Diensten für Reisende auf der ganzen Welt.",
    openSource: "Außerdem entwickle ich Open-Source-Tools und spielerische Experimente, mit denen ich durch Ausprobieren lerne.",
    outsideWork: "Abseits der Tastatur reise ich, lerne Sprachen und lese Philosophie und Psychologie, um Menschen, Gesellschaft und die Welt besser zu verstehen. 🌍",
  },
  sidebarContent: {
    openMenuLabel: "Navigation öffnen", closeMenuLabel: "Navigation schließen", menuLabel: "Navigation",
    introduction: { textBefore: "Ich bin ", textAfter: ", Softwareentwickler und Open-Source-Entwickler. Das ist meine digitale Vorstellung. 🙋🏻" },
    navigation: [
      { href: "/work", label: "Berufserfahrung", icon: "briefcase" },
      { href: "/projects", label: "Open Source", icon: "wrench" },
      { href: "/skills", label: "Kenntnisse", icon: "lightning" },
      { href: "/ai", label: "KI", icon: "robot" },
      { href: "/reading", label: "Bücher", icon: "books" },
      { href: "/certifications", label: "Zertifikate", icon: "diploma" },
      { href: "/blog", label: "Blog", icon: "megaphone" },
      { href: "/about", label: "Über mich", icon: "theater" },
      { href: "/about-this-site", label: "Über diese Website", icon: "paw" },
    ],
    footerCredit: "Mit ❤️ von Nahiyan erstellt",
  },
  pageContent: {
    work: { title: "Berufserfahrung", introduction: "Meine Arbeit an Web-, Mobile-, Zahlungs-, Authentifizierungs- und Reiseprodukten.", projectsTitle: "Ausgewählte Projekte", projectsIntroduction: "Projekte und ihre dokumentierte Größenordnung.", scaleTitle: "Dokumentierte Größenordnung" },
    projects: { title: "Open-Source-Projekte", introduction: "Projekte, die ich persönlich und mit der Organisation Console Table Printer betreue.", openInNpm: "Auf npm öffnen", openLink: "Link öffnen", openOnGitHub: "Auf GitHub öffnen", viewOnGitHub: "Auf GitHub ansehen →" },
    skills: { title: "Kenntnisse", introduction: "Technologien, Entwicklungsmethoden und Produktbereiche aus meiner beruflichen Laufbahn." },
    ai: { title: "KI", introduction: "Ich nutze KI als Entwicklungswerkzeug und entwickle Produkte mit LLMs, Automatisierungen und Tool-Integrationen.", workTitle: "Produktive Anwendungen" },
    books: { title: "Bücher" }, certifications: { title: "Ausbildung, Zertifikate und Kurse" },
  },
  aboutContent: {
    title: "Über mich",
    contactForm: {
      title: "Schreib mir", introduction: "Du hast eine Idee, Frage oder Gelegenheit? Schreib mir eine Nachricht.",
      nameLabel: "Name", emailLabel: "E-Mail", messageLabel: "Nachricht", submitLabel: "Nachricht senden", sendingLabel: "Wird gesendet…",
      successMessage: "Danke — deine Nachricht wurde gesendet.", errorMessage: "Deine Nachricht konnte nicht gesendet werden. Bitte versuche es erneut.",
      verificationUnavailable: "Die Verifizierung des Kontaktformulars ist noch nicht eingerichtet.",
    },
  },
  aboutSiteContent: { title: "Über diese Website" },
};
