describe("Interactuando con click", () => {
  it("Ejecutando un click", () => {
    cy.visit("https://www4.cuevana3.ch/");
    cy.get("#keysssb", { timeout: 10000 })
      .type(
        "Top Gun and all the fucking movies that I want F U C K Y E A H B I T C H E S"
      )
      .click();
  });

  it("Ejecutando un doble click", () => {
    cy.visit("https://www4.cuevana3.ch/");
    cy.get("#keysssb", { timeout: 10000 })
      .type(
        "Top Gun and all the fucking movies that I want F U C K Y E A H B I T C H E S"
      )
      .dblclick();
  });

  it("Ejecutando un click derecho", () => {
    cy.visit("https://www4.cuevana3.ch/");
    cy.get("#keysssb", { timeout: 10000 })
      .type(
        "Top Gun and all the fucking movies that I want F U C K Y E A H B I T C H E S"
      )
      .rightclick();
  });

  it("Forzar un click", () => {
    cy.visit("https://www4.cuevana3.ch/");
    cy.get("#keysssb", { timeout: 10000 })
      .type(
        "Top Gun and all the fucking movies that I want F U C K Y E A H B I T C H E S"
      )
      .click({ force: true });
  });

  it("Ejecutar un click por posicion", () => {
    cy.visit("https://www4.cuevana3.ch/");
    cy.get("#keysssb", { timeout: 10000 })
      .type(
        "Top Gun and all the fucking movies that I want F U C K Y E A H B I T C H E S"
      )
      .click("topRight");

    cy.get("#keysssb", { timeout: 10000 })
      .type(
        "Top Gun and all the fucking movies that I want F U C K Y E A H B I T C H E S"
      )
      .click("topLeft");

    cy.get("#keysssb", { timeout: 10000 })
      .type(
        "Top Gun and all the fucking movies that I want F U C K Y E A H B I T C H E S"
      )
      .click(5, 60); /* Son los parametros "X" "Y" */
  });

  it.only("Click con teclas alternativas", () => {
    cy.visit("/buttons");
    cy.get("button").eq(3).click({
      shiftKey: true,
      // p optionKey
      altKey: true,
      ctrlKey: true,
      // windows o command en mac
      metaKey: true,
    });
  });
});
