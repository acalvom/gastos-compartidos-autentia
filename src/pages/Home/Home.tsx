import { BalanceEntry } from '@/components/BalanceEntry/BalanceEntry'
import { NavigationLink } from '@/components/NavigationLink/NavigationLink'
import { AddItem, BalanceSummary } from '@/constants'
import { Layout } from '@/layout/Layout'
import { Balances } from '@/models'

import { ExpenseList } from '@/modules/expenses/ui/components/expense-list/expense-list.component'
import './Home.css'

export const Home = () => {
  // const [storedExpenses, setStoredExpenses] = useLocalStorage<StoredExpense[]>('gastos', [])
  // const [storedUsers] = useLocalStorage<StoredUser[]>('amigos', [])

  // const sortedExpenses = sortExpenses(storedExpenses)
  // const balance = calculateBalance(storedExpenses, storedUsers)
  const balance: Balances = {}

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

      <div className="home-balance" data-testid="balance">
        <h2 className="home-title">{BalanceSummary.title}</h2>
        {Object.values(balance).map((balance) => (
          <BalanceEntry key={balance.payer.id} balance={balance} />
        ))}
      </div>

      <ExpenseList />
      {/* <div className="home-expenses">
        <h2 className="home-title">{ExpenseTitle}</h2>
        <div className="home-expenses-list" data-testid="expenses-list">
          {sortedExpenses.map((expense) => (
            <ExpenseCard
              key={expense.id}
              expense={expense}
              handleDelete={() => handleDelete(expense.id)}
            />
          ))}
        </div> */}
      {/* </div> */}
    </Layout>
  )
}
