import { Expense, IExpensePrimitives } from '../../domain/expense'
import { NewExpense } from '../../domain/new-expense'
import { Payer } from '../../domain/payer'

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

export function newExpenseToExpenseMapper(newExpense: NewExpense, payer: Payer): Expense {
  const jsonExpense: IExpensePrimitives = {
    id: newExpense.payerId + newExpense.paymentDate,
    payer,
    description: newExpense.description,
    amount: newExpense.amount,
    paymentDate: newExpense.paymentDate,
  }

  return Expense.fromJson(jsonExpense)
}
