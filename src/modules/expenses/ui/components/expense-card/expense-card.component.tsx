import money from '@/assets/money.png'
import ticket from '@/assets/ticket.png'
import { Expense } from '@/modules/expenses/domain/expense'
import { useExpensePayer } from '../../controllers/use-expense-payer.hook'
import './expense-card.styles.css'

interface ExpenseCardProps {
  expense: Expense
  handleDelete: () => void
}

export const ExpenseCard = ({ expense, handleDelete }: ExpenseCardProps) => {
  // FIXME: {`€${amount}`}. A través de un método de la clase Expense, recibes un string con la cantidad en el formato que esperas
  // INFO: al destructurar objetos pierdes el contexto del this y por lo tanto dejas de poder utilizar los métodos de la clase Expense
  const { payerId, description, amount } = expense
  const date = expense.getPaymentDateFormatted()

  // TODO: overkilling llamar al useExpensePayer desde aquí. Cambia la entidad Expense para que reciba un Payer en lugar de un payer Id
  const { payer } = useExpensePayer(payerId)

  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-field card-title" data-testid="card-title">
          <img src={ticket} alt="Person" width="36" height="36" />
          {description}
        </div>
        <button className="card-button" data-testid="card-button" onClick={handleDelete}>
          ❌
        </button>
      </div>
      <div className="card-body">
        <div className="card-field card-subtitle" data-testid="card-payer">
          {payer.fullName}
        </div>
        <div className="card-field" data-testid="card-amount">
          {`€${amount}`}
          <img src={money} alt="Person" width="32" height="32" />
        </div>
      </div>
      <div className="card-field card-footer" data-testid="card-date">
        {date}
      </div>
    </div>
  )
}
