import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import Header from './Header'

test('renders Header component', () => {
  render(<Header />)

  expect(screen.getByTestId('app-logo')).toBeInTheDocument()
  expect(screen.getByTestId('app-title')).toHaveTextContent('Gestión de gastos')
})
