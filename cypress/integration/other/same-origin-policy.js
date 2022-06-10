/// <reference types="Cypress"/>

describe("Cypress Web Security", () => {
    it("Validate visiting two different domains", () => {
        cy.visit('http://www.webdriveruniversity.com/index.html')
        cy.visit('https://automationteststore.com/')

    });

    it.only("Validate visiting two different domains via user actions", () => {
        cy.visit('http://www.webdriveruniversity.com/index.html')
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()

    });

})