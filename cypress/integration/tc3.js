describe("TC-3 - Checking form elements", () => {
    beforeEach(() => {
        cy.visit("https://getbootstrap.com/docs/4.4/components/forms/");

        cy.get("input[placeholder=\"Readonly input here...\"]")
            .as("readOnlyInput");
    });

    it("should have proper browser title", () => {
        cy.title().should("equal", "Forms · Bootstrap");
    });

    it("should not have the readonly input in viewport", () => {
        // only offset can be checked
        cy.get("@readOnlyInput")
            .invoke("offset")
            .its("top")
            .should("be.greaterThan", 1080);
    });

    it("should have the readonly input in viewport after scroll", () => {
        cy.get("@readOnlyInput")
            // does not work as expected
            .scrollIntoView()
            .invoke("offset")
            .its("top")
            .should("be.lessThan", 1080);
    });

    it("should have readonly input which readonly", () => {
        cy.get("@readOnlyInput")
            .invoke("attr", "readonly")
            .should("be", true);
    });
});