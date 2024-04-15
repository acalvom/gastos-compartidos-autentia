import { NewExpense } from '@/modules/expenses/domain/new-expense'

export const InitialExpense: NewExpense = {
  payer: '',
  amount: 0,
  description: '',
  paymentDate: '',
}

export const ExpenseForm = {
  SelectPayer: 'Selecciona un usuario',
  Payer: '🙋🏽 ¿Quién pagó?',
  Amount: '💶 ¿Cuánto pagó? (€)',
  Description: '🧾 ¿Qué pagó?',
  PaymentDate: ' 🗓 ¿Cuándo pagó?',
  Button: '💰 Añadir gasto',
}
