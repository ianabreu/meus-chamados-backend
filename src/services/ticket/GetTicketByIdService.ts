import prismaClient from "../../prisma";

export class GetTicketByIdService {
  async execute({ ticketId, userId }: { ticketId: string; userId: string }) {
    const ticket = await prismaClient.ticket.findUnique({
      where: { userId: userId, id: ticketId },
      include: {
        customer: {
          select: {
            id: true,
            tradeName: true,
            companyName: true,
            cnpj: true,
            address: true,
          },
        },
      },
    });
    return ticket;
  }
}
