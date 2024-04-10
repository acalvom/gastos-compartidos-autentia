import { User } from '@/modules/users/domain/user'
import { UserLocator } from '@/modules/users/ui/di/users.locator'
import { useEffect, useState } from 'react'
import { AddUserDto } from '../../application/dtos/add-user.dto'

export function useUsers() {
  const [users, setUsers] = useState<User[]>([])

  const getUsers = async () => {
    const getUsersQuery = UserLocator.getUsersQuery()
    const users = await getUsersQuery.execute()
    setUsers(users)
  }

  // ASKME: Esto debe ir en este hook? Debo cambiar el nombre del hook?
  const addUser = async (user: AddUserDto) => {
    const addUserCommand = UserLocator.addUserCommand()
    addUserCommand.execute(user)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return { users, addUser }
}
