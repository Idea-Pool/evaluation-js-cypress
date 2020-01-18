describe("TC-2 - Checking search field on landing page", () => {
    beforeEach(() => {
        cy.visit("https://angular.io");

        cy.get(".search-container input")
            .as("searchInput");
    });

    it("should have search input visible in the nav bar", () => {
        cy.get("@searchInput").should("be.visible");
    });

    it("should have empty search input", () => {
        cy.get("@searchInput").should("have.value", "");
    });

    it("should have proper placehodleer in search input", () => {
        cy.get("@searchInput")
            .invoke("attr", "placeholder")
            .should("equal", "Search");
    });

    context("Search suggestions", () => {
        beforeEach(() => {
            cy.get("@searchInput")
                .click()
                .type("directive");
        });

        // Cannot be tested
        it.skip("should have clear icon");

        it("should have proper suggestion result", () => {
            cy.get(".search-result-item")
                .contains("Directive")
                .should("be.visible");
        });
    });

    context("Search results", () => {
        beforeEach(() => {
            cy.get("@searchInput")
                .click()
                .type("directive");

            cy.get(".search-result-item")
                .contains("Directive")
                // force: true is needed, because page gets scrolled somehow
                // and suggestion to click on is not visible
                .click({ force: true });
        });

        it("should have proper URL to be redirected to", () => {
            cy.url().should("contain", "/api/core/Directive");
        });

        it("should have proper page title", () => {
            // Text of element contains "link" from the icon inner text
            cy.get("h1").should("contain.text", "Directive");
        });
    });
});