describe("Generando Aserciones", () => {
  it("Mi primera Asercion", () => {
    cy.visit("https://www4.cuevana3.ch/");

    cy.url().should(
      "include",
      "cuevana3.ch"
    ); /* Regresa el URL de la pagina encontrada y compara lo que esperamos que inlcuya dicho URL */
    cy.get(".Menu").should(
      "be.visible"
    ); /* Encuentra el elemento con la clase señalada y valida si es visible el elemento */

    cy.get("#keysss")
      .should("be.visible")
      .should(
        "have.attr",
        "placeholder",
        "Buscar películas..."
      ); /* Encadenando Aserciones */
  });

  it("Mi segunda Asercion, utilizando THEN", () => {
    cy.visit("https://www4.cuevana3.ch/");
    cy.url().should("include", "cuevana3.ch");
    cy.get("#keysss").then((element) => {
      expect(element).to.be.visible;
      expect(element).to.have.attr("placeholder", "Buscar películas...");
    });
  });

  it("Mi tercer Asercion, utilizando assert", () => {
    cy.visit("https://www4.cuevana3.ch/");
    cy.get("#keysss").then((element) => {
      assert.equal(element.attr("placeholder"), "Buscar películas...");
    });
  });
});
