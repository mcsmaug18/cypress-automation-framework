/// <reference types="Cypress"/>

describe("Inspect Automation Test Store items using chain of commands", () => {
    it("Click on the first item using item header", () => {
        cy.visit("https://www.automationteststore.com/")
        // cy.xpath('//*[contains(@href, "contact")]').click()
        cy.xpath('//*[@title="Skinsheen Bronzer Stick"]').click()
    });

    it.only("Click on the first item using item text", () => {
        cy.visit("https://www.automationteststore.com/")
        // cy.xpath('//*[contains(@href, "contact")]').click()
        cy.xpath('//*[contains(@class, "prdocutname")]').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
            console.log("Selected the following item: " + itemHeaderText.text())
        })

    });

    it("Click on the first item using index", () => {
        cy.visit("https://www.automationteststore.com/")
        /////*[@class="fixed_wrapper"]//*[contains(text(), "Skinsheen Bronzer Stick")]
        cy.xpath('//*[@class="fixed_wrapper"]').find('.prdocutname').eq(1).click()

    });

})