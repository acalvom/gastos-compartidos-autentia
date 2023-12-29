import { Expense, ExpenseFormErrors, User, UserFormErrors } from '@/models'

export const initalUser: User = {
  firstName: '',
  lastName: '',
}

export const initalUserError: UserFormErrors = {
  firstName: '',
  lastName: '',
}

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
