import { User } from '@/modules/users/domain/user'
import { UserLocator } from '@/modules/users/ui/di/users.locator'
import { useEffect, useState } from 'react'

export function useUserList() {
  const [users, setUsers] = useState<User[]>([])
  const getUsers = async () => {
    const getUserQuery = UserLocator.getUserQuery()
    const users = await getUserQuery.execute()
    setUsers(users)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return { users }
}
