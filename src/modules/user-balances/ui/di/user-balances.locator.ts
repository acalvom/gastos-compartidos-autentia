import { GetUserBalancesQuery } from '../../application/get-user-balances.query'
import { LocalStorageUserBalanceRepository } from '../../infrastructure/local-storage-user-balance.repository'

export class UserBalanceLocator {
  static localStorageUserBalanceRepository = new LocalStorageUserBalanceRepository()

  static getUserBalancesQuery() {
    return new GetUserBalancesQuery(this.localStorageUserBalanceRepository)
  }
}
