import { Command } from '@/shared/application/usecase/command'
import { NewUser } from '../domain/new-user'
import { User } from '../domain/user'
import { UserRepository } from '../domain/user.repository'

export class AddUserCommand implements Command<User> {
  constructor(private userRepository: UserRepository) {}

  execute(newUser: NewUser): Promise<void> {
    return this.userRepository.add(newUser)
  }
}
