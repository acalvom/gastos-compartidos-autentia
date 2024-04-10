import { Expense, ExpenseFormErrors, UserFormErrors } from '@/models'
import { AddUserDto } from '@/modules/users/application/dtos/add-user.dto'

export const initalUser: AddUserDto = {
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
