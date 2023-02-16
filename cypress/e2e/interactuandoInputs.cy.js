it.only("Inputs type text", () => {
  cy.visit("/automation-practice-form");
  cy.get("#firstName").type("Javier");
  cy.get("#lastName").type("Fuentes");
  //Observa que pasa si se vuelve a mandar el type , el texto se concatena
  cy.get("#firstName").type("Javier");
  //Entonces limpiemos el input
  cy.get("#firstName").type("{selectAll}{backspace}");
  cy.get("#firstName").type("Otro nombre");
  //Otra forma de hacerlo
  cy.get("#firstName").clear();
  //Mocernos al otro input
  cy.get("#firstName").type("Otro nombre{enter}");
});
