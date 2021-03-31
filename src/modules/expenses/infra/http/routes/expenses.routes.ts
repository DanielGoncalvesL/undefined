import {
  Router,
} from 'express';
import {
  celebrate,
  Segments,
  Joi,
} from 'celebrate';
import ExpensesController from '@modules/expenses/infra/http/controllers/ExpensesController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const expensesRouter = Router();
const expensesController = new ExpensesController();

expensesRouter.use(ensureAuthenticated);

expensesRouter.post('/', celebrate({
  [Segments.BODY]: {
    value: Joi.string().required(),
    description: Joi.string().required(),
    vehicle_id: Joi.string(),
  },
}), expensesController.create);

expensesRouter.delete('/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }), expensesController.delete);

expensesRouter.get('/', expensesController.show);

expensesRouter.get('/:id', celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
}),
expensesController.find);

expensesRouter.put('/:id', celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
  [Segments.BODY]: {
    value: Joi.string().required(),
    description: Joi.string().required(),
  },
}), expensesController.update);

export default expensesRouter;
