import { StoredUser } from './User'

export interface StoredExpense {
  id: string
  payer: StoredUser['id']
  description: string
  amount: number
  paymentDate: string
}

export type Expense = Omit<StoredExpense, 'id'>


// TODO: Un fichero por entidad. Balance es una entidad en si misma
export interface Balance {
  payer: StoredUser
  paid: number
  accDebt: number
}
export interface Balances {
  [key: string]: Balance
}
