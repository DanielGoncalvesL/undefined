import {
  Router,
} from 'express';

import ProfitsController from '@modules/expenses/infra/http/controllers/ProfitsController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const expensesRouter = Router();
const profitsController = new ProfitsController();

expensesRouter.use(ensureAuthenticated);

expensesRouter.get('/', profitsController.show);

export default expensesRouter;
