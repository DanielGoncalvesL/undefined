import Vehicles from '@modules/vehicles/infra/typeorm/entities/Vehicles';
import AppError from '@shared/errors/AppError';
import IVehiclesRepository from '@modules/vehicles/repositories/IVehiclesRepository';
import IUpdateVehicleDTO from '@modules/vehicles/dtos/IUpdateVehicleDTO';
import { injectable, inject } from 'tsyringe';

@injectable()
export default class CreateVehicleRepository {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository,

  ) {}

  public async execute({
    id, brand, fipeCode, fuel, modelYear, name, priceFipe,
  }: IUpdateVehicleDTO): Promise<Vehicles> {
    const vehicle = await this.vehiclesRepository.findById(id);

    if (!vehicle) {
      throw new AppError('Vehicle not found!', 404);
    }

    vehicle.brand = brand;
    vehicle.fipeCode = fipeCode;
    vehicle.fuel = fuel;
    vehicle.modelYear = modelYear;
    vehicle.name = name;
    vehicle.priceFipe = priceFipe;

    return this.vehiclesRepository.save(vehicle);
  }
}
