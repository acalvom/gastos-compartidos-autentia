import { useDeleteExpense } from '../../controllers/use-delete-expense.hook'
import { useExpenseList } from '../../controllers/use-expense-list.hook'
import { ExpenseCard } from '../expense-card/expense-card.component'
import './expense-list.styles.css'

export const ExpenseList = () => {
  const { expenses, update } = useExpenseList()
  const { deleteExpense } = useDeleteExpense()

  const handleDelete = (id: string) => {
    deleteExpense(id)
    update(true)
  }

  return (
    <div>
      <h2 className="title">Gastos del grupo</h2>
      <div className="expense-list" data-testid="expenses-list">
        {expenses.map((expense) => (
          <ExpenseCard
            key={expense.id}
            expense={expense}
            handleDelete={() => handleDelete(expense.id)}
          />
        ))}
      </div>
    </div>
  )
}
