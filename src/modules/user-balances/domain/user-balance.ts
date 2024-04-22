import { Money } from '@/shared/domain/money/money'
import { User } from './user'

export interface IUserBalance {
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

  static fromJson(value: IUserBalance): UserBalance {
    return new UserBalance({ ...value })
  }

  public getDebtFormatted(): string {
    return Money.getDebtFormatted(this.debtAmount)
  }

  public isReimbursed(): boolean {
    return this.debtAmount > 0
  }
}
