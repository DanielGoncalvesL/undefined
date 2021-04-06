import VehicleSale from '@modules/vehicles/infra/typeorm/entities/VehicleSale';
import Vehicle from '@modules/vehicles/infra/typeorm/entities/Vehicles';

export default interface IUsersRepository{
  findById(id: string): Promise<VehicleSale | undefined>;
  findByVehicleId(vehicle: Vehicle): Promise<VehicleSale | undefined>;
  find(): Promise<VehicleSale[] | undefined>;
  create(valueSale: string, vehicle: Vehicle): Promise<VehicleSale>;
  save(vehicleSale: VehicleSale): Promise<VehicleSale>;
  delete(vehicleSale: VehicleSale): Promise<void>;
}
