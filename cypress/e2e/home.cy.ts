// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Modern Vue Dev')
    cy.get('[href="/about"]').click();
    cy.contains('h1', 'This is an about page')
    cy.get('[href="/login"]').click();
    cy.get('#app > :nth-child(2) > div > h1').click();
    cy.contains('h1', 'Sign In/Up')
  })
})
