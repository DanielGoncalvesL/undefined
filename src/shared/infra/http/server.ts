import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import cors from 'cors';

import swaggerUi from 'swagger-ui-express';

import '@shared/infra/typeorm';

import '@shared/container';

import routes from '@shared/infra/http/routes';

import AppError from '@shared/errors/AppError';

import { isCelebrateError } from 'celebrate';

import swaggerFile from './swagger.json';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(routes);

app.use((error: Error, _: Request, response: Response, __: NextFunction) => {
  if (error instanceof AppError) {
    if (error.statusCode === 500) {
      return response.status(500).json({
        status: 'error',
        type: 'Internal',
        message: 'Internal server error',
      });
    }
    const { statusCode } = error;

    return response.status(statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  if (isCelebrateError(error)) {
    const values = error.details.values();
    let { message } = values.next().value.details[0];
    message = message.replace('"', '').replace('"', '');

    return response.status(400).json({
      status: 'error',
      type: 'validation',
      message,
    });
  }

  console.log(error)

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
