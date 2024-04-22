import { UserBalance } from '../../domain/user-balance'
import { UserTotalExpense, UsersTotalExpense } from '../local-storage-user-balance.repository'

export function usersTotalExpenseToUserBalanceMapper(
  usersTotalExpense: UsersTotalExpense
): UserBalance[] {
  const usersTotalExpenseArray = Object.values(usersTotalExpense)
  const globalDebt = usersTotalExpenseArray.reduce(
    (accDebt, currExpense) => accDebt + currExpense.totalExpense,
    0
  )
  const userDebt = globalDebt / usersTotalExpenseArray.length

  return usersTotalExpenseArray.map((item: UserTotalExpense) =>
    UserBalance.fromJson({
      user: item.user,
      debtAmount: item.totalExpense - userDebt,
    })
  )
}
