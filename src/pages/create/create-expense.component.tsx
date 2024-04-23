import { LayoutForm } from '@/layout/form/layout-form.component'
import { AddExpenseForm } from '@/modules/expenses/ui/components/add-expense-form/add-expense-form.component'

export const CreateExpense = () => {
  return (
    <LayoutForm>
      <AddExpenseForm />
    </LayoutForm>
  )
}
