import { Expense, IExpensePrimitives } from '../../domain/expense'

export function expensesFromLocalStorage(expensesString: string | null) {
  // INFO: práctica habitual. JSON.parse() devuelve un objeto, no una clase
  // INFO: con Expense.fromJson se convierte el objeto en clase de nuevo
  const jsonExpenses: IExpensePrimitives[] = expensesString ? JSON.parse(expensesString) : []
  return jsonExpenses.map(Expense.fromJson)
}
