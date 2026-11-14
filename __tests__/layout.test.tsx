import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "@jest/globals";
import RootLayout, { metadata } from "../app/layout";

describe("root layout", () => {
  it("sets the site metadata", () => {
    expect(metadata).toMatchObject({
      title: "Nahiyan Kamal — Senior Fullstack and AI Engineer",
      description:
        "Personal portfolio of Nahiyan Kamal, a Senior Fullstack and AI Engineer based in Munich.",
    });
  });

  it("renders the shared navigation and page content", () => {
    const document = new DOMParser().parseFromString(
      renderToStaticMarkup(
        <RootLayout>
          <h1>Test page</h1>
        </RootLayout>,
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
      ["Work", "/work"],
      ["Open source", "/projects"],
      ["Skills", "/skills"],
      ["AI", "/ai"],
      ["Books", "/reading"],
      ["Certifications", "/certifications"],
      ["Blog", "/blog"],
      ["About me", "/about"],
      ["About this site", "/about-this-site"],
    ]);
    expect(document.querySelector("main")?.textContent).toBe("Test page");
    expect(
      document.querySelector('a[href="https://github.com/ayonious"]')?.textContent,
    ).toBe("GitHub");
    expect(document.querySelector('a[href="/about#contact"]')?.textContent).toBe(
      "Mail",
    );
  });
});
