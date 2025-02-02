import prismaClient from "../../prisma";
import { UpdateTicketDTO } from "../../schemas/ticket/updateTicketDTO";

export class UpdateTicketService {
  async execute({
    ticketId,
    complement,
    customerId,
    status,
    topic,
  }: UpdateTicketDTO & { ticketId: string }) {
    const updateData = Object.fromEntries(
      Object.entries({
        complement,
        status,
        topic,
        customer: customerId ? { connect: { id: customerId } } : undefined,
      }).filter(([_, value]) => value !== undefined)
    );

    const ticket = await prismaClient.ticket.update({
      where: { id: ticketId },
      data: updateData,
    });
    return ticket;
  }
}
