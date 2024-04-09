import { GetExpensesQuery } from '../../application/get-expenses.query'
import { LocalStorageExpenseRepository } from '../../infrastructure/local-storage-expense.repository'

export class ExpenseLocator {
  static localStorageExpenseRepository = new LocalStorageExpenseRepository()

  static getExpensesQuery() {
    return new GetExpensesQuery(this.localStorageExpenseRepository)
  }
}
