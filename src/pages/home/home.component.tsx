import { Layout } from '@/layout/base/layout-base.component'
import { ExpenseList } from '@/modules/expenses/ui/components/expense-list/expense-list.component'
import { UserBalanceList } from '@/modules/user-balances/ui/components/user-balance-list/user-balance-list.component'
import { UserList } from '@/modules/users/ui/components/user-list/user-list.component'
import './home.styles.css'

export const Home = () => {
  // TODO: clean code
  // const sortedExpenses = sortExpenses(storedExpenses)

  return (
    <Layout>
      <UserBalanceList />
      <UserList />
      <ExpenseList />
    </Layout>
  )
}
