describe("Primer Prueba", () => {
  it("Navegar a mi primer pagina ", () => {
    cy.visit("https://www.platzi.com/");
  });

  it("Navegar a mi segunda pagina", () => {
    cy.visit("https://www.google.com");
  });
});
