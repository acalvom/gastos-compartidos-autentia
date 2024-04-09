import { Command } from '@/shared/application/usecase/command'
import { User } from '../domain/user'
import { UserRepository } from '../domain/user.repository'

export class AddUserCommand implements Command<User> {
  constructor(private userRepository: UserRepository) {}

  execute(user: User): Promise<void> {
    return this.userRepository.add(user)
  }
}
