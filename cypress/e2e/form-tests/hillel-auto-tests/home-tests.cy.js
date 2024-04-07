/// <reference types="cypress" />

describe('Authorization tests', () => {

    beforeEach(() => {
        cy.visit('/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto'
            }
        });
    })

    //Тести 1-5 Перевірити, що всі соціальні лінки містять лінки(аттрибут href) на відповідні сайти. Використовувати .invoke('attr',"href')
    it("Test 1 - Facebook icon contains link to the facebook", () => {
        cy.get('a.socials_link').first().invoke('attr', 'href').should('contain', 'facebook.com');
    });
    
    it("Test 2 - Telegram icon contains link to the Telegram", () => {
        cy.get('a.socials_link').eq(1).invoke('attr', 'href').should('contain', 't.me');
    });
    
    it("Test 3 - Youtube icon contains link to the Youtube", () => {
        cy.get('a.socials_link').eq(2).invoke('attr', 'href').should('contain', 'youtube.com');
    });
    
    it("Test 4 - Instagram icon contains link to the Instagram", () => {
        cy.get('a.socials_link').eq(3).invoke('attr', 'href').should('contain', 'instagram.com');
    });
    
    it("Test 5 - LinkedIn icon contains link to the LinkedIn", () => {
        cy.get('a.socials_link').last().invoke('attr', 'href').should('contain', 'linkedin.com');
    });
    
    //Тест 6 Перевірити, що після кліку на пноку "Sign In" відкривається форма логіну
    it("Test 6 - The login form opens when click on the Sign in button", () => {
        cy.contains('Sign In').click();
        cy.get('div.modal-content').within(() => {
            cy.get('h4.modal-title').invoke("text").should('be.eq', 'Log in');
        })
    });

    //Тест 7 Перевірити, що після кліку на пноку "Sign Up" відкривається форма реєстрації
    it("Test 7 - The Registration form opens when click on the Sign up button", () => {
        cy.contains('Sign up').click();
        cy.get('div.modal-content').within(() => {
            cy.get('h4.modal-title').invoke("text").should('be.eq', 'Registration');
        })
    });

})
