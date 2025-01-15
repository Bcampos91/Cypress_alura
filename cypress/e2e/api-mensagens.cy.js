describe('Api Adopet', () =>{


    it('Mensagens da API',() =>{
        cy.request({
            method: 'GET' ,
            url:'https://adopet-api-i8qu.onrender.com/mensagem/b578759a-c6db-4387-a464-684324567bb0',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
            
        })
    })
})