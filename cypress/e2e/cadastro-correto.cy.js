

describe('Cadastro correto', () => {
  beforeEach(()=> {
      
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="register-button"]').click();
  
  })
it('ODeve preencher os campos do cadastro corretamente e clicar no botão cadastrar',() => {
  
  cy.cadastrar('Ana Campos','apaula_cordeiro@hotmail.com','Senha1234')
  
})

})


