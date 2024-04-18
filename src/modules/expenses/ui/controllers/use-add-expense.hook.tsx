import { NewExpense } from '../../domain/new-expense'
import { ExpenseLocator } from '../di/expense.locator'

export function useAddExpense() {
  const addExpense = (newExpense: NewExpense) => {
    const addExpenseCommand = ExpenseLocator.addExpenseCommand()
    addExpenseCommand.execute(newExpense)
  }

  return { addExpense }
}
