import { NavigationLink } from '@/components/NavigationLink/NavigationLink'
import { Layout } from '@/layout/Layout'
import { ExpenseList } from '@/modules/expenses/ui/components/expense-list/expense-list.component'
import { UserBalanceList } from '@/modules/user-balances/ui/components/user-balance-list/user-balance-list.component'
import { UserList } from '@/modules/users/ui/components/user-list/user-list.component'
import './Home.css'

const AddItem = '➕ Añadir Amigo / Gasto'

export const Home = () => {
  // TODO: clean code
  // const sortedExpenses = sortExpenses(storedExpenses)

  // const handleDelete = (index: string) => {
  //   const idxToDelete = storedExpenses.findIndex((expense) => expense.id === index)

  //   if (idxToDelete === -1) return

  //   const updatedExpenses = [...storedExpenses]
  //   updatedExpenses.splice(idxToDelete, 1)
  //   setStoredExpenses(updatedExpenses)
  // }

  return (
    <Layout>
      <NavigationLink link="/create" testId="add-home-button">
        {AddItem}
      </NavigationLink>

      <UserBalanceList />
      <UserList />
      <ExpenseList />
    </Layout>
  )
}
