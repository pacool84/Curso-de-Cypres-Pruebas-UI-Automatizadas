describe("Navegacion", () => {
  it("Abrir la pagina", () => {
    cy.visit("https://www.platzi.com/");
  });

  it("Recargar pagina", () => {
    cy.reload();
  });

  it("Recargar la pagina de manera forzada", () => {
    cy.visit("https://www.google.com");
    cy.reload(true); /* Se hace que la recgarga no tenga CACHE */
  });

  it.only("Navegar hacia una página previa", () => {
    cy.visit("https://www.google.com");
    cy.visit(
      "https://www.google.com/search?q=platzi&ei=zBzXY62gBYmBxc8P8YqdoAQ&ved=0ahUKEwittqTZke78AhWJQPEDHXFFB0QQ4dUDCBA&uact=5&oq=platzi&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzINCC4QsQMQxwEQ0QMQQzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIYCC4QsQMQxwEQ0QMQQxDcBBDeBBDgBBgDOgoIABBHENYEELADOgcIABCwAxBDOg0IABDkAhDWBBCwAxgBOgwILhDIAxCwAxBDGAI6CwgAEIAEELEDEIMBOgsILhCABBCxAxCDAToICAAQsQMQgwE6CggAELEDEIMBEEM6BAgAEEM6BwgAELEDEEM6BwguENQCEEM6CggAEIAEELEDEAo6BwgAEIAEEApKBAhBGABKBAhGGAFQrwpYhRJgqR9oAnABeACAAdYFiAG0IJIBBTUtNC4ymAEAoAEByAETwAEB2gEGCAEQARgJ2gEGCAIQARgI2gEGCAMQARgU&sclient=gws-wiz-serp"
    );
    cy.go(
      "back"
    ); /* Se puede obtener el mismo resultado realizando cy.go(-1) */
  });
});
