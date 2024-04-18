import { Query } from '@/shared/application/usecase/query'
import { ExpenseRepository } from '../domain/expense.repository'
import { Payer } from '../domain/payer'

export class GetPayersQuery implements Query<Payer[]> {
  constructor(private expenseRespoitory: ExpenseRepository) {}

  execute(): Promise<Payer[]> {
    return this.expenseRespoitory.getPayers()
  }
}
