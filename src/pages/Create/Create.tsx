import { AddExpenseForm } from '@/components/AddExpenseForm/AddExpenseForm'
import { AddUserForm } from '@/components/AddUserForm/AddUserForm'
import { NavigationLink } from '@/components/NavigationLink/NavigationLink'
import { Commons } from '@/constants'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Layout } from '@/layout/Layout'
import { StoredExpense } from '@/models'
import { useListUsers } from '@/modules/users/ui/components/use-list-users.hook'

export const Create = () => {
  const [storedExpenses, setStoredExpenses] = useLocalStorage<StoredExpense[]>('gastos', [])
  const { users } = useListUsers()

  // TODO: separar en dos rutas para cada creación
  return (
    <Layout>
      <AddUserForm />
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
