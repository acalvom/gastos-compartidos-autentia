export interface StoredUser {
  id: string
  firstName: string
  lastName: string
}

export type User = Omit<StoredUser, 'id'>
