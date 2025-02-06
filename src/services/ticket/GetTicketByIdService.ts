import prismaClient from "../../prisma";

export class GetTicketByIdService {
  async execute({ ticketId, userId }: { ticketId: string; userId: string }) {
    try {
      const ticket = await prismaClient.ticket.findUniqueOrThrow({
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
    } catch (error) {
      throw new Error("Erro ao buscar ticket");
    }
  }
}
