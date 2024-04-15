import { ExpenseLocator } from '@/modules/expenses/ui/di/expense.locator'
import { Id } from '@/shared/domain/interface/id'
import { useEffect, useState } from 'react'
import { Payer } from '../../domain/payer'

export function useExpensePayer(payerId: Id) {
  const [payer, setPayer] = useState<Payer>({ id: '', fullName: '' })

  const getPayer = async (payerId: Id) => {
    const getExpensePayerQuery = ExpenseLocator.getExpensePayer()
    const payer = await getExpensePayerQuery.execute(payerId)
    setPayer(payer)
  }

  useEffect(() => {
    getPayer(payerId)
  }, [payerId])

  return { payer }
}
