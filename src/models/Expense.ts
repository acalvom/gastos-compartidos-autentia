import { StoredUser } from './User'

export interface StoredExpense {
  id: string
  payer: StoredUser['id']
  description: string
  amount: number
  paymentDate: string
}

export type Expense = Omit<StoredExpense, 'id'>

export interface Balances {
  [key: string]: {
    payer: StoredUser;
    paid: number;
    accDebt: number;
  };
}