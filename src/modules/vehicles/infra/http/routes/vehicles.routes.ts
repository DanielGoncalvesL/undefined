import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import VehicleController from '@modules/vehicles/infra/http/controllers/VehicleController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const vehiclesRouter = Router();
const vehicleController = new VehicleController();

vehiclesRouter.use(ensureAuthenticated);

vehiclesRouter.post('/', celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    fuel: Joi.string().required(),
    brand: Joi.string().required(),
    modelYear: Joi.string().required(),
    priceFipe: Joi.string().required(),
    fipeCode: Joi.string().required(),
  },
}), vehicleController.create);

vehiclesRouter.delete('/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }), vehicleController.delete);

vehiclesRouter.get('/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }), vehicleController.show);

vehiclesRouter.put('/:id', celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required(),
  },
  [Segments.BODY]: {
    name: Joi.string().required(),
    fuel: Joi.string().required(),
    brand: Joi.string().required(),
    modelYear: Joi.string().required(),
    priceFipe: Joi.string().required(),
    fipeCode: Joi.string().required(),
  },
}), vehicleController.update);

export default vehiclesRouter;
