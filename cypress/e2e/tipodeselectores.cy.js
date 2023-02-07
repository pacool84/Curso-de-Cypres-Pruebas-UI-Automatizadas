describe("Probando configuracion", () => {
  it("Obteniendo por un tag", () => {
    cy.visit("https://cuevana3.it/");
    cy.get("input");
  });

  it("Obteniendo por un atributo", () => {
    cy.get('[placeholder="First Name"]');
  });

  it("Obteniendo por un atributo y tag", () => {
    cy.get('input[placeholder="First Name"]');
  });

  it("Obteniendo por un ID", () => {
    cy.get("#firstName"); /* El simbolo de # representa buscar por ID */
  });

  it("Obteniendo por un class", () => {
    cy.get(
      ".mr-sm-2.form-control"
    ); /*  Considerar que un elemento puede tener varias clases, en ese caso tenemos que unirlas por medio de un . punto */
  });

  it("Obteniendo por un ID", () => {
    cy.get("#keysssb").type(
      "Top Gun and all the fucking movies that I want F U C K Y E A H B I T C H E S"
    );
  });

  it("Usando el CONTAINS", () => {
    cy.contains("ingresar a cuevana");
    cy.contains(
      ".mankeleta",
      "ingresa a cuevana"
    ); /* Seleccionando por texto que contenga en una clase y por puro texto */
  });

  it.only("Identificando el PARENT", () => {
    cy.visit("https://cuevana3.it/");
    cy.get("#keysssb").parent();
    cy.get(".main-site").parents().find("label");
  });
});
