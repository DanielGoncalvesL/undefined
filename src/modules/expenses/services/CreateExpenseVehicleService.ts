import VehicleExpenses from '@modules/expenses/infra/typeorm/entities/VehicleExpenses';
import AppError from '@shared/errors/AppError';
import IVehicleExpensesRepository from '@modules/expenses/repositories/IVehicleExpensesRepository';
import IVehiclesRepository from '@modules/vehicles/repositories/IVehiclesRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
export default class CreateExpenseService {
  constructor(
    @inject('VehicleExpensesRepository')
    private vehicleExpensesRepository: IVehicleExpensesRepository,

    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository,
  ) {}

  public async execute(value: string, description: string, vehicleId: string)
  : Promise<VehicleExpenses> {
    const vehicle = await this.vehiclesRepository.findById(vehicleId);

    if (!vehicle) {
      throw new AppError('Vehicle not found!');
    }

    const vehicleExpense = await this.vehicleExpensesRepository.create(value, description, vehicle);

    return vehicleExpense;
  }
}
