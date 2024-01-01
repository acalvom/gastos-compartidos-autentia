import { Link } from 'react-router-dom'
import { Layout } from '@/layout/Layout'
import { AddItem, BalanceSummary, ExpenseTitle } from '@/constants'
import { sortExpenses, calculateBalance } from '@/utils'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { StoredExpense, StoredUser } from '@/models'
import { ExpenseCard } from '@/components/ExpenseCard/ExpenseCard'
import { BalanceEntry } from '@/components/BalanceEntry/BalanceEntry'
import './Home.css'

export const Home = () => {
  const [storedExpenses] = useLocalStorage<StoredExpense[]>('gastos', [])
  const [storedUsers] = useLocalStorage<StoredUser[]>('amigos', [])

  const sortedExpenses = sortExpenses(storedExpenses)
  const balance = calculateBalance(storedExpenses, storedUsers)

  return (
    <Layout>
      <div className="home-button" data-testid="add-home-button">
        <Link to="/create" className="button">
          {AddItem}
        </Link>
      </div>

      <div className="home-balance" data-testid="balance">
        <h2 className="home-title">{BalanceSummary.title}</h2>
        {Object.values(balance).map((balance) => (
          <BalanceEntry key={balance.payer.id} balance={balance} />
        ))}
      </div>

      <div className="home-expenses">
        <h2 className="home-title">{ExpenseTitle}</h2>
        <div className="home-expenses-list" data-testid="expenses-list">
          {sortedExpenses.map((expese) => (
            <ExpenseCard key={expese.id} expense={expese} />
          ))}
        </div>
      </div>
    </Layout>
  )
}
