import { Datetime } from '@/shared/domain/dates/datetime'
import { Id } from '@/shared/domain/interface/id'
import { Money } from '@/shared/domain/money/money'
import { Payer } from './payer'

interface IExpense {
  id: Id
  payer: Payer
  description: string
  amount: number
  paymentDate: Date
}

export interface IExpensePrimitives {
  id: Id
  payer: Payer
  description: string
  amount: number
  paymentDate: string
}

export class Expense implements IExpense {
  id: Id
  payer: Payer
  description: string
  amount: number
  paymentDate: Date

  constructor(value: IExpense) {
    this.id = value.id
    this.payer = value.payer
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

  public getAmountFormatted(): string {
    return Money.getMoneyFormatted(this.amount)
  }

  public getPaymentMilliseconds(): number {
    return Datetime.toMilliseconds(this.paymentDate)
  }
}
