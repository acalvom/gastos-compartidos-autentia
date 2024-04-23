import { Layout } from '@/layout/base/layout-base.component'
import { ExpenseList } from '@/modules/expenses/ui/components/expense-list/expense-list.component'
import { UserBalanceList } from '@/modules/user-balances/ui/components/user-balance-list/user-balance-list.component'
import { UserList } from '@/modules/users/ui/components/user-list/user-list.component'
import './Home.css'

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
      <UserBalanceList />
      <UserList />
      <ExpenseList />
    </Layout>
  )
}
