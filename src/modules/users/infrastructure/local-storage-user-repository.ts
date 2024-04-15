import { NewUser } from '../domain/new-user'
import { User } from '../domain/user'
import { UserRepository } from '../domain/user.repository'

export class LocalStorageUserRepository implements UserRepository {
  private getUsersFromLocalStorage(): User[] {
    const usersString = localStorage.getItem('users')
    return usersString ? JSON.parse(usersString) : []
  }

  private saveUsersToLocalStorage(users: User[]): void {
    localStorage.setItem('users', JSON.stringify(users))
  }

  async getAll(): Promise<User[]> {
    return this.getUsersFromLocalStorage()
  }

  async add(user: NewUser): Promise<void> {
    const users = this.getUsersFromLocalStorage()
    const newUser = { ...user, id: user.firstName + user.lastName }
    this.saveUsersToLocalStorage([...users, newUser])
  }
}
