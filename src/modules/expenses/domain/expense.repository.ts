import { Expense } from './expense'
import { NewExpense } from './new-expense'

export interface ExpenseRepository {
  getAll(): Promise<Expense[]>
  addExpense(newExpense: NewExpense): Promise<void>
}
