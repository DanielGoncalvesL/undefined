import VehicleExpenses from '@modules/expenses/infra/typeorm/entities/VehicleExpenses';
import Vehicles from '@modules/vehicles/infra/typeorm/entities/Vehicles';

export default interface IVehicleExpensesRepository {
  findById(id: string): Promise<VehicleExpenses | undefined>;
  findByVehicleId(vehicle: Vehicles): Promise<VehicleExpenses[] | undefined>;
  find(): Promise<VehicleExpenses[] | undefined>;
  create(value: string, description: string, vehicle: Vehicles): Promise<VehicleExpenses>;
  save(vehicleExpenses: VehicleExpenses): Promise<VehicleExpenses>;
  delete(vehicleExpenses: VehicleExpenses): Promise<void>;
}
