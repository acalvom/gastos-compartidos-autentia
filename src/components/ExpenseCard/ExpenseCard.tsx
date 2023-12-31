import money from '@/assets/money.png'
import ticket from '@/assets/ticket.png'
import useLocalStorage from '@/hooks/useLocalStorage'
import { StoredExpense, StoredUser, User } from '@/models'
import { dateFormatter } from '@/utils/dateFormatter'
import './ExpenseCard.css'

interface ExpenseCardProps {
  expense: StoredExpense
}

export const ExpenseCard = ({ expense }: ExpenseCardProps) => {
  const { payer, description, amount, paymentDate } = expense
  const [storedUsers] = useLocalStorage<StoredUser[]>('amigos', [])
  const { firstName, lastName } = storedUsers.find(({ id }) => id === payer) || ({} as User)

  return (
    <div className="card-container">
      <div className="card-field card-title">
        <img src={ticket} alt="Person" width="36" height="36" />
        {description}
      </div>
      <div className="card-body">
        <div className="card-field card-subtitle">{`${firstName} ${lastName}`}</div>
        <div className="card-field">
          {`€${amount}`}
          <img src={money} alt="Person" width="32" height="32" />
        </div>
      </div>
      <div className="card-field card-footer">{dateFormatter(paymentDate)}</div>
    </div>
  )
}
