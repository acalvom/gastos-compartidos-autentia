import { dateFormatter } from '../../src/utils/dateFormatter'

describe('List expenses workflow', () => {
  const setup = () => {
    const initalUsers = [
      {
        firstName: 'Laura',
        lastName: 'Gallego',
        id: 'LauraGallego',
      },
      {
        firstName: 'Marcos',
        lastName: 'Jiménez',
        id: 'MarcosJiménez',
      },
    ]

    const initalExpenses = [
      {
        payer: 'LauraGallego',
        amount: '74',
        description: 'Vermú mañana domingo',
        paymentDate: '2023-12-24T13:40',
        id: 'LauraGallego2023-12-24T13:40',
      },
      {
        payer: 'MarcosJiménez',
        amount: '125',
        description: 'Tapas ',
        paymentDate: '2023-12-25T18:34',
        id: 'MarcosJiménez2023-12-25T18:34',
      },
      {
        payer: 'LauraGallego',
        amount: '15',
        description: 'Tarta',
        paymentDate: '2024-01-05T16:12',
        id: 'LuisLopez2024-01-05T16:12',
      },
    ]
    localStorage.setItem('gastos', JSON.stringify(initalExpenses))
    localStorage.setItem('amigos', JSON.stringify(initalUsers))
    return { initalExpenses, initalUsers }
  }

  beforeEach(() => {
    cy.visit(`${Cypress.env('appUrl')}`)
  })

  it('Render Home page with no expenses', () => {
    cy.getByTestId('add-home-button').should('exist').and('be.visible')
    cy.getByTestId('expenses-list').should('exist').and('not.be.visible')
  })

  it('Render Home page with some expenses', () => {
    const { initalExpenses } = setup()

    cy.getByTestId('expenses-list').should('exist').and('be.visible').as('expensesList')
    cy.get('@expensesList').children().should('have.length', 3)
    cy.get('@expensesList')
      .children()
      .each((_, index) => {
        cy.getByTestId('card-title').should('contain.text', initalExpenses[index].description)
        cy.getByTestId('card-amount').should('contain.text', initalExpenses[index].amount)
        cy.getByTestId('card-date').should(
          'contain.text',
          dateFormatter(initalExpenses[index].paymentDate)
        )
      })
  })
})
