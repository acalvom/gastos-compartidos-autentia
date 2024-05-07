import close from '@/assets/close.svg'
import { Expense } from '@/modules/expenses/domain/expense'
import './expense-card.styles.css'

interface ExpenseCardProps {
  expense: Expense
  handleDelete: () => void
}

export const ExpenseCard = ({ expense, handleDelete }: ExpenseCardProps) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-field card-title" data-testid="card-title">
          {expense.description}
        </div>
        <button className="card-button" data-testid="card-button" onClick={handleDelete}>
          <img src={close} alt="Remove expense" />
        </button>
      </div>
      <div className="card-body">
        <div className="card-field card-subtitle" data-testid="card-payer">
          Pagado por: {expense.payer.fullName}
        </div>
        <div className="card-field" data-testid="card-amount">
          {expense.getAmountFormatted()}
        </div>
      </div>
      <div className="card-field card-footer" data-testid="card-date">
        {expense.getPaymentDateFormatted()}
      </div>
    </div>
  )
}
