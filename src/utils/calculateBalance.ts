import { Balances, StoredExpense, StoredUser } from '@/models'

export const calculateBalance = (expenses: StoredExpense[], users: StoredUser[]): Balances => {
  const total = expenses.reduce((acc: number, expense) => acc + Number(expense.amount), 0)
  const userInExpenses = [...new Set(expenses.map((expense) => expense.payer))]
  const debtPerUser = total / userInExpenses.length

  return expenses.reduce((acc: Balances, expense: StoredExpense) => {
    const { payer: payerId, amount } = expense

    if (!acc[payerId]) {
      acc[payerId] = {
        payer: users.find((user) => user.id === payerId) as StoredUser,
        paid: Number(amount),
        accDebt: Number(amount) - debtPerUser,
      }
    } else {
      acc[payerId].paid += Number(amount)
      acc[payerId].accDebt = acc[payerId].paid - debtPerUser
    }

    return acc
  }, {})
}
