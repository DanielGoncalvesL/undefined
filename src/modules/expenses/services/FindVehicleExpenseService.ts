import VehicleExpenses from '@modules/expenses/infra/typeorm/entities/VehicleExpenses';
import AppError from '@shared/errors/AppError';
import IVehicleExpensesRepository from '@modules/expenses/repositories/IVehicleExpensesRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
export default class FindAllExpenses {
  constructor(
    @inject('VehicleExpensesRepository')
    private vehicleExpensesRepository: IVehicleExpensesRepository,

  ) {}

  public async execute(id: string): Promise<VehicleExpenses> {
    const vehicleExpense = await this.vehicleExpensesRepository.findById(id);

    if (!vehicleExpense) {
      throw new AppError('Vehicle expense not found!!');
    }

    return vehicleExpense;
  }
}
