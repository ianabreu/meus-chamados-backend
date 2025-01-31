import prismaClient from "../../prisma";
import { ListTicketQueryDTO } from "../../schemas/ticket/ListTicketQueryDTO";
import { paginate } from "../../utils/pagination";

export class ListTicketService {
  async execute(
    userId: string,
    {
      search,
      limit = 5,
      page = 1,
      order_by = "created_at",
      order = "desc",
    }: ListTicketQueryDTO
  ) {
    if (page < 1) page = 1;
    if (limit < 1) limit = 5;
    if (limit > 40) limit = 40;

    const offset = (page - 1) * limit;
    try {
      const [tickets, total] = await Promise.all([
        prismaClient.ticket.findMany({
          where: {
            userId,
            customer: {
              OR: search
                ? [
                    { tradeName: { contains: search, mode: "insensitive" } },
                    { companyName: { contains: search, mode: "insensitive" } },
                    { cnpj: { contains: search, mode: "insensitive" } },
                  ]
                : undefined,
            },
          },
          skip: offset,
          take: limit,
          orderBy:
            order_by === "tradeName" ||
            order_by === "cnpj" ||
            order_by === "companyName"
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
      return paginate(tickets, total, limit, page);
    } catch (error) {
      console.error("Error listing tickets:", error);
      if (error instanceof Error) {
        throw error;
      } else {
        throw new Error("Failed to list tickets. Please try again later.");
      }
    }
  }
}
