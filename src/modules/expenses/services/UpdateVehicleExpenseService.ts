import VehicleExpenses from '@modules/expenses/infra/typeorm/entities/VehicleExpenses';
import AppError from '@shared/errors/AppError';
import IVehicleExpensesRepository from '@modules/expenses/repositories/IVehicleExpensesRepository';
import IVehiclesRepository from '@modules/vehicles/repositories/IVehiclesRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
export default class CreateexpenseRepository {
  constructor(
    @inject('VehicleExpensesRepository')
    private vehicleExpensesRepository: IVehicleExpensesRepository,

    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository,
  ) {}

  public async execute(id: string, value: string, description: string, vehicle_id: string)
  : Promise<VehicleExpenses> {
    const vehicleExpense = await this.vehicleExpensesRepository.findById(id);

    if (!vehicleExpense) {
      throw new AppError('Vehicle expense not found!');
    }

    const vehicle = await this.vehiclesRepository.findById(vehicle_id);

    if (!vehicle) {
      throw new AppError('Vehicle not found!');
    }

    vehicleExpense.value = value;
    vehicleExpense.description = description;
    vehicleExpense.vehicle = vehicle;

    return this.vehicleExpensesRepository.save(vehicleExpense);
  }
}
