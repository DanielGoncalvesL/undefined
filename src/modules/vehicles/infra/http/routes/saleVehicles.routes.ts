import {
  Router,
} from 'express';
import {
  celebrate,
  Segments,
  Joi,
} from 'celebrate';
import SaleVehicleController from '@modules/vehicles/infra/http/controllers/SaleVehicleController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const vehiclesRouter = Router();
const saleVehicleController = new SaleVehicleController();

vehiclesRouter.use(ensureAuthenticated);

vehiclesRouter.post('/', celebrate({
  [Segments.BODY]: {
    saleValue: Joi.string().required(),
    vehicle_id: Joi.string().uuid().required(),
  },
}), saleVehicleController.create);

vehiclesRouter.get('/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }), saleVehicleController.find);

vehiclesRouter.get('/', saleVehicleController.show);

export default vehiclesRouter;
