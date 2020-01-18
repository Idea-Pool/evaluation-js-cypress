describe("TC-6 - Checking button form elements", () => {
    beforeEach(() => {
        cy.visit("https://getbootstrap.com/docs/4.4/components/buttons/#disabled-state");
    });

    it("should have primary button", () => {
        cy.contains("Primary button")
            .should("be.visible");
    });

    it("should have disabled button", () => {
        cy.contains("Primary button")
            .should("not.be.enabled");
    });

    it("should have not disabled button", () => {
        // Cannot be scrolled by 1 page
        cy.scrollTo("bottom");
        cy.contains("Primary link")
            .should("have.class", "active");
    });
});