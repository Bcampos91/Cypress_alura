describe('Api Adopet', () =>{
    const tempoEsperado = Math.random() * 1000
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiNTc4NzU5YS1jNmRiLTQzODctYTQ2NC02ODQzMjQ1NjdiYjAiLCJhZG9wdGVyTmFtZSI6IkJydW5vICIsImlhdCI6MTczNjgwNTUyNywiZXhwIjoxNzM3MDY0NzI3fQ.hn764gBsr3rvBfyis-2L05gcBMutd9E-f_RUWJuj8QI`

    it('Mensagens da API',() =>{
        cy.request({
            method:"GET" ,
            url:'https://adopet-api-i8qu.onrender.com/mensagem/b578759a-c6db-4387-a464-684324567bb0',
            headers:{authorization}
        }).then((res)=>{
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
            //esperar que o tempo seja inferior a variavel
            expect(res.duration).to.be.lte(tempoEsperado)
        })
    })
})