import { User } from './user'

export interface UserRepository {
  getAll(): Promise<User[]>
}
