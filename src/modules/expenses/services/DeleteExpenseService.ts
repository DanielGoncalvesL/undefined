import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import IExpensesRepository from '@modules/expenses/repositories/IExpensesRepository';

@injectable()
export default class CreateExpenseService {
  constructor(
    @inject('ExpensesRepository')
    private expensesRepository: IExpensesRepository,

  ) {}

  public async execute(id: string): Promise<void> {
    const findExpense = await this.expensesRepository.findById(id);

    if (!findExpense) {
      throw new AppError('Expense not found!');
    }

    await this.expensesRepository.delete(findExpense);
  }
}
