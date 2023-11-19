/// <reference types="cypress"/>
describe('My Second test suite', function(){
    it('My Second test case', function(){
 
        // Handling child windows
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').then(function(el){
            const url = el.prop('href')
            cy.visit(url)
        })
})
})