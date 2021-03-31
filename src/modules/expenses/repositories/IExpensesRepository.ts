import Expenses from '@modules/expenses/infra/typeorm/entities/Expenses';

export default interface IExpensesRepository{
  findById(id: string): Promise<Expenses | undefined>;
  find(): Promise<Expenses[] | undefined>;
  create(value: string, description: string): Promise<Expenses>;
  save(expense: Expenses): Promise<Expenses>;
  delete(expense: Expenses): Promise<void>;
}
