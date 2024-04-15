import { Id } from '@/shared/domain/interface/id'

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
}
