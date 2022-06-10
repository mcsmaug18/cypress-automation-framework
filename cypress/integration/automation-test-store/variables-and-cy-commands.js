/// <reference types="Cypress"/>

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit("https://www.automationteststore.com/")

        // const makeupLink = cy.get("a[href*='category&path=']").contains("Makeup")
        // makeupLink.click()
        // const skincareLink = cy.get("a[href*='category&path=']").contains("Skincare")
        // skincareLink.click()

        cy.get("a[href*='category&path=']").contains("Makeup").click()
        cy.get("a[href*='category&path=']").contains("Skincare").click()

    });

    it.only("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        //Uses cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')


        //jQuery approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)
            })
        })



       
        
    });

})