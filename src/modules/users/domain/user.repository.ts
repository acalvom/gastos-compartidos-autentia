import { AddUserDto } from '../application/dtos/add-user.dto'
import { User } from './user'

export interface UserRepository {
  getAll(): Promise<User[]>
  add(user: AddUserDto): Promise<void>
}
