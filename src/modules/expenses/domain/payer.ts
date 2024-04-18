import { Id } from '@/shared/domain/interface/id'

export interface IPayerPrimitives {
  id: string
  firstName: string
  lastName: string
}

interface IPayer {
  id: Id
  fullName: string
}

export class Payer implements IPayer {
  id: string
  fullName: string

  constructor(value: IPayer) {
    this.id = value.id
    this.fullName = value.fullName
  }

  static fromJson(value: IPayerPrimitives): Payer {
    return new Payer({ id: value.id, fullName: `${value.firstName} ${value.lastName}` })
  }
}
