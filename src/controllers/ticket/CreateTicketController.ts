import { Request, Response } from "express";
import { createTicketSchema } from "../../schemas/ticket/createTicketDTO";
import { CreateTicketService } from "../../services/ticket/CreateTicketService";

export class CreateTicketController {
  async handle(request: Request, response: Response) {
    const data = createTicketSchema.parse(request.body);
    const userId = request.user_id;
    const createTicketService = new CreateTicketService();
    const ticket = await createTicketService.execute({ ...data, userId });

    return response.status(201).json(ticket);
  }
}
