import { Money } from '@/shared/domain/money/money'
import { User } from './user'

// ASKME: sobraría IUserExpensePrimitives , debería ir quizás en el repository?
export interface IUserExpensePrimitives {
  user: User
  amount: number
}

export interface IUserBalancePrimitives {
  user: User
  totalUserExpense: number
  totalUsers: number
  globalExpense: number
}

interface IUserBalance {
  user: User
  debtAmount: number
}

export class UserBalance implements IUserBalance {
  user: User
  debtAmount: number

  constructor(value: IUserBalance) {
    this.user = value.user
    this.debtAmount = value.debtAmount
  }

  static fromJson(value: IUserBalancePrimitives): UserBalance {
    return new UserBalance({
      ...value,
      debtAmount: value.totalUserExpense - value.globalExpense / value.totalUsers,
    })
  }

  public getDebtFormatted(): string {
    return Money.getDebtFormatted(this.debtAmount)
  }

  public isReimbursed(): boolean {
    return this.debtAmount > 0
  }
}
