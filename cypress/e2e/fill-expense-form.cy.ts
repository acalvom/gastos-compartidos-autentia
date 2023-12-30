import { ExpenseForm } from '../../src/constants/Forms'

describe('"Add expense form" workflow', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('appUrl')}/create`)
  })

  it('Render the empty form', () => {
    cy.getByTestId('add-expense-form').should('exist').and('be.visible')
    cy.getByTestId('payer-input').should('exist').and('be.visible').as('payerInput')
    cy.get('@payerInput').parent().should('contain.text', ExpenseForm.Payer)
    cy.get('@payerInput')
      .children()
      .should('have.text', ExpenseForm.SelectPayer)
      .and('have.value', '')

    cy.getByTestId('description-input').should('exist').and('be.visible').as('descriptionInput')
    cy.get('@descriptionInput')
      .should('be.empty')
      .parent()
      .should('contain.text', ExpenseForm.Description)

    cy.getByTestId('amount-input').should('exist').and('be.visible').as('amountInput')
    cy.get('@amountInput')
      .should('have.value', 0)
      .parent()
      .should('contain.text', ExpenseForm.Amount)

    cy.getByTestId('payment-date-input').should('exist').and('be.visible').as('paymentDateInput')
    cy.get('@paymentDateInput')
      .should('be.empty')
      .parent()
      .should('contain.text', ExpenseForm.PaymentDate)

    cy.getByTestId('add-expense-button').should('exist').and('be.visible').as('addButtonExpense')
    cy.get('@addButtonExpense').should('be.enabled').and('have.text', ExpenseForm.Button)
  })

  it('Fill the form with valid data', () => {
    // Populate with users
    cy.getByTestId('first-name-wrapper').find('input').as('firstNameInput').type('John')
    cy.getByTestId('last-name-wrapper').find('input').as('lastNameInput').type('Doe')
    cy.get('@firstNameInput').and('have.value', 'John')
    cy.get('@lastNameInput').and('have.value', 'Doe')
    cy.getByTestId('add-user-button').click()

    cy.getByTestId('payer-input').as('payerInput').select('JohnDoe')
    cy.getByTestId('description-input').as('descriptionInput').type('Dinner')
    cy.getByTestId('amount-input').as('amountInput').type('7.5')
    cy.getByTestId('payment-date-input').as('paymentDateInput').type('2024-01-01T00:00')

    cy.get('@payerInput').and('contain.text', 'John Doe')
    cy.get('@descriptionInput').and('have.value', 'Dinner')
    cy.get('@amountInput').and('have.value', '07.5')
    cy.get('@paymentDateInput').and('have.value', '2024-01-01T00:00')
    cy.getByTestId('add-expense-button').click()

    cy.get('@payerInput')
      .children()
      .should('contain.text', ExpenseForm.SelectPayer)
      .and('have.value', '')
    cy.get('@descriptionInput').should('be.empty')
    cy.get('@amountInput').should('have.value', 0)
    cy.get('@paymentDateInput').should('be.empty')
  })
})
