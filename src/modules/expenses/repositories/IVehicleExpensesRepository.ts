import VehicleExpenses from '@modules/expenses/infra/typeorm/entities/VehicleExpenses';

export default interface IVehicleExpensesRepository {
  findById(id: string): Promise<VehicleExpenses | undefined>;
  find(): Promise<VehicleExpenses[] | undefined>;
  create(value: string, description: string): Promise<VehicleExpenses>;
  save(vehicleExpenses: VehicleExpenses): Promise<VehicleExpenses>;
  delete(vehicleExpenses: VehicleExpenses): Promise<void>;
}
