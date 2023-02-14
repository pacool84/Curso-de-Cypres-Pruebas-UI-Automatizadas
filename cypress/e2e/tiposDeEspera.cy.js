describe("Tipos de Esperas", () => {
  beforeEach(() => {
    cy.visit("https://www.cuevana3.it/");
  });

  it("Esperando por un tiempo definido", () => {
    cy.wait(5000); /* Debe de ser la ultima opcion a usar, mala practica */
  });

  it("Esperando por un elemento", () => {
    cy.get(
      "#keysssb"
    ); /* El tiempo por default configurado para esperar por elementos son de 4seg */
  });

  it("Esperando por un elemento con un tiempo definido", () => {
    cy.get("#keysssb", { timeout: 5000 });
  });

  it("Esperando por un elemento y encadenando con una asersion", () => {
    cy.get("#keysssb", { timeout: 10000 }).should("be.visible");
  });

  it("Esperando un elemento y des habilitando el Retry", () => {
    cy.get("#keysssb", {
      timeout: 0,
    }); /* Enviando el timeout a cero deshabilitamos el retry */
  });
});
