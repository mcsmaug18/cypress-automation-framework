import HomePage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'
/// <reference types="Cypress"/>

describe("Test Contact Us form via WebdriverUni", () => {
    Cypress.config('defaultCommandTimeout', 20000)
    const homepage_PO = new HomePage_PO()
    const contact_Us_PO = new Contact_Us_PO()
    before(function() {
        cy.fixture('example').then(function(data) {
            globalThis.data = data
        })
    })
    beforeEach(function() {
        // cy.visit(Cypress.env(webdriveruni_homepage) + "/Contact-Us/contactus.html")
        // cy.get('a#contact-us').invoke('removeAttr', 'target').click({force:true})
        
        homepage_PO.visitHomepage()
        cy.wait(3000)
        homepage_PO.clickOn_ContactUs_Button()
        // cy.pause()


    })

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.document().should('have.a.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        // cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "This is a test comment", 'h1', 'Thank You for your Message!')
        contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "This is a test comment", 'h1', 'Thank You for your Message!')

    });

    it("Should NOT be able to submit a successful submission via contact us form as all fields are required", () => {
        contact_Us_PO.contactForm_Submission(data.first_name, data.last_name, " ", 'Incomplete test', 'body', "Error: Invalid email address")
        // cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, " ", 'Incomplete test', 'body', "Error: Invalid email address")
    });

})