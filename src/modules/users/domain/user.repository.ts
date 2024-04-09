import { User } from './user'

export interface UserRepository {
  getAll(): Promise<User[]>
  add(user: User): Promise<void>
}
