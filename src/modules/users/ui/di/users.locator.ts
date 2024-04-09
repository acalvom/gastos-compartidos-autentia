import { GetUserQuery } from '@/modules/users/application/get-user.query'
import { LocalStorageUserRepository } from '../../infrastructure/local-storage-user-repository'

export class UserLocator {
  static localStorageUserRepository = new LocalStorageUserRepository()

  static getUserQuery() {
    return new GetUserQuery(this.localStorageUserRepository)
  }
}
