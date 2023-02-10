describe("Primera prueba con Hokks", () => {
  before(() => {
    cy.visit("https://www4.cuevana3.ch/");
  });

  after(() => {
    cy.reload();
  });

  it("Validar campo visible", () => {
    cy.get("#keysss")
      .should("be.visible")
      .should("have.attr", "placeholder", "Buscar películas...");
  });
});
