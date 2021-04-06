import { container } from 'tsyringe';

import IUsersRepositories from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IVehiclesRepository from '@modules/vehicles/repositories/IVehiclesRepository';
import VehiclesRepository from '@modules/vehicles/infra/typeorm/repositories/VehiclesRepository';

import IExpensesRepository from '@modules/expenses/repositories/IExpensesRepository';
import ExpensesRepository from '@modules/expenses/infra/typeorm/repositories/ExpensesRepository';

import IVehicleExpensesRepository from '@modules/expenses/repositories/IVehicleExpensesRepository';
import VehicleExpensesRepository from '@modules/expenses/infra/typeorm/repositories/VehicleExpensesRepository';

import IVehicleSaleRepository from '@modules/vehicles/repositories/IVehicleSaleRepository';
import VehicleSaleRepository from '@modules/vehicles/infra/typeorm/repositories/VehicleSaleRepository';

import '@modules/users/providers';

container.registerSingleton<IUsersRepositories>('UsersRepository', UsersRepository);
container.registerSingleton<IVehiclesRepository>('VehiclesRepository', VehiclesRepository);
container.registerSingleton<IExpensesRepository>('ExpensesRepository', ExpensesRepository);
container.registerSingleton<IVehicleExpensesRepository>('VehicleExpensesRepository', VehicleExpensesRepository);
container.registerSingleton<IVehicleSaleRepository>('VehicleSaleRepository', VehicleSaleRepository);
