// index, show, create, update, delete

import { Request, Response } from 'express';
// import CreateUserService from '@modules/users/services/CreateUserService';
import CreateVehicleService from '@modules/vehicles/services/CreateVehicleService';
import DeleteVehicleService from '@modules/vehicles/services/DeleteVehicleService';
import FindVehicleService from '@modules/vehicles/services/FindVehicleService';
import UpdateVehicleService from '@modules/vehicles/services/UpdateVehicleService';
import { container } from 'tsyringe';

export default class VehiclesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      fuel,
      brand,
      modelYear,
      priceFipe,
      fipeCode,
    } = request.body;

    const createVehicle = container.resolve(CreateVehicleService);

    const vehicle = await createVehicle.execute({
      name,
      brand,
      fipeCode,
      fuel,
      modelYear,
      priceFipe,
    });

    return response.status(201).json(vehicle);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteVehicle = container.resolve(DeleteVehicleService);

    await deleteVehicle.execute(id);

    return response.status(200).json();
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findVehicleService = container.resolve(FindVehicleService);

    const vehicle = await findVehicleService.execute(id);

    return response.status(200).json(vehicle);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const {
      name,
      fuel,
      brand,
      modelYear,
      priceFipe,
      fipeCode,
    } = request.body;

    const updateVehicleService = container.resolve(UpdateVehicleService);

    const vehicle = await updateVehicleService.execute({
      id,
      name,
      fuel,
      brand,
      modelYear,
      priceFipe,
      fipeCode,
    });

    return response.status(200).json(vehicle);
  }
}
