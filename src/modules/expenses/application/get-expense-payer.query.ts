import { Query } from '@/shared/application/usecase/query'
import { Id } from '@/shared/domain/interface/id'
import { ExpenseRepository } from '../domain/expense.repository'
import { Payer } from '../domain/payer'

export class GetExpensePayerQuery implements Query<Payer, Id> {
  constructor(private expenseRepository: ExpenseRepository) {}

  execute(payerId: Id): Promise<Payer> {
    return this.expenseRepository.getExpensePayer(payerId)
  }
}
