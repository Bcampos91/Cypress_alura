import {usuarios} from '../fixtures/usuarios.json'

describe('Página de cadastro',() => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
        })

        //ForEach=percorre o array de objetos e vai itera no teste
    usuarios.forEach(usuario =>{
        it('Deve preencher os campos do formulário corretamente para cadastrar um novo usúario',() => {
            //clear é usuado para limpar o campo antes dele ser utilizado
            cy.get('[data-test="input-name"]').clear().type(usuario.name)
            cy.get('[data-test="input-email"]').clear().type(usuario.email);
            cy.get('[data-test="input-password"]').clear().type(usuario.password);
            cy.get('[data-test="input-confirm-password"]').clear().type(usuario.password);
            cy.get('[data-test="submit-button"]').click(); 
        })

            
     })


})