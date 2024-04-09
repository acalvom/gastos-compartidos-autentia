import { Query } from '@/shared/application/usecase/query'
import { Expense } from '../domain/expense'
import { ExpenseRepository } from '../domain/expense.repository'

export class GetExpensesQuery implements Query<Expense[]> {
  constructor(private expenseRepository: ExpenseRepository) {}

  execute(): Promise<Expense[]> {
    // TODO:Traer el listado y devolverlo
    return this.expenseRepository.getAll()
  }
}
