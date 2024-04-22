import { NavigationLink } from '@/components/NavigationLink/NavigationLink'
import { AddItem } from '@/constants'
import { Layout } from '@/layout/Layout'

import { ExpenseList } from '@/modules/expenses/ui/components/expense-list/expense-list.component'
import { UserBalanceList } from '@/modules/user-balances/ui/components/user-balance-list/user-balance-list.component'
import { UserList } from '@/modules/users/ui/components/user-list/user-list.component'
import './Home.css'

export const Home = () => {
  // TODO: clean code
  // const sortedExpenses = sortExpenses(storedExpenses)
  // const balance = calculateBalance(storedExpenses, storedUsers)
  // const balance: Balances = {}

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

      {/* <div className="home-balance" data-testid="balance">
        <h2 className="home-title">{BalanceSummary.title}</h2>
        {Object.values(balance).map((balance) => (
          <BalanceEntry key={balance.payer.id} balance={balance} />
        ))}
      </div> */}
      <UserBalanceList />
      <UserList />
      <ExpenseList />
    </Layout>
  )
}
