import Vehicles from '@modules/vehicles/infra/typeorm/entities/Vehicles';
// import AppError from '@shared/errors/AppError';
import IVehiclesRepository from '@modules/vehicles/repositories/IVehiclesRepository';
import ICreateVehicleDTO from '@modules/vehicles/dtos/ICreateVehicleDTO';
import { injectable, inject } from 'tsyringe';

@injectable()
export default class CreateVehicleRepository {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository,

  ) {}

  public async execute(data: ICreateVehicleDTO): Promise<Vehicles> {
    const vehicle = await this.vehiclesRepository.create(data);

    return vehicle;
  }
}
