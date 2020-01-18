describe("TC-4 - Interaction with checkbox form elements", () => {
    beforeEach(() => {
        cy.visit("https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios");
    });

    it("should have enabled checkbox", () => {
        cy.get("#defaultCheck1")
            .should("be.enabled");
    });

    it("should have disabled checkbox", () => {
        cy.get("#defaultCheck2")
            .should("not.be.enabled");
    });

    it("should have unchecked checkbox", () => {
        cy.get("#defaultCheck1")
            .should("not.be.checked");
    });

    it("should be checkable", () => {
        cy.get("#defaultCheck1")
            .click()
            .should("be.checked");
    });
});