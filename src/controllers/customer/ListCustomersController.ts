import { Request, Response } from "express";
import { ListCustomersService } from "../../services/customer/ListCustomersService";

export class ListCustomersController {
  async handle(request: Request, response: Response) {
    const userId = request.user_id;
    const listCustomersService = new ListCustomersService();
    const customers = await listCustomersService.execute({ userId });

    return response.status(200).json(customers);
  }
}
