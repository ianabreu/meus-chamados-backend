import prismaClient from "../../prisma";

export class ListTicketService {
  async execute({ userId }: { userId: string }) {
    const tickets = await prismaClient.ticket.findMany({
      where: { userId },
      orderBy: { created_at: "desc" },
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
    return tickets;
  }
}
