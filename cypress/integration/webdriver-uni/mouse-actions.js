/// <reference types="Cypress"/>



describe("Test mouse actions", () => {
    it("Scroll element into view", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        cy.get('#draggable').trigger('mousedown', {which: 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true})

    });

    it("Double click test", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        cy.get('#double-click').trigger('dblclick')

    });

    it.only("should be able to hold down left mouse click button on a given element", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        cy.get('#click-box').should('contain', 'Click and Hold!')
        cy.get('#click-box').trigger('mousedown', {which: 1}).should('contain', 'Well done! keep holding that click now.....')
        cy.get('#click-box').trigger('mouseup', {which: 1}).should('contain', 'Dont release me!!!')

    });








})