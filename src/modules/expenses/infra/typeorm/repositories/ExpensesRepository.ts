import { getRepository, Repository } from 'typeorm';
import IExpensesRepository from '@modules/expenses/repositories/IExpensesRepository';
import Expenses from '@modules/expenses/infra/typeorm/entities/Expenses';

export default class ExpensesRepository implements IExpensesRepository {
  private ormRepository: Repository<Expenses>;

  constructor() {
    this.ormRepository = getRepository(Expenses);
  }

  public async findById(id: string): Promise<Expenses | undefined> {
    const expense = await this.ormRepository.findOne(id);

    return expense;
  }

  public async find(): Promise<Expenses[] | undefined> {
    const expenses = await this.ormRepository.find();

    return expenses;
  }

  public async create(value: string, description: string): Promise<Expenses> {
    const expense = this.ormRepository.create({ value, description });

    return this.ormRepository.save(expense);
  }

  public async save(expense: Expenses): Promise<Expenses> {
    return this.ormRepository.save(expense);
  }

  public async delete(expense: Expenses): Promise<void> {
    await this.ormRepository.remove(expense);
  }
}
