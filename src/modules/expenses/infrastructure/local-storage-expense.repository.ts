import { Expense } from '../domain/expense'
import { ExpenseRepository } from '../domain/expense.repository'
import { NewExpense } from '../domain/new-expense'

export class LocalStorageExpenseRepository implements ExpenseRepository {
  private getExpensesFromLocalStorage(): Expense[] {
    const expensesString = localStorage.getItem('expenses')
    // TODO: mapper para el JSON.parse
    return expensesString ? JSON.parse(expensesString) : []
  }

  private saveExpensesToLocalStorage(expenses: Expense[]): void {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }

  async getAll(): Promise<Expense[]> {
    return this.getExpensesFromLocalStorage()
  }

  async addExpense(expense: NewExpense): Promise<void> {
    const expenses = this.getExpensesFromLocalStorage()
    const newExpense = { ...expense, id: expense.payer + expense.paymentDate }
    this.saveExpensesToLocalStorage([...expenses, newExpense])
  }
}
