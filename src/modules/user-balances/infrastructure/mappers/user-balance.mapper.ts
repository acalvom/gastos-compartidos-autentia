import { Id } from '@/shared/domain/interface/id'
import { User } from '../../domain/user'
import { IUserExpensePrimitives, UserBalance } from '../../domain/user-balance'
import { IUsersTotalExpense } from '../local-storage-user-balance.repository'

// ASKME: es correcto el uso de IExpensePrimitives aquí?
interface IExpensePrimitives {
  id: Id
  payer: User
  description: string
  amount: number
  paymentDate: string
}

export function expenseToUserExpenseMapper(
  expensesString: string | null
): IUserExpensePrimitives[] {
  const jsonExpenses: IExpensePrimitives[] = expensesString ? JSON.parse(expensesString) : []
  return jsonExpenses.map((expense: IExpensePrimitives) => ({
    user: expense.payer,
    amount: expense.amount,
  }))
}

export function userBalancesMapper(
  usersTotalExpense: IUsersTotalExpense,
  globalExpense: number
): UserBalance[] {
  const usersTotalExpenseArray = Object.values(usersTotalExpense)
  return usersTotalExpenseArray.map((item) =>
    UserBalance.fromJson({
      user: item.user,
      totalUserExpense: item.totalExpense,
      totalUsers: usersTotalExpenseArray.length,
      globalExpense,
    })
  )
}
