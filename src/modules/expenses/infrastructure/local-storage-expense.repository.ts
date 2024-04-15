import { Expense } from '../domain/expense'
import { ExpenseRepository } from '../domain/expense.repository'
import { NewExpense } from '../domain/new-expense'
import { Payer } from '../domain/payer'
import { expensesFromLocalStorage } from './mappers/expenses.mapper'
import { payersFromLocalStorage } from './mappers/payers.mapper'

export class LocalStorageExpenseRepository implements ExpenseRepository {
  private getExpensesFromLocalStorage(): Expense[] {
    const expensesString = localStorage.getItem('expenses')
    return expensesFromLocalStorage(expensesString)
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

  async getPayers(): Promise<Payer[]> {
    const usersString = localStorage.getItem('users')
    return payersFromLocalStorage(usersString)
  }
}
