import { Link } from 'react-router-dom'
import { Layout } from '@/layout/Layout'
import { AddItem } from '@/constants'
import { sortExpenses, calculateBalance } from '@/utils'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { StoredExpense, StoredUser } from '@/models'
import { ExpenseCard } from '@/components/ExpenseCard/ExpenseCard'
import './Home.css'

export const Home = () => {
  const [storedExpenses] = useLocalStorage<StoredExpense[]>('gastos', [])
  const [storedUsers] = useLocalStorage<StoredUser[]>('amigos', [])

  const sortedExpenses = sortExpenses(storedExpenses)
  const balance = calculateBalance(storedExpenses, storedUsers)

  // TODO - split into components home-balance and home-expenses-list
  return (
    <Layout>
      <div className="home-button" data-testid="add-home-button">
        <Link to="/create" className="button">
          {AddItem}
        </Link>
      </div>

      {/* // TODO - Wip */}
      <div className="home-balance" data-testid="balance">
        <ul>
          {Object.values(balance).map((balance) => (
            <li key={balance.payer.id}>
              <span>
                {balance.payer.firstName} {balance.payer.lastName}
              </span>{' '}
              <span>Pagó {balance.paid}</span> <span>Debe {balance.accDebt}</span>{' '}
            </li>
          ))}
        </ul>
      </div>

      <div className="home-expenses-list" data-testid="expenses-list">
        {sortedExpenses.map((expese) => (
          <ExpenseCard key={expese.id} expense={expese} />
        ))}
      </div>
    </Layout>
  )
}
