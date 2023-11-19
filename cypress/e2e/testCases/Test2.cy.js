/// <reference types="cypress"/>
describe('My Second test suite', function(){
    it('My Second test case', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        
        //parent child chaining
        cy.get('.products').as('productlocator')
        cy.get('@productlocator').find('.product').each(($el, index, $list)=> {
            const vegText = $el.find('h4.product-name').text()
            if(vegText.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
    })

    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
    
})
})