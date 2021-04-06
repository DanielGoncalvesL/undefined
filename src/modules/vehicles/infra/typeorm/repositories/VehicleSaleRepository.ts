import { getRepository, Repository } from 'typeorm';
import IVehicleSaleRepository from '@modules/vehicles/repositories/IVehicleSaleRepository';
import VehicleSale from '@modules/vehicles/infra/typeorm/entities/VehicleSale';
import Vehicle from '@modules/vehicles/infra/typeorm/entities/Vehicles';

export default class VehicleSaleRepository implements IVehicleSaleRepository {
  private ormRepository: Repository<VehicleSale>;

  constructor() {
    this.ormRepository = getRepository(VehicleSale);
  }

  public async findById(id: string): Promise<VehicleSale | undefined> {
    const vehicle = await this.ormRepository.findOne(id);

    return vehicle;
  }

  public async findByVehicleId(vehicle: Vehicle): Promise<VehicleSale | undefined> {
    const filterVehicleSaleByVehicle = await this.ormRepository.findOne({
      where: {
        vehicle,
      },
    });

    return filterVehicleSaleByVehicle;
  }

  public async find(): Promise<VehicleSale[] | undefined> {
    const vehicle = await this.ormRepository.find();

    return vehicle;
  }

  public async create(saleValue: string, vehicle: Vehicle): Promise<VehicleSale> {
    const saleVehicle = this.ormRepository.create({
      saleValue,
      vehicle,
    });

    return this.ormRepository.save(saleVehicle);
  }

  public async save(vehicleSale: VehicleSale): Promise<VehicleSale> {
    return this.ormRepository.save(vehicleSale);
  }

  public async delete(vehicleSale: VehicleSale): Promise<void> {
    await this.ormRepository.remove(vehicleSale);
  }
}
