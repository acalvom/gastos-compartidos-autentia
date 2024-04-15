import { Expense } from '@/modules/expenses/domain/expense'
import { ExpenseLocator } from '@/modules/expenses/ui/di/expense.locator'
import { useEffect, useState } from 'react'

export function useExpenseList() {
  const [expenses, setExpenses] = useState<Expense[]>([])

  const getExpenses = async () => {
    const getExpensesQuery = ExpenseLocator.getExpensesQuery()
    const expenses = await getExpensesQuery.execute()
    setExpenses(expenses)
  }

  useEffect(() => {
    getExpenses()
  }, [])

  return { expenses }
}
