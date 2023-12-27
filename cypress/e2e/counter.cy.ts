/// <reference types="cypress" />

describe('Counter test', () => {
  beforeEach(() => {
    cy.visit(`  ${Cypress.env('appUrl')}/`)
  })

  it('Test counter', () => {
    cy.getByTestId('count').should('be.visible').and('contain', '0')
    cy.getByTestId('increment').should('be.visible').and('contain', 'Increment').click()
    cy.getByTestId('count').should('be.visible').and('contain', '1')
    cy.getByTestId('decrement').should('be.visible').and('contain', 'Decrement').click()
    cy.getByTestId('count').should('be.visible').and('contain', '0')
  })
})
