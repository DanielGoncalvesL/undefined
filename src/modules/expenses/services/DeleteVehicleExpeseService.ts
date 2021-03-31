import AppError from '@shared/errors/AppError';
import IVehicleExpensesRepository from '@modules/expenses/repositories/IVehicleExpensesRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
export default class CreateExpenseService {
  constructor(
    @inject('VehicleExpensesRepository')
    private vehicleExpensesRepository: IVehicleExpensesRepository,

  ) {}

  public async execute(id: string): Promise<void> {
    const findVehicleExpense = await this.vehicleExpensesRepository.findById(id);

    if (!findVehicleExpense) {
      throw new AppError('Expense not found!');
    }

    await this.vehicleExpensesRepository.delete(findVehicleExpense);
  }
}
