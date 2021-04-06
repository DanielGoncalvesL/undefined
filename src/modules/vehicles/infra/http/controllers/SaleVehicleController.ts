// index, show, create, update, delete

import { Request, Response } from 'express';
// import CreateUserService from '@modules/users/services/CreateUserService';
import CreateVehicleSaleService from '@modules/vehicles/services/CreateVehicleSaleService';
import FindAllVehicleSaleService from '@modules/vehicles/services/FindAllVehicleSaleService';
import FindSaleVehicleService from '@modules/vehicles/services/FindSaleVehicleService';
import { container } from 'tsyringe';

export default class VehiclesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      saleValue,
      vehicle_id,
    } = request.body;

    const createSaleVehicle = container.resolve(CreateVehicleSaleService);

    const saleVehicle = await createSaleVehicle.execute(saleValue, vehicle_id);

    return response.status(201).json(saleVehicle);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findSaleVehicle = container.resolve(FindSaleVehicleService);

    const saleVehicle = await findSaleVehicle.execute(id);

    return response.status(200).json(saleVehicle);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const findAllSaleVehicles = container.resolve(FindAllVehicleSaleService);

    const saleVehicles = await findAllSaleVehicles.execute();

    return response.status(200).json(saleVehicles);
  }
}
