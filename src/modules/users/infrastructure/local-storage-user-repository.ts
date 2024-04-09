import { User } from '../domain/user'
import { UserRepository } from '../domain/user.repository'

// FIXME: check this try catch. should it be here?
export class LocalStorageUserRepository implements UserRepository {
  getAll(): Promise<User[]> {
    try {
      const storedValue = localStorage.getItem('amigos')
      return storedValue ? JSON.parse(storedValue) : []
    } catch (error) {
      throw new Error(error as string)
    }
  }

  add(user: User): Promise<void> {
    try {
      return Promise.resolve(localStorage.setItem('amigos', JSON.stringify(user)))
    } catch (error) {
      throw new Error(error as string)
    }
  }
}
