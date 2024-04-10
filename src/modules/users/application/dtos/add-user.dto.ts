import { User } from '../../domain/user'

export type AddUserDto = Omit<User, 'id'>
