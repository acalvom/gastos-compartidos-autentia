import { Expense, IExpensePrimitives } from '../../domain/expense'

export function expensesFromLocalStorage(expensesString: string | null): Expense[] {
  // INFO: práctica habitual. JSON.parse() devuelve un objeto, no una clase
  // INFO: con Expense.fromJson se convierte el objeto en clase de nuevo
  const jsonExpenses: IExpensePrimitives[] = expensesString ? JSON.parse(expensesString) : []
  return jsonExpenses.map(Expense.fromJson)
}

export function expensesToLocalStorage(expenses: Expense[]): string {
  const expensesString: IExpensePrimitives[] = expenses.map((a) => a.toJson())
  return JSON.stringify(expensesString)
}
