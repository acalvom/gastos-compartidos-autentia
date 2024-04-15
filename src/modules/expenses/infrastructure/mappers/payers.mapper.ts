import { Payer } from '../../domain/payer'

interface ILocalStorageUser {
  id: string
  firstName: string
  lastName: string
}

export function payersFromLocalStorage(usersString: string | null): Payer[] {
  if (!usersString) return []

  const users: ILocalStorageUser[] = JSON.parse(usersString)

  return users.map((user) => ({
    id: user.id,
    fullName: `${user.firstName} ${user.lastName}`,
  }))
}
