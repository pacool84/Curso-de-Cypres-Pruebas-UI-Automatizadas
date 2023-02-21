describe("Guardando Info", () => {
  //Es importante tener el "function" y no solo un arrow function ya que las arrow function carecen de contexto y por ende del this
  it("Extrayendo informacion", function () {
    cy.visit("/automation-practice-form");
    // a veces fallara porque lo cubre otro elemento

    cy.get("#firstName").as("nombre");
    cy.get("@nombre").type("Sebastian");
    // Primera manera de hacerlo
    cy.get("@nombre").then(($nombre) => {
      texto = $nombre.val();
      expect(texto).to.equal("Sebastian");
    });

    // Segunda manera de hacerlo, invoke solo invoca una funcion que en este caso el elemento que nos regresa el get , como jquery tiene
    cy.get("@nombre").invoke("val").should("equal", "Sebastian");
    cy.get("@nombre").invoke("val").as("nombreGlobal");
  });

  //Es importante tener el function y no solo un arrow function ya que las arrow function carecen de contexto y por ende del this
  it("pasando informacion entre its", function () {
    // Con la variable global
    cy.get("#lastName").type(texto);

    //Con el alias
    cy.get("#lastName").type(this.nombreGlobal);
  });
});
