describe('Api Adopet', () => {
 
    it('login', () => {
        cy.request({
            method: 'POST' ,
            url: 'https://adopet-api-i8qu.onrender.com/adotante/login',
           headers: Cypress.env()
           
        }).then((res) => {
            expect(res.status).to.be.equal(201)
            expect(res.body).is.not.empty
                          
        })
    })
})