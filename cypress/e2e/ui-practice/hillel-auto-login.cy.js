/*
Завдання 3(hillel-auto-login.cy.js):
Сайт https://qauto.forstudy.space/

Login: guest    Pass: welcome2qauto

Pre-conditions: Мануально зареєструйте нового юзера на сайті.

Використовуючи fixtures, збережіть дані(email, password) вашого юзера.

Тест 1:  Нажати Sign In
Ввести дані юзеру(взяти їх з .json файлу з фікстур)
Нажати Login
Будь-яким способом перевірте, що ви на сторінці Garage
*/
/// <reference types="cypress" />
describe('Sign In tests', () => {

    let userData;

    beforeEach(() => {
        cy.fixture('credentials.json').then((data) => {
            userData = data;
        })
        cy.visit('/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        })
    })

    it("Test 1 - Sign In tests", () => {
        cy.get('.header_signin').click();
        cy.get('input#signinEmail').type(userData.email);
        cy.get('input#signinPassword').type(userData.password);
        cy.get('div.modal-content .btn-primary').click();
        cy.url().should('eq','https://qauto.forstudy.space/panel/garage');
    })
})
