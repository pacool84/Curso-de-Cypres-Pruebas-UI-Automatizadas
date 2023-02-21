describe("Interactuando con Check Box y Radio Button", () => {
  it("Dando click a un radio button", () => {
    cy.visit("https://www4.cuevana3.ch/");
    cy.get("#gender-radio-1").click({
      force: true,
    }); /* Esta no es una buena práctica */
    cy.get("#gender-radio-1").check({
      force: true,
    }); /* Esta tampoco es una buena práctiva  */
  });

  /* La mejor forma sería ejecuntando la obtencion del elemento de la siguiente 
  forma asumiendo que el checkbox esta envuelto por un elemento de tipo label */

  cy.get('label[for="gender-radio-1]').click();

  it("Dando click a un checkbox", () => {
    cy.get("#hobbie-checkbox-1", check({ force: true }));
    cy.get(
      "#hobbie-checkbox-1",
      uncheck({ force: true })
    ); /* Estas dos ultimas no son buenas practicas */

    cy.get(
      'label[for="hobbie-checkbox-1]'
    ).check(); /* Esta es la mejor practica */
  });
});
