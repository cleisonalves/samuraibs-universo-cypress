import faker from '@faker-js/faker'

it('deve cadastrar um novo usuário', function(){
    

    const nome = 'Cleison Silva'
    const email = faker.internet.email()
    const senha = '123456'

    cy.visit('/signup')

    cy.get('input[placeholder="Nome completo"]').type(nome)
    cy.get('input[placeholder="Seu melhor email"]').type(email)
    cy.get('input[placeholder="Sua senha secreta"]').type(senha)

    cy.contains('button', 'Cadastrar').click()

    cy.get('.toast')
        .should('be.visible')
        .find('p')
        .should('have.text', 'Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')
})