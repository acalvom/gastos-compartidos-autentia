import { AddExpenseForm } from '@/components/AddExpenseForm/AddExpenseForm'

import { NavigationLink } from '@/components/NavigationLink/NavigationLink'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Layout } from '@/layout/Layout'
import { StoredExpense } from '@/models'
import { AddUserForm } from '@/modules/users/ui/components/add-user-form/add-user-form.component'
import { useListUsers } from '@/modules/users/ui/controllers/use-list-users.hook'
import { Common } from '@/shared/ui/texts/common-texts'

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
        {Common.BackButton}
      </NavigationLink>
    </Layout>
  )
}
