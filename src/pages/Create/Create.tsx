import { AddExpenseForm } from '@/components/AddExpenseForm/AddExpenseForm'
import { AddUserForm } from '@/components/AddUserForm/AddUserForm'
import { NavigationLink } from '@/components/NavigationLink/NavigationLink'
import { Commons } from '@/constants'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Layout } from '@/layout/Layout'
import { StoredExpense } from '@/models'
import { useUserList } from '@/modules/users/ui/components/use-user-list.hook'

export const Create = () => {
  // const [storedUsers, setStoredUsers] = useLocalStorage<StoredUser[]>('amigos', [])
  const [storedExpenses, setStoredExpenses] = useLocalStorage<StoredExpense[]>('gastos', [])
  const { users, addUser } = useUserList()

  // TODO: separar en dos rutas para cada creación
  return (
    <Layout>
      {/* <AddUserForm storedUsers={storedUsers} setStoredUsers={setStoredUsers} /> */}
      <AddUserForm storedUsers={users} setStoredUser={addUser} />
      <AddExpenseForm
        storedUsers={users}
        storedExpenses={storedExpenses}
        setStoredExpenses={setStoredExpenses}
      />
      <NavigationLink link="/" testId="add-home-button">
        {Commons.BackButton}
      </NavigationLink>
    </Layout>
  )
}
