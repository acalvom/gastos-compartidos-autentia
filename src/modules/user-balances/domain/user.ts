import { Id } from '@/shared/domain/interface/id'

interface IUser {
  id: Id
  fullName: string
}

export class User implements IUser {
  id: Id
  fullName: string

  constructor(value: IUser) {
    this.id = value.id
    this.fullName = value.fullName
  }
}
