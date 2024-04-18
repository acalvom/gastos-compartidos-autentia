import money from '@/assets/money.png'
import ticket from '@/assets/ticket.png'
import { Expense } from '@/modules/expenses/domain/expense'
import './expense-card.styles.css'

interface ExpenseCardProps {
  expense: Expense
  handleDelete: () => void
}

export const ExpenseCard = ({ expense, handleDelete }: ExpenseCardProps) => {
  // INFO: al destructurar objetos pierdes el contexto del this y por lo tanto dejas de poder utilizar los métodos de la clase Expense
  // TODO: overkilling llamar al useExpensePayer desde aquí. Cambia la entidad Expense para que reciba un Payer en lugar de un payer Id
  // const { payer } = useExpensePayer(expense.payerId)

  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-field card-title" data-testid="card-title">
          <img src={ticket} alt="Person" width="36" height="36" />
          {expense.description}
        </div>
        <button className="card-button" data-testid="card-button" onClick={handleDelete}>
          ❌
        </button>
      </div>
      <div className="card-body">
        <div className="card-field card-subtitle" data-testid="card-payer">
          {expense.payer.fullName}
        </div>
        <div className="card-field" data-testid="card-amount">
          {expense.getAmountFormatted()}
          <img src={money} alt="Person" width="32" height="32" />
        </div>
      </div>
      <div className="card-field card-footer" data-testid="card-date">
        {expense.getPaymentDateFormatted()}
      </div>
    </div>
  )
}
