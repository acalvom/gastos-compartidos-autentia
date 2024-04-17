import { Datetime } from '@/shared/domain/dates/datetime'
import { Id } from '@/shared/domain/interface/id'

// TODO: el atributo payerId lo sustituyes por payer, recives un Payer, y no un Id

interface IExpense {
  id: Id
  payerId: Id
  description: string
  amount: number
  paymentDate: Date
}

export class Expense implements IExpense {
  id: Id
  payerId: Id
  description: string
  amount: number
  paymentDate: Date

  constructor(value: IExpense) {
    this.id = value.id
    this.payerId = value.payerId
    this.description = value.description
    this.amount = value.amount
    this.paymentDate = value.paymentDate
  }

  public getPaymentDateFormatted(): string {
    return Datetime.getDateFormatted(this.paymentDate)
  }
}
