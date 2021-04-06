// import VehicleExpenses from '@modules/expenses/infra/typeorm/entities/VehicleExpenses';
// import AppError from '@shared/errors/AppError';
import IVehicleSaleRepository from '@modules/vehicles/repositories/IVehicleSaleRepository';
import IExpensesRepository from '@modules/expenses/repositories/IExpensesRepository';
import IVehicleExpensesRepository from '@modules/expenses/repositories/IVehicleExpensesRepository';
import { injectable, inject } from 'tsyringe';

@injectable()
export default class FindAllExpenses {
  constructor(
    @inject('VehicleExpensesRepository')
    private vehicleExpensesRepository: IVehicleExpensesRepository,

    @inject('VehicleSaleRepository')
    private vehicleSaleRepository: IVehicleSaleRepository,

    @inject('ExpensesRepository')
    private expensesRepository: IExpensesRepository,
  ) {}

  public async execute(): Promise<number> {
    const vehiclesExpense = await this.vehicleExpensesRepository.find();
    const vehiclesSale = await this.vehicleSaleRepository.find();
    const expenses = await this.expensesRepository.find();

    let valueExpenses = 0;
    let valueExpenseVehicle = 0;
    let valueVehicleSale = 0;

    if (expenses) {
      for (const expense of expenses) {
        const clean = parseFloat(expense.value.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2);
        valueExpenses += Number(clean);
      }
    }

    if (vehiclesExpense) {
      for (const vehicleExpense of vehiclesExpense) {
        const clean = parseFloat(vehicleExpense.value.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2);
        valueExpenseVehicle += Number(clean);
      }
    }

    if (vehiclesSale) {
      for (const vehicleSale of vehiclesSale) {
        const clean = parseFloat(vehicleSale.saleValue.replace(/[^0-9,]*/g, '').replace(',', '.')).toFixed(2);
        valueVehicleSale += Number(clean);
      }
    }

    return valueVehicleSale - (valueExpenses + valueExpenseVehicle);
  }
}
