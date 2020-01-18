describe("TC-1 - Checking landing pages elements", () => {
    beforeEach(() => {
        cy.visit("https://angular.io");
    });

    it("should have Angular Logo in the navbar visible", () => {
        cy.get(".nav-link.home img").should("be.visible");
    });

    it("should have Angular Logo in the hero section visible", () => {
        cy.get(".hero-logo img").should("be.visible");
    });

    it("should have proper headline in hero section", () => {
        cy.get(".hero-headline").should("have.text", "One framework.Mobile & desktop.");
    });

    it("should have Get started section visible", () => {
        cy.get(".homepage-container")
            .contains("Get Started")
            .should("be.visible");
    });

    context("Get Started page", () => {
        beforeEach(() => {
            cy.get(".homepage-container")
                .contains("Get Started")
                .click();
        });

        it("should navigate to Start page", () => {
            cy.url().should("contain", "/start");
        });

        it("should have proper headline/title", () => {
            cy.get("h1")
                // Text of element contains "link" from the icon inner text
                .should("contain.text", "Getting Started with Angular: Your First App");
        });
    });
});