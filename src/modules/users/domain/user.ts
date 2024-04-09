import { Datetime } from '@/shared/domain/dates/datetime'
import { Id } from '@/shared/domain/interface/id'

interface IUser {
  id: Id
  firstName: string
  lastName: string
  birthDate: Date
}

export class User implements IUser {
  id: Id
  firstName: string
  lastName: string
  birthDate: Date

  constructor(value: IUser) {
    this.id = value.id
    this.firstName = value.firstName
    this.lastName = value.lastName
    this.birthDate = value.birthDate
  }

  public getAge(): number {
    return Datetime.getYearsTillToday(this.birthDate)
  }
}
