import { NewExpense } from '@/modules/expenses/domain/new-expense'
import { Common } from '@/shared/ui/texts/common-texts'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useAddExpense } from '../../controllers/use-add-expense.hook'
import { usePayerList } from '../../controllers/use-payer-list.hook'
import './add-expense-form.styles.css'
import { ExpenseForm, InitialExpense } from './add-expense.constants'

interface ExpenseFormErrors {
  errorPayerInput: string
  errorAmountInput: string
  errorDescriptionInput: string
  errorPaymentDateInput: string
}

export const AddExpenseForm = () => {
  const { addExpense } = useAddExpense()
  const { payers } = usePayerList()
  const [expense, setExpense] = useState<NewExpense>(InitialExpense)
  const [errors, setErrors] = useState<ExpenseFormErrors>({
    errorPayerInput: '',
    errorAmountInput: '',
    errorDescriptionInput: '',
    errorPaymentDateInput: '',
  })
  const [isDisabled, setIsDisabled] = useState<boolean>(true)

  const resetForm = () => setExpense(InitialExpense)
  const isValidForm = () => {
    const formErrors: ExpenseFormErrors = {
      errorPayerInput: !expense.payerId ? Common.FieldRequired : '',
      errorAmountInput: !expense.amount ? Common.FieldRequired : '',
      errorDescriptionInput: !expense.description ? Common.FieldRequired : '',
      errorPaymentDateInput: !expense.paymentDate ? Common.FieldRequired : '',
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

    addExpense(expense)
    resetForm()
  }

  return (
    <form className="expense-form" onSubmit={handleOnSubmit} data-testid="add-expense-form">
      <div className="input-grid-wrapper">
        <label className="input-label">
          {ExpenseForm.Payer}
          <select
            className="input input-expense"
            value={expense.payerId}
            onChange={handleOnChange}
            id="payerId"
            data-testid="payer-input"
          >
            <option value="" disabled hidden>
              {ExpenseForm.SelectPayer}
            </option>
            {payers.map(({ id, fullName }) => (
              <option key={id} value={id}>
                {fullName}
              </option>
            ))}
          </select>
          {errors.errorPayerInput && <span className="error">{errors.errorPayerInput}</span>}
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
          {errors.errorDescriptionInput && (
            <span className="error">{errors.errorDescriptionInput}</span>
          )}
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
          {errors.errorAmountInput && <span className="error">{errors.errorAmountInput}</span>}
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
          {errors.errorPaymentDateInput && (
            <span className="error">{errors.errorPaymentDateInput}</span>
          )}
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
