/// <reference types="Cypress"/>



describe("Interact with dropdown lists via webdriveruni", () => {
    it("Select specific values via select dropdown lists", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get('#dropdowm-menu-1').select('java').should('have.value', 'java')
        cy.get('#dropdowm-menu-2').select('TestNG').should('have.value', 'testng')
        cy.get('#dropdowm-menu-3').select(1).should('have.value', 'css')
        
    });







})