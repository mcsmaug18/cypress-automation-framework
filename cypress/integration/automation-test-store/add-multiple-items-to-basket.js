import AutoStore_Homepage_Po from '../../support/pageObjects/automation-test-store/AutoStore_HomePage_PO'
import AutoStore_HairCare_Po from '../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO'
/// <reference types="Cypress"/>

describe("Add multiple items to the basket", () => {
    const autoStore_HomePage_PO = new AutoStore_Homepage_Po()
    const autoStore_HairCare_PO = new AutoStore_HairCare_Po()

    before(function () {
        cy.fixture("products").then(function (data) {
            globalThis.data = data;
        })
    })

    beforeEach(function () {
        autoStore_HomePage_PO.accessHomepage()
        autoStore_HomePage_PO.clickOn_HairCare_Link()
    })

    it("Add specific item to basket", () => {
        // globalThis.data.productName.forEach(function(element) {
        //     cy.addProductToBasket(element)
        // })

        // cy.get('.topcart .cart_total')
        autoStore_HairCare_PO.addHairCareProductsToBasket()
    })


})