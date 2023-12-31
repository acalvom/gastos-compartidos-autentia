import { Link } from 'react-router-dom'
import { Layout } from '@/layout/Layout'
import { AddItem } from '@/constants'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { StoredExpense } from '@/models/Expense'
import { ExpenseCard } from '@/components/ExpenseCard/ExpenseCard'
import { sortExpenses } from '@/utils/sortExpenses'
import './Home.css'

export const Home = () => {
  const [storedExpenses] = useLocalStorage<StoredExpense[]>('gastos', [])
  const sortedExpenses = sortExpenses(storedExpenses)


  return (
    <Layout>
      <div className="home-button" data-testid='add-home-button'>
        <Link to="/create" className="button">
          {AddItem}
        </Link>
      </div>
      <div className="home-wrapper" data-testid="expenses-list">
        {sortedExpenses.map((expese) => (
          <ExpenseCard key={expese.id} expense={expese} />
        ))}
      </div>
    </Layout>
  )
}
