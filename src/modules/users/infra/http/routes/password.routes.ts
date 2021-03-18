import { Router } from 'express';

import { celebrate, Joi, Segments } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

import ResetPasswordController from '@modules/users/infra/http/controllers/ResetPasswordController';

const passwordRouter = Router();
const resetPasswordController = new ResetPasswordController();

passwordRouter.post(
  '/reset',
  celebrate({
    [Segments.BODY]: {
      password: Joi.string().required(),
      password_confirmation: Joi.string().valid(Joi.ref('password')),
    },
  }), ensureAuthenticated,
  resetPasswordController.create,
);

export default passwordRouter;
