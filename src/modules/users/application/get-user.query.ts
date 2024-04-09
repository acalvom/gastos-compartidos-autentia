import { User } from '@/modules/users/domain/user'
import { UserRepository } from '@/modules/users/domain/user.repository'
import { Query } from '@/shared/application/usecase/query'

export class GetUserQuery implements Query<User[]> {
  constructor(private userRepository: UserRepository) {}

  execute(): Promise<User[]> {
    return this.userRepository.getAll()
  }
}
