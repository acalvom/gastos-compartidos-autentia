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

export interface IExpensePrimitives {
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
  paymentDate: Date

  constructor(value: IExpense) {
    this.id = value.id
    this.payerId = value.payerId
    this.description = value.description
    this.amount = value.amount
    this.paymentDate = value.paymentDate
  }

  static fromJson(value: IExpensePrimitives): Expense {
    return new Expense({ ...value, paymentDate: Datetime.toDate(value.paymentDate) })
  }

  public toJson(): IExpensePrimitives {
    return {
      ...this,
      paymentDate: Datetime.toString(this.paymentDate),
    }
  }

  public getPaymentDateFormatted(): string {
    return Datetime.getDateFormatted(this.paymentDate)
  }
}
