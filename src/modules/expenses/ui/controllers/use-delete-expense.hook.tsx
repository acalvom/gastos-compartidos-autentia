import { Id } from '@/shared/domain/interface/id'
import { ExpenseLocator } from '../di/expense.locator'

export function useDeleteExpense() {
  const deleteExpense = (expenseId: Id) => {
    const deleteExpenseCommand = ExpenseLocator.deleteExpenseCommand()
    deleteExpenseCommand.execute(expenseId)
  }

  return { deleteExpense }
}
