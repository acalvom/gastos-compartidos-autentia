import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { AddExpenseForm, AddExpenseFormProps } from './AddExpenseForm'
import { ExpenseForm } from '@/constants/Forms'

test('renders AddUserForm component', async () => {
  const initalForm: AddExpenseFormProps = {
    storedUsers: [],
    storedExpenses: [],
    setStoredExpenses: () => {},
  }

  render(
    <AddExpenseForm
      storedUsers={initalForm.storedUsers}
      storedExpenses={initalForm.storedExpenses}
      setStoredExpenses={initalForm.setStoredExpenses}
    />
  )

  expect(screen.getByTestId('add-expense-form')).toBeInTheDocument()
  const descriptionInput = screen.getByTestId('description-input')
  expect(descriptionInput).toBeInTheDocument()
  expect(descriptionInput).toHaveAttribute('type', 'text')
  expect(descriptionInput).toHaveValue('')

  const amountInput = screen.getByTestId('amount-input')
  expect(amountInput).toBeInTheDocument()
  expect(amountInput).toHaveAttribute('type', 'number')
  expect(amountInput).toHaveValue(0)

  const addUserButton = screen.getByTestId('add-expense-button')
  expect(addUserButton).toBeInTheDocument()
  expect(addUserButton).toHaveClass('button')
  expect(addUserButton).toHaveAttribute('type', 'submit')
  expect(addUserButton).toHaveTextContent(ExpenseForm.Button)
})
