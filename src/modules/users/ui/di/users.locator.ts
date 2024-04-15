import { AddUserCommand } from '@/modules/users/application/add-user-command'
import { GetUsersQuery } from '@/modules/users/application/get-users.query'
import { LocalStorageUserRepository } from '@/modules/users/infrastructure/local-storage-user-repository'

export class UserLocator {
  static localStorageUserRepository = new LocalStorageUserRepository()

  static getUsersQuery() {
    return new GetUsersQuery(this.localStorageUserRepository)
  }

  static addUserCommand() {
    return new AddUserCommand(this.localStorageUserRepository)
  }
}
