import { Request, Response } from "express";
import { ListTicketService } from "../../services/ticket/ListTicketService";
import { Ticket } from "@prisma/client";
import { ListTicketQuerySchema } from "../../schemas/ticket/ListTicketQueryDTO";

export class ListTicketController {
  async handle(request: Request, response: Response) {
    const userId = request.user_id;
    const query = ListTicketQuerySchema.parse(request.query);
    const listTicketService = new ListTicketService();
    const tickets = await listTicketService.execute(userId, query);

    return response.status(200).json(tickets);
  }
}
