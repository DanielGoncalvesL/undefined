import { container } from 'tsyringe';

import IUsersRepositories from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IVehiclesRepository from '@modules/vehicles/repositories/IVehiclesRepository';
import VehiclesRepository from '@modules/vehicles/infra/typeorm/repositories/VehiclesRepository';

import IExpensesRepository from '@modules/expenses/repositories/IExpensesRepository';
import ExpensesRepository from '@modules/expenses/infra/typeorm/repositories/ExpensesRepository';

import '@modules/users/providers';

container.registerSingleton<IUsersRepositories>('UsersRepository', UsersRepository);
container.registerSingleton<IVehiclesRepository>('VehiclesRepository', VehiclesRepository);
container.registerSingleton<IExpensesRepository>('ExpensesRepository', ExpensesRepository);
