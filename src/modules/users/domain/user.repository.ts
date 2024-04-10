import { AddUserDto } from '../application/dtos/add-user.dto'
import { User } from './user'

export interface UserRepository {
  getAll(): Promise<User[]>

  // FIXME: NO PUEDO TENER APPLICATION EN DOMINIO
  add(user: AddUserDto): Promise<void>
}
