import { User } from './user'

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
}
