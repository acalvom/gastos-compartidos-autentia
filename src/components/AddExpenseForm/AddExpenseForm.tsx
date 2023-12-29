import { ExpenseForm } from '@/constants/Home'
import { Expense, StoredExpense } from '@/models/Expense'
import { StoredUser } from '@/models/User'
import { ChangeEvent, FormEvent, useState } from 'react'
import { ExpenseFormErrors } from '@/models/Errors'
import './AddExpenseForm.css'

interface AddUserFormProps {
  storedUsers: StoredUser[]
  storedExpenses: StoredExpense[]
  setStoredExpenses: (expenses: StoredExpense[]) => void
}

const initialExpense: Expense = {
  payer: '',
  amount: 0,
  description: '',
  paymentDate: '',
}

const initialError: ExpenseFormErrors = {
  payer: '',
  amount: '',
  description: '',
  paymentDate: '',
}

export const AddExpenseForm = ({
  storedUsers,
  storedExpenses,
  setStoredExpenses,
}: AddUserFormProps) => {
  const [expense, setExpense] = useState<Expense>(initialExpense)
  const [errors, setErrors] = useState<ExpenseFormErrors>(initialError)

  const resetForm = () => setExpense(initialExpense)
  const isValidForm = () => {
    const formErrors: ExpenseFormErrors = {
      payer: !expense.payer ? ExpenseForm.FieldRequired : '',
      amount: !expense.amount ? ExpenseForm.FieldRequired : '',
      description: !expense.description ? ExpenseForm.FieldRequired : '',
      paymentDate: !expense.paymentDate ? ExpenseForm.FieldRequired : '',
    }

    setErrors(formErrors)
    return Object.values(formErrors).every((error) => !error)
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setErrors({ ...errors, [e.target.id]: '' })
    setExpense({ ...expense, [e.target.id]: e.target.value })
  }

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!isValidForm()) return

    setStoredExpenses([...storedExpenses, { ...expense, id: expense.payer + expense.paymentDate }])
    resetForm()
  }

  return (
    <form className="expense-form" onSubmit={handleOnSubmit} data-testid="add-expense-form">
      <div className="input-wrapper">
        <label className="input-label">
          {ExpenseForm.Payer}
          <select
            className="input input-expense"
            value={expense.payer}
            onChange={handleOnChange}
            id="payer"
          >
            <option value="" disabled hidden>
              {ExpenseForm.SelectPayer}
            </option>
            {storedUsers.map(({ id, firstName, lastName }) => (
              <option key={id} value={id}>
                {firstName} {lastName}
              </option>
            ))}
          </select>
          {errors.payer && <span className="error">{errors.payer}</span>}
        </label>

        <label className="input-label">
          {ExpenseForm.Description}
          <input
            className="input input-expense"
            type="text"
            id="description"
            value={expense.description}
            onChange={handleOnChange}
          />
          {errors.description && <span className="error">{errors.description}</span>}
        </label>
      </div>
      <div className="input-wrapper">
        <label className="input-label">
          {ExpenseForm.Amount}
          <input
            className="input input-expense"
            type="number"
            id="amount"
            value={expense.amount}
            onChange={handleOnChange}
          />
          {errors.amount && <span className="error">{errors.amount}</span>}
        </label>

        <label className="input-label">
          {ExpenseForm.PaymentDate}
          <input
            className="input input-expense"
            type="date"
            id="paymentDate"
            placeholder={ExpenseForm.PaymentDate}
            value={expense.paymentDate}
            onChange={handleOnChange}
          />
          {errors.paymentDate && <span className="error">{errors.paymentDate}</span>}
        </label>
      </div>

      <button className="button" type="submit" data-testid="add-expense-button">
        {ExpenseForm.Button}
      </button>
    </form>
  )
}
