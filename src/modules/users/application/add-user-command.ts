import { Command } from '@/shared/application/usecase/command'
import { User } from '../domain/user'
import { UserRepository } from '../domain/user.repository'
import { AddUserDto } from './dtos/add-user.dto'

export class AddUserCommand implements Command<User> {
  constructor(private userRepository: UserRepository) {}

  // ASKME: Es correcto el uso del DTO de esta forma?
  execute(user: AddUserDto): Promise<void> {
    return this.userRepository.add(user)
  }
}
