import { NewUser } from '@/modules/users/domain/new-user'
import { UserLocator } from '@/modules/users/ui/di/users.locator'

export function useAddUser() {
  const addUser = async (newUser: NewUser) => {
    const addUserCommand = UserLocator.addUserCommand()
    addUserCommand.execute(newUser)
  }

  return { addUser }
}
