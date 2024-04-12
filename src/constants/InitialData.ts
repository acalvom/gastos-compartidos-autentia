import { Expense, ExpenseFormErrors, UserFormErrors } from '@/models'
import { NewUser } from '@/modules/users/domain/new-user'

export const initalUser: NewUser = {
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
