import { useExpenseList } from '../../controllers/use-expense-list.hook'
import { ExpenseCard } from '../expense-card/expense-card.component'
import './expense-list.styles.css'

const ExpenseTitle = '🤑 Gastos del grupo'

export const ExpenseList = () => {
  const { expenses } = useExpenseList()

  return (
    <div>
      <h2 className="home-title">{ExpenseTitle}</h2>
      <div className="expense-list" data-testid="expenses-list">
        {expenses.map((expense) => (
          <ExpenseCard key={expense.id} expense={expense} handleDelete={() => {}} />
        ))}
      </div>
    </div>
  )
}
