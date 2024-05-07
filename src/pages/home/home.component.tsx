import { Layout } from '@/layout/base/layout-base.component'
import { ExpenseList } from '@/modules/expenses/ui/components/expense-list/expense-list.component'
import { UserBalanceModal } from '@/modules/user-balances/ui/components/user-balance-modal/user-balance-modal.component'
import { UserList } from '@/modules/users/ui/components/user-list/user-list.component'

export const Home = () => {
  return (
    <Layout>
      <UserList />
      <ExpenseList />
      <UserBalanceModal />
    </Layout>
  )
}
