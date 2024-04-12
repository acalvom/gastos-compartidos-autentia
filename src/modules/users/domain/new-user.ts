interface INewUser {
  firstName: string
  lastName: string
}

export class NewUser implements INewUser {
  firstName: string
  lastName: string

  constructor(value: INewUser) {
    this.firstName = value.firstName
    this.lastName = value.lastName
  }
}
