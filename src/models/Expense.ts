import { StoredUser } from "./User"

export interface Expense {
  payer: StoredUser
  description: string
  amount: number
  paymentDate?: string
}
