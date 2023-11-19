/// <reference types="cypress"/>
import homePage from "../../support/pageObjects/homePage.cy"
import productPage from "../../support/pageObjects/productsPage.cy"

describe('My Second test suite', function(){

    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    it('My Second test case', function(){
        const HomePage = new homePage()
        const ProdectPage = new productPage()
        cy.visit('/')
        HomePage.getEditBox().type(this.data.name)
        HomePage.getGender().select(this.data.gender)
        HomePage.getTwoWayDataBinding().should('have.value', this.data.name)
        HomePage.getEditBox().should('have.attr','minlength','2')
        HomePage.getEntrepreneurRadioButton().should('be.disabled')
        HomePage.getShopTab().click()

        // Parameterize with multiple data set
        this.data.productName.forEach((element) => 
        cy.selectProduct(element))
        
        // Checkout
        ProdectPage.getCheckout().click()
        var sum = 0
        cy.get('tr td:nth-child(4) strong').each(($el,index,$list) => {
            // cy.log($el.text())
            const amount = $el.text()
            var result = amount.split(" ")
            result = result[1].trim()
            sum = Number(sum) + Number(result)
        }).then(function(){
            cy.log(sum)
        })
        cy.get('h3 strong').then(function(element){
            const amount = element.text()
            var result = amount.split(" ")
            var total = result[1].trim()
            expect(Number(total)).to.equal(sum)
        })
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        Cypress.config('defaultCommandTimeout', 100000)
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force: true})
        cy.get('input[type="submit"]').click()
        // cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function(element){
            const actualText = element.text()
            expect(actualText.includes('Success')).to.be.true
        })
})
})