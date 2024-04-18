import { Expense } from '@/modules/expenses/domain/expense'
import { ExpenseRepository } from '@/modules/expenses/domain/expense.repository'
import { Query } from '@/shared/application/usecase/query'

export class GetExpensesQuery implements Query<Expense[]> {
  constructor(private expenseRepository: ExpenseRepository) {}

  execute(): Promise<Expense[]> {
    return this.expenseRepository.getAll()
  }
}
