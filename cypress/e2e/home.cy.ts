// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  context('mobile viewport test', () => {
    it('visits the app root url', () => {
      cy.viewport('iphone-x')
      cy.visit('/')
      cy.get('.navbar-start').contains('a', 'Modern Vue Dev')
      cy.get('[data-test="nav-menu-mobile"]').click();
      cy.get('[data-test="nav-login-mobile"]').click();
    })
  })
  context('desktop viewport test', () => {
    it('visits the app root url', () => {
      cy.viewport(1280, 720)
      cy.visit('/')
      cy.get('.navbar-start').contains('a', 'Modern Vue Dev')
      cy.get('[data-test="nav-login-std"]').click();
    })
  })
})
