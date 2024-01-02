import { ChangeEvent, FormEvent, useState } from 'react'
import { Commons, ExpenseForm, initialExpense, initialExpenseError } from '@/constants'
import { ExpenseFormErrors, Expense, StoredExpense, StoredUser } from '@/models'
import './AddExpenseForm.css'

export interface AddExpenseFormProps {
  storedUsers: StoredUser[]
  storedExpenses: StoredExpense[]
  setStoredExpenses: (expenses: StoredExpense[]) => void
}

export const AddExpenseForm = ({
  storedUsers,
  storedExpenses,
  setStoredExpenses,
}: AddExpenseFormProps) => {
  const [expense, setExpense] = useState<Expense>(initialExpense)
  const [errors, setErrors] = useState<ExpenseFormErrors>(initialExpenseError)
  const [isDisabled, setIsDisabled] = useState<boolean>(true)

  const resetForm = () => setExpense(initialExpense)
  const isValidForm = () => {
    const formErrors: ExpenseFormErrors = {
      payer: !expense.payer ? Commons.FieldRequired : '',
      amount: !expense.amount ? Commons.FieldRequired : '',
      description: !expense.description ? Commons.FieldRequired : '',
      paymentDate: !expense.paymentDate ? Commons.FieldRequired : '',
    }

    setErrors(formErrors)
    return Object.values(formErrors).every((error) => !error)
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setErrors({ ...errors, [e.target.id]: '' })
    setIsDisabled(false)
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
      <div className="input-grid-wrapper">
        <label className="input-label">
          {ExpenseForm.Payer}
          <select
            className="input input-expense"
            value={expense.payer}
            onChange={handleOnChange}
            id="payer"
            data-testid="payer-input"
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
            data-testid="description-input"
          />
          {errors.description && <span className="error">{errors.description}</span>}
        </label>
      </div>

      <div className="input-grid-wrapper">
        <label className="input-label">
          {ExpenseForm.Amount}
          <input
            className="input input-expense"
            type="number"
            id="amount"
            value={expense.amount}
            onChange={handleOnChange}
            data-testid="amount-input"
          />
          {errors.amount && <span className="error">{errors.amount}</span>}
        </label>

        <label className="input-label">
          {ExpenseForm.PaymentDate}
          <input
            className="input input-expense"
            type="datetime-local"
            id="paymentDate"
            placeholder={ExpenseForm.PaymentDate}
            value={expense.paymentDate}
            onChange={handleOnChange}
            data-testid="payment-date-input"
          />
          {errors.paymentDate && <span className="error">{errors.paymentDate}</span>}
        </label>
      </div>

      <button
        className="button"
        type="submit"
        data-testid="add-expense-button"
        disabled={isDisabled}
      >
        {ExpenseForm.Button}
      </button>
    </form>
  )
}
