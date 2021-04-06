// index, show, create, update, delete

import { Request, Response } from 'express';
import ShowProfitsService from '@modules/expenses/services/ShowProfitsService';
import { container } from 'tsyringe';

export default class ExpensesController {
  public async show(request: Request, response: Response): Promise<Response> {
    const showProfits = container.resolve(ShowProfitsService);

    const profits = await showProfits.execute();

    return response.status(200).json(profits);
  }
}
