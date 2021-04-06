import VehicleSale from '@modules/vehicles/infra/typeorm/entities/VehicleSale';
import AppError from '@shared/errors/AppError';
import IVehicleSaleRepository from '@modules/vehicles/repositories/IVehicleSaleRepository';
import IVehiclesRepository from '@modules/vehicles/repositories/IVehiclesRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
export default class CreateVehicleRepository {
  constructor(
    @inject('VehicleSaleRepository')
    private vehicleSaleRepository: IVehicleSaleRepository,

    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository,

  ) {}

  public async execute(saleValue: string, vehicle_id: string): Promise<VehicleSale> {
    const findVehicleSale = await this.vehiclesRepository.findById(vehicle_id);

    if (!findVehicleSale) {
      throw new AppError('Vehicle not found!');
    }

    const vehicleSale = await this.vehicleSaleRepository.create(saleValue, findVehicleSale);

    return vehicleSale;
  }
}
