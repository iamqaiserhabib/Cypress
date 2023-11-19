/// <reference types="cypress"/>
describe('My first test suite', function(){
    it('My first test case', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length',4)
        //parent child chaining
        cy.get('.products').as('productlocator')
        cy.get('@productlocator').find('.product').should('have.length',4)

        cy.get('@productlocator').find('.product').eq('2').contains('ADD TO CART').click().then(function(){
            console.log('sf')
        })
        
        cy.get('@productlocator').find('.product').each(($el, index, $list)=> {

            const vegText = $el.find('h4.product-name').text()
            if(vegText.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }
            
    })

    cy.get('.brand').should('have.text','GREENKART')

    cy.get('.brand').then(function(logoelement){
        cy.log(logoelement.text())
    })
})
})