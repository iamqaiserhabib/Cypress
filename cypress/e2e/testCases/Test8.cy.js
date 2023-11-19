/// <reference types="cypress"/>
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('My Second test suite', function(){
    it('My Second test case', function(){
 
        // Handling frames
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="mentorship"]').eq(0).click()
})
})