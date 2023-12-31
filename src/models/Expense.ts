import { StoredUser } from './User'

export interface StoredExpense {
  id: string
  payer: StoredUser['id']
  description: string
  amount: number
  paymentDate: string
}

export type Expense = Omit<StoredExpense, 'id'>
