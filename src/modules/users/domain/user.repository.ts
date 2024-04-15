import { NewUser } from './new-user'
import { User } from './user'

export interface UserRepository {
  getAll(): Promise<User[]>
  add(user: NewUser): Promise<void>
}
