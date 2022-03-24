import faker from '@faker-js/faker'

it('deve cadastrar um novo usuário', function(){
    

    const nome = 'Cleison Silva'
    const email = faker.internet.email()
    const senha = '123456'

    cy.visit('/signup')

    cy.get('input[placeholder="Nome"]').type(nome)
    cy.get('input[placeholder="E-mail"]').type(email)
    cy.get('input[placeholder="Senha"]').type(senha)

    cy.contains('button', 'Cadastrar').click()

    cy.get('.toast')
        .should('be.visible')
        .find('p')
        .should('have.text', 'Agora você pode fazer seu login no Samurai Barbershop!')
})