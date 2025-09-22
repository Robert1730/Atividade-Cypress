describe('Funcionalidade de Login', () => {

  // Teste 1: Login - válido
    it('Deve fazer login com sucesso com credenciais válidas', () => {
        cy.visit('/login');
        cy.get('input[data-qa="login-email"]').type('meutesterobert.cypress@example.com');
        cy.get('input[data-qa="login-password"]').type('minhasenha123'); // Use a senha que você cadastrou
        cy.get('button[data-qa="login-button"]').click();
        cy.get('.nav.navbar-nav').contains('Logged in as').should('be.visible');
    });

  // Teste 2: Login - email inválido
 it('Não deve fazer login com email inválido', () => {
    cy.visit('/login');
    cy.get('input[data-qa="login-email"]').type('email.invalido@teste.com');
    cy.get('input[data-qa="login-password"]').type('password123');
    cy.get('button[data-qa="login-button"]').click();
    cy.get('.login-form p').should('contain', 'Your email or password is incorrect!');
  });

  // Teste 3: Login - senha inválida
  it('Não deve fazer login com senha inválida', () => {
    cy.visit('/login');
    cy.get('input[data-qa="login-email"]').type('meutesterobert.cypress@example.com');
    cy.get('input[data-qa="login-password"]').type('senhainvalida');
    cy.get('button[data-qa="login-button"]').click();
    cy.get('.login-form p').should('contain', 'Your email or password is incorrect!');
  });
});