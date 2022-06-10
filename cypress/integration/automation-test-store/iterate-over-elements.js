/// <reference types="Cypress"/>

describe("Verifying variables, cypress commands and jquery commands", () => {
    beforeEach(function() {
        cy.visit("https://www.automationteststore.com/")
        cy.get("#categorymenu a[href*='product/category&path']").contains("Hair Care").click()
    })

    it("Navigating to specific product pages", () => {
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        })
        
    });

    it("Navigating to specific product pages", () => {
   
        cy.selectProduct('Curls to straight Shampoo')
    })


    it("Add Another Product to Basket", () => {

        cy.selectProduct('Seaweed Conditioner')
    });



})