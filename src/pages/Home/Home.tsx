import './Home.css'
import Layout from '@/layout/Layout'
import { AddUserForm } from '@/components/AddUserForm/AddUserForm'
import { AddExpenseForm } from '@/components/AddExpenseForm/AddExpenseForm'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { StoredUser } from '@/models/User'
import { StoredExpense } from '@/models/Expense'

export const Home = () => {
  const [storedUsers, setStoredUsers] = useLocalStorage<StoredUser[]>('amigos', [])
  const [storedExpenses, setStoredExpenses] = useLocalStorage<StoredExpense[]>('gastos', [])

  return (
    <Layout>
      <AddUserForm storedUsers={storedUsers} setStoredUsers={setStoredUsers} />
      <AddExpenseForm storedUsers={storedUsers} storedExpenses={storedExpenses} setStoredExpenses={setStoredExpenses} />
    </Layout>
  )
}

export default Home
