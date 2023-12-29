import { Link } from 'react-router-dom'
import { AddExpenseForm } from '@/components/AddExpenseForm/AddExpenseForm'
import { AddUserForm } from '@/components/AddUserForm/AddUserForm'
import { Commons } from '@/constants/Forms'
import useLocalStorage from '@/hooks/useLocalStorage'
import Layout from '@/layout/Layout'
import { StoredUser, StoredExpense } from '@/models'

export const Create = () => {
  const [storedUsers, setStoredUsers] = useLocalStorage<StoredUser[]>('amigos', [])
  const [storedExpenses, setStoredExpenses] = useLocalStorage<StoredExpense[]>('gastos', [])

  return (
    <Layout>
      <AddUserForm storedUsers={storedUsers} setStoredUsers={setStoredUsers} />
      <AddExpenseForm
        storedUsers={storedUsers}
        storedExpenses={storedExpenses}
        setStoredExpenses={setStoredExpenses}
      />
      <Link to="/">
        <button className="button">{Commons.BackButton}</button>
      </Link>
    </Layout>
  )
}
