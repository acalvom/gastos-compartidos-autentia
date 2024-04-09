import { Expense } from '@/modules/expenses/domain/expense'
import { useEffect, useState } from 'react'
import { ExpenseLocator } from '../../di/expense.locator'

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
