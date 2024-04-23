import { Id } from '@/shared/domain/interface/id'
import { Expense } from './expense'
import { NewExpense } from './new-expense'
import { Payer } from './payer'

export interface ExpenseRepository {
  getAll(): Promise<Expense[]>
  addExpense(newExpense: NewExpense): Promise<void>
  getPayers(): Promise<Payer[]>
  deleteExpense(expenseId: Id): Promise<void>
}
