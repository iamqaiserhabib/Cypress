/// <reference types="cypress"/>
describe('My Second test suite', function(){
    it('My Second test case', function(){
 
        // Alerts
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")     
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        // Window Alert
        cy.on('window:alert', (str)=>{
            // Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        // Window confirm
        cy.on('window:confirm', (str)=>{
            // Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        // Switching to new tab
        // cy.get('#opentab').invoke('removeAttr', 'target').click()
        
        // Verifying the url
        // cy.url().should('include', 'qaclickacademy')

        // Navigating backward
        // cy.go('back')
})
})