import { Expense, IExpensePrimitives } from '../domain/expense'
import { ExpenseRepository } from '../domain/expense.repository'
import { NewExpense } from '../domain/new-expense'
import { Payer } from '../domain/payer'
import { expensesFromLocalStorage, expensesToLocalStorage } from './mappers/expenses.mapper'
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

    // TODO: add a mapper
    const jsonExpense: IExpensePrimitives = {
      id: newExpense.payerId + newExpense.paymentDate,
      payer: this.getExpensePayerFromLocalStorage(newExpense.payerId),
      description: newExpense.description,
      amount: newExpense.amount,
      paymentDate: newExpense.paymentDate,
    }

    this.saveExpensesToLocalStorage([...expenses, Expense.fromJson(jsonExpense)])
  }

  async getPayers(): Promise<Payer[]> {
    const usersString = localStorage.getItem('users')
    return payersFromLocalStorage(usersString)
  }
}
