import { User } from '../domain/user'
import { UserRepository } from '../domain/user.repository'

export class LocalStorageUserRepository implements UserRepository {
  getAll(): Promise<User[]> {
    const storedValue = localStorage.getItem('amigos')
    return storedValue ? JSON.parse(storedValue) : []
  }
}
