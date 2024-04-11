/*
Завдання 1(dropdown-tests.cy.js):
Сторінка - https://the-internet.herokuapp.com/dropdown

Тест 1: Перевірити, що по дефолту обране значення "Please select an option"
Тест 2: Обрати значення "Option 2". Перевірити, що обране значення "Option 2"
*/
/// <reference types="cypress" />
describe('Dropdown tests', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/dropdown');
    })

    it("Test 1 - Check dropdown default value", () => {
        cy.get('select#dropdown option:selected').should('have.text', 'Please select an option');
    })

    it("Test 2 - Check selection Option 2 value from the dropdown", () => {
        cy.get('select#dropdown').select('Option 2');
        cy.get('select#dropdown option:selected').should('have.text', 'Option 2');
    })
})
