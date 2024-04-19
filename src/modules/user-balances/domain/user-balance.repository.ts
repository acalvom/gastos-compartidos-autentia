import { UserBalance } from './user-balance'

export interface UserBalanceRepository {
  getAll(): Promise<UserBalance[]>
}
