import { AddUserDto } from '../application/dtos/add-user.dto'
import { User } from '../domain/user'
import { UserRepository } from '../domain/user.repository'

// ASKME: check this try catch. should it be here?
export class LocalStorageUserRepository implements UserRepository {
  getAll(): Promise<User[]> {
    try {
      const users = localStorage.getItem('users')
      return users ? JSON.parse(users) : []
    } catch (error) {
      throw new Error(error as string)
    }
  }

  add(user: AddUserDto): Promise<void> {
    try {
      // ASKME: Esto no es duplicar?
      const usersString = localStorage.getItem('users')
      const users = usersString ? JSON.parse(usersString) : []

      return Promise.resolve(
        localStorage.setItem(
          'users',
          JSON.stringify([...users, { ...user, id: user.firstName + user.lastName }])
        )
      )
    } catch (error) {
      throw new Error(error as string)
    }
  }
}
