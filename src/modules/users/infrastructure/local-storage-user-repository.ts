import { AddUserDto } from '../application/dtos/add-user.dto'
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

  // ASKME: check this try catch. should it be here?
  getAll(): Promise<User[]> {
    try {
      return Promise.resolve(this.getUsersFromLocalStorage())
    } catch (error) {
      throw new Error(error as string)
    }
  }

  add(user: AddUserDto): Promise<void> {
    try {
      const users = this.getUsersFromLocalStorage()
      const newUser = { ...user, id: user.firstName + user.lastName }
      return Promise.resolve(this.saveUsersToLocalStorage([...users, newUser]))
    } catch (error) {
      throw new Error(error as string)
    }
  }
}
