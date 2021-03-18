import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import ProfileController from '@modules/users/infra/http/controllers/ProfileController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.put('/', ensureAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    },
  }), profileController.update);

export default profileRouter;
