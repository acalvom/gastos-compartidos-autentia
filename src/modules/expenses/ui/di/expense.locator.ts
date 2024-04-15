import { AddExpenseCommand } from '../../application/add-expense.command'
import { GetExpensesQuery } from '../../application/get-expenses.query'
import { GetPayersQuery } from '../../application/get-payers.query'
import { LocalStorageExpenseRepository } from '../../infrastructure/local-storage-expense.repository'

export class ExpenseLocator {
  static localStorageExpenseRepository = new LocalStorageExpenseRepository()

  static getExpensesQuery() {
    return new GetExpensesQuery(this.localStorageExpenseRepository)
  }

  static addExpenseCommand() {
    return new AddExpenseCommand(this.localStorageExpenseRepository)
  }

  static getPayersQuery() {
    return new GetPayersQuery(this.localStorageExpenseRepository)
  }
}
