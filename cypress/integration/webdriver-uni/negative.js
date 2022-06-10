/// <reference types="Cypress"/>

describe("Test Contact Us form via WebdriverUni", () => {

    it("Should NOT be able to submit a successful submission via contact us form as all fields are required", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("negative")
        cy.get('[name="last_name"]').type("person")
        cy.get('textarea.feedback-input').type("This is a test comment")
        cy.get('[type="submit"]').click()
    });

})