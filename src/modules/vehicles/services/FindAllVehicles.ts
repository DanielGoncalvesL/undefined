import Vehicles from '@modules/vehicles/infra/typeorm/entities/Vehicles';
// import AppError from '@shared/errors/AppError';
import IVehiclesRepository from '@modules/vehicles/repositories/IVehiclesRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
export default class CreateVehicleRepository {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository,

  ) {}

  public async execute(): Promise<Vehicles[]> {
    let vehicles = await this.vehiclesRepository.find();

    if (!vehicles) {
      vehicles = [];
    }

    return vehicles;
  }
}
