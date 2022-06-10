class AutoStore_Homepage_Po {
    accessHomepage(){
        cy.visit("https://www.automationteststore.com/")
    }

    clickOn_HairCare_Link(){
        cy.get("#categorymenu a[href*='product/category&path']").contains("Hair Care").click()
    }
}
export default AutoStore_Homepage_Po