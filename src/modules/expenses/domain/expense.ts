import { Id } from '@/shared/domain/interface/id'

interface IExpense {
  id: Id
  payer: Id
  description: string
  amount: number
  paymentDate: string
}
export class Expense implements IExpense {
  id: Id
  payer: Id
  description: string
  amount: number
  paymentDate: string

  constructor(value: IExpense) {
    this.id = value.id
    this.payer = value.payer
    this.description = value.description
    this.amount = value.amount
    this.paymentDate = value.paymentDate
  }
}
