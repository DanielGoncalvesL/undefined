import Vehicle from '@modules/vehicles/infra/typeorm/entities/Vehicles';
import ICreateVehicleDTO from '@modules/vehicles/dtos/ICreateVehicleDTO';

export default interface IUsersRepository{
  findById(id: string): Promise<Vehicle | undefined>;
  create(data: ICreateVehicleDTO): Promise<Vehicle>;
  save(vehicle: Vehicle): Promise<Vehicle>;
  delete(vehicle: Vehicle): Promise<void>;
}
