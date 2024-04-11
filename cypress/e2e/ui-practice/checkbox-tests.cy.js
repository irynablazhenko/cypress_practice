/*
Завдання 2(checkbox-tests.cy.js):
Сторінка - https://the-internet.herokuapp.com/checkboxes

Тест 1: Перевірити, що checkbox 2 чекнутий по дефолту
Анчекнути checkbox 2
Перевірити, що обидва чекбокси анчекнуті

Тест 2: Чекнути checkbox 1
Перевірити, що обидва чекбокси чекнуті
*/
/// <reference types="cypress" />
describe('Checkbox tests', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
    })

    it("Test 1 - Checkbox 2 is checked by the default, can be unchecked and all checkboxes are unchecked", () => {
        cy.get('#checkboxes :last-child').should('be.checked');
        cy.get('#checkboxes :last-child').uncheck();
        cy.get('[type="checkbox"]').should('not.be.checked');
    })

    it("Test 2 - Check checkbox 1 and be sure that 2 checkboxes are checked", () => {
        cy.get('#checkboxes :first-child').check();
        cy.get('[type="checkbox"]').should('be.checked');
    })
})
