describe('Página de login ', () => {
    beforeEach(()=> {
        
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })
    it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () =>{

        cy.login('ana@email.com','Senha123')
        //cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
       // cy.get('[data-test="input-loginPassword"]').type('Senha123');
       // cy.get('[data-test="submit-button"]').click();
    })
    

  })