import { Id } from '@/shared/domain/interface/id'

interface INewExpense {
  payer: Id
  description: string
  amount: number
  paymentDate: string
}
export class NewExpense implements INewExpense {
  payer: Id
  description: string
  amount: number
  paymentDate: string

  constructor(value: INewExpense) {
    this.payer = value.payer
    this.description = value.description
    this.amount = value.amount
    this.paymentDate = value.paymentDate
  }
}
