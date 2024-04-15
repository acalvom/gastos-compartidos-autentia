import { Id } from '@/shared/domain/interface/id'

// ASKME: sería mejor que payer sea de tipo Payer?

interface IExpense {
  id: Id
  payerId: Id
  description: string
  amount: number
  paymentDate: string
}

export class Expense implements IExpense {
  id: Id
  payerId: Id
  description: string
  amount: number
  paymentDate: string

  constructor(value: IExpense) {
    this.id = value.id
    this.payerId = value.payerId
    this.description = value.description
    this.amount = value.amount
    this.paymentDate = value.paymentDate
  }
}
