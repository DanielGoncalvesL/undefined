import { getRepository, Repository } from 'typeorm';
import IVehicleExpensesRepository from '@modules/expenses/repositories/IVehicleExpensesRepository';
import VehicleExpenses from '@modules/expenses/infra/typeorm/entities/VehicleExpenses';
import Vehicle from '@modules/vehicles/infra/typeorm/entities/Vehicles';

export default class VehicleExpensesRepository implements IVehicleExpensesRepository {
  private ormRepository: Repository<VehicleExpenses>;

  constructor() {
    this.ormRepository = getRepository(VehicleExpenses);
  }

  public async findById(id: string): Promise<VehicleExpenses | undefined> {
    const expense = await this.ormRepository.findOne(id);

    return expense;
  }

  public async find(): Promise<VehicleExpenses[] | undefined> {
    const vehiclesExpenses = await this.ormRepository.find();

    return vehiclesExpenses;
  }

  public async create(value: string, description: string, vehicle: Vehicle)
  : Promise<VehicleExpenses> {
    const expense = this.ormRepository.create({ value, description, vehicle });

    return this.ormRepository.save(expense);
  }

  public async save(expense: VehicleExpenses): Promise<VehicleExpenses> {
    return this.ormRepository.save(expense);
  }

  public async delete(expense: VehicleExpenses): Promise<void> {
    await this.ormRepository.remove(expense);
  }
}
