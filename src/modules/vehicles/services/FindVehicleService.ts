import Vehicles from '@modules/vehicles/infra/typeorm/entities/Vehicles';
import AppError from '@shared/errors/AppError';
import IVehiclesRepository from '@modules/vehicles/repositories/IVehiclesRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
export default class CreateVehicleRepository {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository,

  ) {}

  public async execute(vehicleId: string): Promise<Vehicles> {
    const vehicle = await this.vehiclesRepository.findById(vehicleId);

    if (!vehicle) {
      throw new AppError('Vehicle not found!', 404);
    }

    return vehicle;
  }
}
