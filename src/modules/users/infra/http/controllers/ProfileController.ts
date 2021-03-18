// index, show, create, update, delete

import { Request, Response } from 'express';
import UpdateUserService from '@modules/users/services/UpdateUserService';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

export default class ProfileController {
  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { name, email } = request.body;

    const updateUser = container.resolve(UpdateUserService);

    const user = await updateUser.execute({
      user_id,
      name,
      email,
    });

    return response.status(201).json(classToClass(user));
  }
}
