import { Layout } from '@/layout/Layout'
import { AddItem, BalanceSummary, ExpenseTitle } from '@/constants'
import { sortExpenses, calculateBalance } from '@/utils'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { StoredExpense, StoredUser } from '@/models'
import { ExpenseCard } from '@/components/ExpenseCard/ExpenseCard'
import { BalanceEntry } from '@/components/BalanceEntry/BalanceEntry'
import { NavigationLink } from '@/components/NavigationLink/NavigationLink'
import './Home.css'

export const Home = () => {
  const [storedExpenses, setStoredExpenses] = useLocalStorage<StoredExpense[]>('gastos', [])
  const [storedUsers] = useLocalStorage<StoredUser[]>('amigos', [])

  const sortedExpenses = sortExpenses(storedExpenses)
  const balance = calculateBalance(storedExpenses, storedUsers)

  const handleDelete = (index: string) => {
    const idxToDelete = storedExpenses.findIndex((expense) => expense.id === index)

    if (idxToDelete === -1) return

    const updatedExpenses = [...storedExpenses]
    updatedExpenses.splice(idxToDelete, 1)
    setStoredExpenses(updatedExpenses)
  }

  return (
    <Layout>
      <NavigationLink link="/create" testId="add-home-button">
        {AddItem}
      </NavigationLink>

      <div className="home-balance" data-testid="balance">
        <h2 className="home-title">{BalanceSummary.title}</h2>
        {Object.values(balance).map((balance) => (
          <BalanceEntry key={balance.payer.id} balance={balance} />
        ))}
      </div>

      <div className="home-expenses">
        <h2 className="home-title">{ExpenseTitle}</h2>
        <div className="home-expenses-list" data-testid="expenses-list">
          {sortedExpenses.map((expense) => (
            <ExpenseCard
              key={expense.id}
              expense={expense}
              handleDelete={() => handleDelete(expense.id)}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
