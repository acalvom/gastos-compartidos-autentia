import { StoredExpense } from '@/models'

export const sortExpenses = (expenses: StoredExpense[]) => {
  const compareDates = (a: StoredExpense, b: StoredExpense) =>
    new Date(b.paymentDate).getTime() - new Date(a.paymentDate).getTime()

  return [...expenses].sort(compareDates)
}
