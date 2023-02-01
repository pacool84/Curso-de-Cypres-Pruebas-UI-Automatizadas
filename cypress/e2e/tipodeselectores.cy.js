describe("Probando configuracion", () => {
  it.only("Obteniendo por un tag", () => {
    cy.visit("https://cuevana3.it/");
    cy.get("input");
  });

  it("Obteniendo por un atributo", () => {
    cy.get('[placeholder="First Name"]');
  });

  it("Obteniendo por un atributo y tag", () => {
    cy.get('input[placeholder="First Name"]');
  });

  it("Obteniendo por un id", () => {
    cy.get("#firstName"); /* El simbolo de # representa buscar por ID */
  });

  it("Obteniendo por un class", () => {
    cy.get(
      ".mr-sm-2.form-control"
    ); /*  Considerar que un elemento puede tener varias clases, en ese caso tenemos que unirlas por medio de un . punto */
  });

  it.only("Obteniendo por un tag", () => {
    cy.visit("https://cuevana3.it/");
    cy.get("#keysssb").type("Top Gun and all the fucking movies that I want");
  });
});
