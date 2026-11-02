import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, jest } from "@jest/globals";
jest.mock("next/headers", () => ({
  headers: async () => new Headers(),
}));
const { default: RootLayout, generateMetadata } = require("../app/layout") as typeof import("../app/layout");

describe("root layout", () => {
  it("sets the site metadata", async () => {
    expect(await generateMetadata()).toMatchObject({
      title: "Nahiyan Kamal — Software Engineer",
      description:
        "Personal portfolio of Nahiyan Kamal, a Senior Fullstack Software Engineer based in Munich.",
    });
  });

  it("renders the shared navigation and page content", async () => {
    const document = new DOMParser().parseFromString(
      renderToStaticMarkup(
        await RootLayout({ children: <h1>Test page</h1> }),
      ),
      "text/html",
    );

    expect(document.documentElement.getAttribute("lang")).toBe("en");
    expect(document.querySelector("nav")?.getAttribute("aria-label")).toBe(
      "Main navigation",
    );
    expect(
      Array.from(document.querySelectorAll("nav a"), (link) => [
        link.textContent,
        link.getAttribute("href"),
      ]),
    ).toEqual([
      ["Work", "/en/work"],
      ["Open source", "/en/projects"],
      ["Skills", "/en/skills"],
      ["AI", "/en/ai"],
      ["Books", "/en/reading"],
      ["Certifications", "/en/certifications"],
      ["Blog", "/en/blog"],
      ["About me", "/en/about"],
      ["About this site", "/en/about-this-site"],
    ]);
    expect(document.querySelector("main")?.textContent).toBe("Test page");
    expect(
      document.querySelector('a[href="https://github.com/ayonious"]')?.textContent,
    ).toBe("GitHub");
    expect(document.querySelector('a[href="/en/about#contact"]')?.textContent).toBe(
      "Mail",
    );
  });
});
