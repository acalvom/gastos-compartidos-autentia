import { Id } from '@/shared/domain/interface/id'

import { User } from '../domain/user'
import { IUserExpensePrimitives, UserBalance } from '../domain/user-balance'
import { UserBalanceRepository } from '../domain/user-balance.repository'
import { expenseToUserExpenseMapper, userBalancesMapper } from './mappers/user-balance.mapper'

// ASKME: Esto no es demsiado iterativo?
type UserTotalExpense = {
  user: User
  totalExpense: number
}

export type IUsersTotalExpense = Record<Id, UserTotalExpense>

export class LocalStorageUserBalanceRepository implements UserBalanceRepository {
  private getUserExpensesFromLocalStorage(): IUserExpensePrimitives[] {
    const expensesString = localStorage.getItem('expenses')
    return expenseToUserExpenseMapper(expensesString)
  }

  private getGlobalExpenseFromLocalStorage(): number {
    const userExpenses = this.getUserExpensesFromLocalStorage()
    return userExpenses.reduce(
      (accExpenseAmount, currExpense) => accExpenseAmount + currExpense.amount,
      0
    )
  }

  private getUsersTotalExpenseFromLocalStorage(): IUsersTotalExpense {
    const userExpenses = this.getUserExpensesFromLocalStorage()
    return userExpenses.reduce((acc: IUsersTotalExpense, userExpense: IUserExpensePrimitives) => {
      if (!acc[userExpense.user.id]) {
        return {
          ...acc,
          [userExpense.user.id]: { user: userExpense.user, totalExpense: userExpense.amount },
        }
      } else {
        return {
          ...acc,
          [userExpense.user.id]: {
            user: acc[userExpense.user.id].user,
            totalExpense: acc[userExpense.user.id].totalExpense + userExpense.amount,
          },
        }
      }
    }, {})
  }

  async getAll(): Promise<UserBalance[]> {
    const usersTotalExpense = this.getUsersTotalExpenseFromLocalStorage()
    const globalExpense = this.getGlobalExpenseFromLocalStorage()
    return userBalancesMapper(usersTotalExpense, globalExpense)
  }
}
