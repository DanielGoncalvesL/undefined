import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import authRouter from '@modules/users/infra/http/routes/auth.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/authenticate', authRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

export default routes;
