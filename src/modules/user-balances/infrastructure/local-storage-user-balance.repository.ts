import { Id } from '@/shared/domain/interface/id'

import { User } from '../domain/user'
import { UserBalance } from '../domain/user-balance'
import { UserBalanceRepository } from '../domain/user-balance.repository'

interface IExpensePrimitives {
  id: Id
  payer: User
  description: string
  amount: number
  paymentDate: string
}

type UserExpenses = Record<Id, number>

interface GlobalBalance {
  globalDebt: number
  totalUsers: number
  userExpenses: UserExpenses
}
export class LocalStorageUserBalanceRepository implements UserBalanceRepository {
  /**
  // INFO: tengo que simular un array de UserBalances para ello, necesito implementer la siguiente lógica (que vendría dada del BE)
   - obtener expenses
   - agrupar expenses por id de payer
   - obtener el sumatorio del gasto, el número de payers y el gasto por payer 
   - obtener usuarios
   - vincular usuarios a expenses (via payer)
   - asociar el User del UserBalance 
   - calcular la deuda por usuario
   - montar el array Balance[]

   Eso es lo que devuelvo
  */

  private getUsersExpensesFromLocalStorage() {
    const expensesString = localStorage.getItem('expenses')
    const jsonExpenses: IExpensePrimitives[] = expensesString ? JSON.parse(expensesString) : []
    const globalExpense = jsonExpenses.reduce(
      (accDebt, currExpense) => accDebt + currExpense.amount,
      0
    )
    console.log('🎨 ☞ wip:', globalExpense)

    const tt = jsonExpenses.reduce((acc: UserExpenses, jsonExpense: IExpensePrimitives) => {
      if (!acc[jsonExpense.payer.id]) {
        // No existen gastos asociados a ese usuario aun. Añadir la key y el gasto
        return { ...acc, [jsonExpense.payer.id]: jsonExpense.amount }
      } else {
        // Ya existe algún gasto asociado a ese usuario. Añadir el gasto a los que ya existen
        return { ...acc, [jsonExpense.payer.id]: acc[jsonExpense.payer.id] + jsonExpense.amount }
      }
    }, {})

    return tt
  }

  async getAll(): Promise<UserBalance[]> {
    this.getUsersExpensesFromLocalStorage()
    return []
  }
}
