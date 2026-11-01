import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";
import HomePage from "../app/page";
import AboutPage from "../app/about/page";
import AboutThisSitePage from "../app/about-this-site/page";
import AiPage from "../app/ai/page";
import BlogPage from "../app/blog/page";
import CertificationsPage from "../app/certifications/page";
import ProjectsPage from "../app/projects/page";
import ReadingPage from "../app/reading/page";
import SkillsPage from "../app/skills/page";
import WorkHistoryPage from "../app/work/page";

describe("site pages", () => {
  it("introduces Nahiyan and his work", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { name: "Hey, I'm Nahiyan!" }),
    ).toBeTruthy();
    expect(screen.getByText(/Senior Fullstack Software Engineer/i)).toBeTruthy();
    expect(screen.getByText(/I currently work at Omio/i)).toBeTruthy();
    expect(screen.getByText(/open-source tools and playful experiments/i)).toBeTruthy();
    expect(screen.getByText(/travel, learn languages, and read philosophy/i)).toBeTruthy();
  });

  it("describes the project on the about page", () => {
    render(<AboutPage />);

    expect(screen.getByRole("heading", { name: "About me" })).toBeTruthy();
    expect(screen.getByText(/Senior Fullstack Software Engineer/i)).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Send me a message" })).toBeTruthy();
    expect(screen.getByLabelText("Name")).toBeTruthy();
    expect(screen.getByLabelText("Email")).toBeTruthy();
    expect(screen.getByLabelText("Message")).toBeTruthy();
  });

  it("documents the site dependencies and reuse guidance", () => {
    render(<AboutThisSitePage />);

    expect(screen.getByRole("heading", { name: "About this site" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Major technologies" })).toBeTruthy();
    expect(
      screen
        .getByRole("link", { name: "View and reuse this site on GitHub →" })
        .getAttribute("href"),
    ).toBe("https://github.com/ayonious/oyon-portfolio");
  });

  it("shows AI work, tools, and capabilities", () => {
    render(<AiPage />);

    expect(screen.getByRole("heading", { name: "AI" })).toBeTruthy();
    expect(screen.getByText("AI-powered live travel recommendations")).toBeTruthy();
    expect(screen.getByText("Codex")).toBeTruthy();
    expect(screen.getByText("LLM product integration")).toBeTruthy();
  });

  it("shows the blog introduction", () => {
    render(<BlogPage />);

    expect(screen.getByRole("heading", { name: "Blog" })).toBeTruthy();
    expect(screen.getByText(/Notes about software engineering/i)).toBeTruthy();
    const blogLink = screen.getByRole("link", { name: "Visit my blog ↗" });
    expect(blogLink.className).toContain("action-button");
    expect(blogLink.getAttribute("href")).toBe("https://that-it-guy.netlify.app");
    expect(blogLink.getAttribute("target")).toBe("_blank");
    expect(blogLink.getAttribute("rel")).toBe("noreferrer");
  });

  it("shows certifications and completed courses without credential IDs", () => {
    render(<CertificationsPage />);

    expect(
      screen.getByRole("heading", { name: "telc Deutsch C1 Hochschule" }),
    ).toBeTruthy();
    expect(screen.queryByText("Result: Befriedigend")).toBeNull();
    expect(
      screen.getByRole("heading", { name: "Introduction to Psychology" }),
    ).toBeTruthy();
    expect(screen.queryByText(/Credential ID/)).toBeNull();
    expect(screen.queryByRole("link", { name: "Show credential ↗" })).toBeNull();
    expect(screen.getByRole("heading", { name: "BSc in Computer Science and Engineering" })).toBeTruthy();
    expect(screen.getByText("Bangladesh University of Engineering and Technology (BUET)")).toBeTruthy();
    expect(screen.getAllByText("Completed")).toHaveLength(4);
    for (const name of ["Education", "Certifications", "Courses"]) {
      expect(screen.getByRole("region", { name })).toBeTruthy();
    }
  });

  it("shows pinned and organization open-source projects", () => {
    render(<ProjectsPage />);

    expect(
      screen.getByRole("heading", { name: "Pinned personal repositories" }),
    ).toBeTruthy();
    expect(screen.getByRole("link", { name: "portfolio" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Try Random Names live ↗" }).getAttribute("href")).toBe("https://ayonious.github.io/random-names");
    expect(screen.getByRole("link", { name: "Explore live documentation ↗" }).getAttribute("href")).toBe("https://console-table.netlify.app");
    for (const name of ["interview-cheatsheet", "lombok-examples", "tower-of-hanoi-simulation", "Vagrant-Best-Practices", "OPENGL-St.-Basil-s-Cathedral", "OPENGL-House-Furnitures"]) {
      expect(screen.getByRole("link", { name }).getAttribute("href")).toBe(`https://github.com/ayonious/${name}`);
    }
    expect(screen.getByText("Gatsby")).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: "Gamified projects" }),
    ).toBeTruthy();
    expect(
      screen
        .getByRole("link", { name: "Play Explorer Bug ↗" })
        .getAttribute("href"),
    ).toBe("https://ayonious.github.io/explorer-bug");
    expect(screen.getAllByText("React").length).toBeGreaterThanOrEqual(2);
    expect(screen.getByRole("heading", { name: "For Software Engineers" })).toBeTruthy();
    expect(screen.queryByRole("link", { name: /nextjs-template/ })).toBeNull();
    expect(
      screen.getByText(/Hands-on examples for learning libraries and development tools/),
    ).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: "Console Table Printer organization" }),
    ).toBeTruthy();
    expect(
      screen.getAllByRole("heading", { level: 2 }).map((heading) => heading.textContent),
    ).toEqual([
      "Console Table Printer organization",
      "Pinned personal repositories",
      "Gamified projects",
      "For Software Engineers",
      "University animation projects",
    ]);
  });

  it("shows programming and leadership books", () => {
    render(<ReadingPage />);

    expect(
      screen.getByRole("heading", {
        name: "Software Engineering and Computer Science related books",
      }),
    ).toBeTruthy();
    expect(screen.getByRole("link", { name: "Clean Code" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Surrounded by Idiots" })).toBeTruthy();
  });

  it("shows grouped engineering skills", () => {
    render(<SkillsPage />);

    expect(screen.getByRole("heading", { name: "Skills" })).toBeTruthy();
    expect(screen.getByText("TypeScript")).toBeTruthy();
    expect(screen.getAllByText("React Native")).toHaveLength(2);
  });

  it("shows work history and STAR project details", () => {
    render(<WorkHistoryPage />);

    expect(screen.getByRole("heading", { name: "Work history" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Selected work projects" })).toBeTruthy();
    expect(screen.getAllByText("Documented service scale")).toHaveLength(8);
    expect(screen.getByText(/Built a centralized backend service/)).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Payments reconciliation and PSP onboarding" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Booking and payments back office" })).toBeTruthy();
  });
});
