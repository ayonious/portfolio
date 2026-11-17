for (const viewport of [
  { name: "desktop", width: 1280, height: 800 },
  { name: "mobile", width: 390, height: 844 },
]) {
  describe(`portfolio pages (${viewport.name})`, () => {
    const openNavigation = () => {
      if (viewport.name === "mobile") {
        cy.get('button[aria-label="Open navigation menu"]').click();
      }
    };
    const pages = [
      {
        label: "Work",
        path: "/work",
        heading: "Work history",
        content: "Selected work projects",
      },
      {
        label: "Open source",
        path: "/projects",
        heading: "Open-source projects",
        content: "Pinned personal repositories",
      },
      {
        label: "Skills",
        path: "/skills",
        heading: "Skills",
        content: "TypeScript",
      },
      {
        label: "AI",
        path: "/ai",
        heading: "AI",
        content: "Production work",
      },
      {
        label: "Books",
        path: "/reading",
        heading: "Books",
        content: "Software Engineering and Computer Science related books",
      },
      {
        label: "Certifications",
        path: "/certifications",
        heading: "Certifications",
        content: "telc Deutsch C1 Hochschule",
      },
      {
        label: "About me",
        path: "/about",
        heading: "About me",
        content: "Outside engineering",
      },
      {
        label: "About this site",
        path: "/about-this-site",
        heading: "About this site",
        content: "Major technologies",
      },
      {
        label: "Blog",
        path: "/blog",
        heading: "Blog",
        content: "Read my notes about software engineering",
      },
    ];

    beforeEach(() => {
      cy.viewport(viewport.width, viewport.height);
      cy.visit("/");
    });

    it("shows the current homepage introduction", () => {
      cy.contains("h1", "Hey, I'm Nahiyan!").should("be.visible");
      cy.contains("Senior Fullstack and AI Engineer").should("be.visible");
      cy.contains("Munich, Germany").should("be.visible");
    });

    pages.forEach(({ label, path, heading, content }) => {
      it(`opens the ${label} tab and shows its content`, () => {
        openNavigation();
        cy.get('nav[aria-label="Main navigation"]')
          .contains("a", label)
          .should("be.visible")
          .click();

        cy.location("pathname").should("equal", path);
        cy.contains("h1", heading).should("be.visible");
        cy.contains(content).should("be.visible");
        if (viewport.name === "mobile") {
          cy.get("#profile-sidebar").should("not.be.visible");
          openNavigation();
        }
        cy.get(`nav[aria-label="Main navigation"] a[href="${path}"]`)
          .should("have.attr", "aria-current", "page")
          .and("be.visible");
      });
    });

    it("opens About me from the sidebar introduction", () => {
      openNavigation();
      cy.get('a[href="/about"]').contains("Nahiyan").click();
      cy.location("pathname").should("equal", "/about");
      cy.contains("h1", "About me").should("be.visible");
    });

    it("opens the privacy policy from the sidebar footer", () => {
      openNavigation();
      cy.get("#profile-sidebar").contains("a", "Privacy policy").should("be.visible").click();
      cy.location("pathname").should("equal", "/privacy");
      cy.contains("h1", "Privacy policy").should("be.visible");
      cy.contains("h2", "Your rights").should("be.visible");
    });

    it("changes the theme and accent palette", () => {
      cy.get('button[aria-label^="Switch to"]').filter(":visible").click();
      cy.window().its("localStorage.theme").should("match", /^(light|dark)$/);

      cy.get('button[aria-label="Choose accent color"]').filter(":visible").click();
      cy.get('button[aria-label="Use Green accent"]').click();
      cy.get("html").should("have.attr", "data-accent", "green");
      cy.window().its("localStorage.accent").should("equal", "green");
    });

    it("links to the reusable portfolio repository", () => {
      openNavigation();
      cy.get('nav[aria-label="Main navigation"]')
        .contains("a", "About this site")
        .click();

      cy.contains("a", "View and reuse this site on GitHub")
        .should("be.visible")
        .and("have.attr", "href", "https://github.com/ayonious/oyon-portfolio");
    });
  });
}
