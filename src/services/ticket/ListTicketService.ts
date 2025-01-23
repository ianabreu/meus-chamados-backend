import prismaClient from "../../prisma";
import { ListTicketQueryDTO } from "../../schemas/ticket/ListTicketQueryDTO";

export class ListTicketService {
  async execute(
    userId: string,
    {
      limit = 10,
      page = 1,
      order_by = "created_at",
      order = "desc",
    }: ListTicketQueryDTO
  ) {
    if (page < 1) page = 1;
    if (limit < 1) limit = 10;

    const offset = (page - 1) * limit;

    const [tickets, total] = await Promise.all([
      prismaClient.ticket.findMany({
        where: { userId },
        skip: offset,
        take: limit,
        orderBy:
          order_by === "tradeName"
            ? { customer: { [order_by]: order } }
            : { [order_by]: order },
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
      }),
      prismaClient.ticket.count({ where: { userId } }),
    ]);

    const last_page = Math.ceil(total / limit);

    return {
      tickets,
      pagination: {
        total,
        last_page,
        current_page: page,
        has_next_page: page < last_page,
        has_previous_page: page > 1,
      },
    };
  }
}
