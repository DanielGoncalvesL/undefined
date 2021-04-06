import Vehicle from '@modules/vehicles/infra/typeorm/entities/Vehicles';
// import AppError from '@shared/errors/AppError';
import IVehiclesRepository from '@modules/vehicles/repositories/IVehiclesRepository';
import IVehicleSaleRepository from '@modules/vehicles/repositories/IVehicleSaleRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
export default class CreateVehicleRepository {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository,

    @inject('VehicleSaleRepository')
    private vehicleSaleRepository: IVehicleSaleRepository,

  ) {}

  public async execute(): Promise<Vehicle[]> {
    let vehicles = await this.vehiclesRepository.find();

    if (!vehicles) {
      vehicles = [];
    }

    return vehicles;
  }
}
