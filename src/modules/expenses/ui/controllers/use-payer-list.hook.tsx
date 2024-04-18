import { ExpenseLocator } from '@/modules/expenses/ui/di/expense.locator'
import { useEffect, useState } from 'react'
import { Payer } from '../../domain/payer'

export function usePayerList() {
  const [payers, setPayers] = useState<Payer[]>([])

  const getPayers = async () => {
    const getPayersQuery = ExpenseLocator.getPayersQuery()
    const payers = await getPayersQuery.execute()
    setPayers(payers)
  }

  useEffect(() => {
    getPayers()
  }, [])

  return { payers }
}
