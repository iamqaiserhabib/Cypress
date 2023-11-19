/// <reference types="cypress"/>
import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps";
import homePage from "../../../support/pageObjects/homePage.cy"
import productPage from "../../../support/pageObjects/productsPage.cy"

const HomePage = new homePage()
const ProdectPage = new productPage()
let name

Given('I open ecommerce page',() => {
    cy.visit('/')
})

// I add items to Cart
When('I add items to Cart',function(){
    HomePage.getShopTab().click()
    // Parameterize with multiple data set
    this.data.productName.forEach((element) => 
    cy.selectProduct(element))
    // Checkout
    ProdectPage.getCheckout().click()  
})

And('Validate the totol amount',() => {
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
})

Then('select the country, submit and verify the success message',()=>{
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

When('I fill the form details',function(dataTable){
    name = dataTable.rawTable[1][0]
    HomePage.getEditBox().type(dataTable.rawTable[1][0])
    HomePage.getGender().select(dataTable.rawTable[1][1])
})

Then('Validate the form behaviour',function(){
    HomePage.getTwoWayDataBinding().should('have.value', name)
    HomePage.getEditBox().should('have.attr','minlength','2')
    HomePage.getEntrepreneurRadioButton().should('be.disabled')
})

And('Select the shop page',function(){
    HomePage.getShopTab().click()
})