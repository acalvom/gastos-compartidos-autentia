import { Expense, ExpenseFormErrors } from '@/models'

export const initialExpense: Expense = {
  payer: '',
  amount: 0,
  description: '',
  paymentDate: '',
}

export const initialExpenseError: ExpenseFormErrors = {
  payer: '',
  amount: '',
  description: '',
  paymentDate: '',
}
