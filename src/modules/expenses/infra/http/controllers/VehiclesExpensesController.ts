// index, show, create, update, delete

import { Request, Response } from 'express';
import CreateExpenseVehicleService from '@modules/expenses/services/CreateExpenseVehicleService';
import FindAllVehicleExpenseService from '@modules/expenses/services/FindAllVehicleExpenseService';
import FindVehicleExpenseService from '@modules/expenses/services/FindVehicleExpenseService';
import UpdateVehicleExpenseService from '@modules/expenses/services/UpdateVehicleExpenseService';
import DeleteVehicleExpeseService from '@modules/expenses/services/DeleteVehicleExpeseService';
import { container } from 'tsyringe';

export default class VehiclesExpenses {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      value,
      description,
      vehicle_id,
    } = request.body;

    const createExpenseVehicleService = container.resolve(CreateExpenseVehicleService);

    const expense = await createExpenseVehicleService.execute(value, description, vehicle_id);

    return response.status(201).json(expense);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteVehicleExpense = container.resolve(DeleteVehicleExpeseService);

    await deleteVehicleExpense.execute(id);

    return response.status(200).json();
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findVehicleExpenseService = container.resolve(FindVehicleExpenseService);

    const expense = await findVehicleExpenseService.execute(id);

    return response.status(200).json(expense);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const findAllVehiclesExpenses = container.resolve(FindAllVehicleExpenseService);

    const vehiclesExpenses = await findAllVehiclesExpenses.execute();

    return response.status(200).json(vehiclesExpenses);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const {
      value,
      description,
      vehicle_id,
    } = request.body;

    const updateVehicleExpenseService = container.resolve(UpdateVehicleExpenseService);

    const vehicleExpense = await updateVehicleExpenseService
      .execute(id, value, description, vehicle_id);

    return response.status(200).json(vehicleExpense);
  }
}
