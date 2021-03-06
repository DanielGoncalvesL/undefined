import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import authRouter from '@modules/users/infra/http/routes/auth.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import vehiclesRouter from '@modules/vehicles/infra/http/routes/vehicles.routes';
import expensesRouter from '@modules/expenses/infra/http/routes/expenses.routes';
import vehicleExpenseRouter from '@modules/expenses/infra/http/routes/vehicles-expenses.routes';
import profitsRouter from '@modules/expenses/infra/http/routes/profits.routes';
import saleVehiclesSaleRouter from '@modules/vehicles/infra/http/routes/saleVehicles.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/authenticate', authRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);
routes.use('/vehicles', vehiclesRouter);
routes.use('/expenses', expensesRouter);
routes.use('/vehicle-expenses', vehicleExpenseRouter);
routes.use('/sale-vehicle', saleVehiclesSaleRouter);
routes.use('/profits', profitsRouter);

export default routes;
