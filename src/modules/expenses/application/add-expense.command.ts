import { Command } from '@/shared/application/usecase/command'
import { ExpenseRepository } from '../domain/expense.repository'
import { NewExpense } from '../domain/new-expense'

export class AddExpenseCommand implements Command<NewExpense> {
  constructor(private expenseRepository: ExpenseRepository) {} // This is how dependance injection is implemented

  execute(newExpense: NewExpense): Promise<void> {
    return this.expenseRepository.addExpense(newExpense)
  }
}
