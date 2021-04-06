import VehicleSale from '@modules/vehicles/infra/typeorm/entities/VehicleSale';
// import AppError from '@shared/errors/AppError';
import IVehicleSaleRepository from '@modules/vehicles/repositories/IVehicleSaleRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
export default class CreateVehicleRepository {
  constructor(
    @inject('VehicleSaleRepository')
    private vehicleSaleRepository: IVehicleSaleRepository,

  ) {}

  public async execute(): Promise<VehicleSale[]> {
    let salesVehicle = await this.vehicleSaleRepository.find();

    if (!salesVehicle) {
      salesVehicle = [];
    }

    return salesVehicle;
  }
}
