// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'You did it!')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[href="/about"]').click();
    cy.contains('h1', 'This is an about page')
    /* ==== End Cypress Studio ==== */
  })
})
