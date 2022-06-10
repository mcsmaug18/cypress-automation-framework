/// <reference types="Cypress"/>


describe("Test Datepicker via webdriveruni", () => {
    it("Select date from the datepicker", () => {
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true})

        // let date_now = new Date()
        // date_now.setDate(date_now.getDate()) // get current date
        // cy.log(date_now.getDate())

        // let date_later = new Date()
        // date_later.setDate(date_later.getDate() + 5)
        // cy.log(date_later.getDate())

        var date = new Date();
        date.setDate(date.getDate() + 360)

        var futureYear = date.getFullYear()
        var futureMonth = date.toLocaleString("default", {month: "long"})
        var futureDay = date.getDate()

        cy.log("Future year to select: " + futureYear)
        cy.log("Future month to select: " + futureMonth)
        cy.log("Future day to select: " + futureDay)

        function selectMonthAndYear() {
            cy.get('#datepicker').click().then(() => {
                cy.get('.datepicker-switch').first().then(currentDate => {
                    if(!currentDate.text().includes(futureYear)) {
                        cy.get('.next').first().click() 
                        selectMonthAndYear()
                    }
                })

                cy.get('.datepicker-switch').first().then(currentDate => {
                    if(!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click() 
                        selectMonthAndYear()
                    }
                })

                
                
            })

        }

        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDay).click()
        }

        selectMonthAndYear()
        selectFutureDay()



    });


}) 