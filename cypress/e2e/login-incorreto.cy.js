describe('Página de login ', () => {
    beforeEach(()=> {
        
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
        //duble de testes
        cy.intercept('POST', ' https://adopet-api-i8qu.onrender.com/adotante/login', {statuscode:400, }).as('stubPost')
    })

    it('Verifica mensagem de falha no login', () =>{

        cy.get('[data-test="submit-button"]').click()
        cy.contains('É necessário informar um endereço de email').should('be.visible')
        cy.contains('Insira sua senha').should('be.visible')
        
    })
    
    it('Deve falhar mesmo que os campos sejam preenchidos corretamente ', ()=> {
        cy.login('brunoguerreiro@hotmail.com', 'Senha123')
        cy.wait('@stubPost')
     
    })

  })