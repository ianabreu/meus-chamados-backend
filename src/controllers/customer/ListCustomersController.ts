import { Request, Response } from "express";
import { ListCustomersService } from "../../services/customer/ListCustomersService";
import { listCustomerQuerySchema } from "../../schemas/customer/listCustomerQueryDTO";

export class ListCustomersController {
  async handle(request: Request, response: Response) {
    const userId = request.user_id;
    const query = listCustomerQuerySchema.parse(request.query);

    const listCustomersService = new ListCustomersService();
    const customers = await listCustomersService.execute(userId, query);

    return response.status(200).json(customers);
  }
}
