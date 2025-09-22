describe('Cadastro de Usuário', () => {
    
    // Teste 1: Cadastro - sucesso
    it('Deve registrar um novo usuário com sucesso', () => {
        cy.visit('/login');
        cy.get('input[data-qa="signup-name"]').type('Novo Usuário Cypress');
        cy.get('input[data-qa="signup-email"]').type(`novo.usuario_${Date.now()}@example.com`);
        cy.get('button[data-qa="signup-button"]').click();
        cy.url().should('include', '/signup');

        cy.get('#id_gender1').click();
        cy.get('#password').type('senha123');
        cy.get('#days').select('1');
        cy.get('#months').select('January');
        cy.get('#years').select('1990');
        cy.get('#first_name').type('Novo');
        cy.get('#last_name').type('Usuário');
        cy.get('#address1').type('Rua Cypress, 123');
        cy.get('#country').select('United States');
        cy.get('#state').type('California');
        cy.get('#city').type('Los Angeles');
        cy.get('#zipcode').type('90210');
        cy.get('#mobile_number').type('123456789');

        cy.get('button[data-qa="create-account"]').click();
        cy.get('b').should('contain', 'Account Created!');
    });

    // Teste 2: Cadastro - "Falha" email já cadastrado
    it('Não deve registrar com email que já existe', () => {
        cy.visit('/login');
        cy.get('input[data-qa="signup-name"]').type('Usuário Existente');
        cy.get('input[data-qa="signup-email"]').type('testuser@example.com');
        cy.get('button[data-qa="signup-button"]').click();
        cy.get('p').should('contain', 'Email Address already exist!');
    });

});