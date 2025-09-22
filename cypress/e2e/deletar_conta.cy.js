describe('Exclusão de Conta', () => {
  beforeEach(() => {
    cy.createAccountViaAPI();
});

it('deve excluir a conta do usuário com sucesso', () => {
    cy.login(Cypress.env('userEmail'), Cypress.env('userPassword'));
    cy.visit('/');
    cy.get('.nav.navbar-nav').contains('Delete Account').click();
    cy.get('h2[data-qa="account-deleted"]').find('b').should('contain', 'Account Deleted!');

  });
});