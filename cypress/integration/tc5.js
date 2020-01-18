describe("TC-5 - Interaction with radio form elements", () => {
    beforeEach(() => {
        cy.visit("https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios");
    });

    it("should have enabled radio", () => {
        cy.get("#exampleRadios1")
            .should("be.enabled");
    });

    it("should have disabled radio", () => {
        cy.get("#exampleRadios3")
            .should("not.be.enabled");
    });

    it("should have selected radio", () => {
        cy.get("#exampleRadios1")
            .should("be.checked");
    });

    it("should have not selected raido", () => {
        cy.get("#exampleRadios2")
            .should("not.be.checked");
    });

    it("should be able to select radio", () => {
        cy.get("#exampleRadios2")
            .click()
            .should("be.checked");

        cy.get("#exampleRadios1")
            .should("not.be.checked");
    });
});