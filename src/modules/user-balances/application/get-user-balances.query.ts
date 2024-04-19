import { Query } from '@/shared/application/usecase/query'
import { UserBalance } from '../domain/user-balance'
import { UserBalanceRepository } from '../domain/user-balance.repository'

export class GetUserBalancesQuery implements Query<UserBalance[]> {
  constructor(private userBalanceRepository: UserBalanceRepository) {}

  execute(): Promise<UserBalance[]> {
    return this.userBalanceRepository.getAll()
  }
}
