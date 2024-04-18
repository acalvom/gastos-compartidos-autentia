import { Id } from '@/shared/domain/interface/id'

interface INewExpense {
  payerId: Id
  description: string
  amount: number
  paymentDate: string
}

export class NewExpense implements INewExpense {
  payerId: Id
  description: string
  amount: number
  paymentDate: string

  constructor(value: INewExpense) {
    this.payerId = value.payerId
    this.description = value.description
    this.amount = value.amount
    this.paymentDate = value.paymentDate
  }
}
