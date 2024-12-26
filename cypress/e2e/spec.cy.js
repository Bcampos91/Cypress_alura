describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a','Cadastrar').click();
    cy.get('#name').type('Ana Campos');
    cy.get('#email').type('apaula_cordeiro@hotmail.com');
    cy.get('#pass-create').type('Senha1234');
    cy.get('#pass-confirm').type('Senha1234');
    cy.contains('button','Cadastrar').click();

  })
})