import {
  Router,
} from 'express';
import {
  celebrate,
  Segments,
  Joi,
} from 'celebrate';
import VehiclesExpensesController from '@modules/expenses/infra/http/controllers/VehiclesExpensesController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const expensesRouter = Router();
const vehiclesExpensesController = new VehiclesExpensesController();

expensesRouter.use(ensureAuthenticated);

expensesRouter.post('/', celebrate({
  [Segments.BODY]: {
    value: Joi.string().required(),
    description: Joi.string().required(),
    vehicle_id: Joi.string().uuid().required(),
  },
}), vehiclesExpensesController.create);

expensesRouter.delete('/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }), vehiclesExpensesController.delete);

expensesRouter.get('/', celebrate({
  [Segments.BODY]: {
    vehicle_id: Joi.string().uuid(),
  },
}), vehiclesExpensesController.show);

expensesRouter.get('/vehicle/:vehicle_id', celebrate({
  [Segments.PARAMS]: {
    vehicle_id: Joi.string().uuid().required(),
  },
}), vehiclesExpensesController.show);

expensesRouter.get('/:id', celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
}),
vehiclesExpensesController.find);

expensesRouter.put('/:id', celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
  [Segments.BODY]: {
    value: Joi.string().required(),
    description: Joi.string().required(),
    vehicle_id: Joi.string().uuid().required(),
  },
}), vehiclesExpensesController.update);

export default expensesRouter;
