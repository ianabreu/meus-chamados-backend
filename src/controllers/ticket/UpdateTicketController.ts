import { Request, Response } from "express";
import { UpdateTicketService } from "../../services/ticket/UpdateTicketService";
import { updateTicketSchema } from "../../schemas/ticket/updateTicketDTO";

export class UpdateTicketController {
  async handle(request: Request, response: Response) {
    const ticketId = request.params.id as string;
    const data = updateTicketSchema.parse(request.body);

    const updateTicketService = new UpdateTicketService();
    const ticket = await updateTicketService.execute({ ...data, ticketId });

    return response.status(201).json(ticket);
  }
}
