describe("navegando no site da PUCRS", () => {
  before(() => {
    cy.visit("http://pucrs.br");
  });
  it("deve recirecionar para a URL correta quando clicar na noticia ", () => {
    cy.get("div").contains("Faça a sua graduação em 2021").click();

    cy.url().should("include", "transferencia-e-ingresso-de-diplomado/");
  });

  it("deve fazer uma busca no campo de pesquisa", () => {
    cy.get("form");
    cy.get("#s").type("vestibular{enter}");

    cy.contains("h1", "Resultado da busca");
  });

  it("deve retornar para página inicial quando clica na logotipo", () => {
    cy.get("#topo")
      .find('[title="PUCRS – Portal"]').eq(0)
      .click();

    cy.url().should("contains", "pucrs.br");
  });
});
