import { Request, Response } from "express";
import { GetTicketByIdService } from "../../services/ticket/GetTicketByIdService";

export class GetTicketByIdController {
  async handle(request: Request, response: Response) {
    const userId = request.user_id;
    const ticketId = request.params.id as string;

    const listTicketService = new GetTicketByIdService();
    const tickets = await listTicketService.execute({ ticketId, userId });

    return response.status(200).json(tickets);
  }
}
