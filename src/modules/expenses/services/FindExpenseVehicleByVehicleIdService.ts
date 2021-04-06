import VehicleExpenses from '@modules/expenses/infra/typeorm/entities/VehicleExpenses';
import AppError from '@shared/errors/AppError';
import IVehiclesRepository from '@modules/vehicles/repositories/IVehiclesRepository';
import IVehicleExpensesRepository from '@modules/expenses/repositories/IVehicleExpensesRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
export default class FindExpenseVehicleByVehicleIdService {
  constructor(
    @inject('VehicleExpensesRepository')
    private vehicleExpensesRepository: IVehicleExpensesRepository,

    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository,
  ) {}

  public async execute(vehicleId: string): Promise<VehicleExpenses[]> {
    const vehicle = await this.vehiclesRepository.findById(vehicleId);

    if (!vehicle) {
      throw new AppError('Vehicle not found!!');
    }

    let filterVehicleExpenseByVehicleId = await this.vehicleExpensesRepository
      .findByVehicleId(vehicle);

    if (!filterVehicleExpenseByVehicleId) {
      filterVehicleExpenseByVehicleId = [];
    }

    return filterVehicleExpenseByVehicleId;
  }
}
