import { container } from 'tsyringe';

import IUsersRepositories from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import '@modules/users/providers';

container.registerSingleton<IUsersRepositories>('UsersRepository', UsersRepository);
