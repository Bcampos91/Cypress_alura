describe('Página de login ', () => {
    beforeEach(()=> {
        
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })
    it('Falha no login do sistema', () =>{

        cy.get('[data-test="input-loginEmail"]').type('ana@emailcom');
        cy.get('[data-test="input-loginPassword"]').type('Sa3');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Por favor, verifique o email digitado').should('be.visible')
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
        
    })
    

  })