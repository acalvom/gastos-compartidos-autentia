import { useEffect, useState } from 'react'
import { UserBalance } from '../../domain/user-balance'
import { UserBalanceLocator } from '../di/user-balances.locator'

export function useUserBalanceList() {
  const [userBalances, setUserBalances] = useState<UserBalance[]>([])

  const getUserBalances = async () => {
    const getUserBalancesQuery = UserBalanceLocator.getUserBalancesQuery()
    const userBalances = await getUserBalancesQuery.execute()
    setUserBalances(userBalances)
  }

  useEffect(() => {
    getUserBalances()
  }, [])

  return { userBalances }
}
