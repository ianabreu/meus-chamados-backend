import { Request, Response } from "express";
import { ListTicketService } from "../../services/ticket/ListTicketService";

export class ListTicketController {
  async handle(request: Request, response: Response) {
    const userId = request.user_id;
    const listTicketService = new ListTicketService();
    const tickets = await listTicketService.execute({ userId });

    return response.status(200).json(tickets);
  }
}
