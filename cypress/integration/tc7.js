describe("TC-7 - Checking select form elements", () => {
    beforeEach(() => {
        cy.visit("https://getbootstrap.com/docs/4.4/components/forms/#form-controls");

        cy.get("#exampleFormControlSelect1").as("select");
        cy.get("#exampleFormControlSelect2").as("multiSelect");
    });

    it("should have simple select", () => {
        cy.get("@select")
            .and("be.visible");
    });

    it("should have multi-select", () => {
        cy.get("@multiSelect")
            .invoke("attr", "multiple")
            .should("be", true);
    });

    it("should have proper selected value", () => {
        cy.get("@select")
            .its("value")
            .should("be", 1);
    });

    it("should not have given option", () => {
        cy.get("@select")
            .contains("hello")
            .should("not.exist");
    });

    it("should have given option", () => {
        cy.get("@select")
            .contains("2")
            .should("exist");
    });

    it("should select value", () => {
        cy.get("@select")
            .select("2")
            .its("value")
            .should("be", 2);
    });

    it("should have all options", () => {
        cy.get("@select")
            .find("option")
            .should("have.lengthOf", 5);
    });
});