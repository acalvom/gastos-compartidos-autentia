import { Link } from 'react-router-dom'
import Layout from '@/layout/Layout'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { StoredExpense } from '@/models/Expense'
import './Home.css'

export const Home = () => {
  const [storedExpenses] = useLocalStorage<StoredExpense[]>('gastos', [])

  return (
    <Layout>
      <Link to="/create">
        <button>Create</button>
      </Link>
      <ul>
        {storedExpenses.map((expese) => (
          <li key={expese.id}>{expese.description}</li>
        ))}
      </ul>
    </Layout>
  )
}
