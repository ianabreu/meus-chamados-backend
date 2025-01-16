import { Request, Response } from "express";
import { createCustomerSchema } from "../../schemas/customer/createCustomerDTO";
import { CreateCustomerService } from "../../services/customer/CreateCustomerService";

export class CreateCustomerController {
  async handle(request: Request, response: Response) {
    const data = createCustomerSchema.parse(request.body);
    const userId = request.user_id;
    const createCustomerService = new CreateCustomerService();
    const customer = await createCustomerService.execute({ ...data, userId });

    return response.status(201).json(customer);
  }
}
