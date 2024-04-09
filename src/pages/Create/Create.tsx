import { Layout } from '@/layout/Layout'
import { AddExpenseForm } from '@/components/AddExpenseForm/AddExpenseForm'
import { AddUserForm } from '@/components/AddUserForm/AddUserForm'
import { Commons } from '@/constants'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { StoredUser, StoredExpense } from '@/models'
import { NavigationLink } from '@/components/NavigationLink/NavigationLink'

export const Create = () => {
  const [storedUsers, setStoredUsers] = useLocalStorage<StoredUser[]>('amigos', [])
  const [storedExpenses, setStoredExpenses] = useLocalStorage<StoredExpense[]>('gastos', [])

  // TODO: separar en dos rutas para cada creación 
  return (
    <Layout>
      <AddUserForm storedUsers={storedUsers} setStoredUsers={setStoredUsers} />
      <AddExpenseForm
        storedUsers={storedUsers}
        storedExpenses={storedExpenses}
        setStoredExpenses={setStoredExpenses}
      />
      <NavigationLink link="/" testId="add-home-button">
        {Commons.BackButton}
      </NavigationLink>
    </Layout>
  )
}
