/// < reference types="cypress" />

describe('My first test', function (){

    it('Navigate to cypress io page', function (){
        cy.visit(`https://example.cypress.io`)
        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')
        cy.get('#email1').type('akhi@gmail.com').should('have.value','akhi@gmail.com')

    })

    it('Navigate to orangehrmlive page', function (){
        cy.visit(`https://opensource-demo.orangehrmlive.com/`)
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('input[name="Submit"]').click()
        cy.url().should('include', '/dashboard')
        cy.get(':nth-child(2) > .quickLaunge > a > .quickLinkText').click()
        cy.url().should('include', '/leave/viewLeaveList')
        cy.get('#leaveList_chkSearchFilter_1').click()
        cy.get('#leaveList_chkSearchFilter_-1').click()
        cy.get('#leaveList_txtEmployee_empName').type('Sara Tencrady')
        cy.get('#btnSearch').click()
        cy.get('a').should('contain', 'Sara Tencrady')

    })
})
