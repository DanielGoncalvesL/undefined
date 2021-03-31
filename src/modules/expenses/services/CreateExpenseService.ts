import Expenses from '@modules/expenses/infra/typeorm/entities/Expenses';
// import AppError from '@shared/errors/AppError';
import IExpensesRepository from '@modules/expenses/repositories/IExpensesRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
export default class CreateExpenseService {
  constructor(
    @inject('ExpensesRepository')
    private expensesRepository: IExpensesRepository,

  ) {}

  public async execute(value: string, description: string): Promise<Expenses> {
    const vehicle = await this.expensesRepository.create(value, description);

    return vehicle;
  }
}
