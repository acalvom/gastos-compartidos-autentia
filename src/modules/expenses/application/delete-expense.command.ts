import { Command } from '@/shared/application/usecase/command'
import { Id } from '@/shared/domain/interface/id'
import { ExpenseRepository } from '../domain/expense.repository'

export class DeleteExpenseCommand implements Command<Id> {
  constructor(private expenseRepository: ExpenseRepository) {}

  execute(expenseId: Id): Promise<void> {
    return this.expenseRepository.deleteExpense(expenseId)
  }
}
