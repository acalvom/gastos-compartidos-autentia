import money from '@/assets/money.png'
import ticket from '@/assets/ticket.png'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Expense } from '@/modules/expenses/domain/expense'
import { User } from '@/modules/users/domain/user'
import { dateFormatter } from '@/utils'
import './ExpenseCard.css'

interface ExpenseCardProps {
  expense: Expense
  handleDelete: () => void
}

export const ExpenseCard = ({ expense, handleDelete }: ExpenseCardProps) => {
  const { payer, description, amount, paymentDate } = expense
  // FIXME: desacoplar los usuarios de este componente. Este componente 'tonto' no debería tener que hacer la lógica de buscar usuarios en la infra
  // FIXME: este componente, al ser tan específico debería ubicarse en el directorio modules/expenses/components/...
  const [storedUsers] = useLocalStorage<User[]>('users', [])
  const { firstName, lastName } = storedUsers.find(({ id }) => id === payer) || ({} as User)

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
        <div
          className="card-field card-subtitle"
          data-testid="card-payer"
        >{`${firstName} ${lastName}`}</div>
        <div className="card-field" data-testid="card-amount">
          {`€${amount}`}
          <img src={money} alt="Person" width="32" height="32" />
        </div>
      </div>
      <div className="card-field card-footer" data-testid="card-date">
        {dateFormatter(paymentDate)}
      </div>
    </div>
  )
}
