describe('Fluxo de Compra', () => {
    beforeEach(() => {
        cy.createAccountViaAPI();
    });

    it('deve completar o processo de compra', () => {
        cy.login(Cypress.env('userEmail'), Cypress.env('userPassword'));

        cy.visit('/');
        cy.get('.productinfo a[data-product-id="1"]').first().click();

        cy.get('.modal-content a').contains('View Cart').click();

        cy.get('.btn.btn-default.check_out').click();

        cy.get('textarea[name="message"]').type('Pedido de teste automatizado feito pelo Robert com Cypress.');
    
        cy.get('a.btn.btn-default.check_out').click();

        cy.get('[data-qa="name-on-card"]').type('Cypress Test');
        cy.get('[data-qa="card-number"]').type('4100 0000 0000 0000');
        cy.get('[data-qa="cvc"]').type('123');
        cy.get('[data-qa="expiry-month"]').type('01');
        cy.get('[data-qa="expiry-year"]').type('1990');

        cy.get('[data-qa="pay-button"]').click();

        cy.get('h2[data-qa="order-placed"]').find('b').should('contain', 'Order Placed');
    });
});