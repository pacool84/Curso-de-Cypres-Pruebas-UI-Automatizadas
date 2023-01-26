describe('Primer Prueba', () => { 
  it("Navegar a mi primer pagina ", () =>{
    cy.visit('https://www.platzi.com/')
  })
 })

 describe("Segunda Prueba", () => {
  it("Navegar por mi degunda prueba", () => {
    cy.visit("https://www.google.com.mx")
  })
 })