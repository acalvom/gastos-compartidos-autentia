import { IPayerPrimitives, Payer } from '../../domain/payer'

export function payersFromLocalStorage(usersString: string | null): Payer[] {
  const jsonPayer: IPayerPrimitives[] = usersString ? JSON.parse(usersString) : []
  return jsonPayer.map(Payer.fromJson)
}
