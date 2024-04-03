/// <reference types="cypress" />
describe('Authorization tests', () => {

  it("Test 1 - Login with an existing login and incorrect password", () => {
    cy.visit('login', { failOnStatusCode: false });
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('wrongPassword');
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('have.text', `\n            Your password is invalid!\n            ×\n          `)
  })

  it("Test 2 - Login with an incorrect login and any password", () => {
    cy.visit('login', { failOnStatusCode: false });
    cy.get('#username').type('incorrectLogin');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('have.text', `\n            Your username is invalid!\n            ×\n          `)
    cy.clo
  })

  it("Test 3 Additional - registration with the wrong email", () => {
    cy.visit('https://qauto.forstudy.space/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto'
      }, failOnStatusCode: false
    });
    cy.get('h1.hero-descriptor_title.display-2').should('be.visible');
    cy.get('iframe[src="https://www.youtube.com/embed/znjjC0Iw8Wc?showinfo=0&controls=0"]').should('be.visible');
    cy.contains('Sign up').click();
    cy.get('h4.modal-title').should('be.visible');
    cy.get('input#signupName').type('Name');
    cy.get('input#signupLastName').type('lastName');
    cy.get('input#signupEmail').type('signupEmail');
    cy.get('input#signupPassword').click();
    cy.contains('Email is incorrect').should('be.visible');
  })
})
