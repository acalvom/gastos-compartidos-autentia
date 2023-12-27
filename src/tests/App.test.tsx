import { screen, render, fireEvent } from '@testing-library/react'
import { expect, test } from 'vitest'
import { App } from '@/App'

test('renders Home component', async () => {
  render(<App />)

  const form = screen.getByTestId('form')
  const count = screen.getByTestId('count')
  const add = screen.getByTestId('add')
  const remove = screen.getByTestId('remove')
  expect(form).toBeInTheDocument()
  expect(count).toBeInTheDocument()
  expect(add).toBeInTheDocument()
  expect(remove).toBeInTheDocument()

  fireEvent.click(add)
  expect(count).toHaveTextContent('1')
  fireEvent.click(remove)
  expect(count).toHaveTextContent('0')
})
