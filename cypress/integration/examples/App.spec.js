describe("Test App", () => {
  it("launches", () => {
    cy.visit("/");
  });
  it("displays our product's name on the landing page message", () => {
    cy.visit("/");
    cy.get("[data-cy=landing]").should("contain", "itemShare");
  });
});
