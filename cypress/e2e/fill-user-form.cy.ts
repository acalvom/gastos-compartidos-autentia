import { Commons, UserForm } from '../../src/constants/Forms'

describe('"Add user form" workflow', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('appUrl')}`)
  })

  it('Render the empty form', () => {
    cy.getByTestId('add-user-form').should('exist').and('be.visible')
    cy.getByTestId('first-name-wrapper').should('exist').and('be.visible').as('firstNameWrapper')
    cy.get('@firstNameWrapper')
      .find('input')
      .should('be.empty')
      .and('have.attr', 'placeholder', UserForm.Name)
    cy.getByTestId('last-name-wrapper').should('exist').and('be.visible').as('lastNameWrapper')
    cy.get('@lastNameWrapper').find('input').should('be.empty')
    cy.getByTestId('add-user-button').should('exist').and('be.visible').as('addButtonUser')
    cy.get('@addButtonUser').should('be.enabled').and('have.text', UserForm.Button)
  })

  it('Fill the form with valid data', () => {
    cy.getByTestId('first-name-wrapper').find('input').as('firstNameInput').type('John')
    cy.getByTestId('last-name-wrapper').find('input').as('lastNameInput').type('Doe')
    cy.get('@firstNameInput').and('have.value', 'John')
    cy.get('@lastNameInput').and('have.value', 'Doe')
    cy.getByTestId('add-user-button').click()
    cy.get('@firstNameInput').should('be.empty')
    cy.get('@lastNameInput').should('be.empty')
  })

  it('Fill the form with empty field', () => {
    cy.getByTestId('first-name-wrapper').find('input').as('firstNameInput').type('Megan')
    cy.getByTestId('last-name-wrapper').find('input').as('lastNameInput')
    cy.get('@firstNameInput').and('have.value', 'Megan')
    cy.get('@lastNameInput').and('have.value', '')
    cy.getByTestId('add-user-button').click()
    cy.get('@firstNameInput').should('have.value', 'Megan')
    cy.get('@lastNameInput').should('be.empty')
    cy.getByTestId('last-name-wrapper').find('span').should('have.text', Commons.FieldRequired)
  })
})
