/// <reference types="cypress"/>
describe('My Second test suite', function(){
    it('My Second test case', function(){
 
        // Handling mouse hover pop ups
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')
})
})