import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

import { AddUserForm } from '@/components/AddUserForm'
import { UserForm } from '@/constants/Home'

test('renders AddUserForm component', async () => {
  render(<AddUserForm />)

  expect(screen.getByTestId('add-user-form')).toBeInTheDocument()
  const firstNameInput = screen.getByTestId('first-name-wrapper').firstChild
  expect(firstNameInput).toBeInTheDocument()
  expect(firstNameInput).toHaveClass('input')
  expect(firstNameInput).toHaveAttribute('type', 'text')
  expect(firstNameInput).toHaveAttribute('placeholder', UserForm.Name)
  expect(firstNameInput).toHaveValue('')

  const lastNameInput= screen.getByTestId('last-name-wrapper').firstChild
  expect(lastNameInput).toBeInTheDocument()
  expect(lastNameInput).toHaveClass('input')
  expect(lastNameInput).toHaveAttribute('type', 'text')
  expect(lastNameInput).toHaveAttribute('placeholder', UserForm.LastName)
  expect(lastNameInput).toHaveValue('')

  const addUserButton = screen.getByTestId('add-user-button')
  expect(addUserButton).toBeInTheDocument()
  expect(addUserButton).toHaveClass('button')
  expect(addUserButton).toHaveAttribute('type', 'submit')
  expect(addUserButton).toHaveTextContent(UserForm.Button)
})
