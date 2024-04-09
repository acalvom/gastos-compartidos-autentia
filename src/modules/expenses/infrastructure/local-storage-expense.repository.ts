import { Expense } from '../domain/expense'
import { ExpenseRepository } from '../domain/expense.repository'

export class LocalStorageExpenseRepository implements ExpenseRepository {
  getAll(): Promise<Expense[]> {
    const storedValue = localStorage.getItem('gastos')
    // TODO: mapper para el JSON.parse
    return storedValue ? JSON.parse(storedValue) : []
  }
}
