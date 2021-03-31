import Expenses from '@modules/expenses/infra/typeorm/entities/Expenses';
// import AppError from '@shared/errors/AppError';
import IExpensesRepository from '@modules/expenses/repositories/IExpensesRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
export default class FindAllExpenses {
  constructor(
    @inject('ExpensesRepository')
    private expensesRepository: IExpensesRepository,

  ) {}

  public async execute(): Promise<Expenses[]> {
    let expenses = await this.expensesRepository.find();

    if (!expenses) {
      expenses = [];
    }

    return expenses;
  }
}
