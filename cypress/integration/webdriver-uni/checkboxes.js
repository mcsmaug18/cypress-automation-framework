/// <reference types="Cypress"/>



describe("Verify checkboxes via webdriveruni", () => {
    beforeEach(function() {
        cy.visit("/")
        cy.log(Cypress.env("name"))
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        
    })

    it("Handle webdriveruni iframe and modal", () => {
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check().should('be.checked')
        cy.get('@option-1').uncheck().should('not.be.checked')

    });

    it("uncheck checkbox-3", () => {
        cy.get('#checkboxes > :nth-child(3) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')

    });
    
    it("multi check", () => {
        cy.get('input[type="checkbox"]').check(["option-1", "option-2", "option-3", "option-4"])

    });



})