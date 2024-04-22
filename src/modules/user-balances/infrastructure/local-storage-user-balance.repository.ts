import { Id } from '@/shared/domain/interface/id'

import { User } from '../domain/user'
import { UserBalance } from '../domain/user-balance'
import { UserBalanceRepository } from '../domain/user-balance.repository'
import { usersTotalExpenseToUserBalanceMapper } from './mappers/user-balance.mapper'

interface IExpensePrimitives {
  id: Id
  payer: User
  description: string
  amount: number
  paymentDate: string
}

export type UserTotalExpense = {
  user: User
  totalExpense: number
}
export type UsersTotalExpense = Record<Id, UserTotalExpense>

export class LocalStorageUserBalanceRepository implements UserBalanceRepository {
  private getExpensesFromLocalStorage(): IExpensePrimitives[] {
    const expensesString = localStorage.getItem('expenses')
    return expensesString ? JSON.parse(expensesString) : []
  }

  private getUsersTotalExpenseFromLocalStorage(): UsersTotalExpense {
    const jsonExpenses = this.getExpensesFromLocalStorage()
    return jsonExpenses.reduce((acc: UsersTotalExpense, jsonExpense: IExpensePrimitives) => {
      if (!acc[jsonExpense.payer.id]) {
        return {
          ...acc,
          [jsonExpense.payer.id]: { user: jsonExpense.payer, totalExpense: jsonExpense.amount },
        }
      } else {
        return {
          ...acc,
          [jsonExpense.payer.id]: {
            user: acc[jsonExpense.payer.id].user,
            totalExpense: acc[jsonExpense.payer.id].totalExpense + jsonExpense.amount,
          },
        }
      }
    }, {})
  }

  async getAll(): Promise<UserBalance[]> {
    const usersTotalExpense = this.getUsersTotalExpenseFromLocalStorage()
    return usersTotalExpenseToUserBalanceMapper(usersTotalExpense)
  }
}
