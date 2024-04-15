import { ExpenseCard } from '@/components/ExpenseCard/ExpenseCard'
import { useExpenseList } from '../../controllers/use-expense-list.hook'

const ExpenseTitle = '🤑 Gastos del grupo'

export const ExpenseList = () => {
  const { expenses } = useExpenseList()
  return (
    <div className="home-expenses">
      <h2 className="home-title">{ExpenseTitle}</h2>
      <div className="home-expenses-list" data-testid="expenses-list">
        {expenses.map((expense) => (
          <ExpenseCard key={expense.id} expense={expense} handleDelete={() => {}} />
        ))}
      </div>
    </div>
  )
}
