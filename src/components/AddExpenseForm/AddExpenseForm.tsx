import { ExpenseForm } from '@/constants/Home'
import { Expense } from '@/models/Expense'
import { StoredUser } from '@/models/User'
import { ChangeEvent, useState } from 'react'

interface AddUserFormProps {
  storedUsers: StoredUser[]
}

import './AddExpenseForm.css'
const initialExpense: Expense = {
  payer: { id: '', firstName: '', lastName: '' },
  amount: 0,
  description: '',
  paymentDate: '',
}

export const AddExpenseForm = ({ storedUsers }: AddUserFormProps) => {
  //   const [errors, setErrors] = useState<Expense>(initialExpense)
  const [expense, setExpense] = useState<Expense>(initialExpense)

  const handleOnSubmit = () => {
    console.log('handleOnSubmit')
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    // setErrors({ ...errors, [e.target.id]: '' })
    setExpense({ ...expense, [e.target.id]: e.target.value })
    console.log(expense)
  }

  return (
    <form className="expense-form" onSubmit={handleOnSubmit} data-testid="add-expense-form">
      <div className="input-wrapper">
        <label className="input-label">
          {ExpenseForm.Payer}
          <select
            className="input input-expense"
            value={expense.payer.firstName}
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
        </label>
      </div>

      <button className="button" type="submit" data-testid="add-expense-button">
        {ExpenseForm.Button}
      </button>
    </form>
  )
}
