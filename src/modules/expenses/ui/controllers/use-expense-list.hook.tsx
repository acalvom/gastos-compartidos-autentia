import { Expense } from '@/modules/expenses/domain/expense'
import { ExpenseLocator } from '@/modules/expenses/ui/di/expense.locator'
import { useEffect, useState } from 'react'

export function useExpenseList() {
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [update, setUpdate] = useState<boolean>(true)

  const getExpenses = async () => {
    const getExpensesQuery = ExpenseLocator.getExpensesQuery()
    const expenses = await getExpensesQuery.execute()
    setExpenses(expenses)
    setUpdate(false)
  }

  useEffect(() => {
    update && getExpenses()
  }, [update])

  return { expenses, update: setUpdate }
}
