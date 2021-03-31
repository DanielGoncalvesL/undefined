import { getRepository, Repository } from 'typeorm';
import IVehiclesRepository from '@modules/vehicles/repositories/IVehiclesRepository';
import Vehicles from '@modules/vehicles/infra/typeorm/entities/Vehicles';
import ICreateVehicleDTO from '@modules/vehicles/dtos/ICreateVehicleDTO';

export default class VehiclesRepository implements IVehiclesRepository {
  private ormRepository: Repository<Vehicles>;

  constructor() {
    this.ormRepository = getRepository(Vehicles);
  }

  public async findById(id: string): Promise<Vehicles | undefined> {
    const vehicle = await this.ormRepository.findOne(id);

    return vehicle;
  }

  public async find(): Promise<Vehicles[] | undefined> {
    const vehicle = await this.ormRepository.find();

    return vehicle;
  }

  public async create(vehicleData: ICreateVehicleDTO): Promise<Vehicles> {
    const vehicle = this.ormRepository.create(vehicleData);

    return this.ormRepository.save(vehicle);
  }

  public async save(vehicle: Vehicles): Promise<Vehicles> {
    return this.ormRepository.save(vehicle);
  }

  public async delete(vehicle: Vehicles): Promise<void> {
    await this.ormRepository.remove(vehicle);
  }
}
