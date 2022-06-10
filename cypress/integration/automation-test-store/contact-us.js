/// <reference types="Cypress"/>

describe("Test Contact Us form via Automation Test Store", () => {
    before(function() {
        cy.fixture("userDetails").as("user")
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/")
        // cy.xpath('//*[contains(@href, "contact")]').click()
        cy.get('a[href$="contact"]').click().then(function(contactText){
            console.log("Contact Text: " + contactText.text())
        })
        cy.get("@user").then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name)
            cy.get('#ContactUsFrm_email').type(user.email)
            
            
        })
        //cy.get('#ContactUsFrm_email').should(user.email)
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")
        cy.get('.col-md-6 > .btn').click()
        cy.xpath('//*[@class="mb40"]/p[2]').should('have.text', 'Your enquiry has been successfully sent to the store owner!')


    });



})