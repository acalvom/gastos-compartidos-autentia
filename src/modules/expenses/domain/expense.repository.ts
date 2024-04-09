import { Expense } from './expense'

export interface ExpenseRepository {
  getAll(): Promise<Expense[]>
}
