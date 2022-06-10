class AutoStore_HairCare_Po {
    addHairCareProductsToBasket() {
        globalThis.data.productName.forEach(function (element) {
            cy.addProductToBasket(element)
        })

        cy.get('.topcart .cart_total').click().debug()
    }
}
export default AutoStore_HairCare_Po