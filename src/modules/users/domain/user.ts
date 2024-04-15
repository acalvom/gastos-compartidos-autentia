import { Id } from '@/shared/domain/interface/id'

interface IUser {
  id: Id
  firstName: string
  lastName: string
}

export class User implements IUser {
  id: Id
  firstName: string
  lastName: string

  constructor(value: IUser) {
    this.id = value.id
    this.firstName = value.firstName
    this.lastName = value.lastName
  }
}
