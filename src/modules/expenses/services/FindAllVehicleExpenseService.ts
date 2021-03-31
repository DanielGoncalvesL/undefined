import VehicleExpenses from '@modules/expenses/infra/typeorm/entities/VehicleExpenses';
// import AppError from '@shared/errors/AppError';
import IVehicleExpensesRepository from '@modules/expenses/repositories/IVehicleExpensesRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
export default class FindAllExpenses {
  constructor(
    @inject('VehicleExpensesRepository')
    private vehicleExpensesRepository: IVehicleExpensesRepository,

  ) {}

  public async execute(): Promise<VehicleExpenses[]> {
    let vehiclesExpense = await this.vehicleExpensesRepository.find();

    if (!vehiclesExpense) {
      vehiclesExpense = [];
    }

    return vehiclesExpense;
  }
}
