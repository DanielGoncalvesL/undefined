import Expenses from '@modules/expenses/infra/typeorm/entities/Expenses';
import AppError from '@shared/errors/AppError';
import IExpensesRepository from '@modules/expenses/repositories/IExpensesRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
export default class CreateexpenseRepository {
  constructor(
    @inject('ExpensesRepository')
    private expensesRepository: IExpensesRepository,

  ) {}

  public async execute(id: string, value: string, description: string): Promise<Expenses> {
    const expense = await this.expensesRepository.findById(id);

    if (!expense) {
      throw new AppError('Expense not found!', 404);
    }

    expense.value = value;
    expense.description = description;

    return this.expensesRepository.save(expense);
  }
}
