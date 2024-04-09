import { GetUsersQuery } from '@/modules/users/application/get-users.query'
import { LocalStorageUserRepository } from '@/modules/users/infrastructure/local-storage-user-repository'

export class UserLocator {
  static localStorageUserRepository = new LocalStorageUserRepository()

  static getUsersQuery() {
    return new GetUsersQuery(this.localStorageUserRepository)
  }
}
