// index, show, create, update, delete

import { Request, Response } from 'express';
import CreateExpenseService from '@modules/expenses/services/CreateExpenseService';
import FindAllExpensesService from '@modules/expenses/services/FindAllExpensesService';
import FindExpenseService from '@modules/expenses/services/FindExpenseService';
import DeleteExpenseService from '@modules/expenses/services/DeleteExpenseService';
import UpdateExpenseService from '@modules/expenses/services/UpdateExpenseService';
import { container } from 'tsyringe';

export default class ExpensesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      value,
      description,
    } = request.body;

    const createExpense = container.resolve(CreateExpenseService);

    const expense = await createExpense.execute(value, description);

    return response.status(201).json(expense);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteExpense = container.resolve(DeleteExpenseService);

    await deleteExpense.execute(id);

    return response.status(200).json();
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findExpenseService = container.resolve(FindExpenseService);

    const expense = await findExpenseService.execute(id);

    return response.status(200).json(expense);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const findAllVehicles = container.resolve(FindAllExpensesService);

    const vehicles = await findAllVehicles.execute();

    return response.status(200).json(vehicles);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const {
      value,
      description,
    } = request.body;

    const updateExpenseService = container.resolve(UpdateExpenseService);

    const vehicle = await updateExpenseService.execute(id, value, description);

    return response.status(200).json(vehicle);
  }
}
