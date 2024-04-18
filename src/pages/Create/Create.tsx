import { NavigationLink } from '@/components/NavigationLink/NavigationLink'
import { Layout } from '@/layout/Layout'
import { AddExpenseForm } from '@/modules/expenses/ui/components/add-expense-form/add-expense-form.component'
import { AddUserForm } from '@/modules/users/ui/components/add-user-form/add-user-form.component'
import { Common } from '@/shared/ui/texts/common-texts'

export const Create = () => {
  // TODO: separar en dos rutas para cada creación
  return (
    <Layout>
      <AddUserForm />
      <AddExpenseForm />
      <NavigationLink link="/" testId="add-home-button">
        {Common.BackButton}
      </NavigationLink>
    </Layout>
  )
}
