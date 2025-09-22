// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login');
  cy.get('input[data-qa="login-email"]').type(email);
  cy.get('input[data-qa="login-password"]').type(password);
  cy.get('button[data-qa="login-button"]').click();
});

Cypress.Commands.add('createAccountViaAPI', () => {
  const user = {
    name: 'Cypress',
    email: `cypress.user.${Date.now()}@example.com`,
    password: 'password123',
    title: 'Mr',
    birth_date: '1',
    birth_month: '1',
    birth_year: '1990',
    firstname: 'Cypress',
    lastname: 'Tester',
    company: 'Cypress Inc',
    address1: '123 Cypress St',
    address2: 'Apt 101',
    country: 'United States',
    zipcode: '12345',
    state: 'California',
    city: 'San Francisco',
    mobile_number: '1234567890',
  };

  cy.request({
    method: 'POST',
    url: '/api/createAccount', // Usando a baseUrl
    form: true,
    body: user,
  }).then((response) => {
    expect(response.status).to.eq(200);
    
    Cypress.env('userEmail', user.email);
    Cypress.env('userPassword', user.password);
  });
});