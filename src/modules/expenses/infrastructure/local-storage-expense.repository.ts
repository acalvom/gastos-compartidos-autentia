import { Expense } from '../domain/expense'
import { ExpenseRepository } from '../domain/expense.repository'
import { NewExpense } from '../domain/new-expense'
import { Payer } from '../domain/payer'
import {
  expensesFromLocalStorage,
  expensesToLocalStorage,
  newExpenseToExpenseMapper,
} from './mappers/expenses.mapper'
import { payersFromLocalStorage } from './mappers/payers.mapper'

export class LocalStorageExpenseRepository implements ExpenseRepository {
  private getExpensesFromLocalStorage(): Expense[] {
    const expensesString = localStorage.getItem('expenses')
    return expensesFromLocalStorage(expensesString)
  }

  private saveExpensesToLocalStorage(expenses: Expense[]): void {
    const expensesString = expensesToLocalStorage(expenses)
    localStorage.setItem('expenses', expensesString)
  }

  private getExpensePayerFromLocalStorage(payerId: string): Payer {
    const usersString = localStorage.getItem('users')
    const payers = payersFromLocalStorage(usersString).find(({ id }) => id === payerId)
    return payers ? payers : { id: '', fullName: '' }
  }

  async getAll(): Promise<Expense[]> {
    return this.getExpensesFromLocalStorage()
  }

  async addExpense(newExpense: NewExpense): Promise<void> {
    const expenses = this.getExpensesFromLocalStorage()
    const payer = this.getExpensePayerFromLocalStorage(newExpense.payerId)
    const expense = newExpenseToExpenseMapper(newExpense, payer)
    this.saveExpensesToLocalStorage([...expenses, expense])
  }

  async getPayers(): Promise<Payer[]> {
    const usersString = localStorage.getItem('users')
    return payersFromLocalStorage(usersString)
  }

  async deleteExpense(expenseId: string): Promise<void> {
    const expenses = this.getExpensesFromLocalStorage()
    const updatedExpenses = expenses.filter(({ id }) => id !== expenseId)
    this.saveExpensesToLocalStorage(updatedExpenses)
  }
}
