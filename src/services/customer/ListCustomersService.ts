import prismaClient from "../../prisma";
import { listCustomerQueryDTO } from "../../schemas/customer/listCustomerQueryDTO";
import { paginate } from "../../utils/pagination";

export class ListCustomersService {
  async execute(
    userId: string,
    {
      search,
      limit = 5,
      page = 1,
      order_by = "tradeName",
      order = "asc",
    }: listCustomerQueryDTO
  ) {
    if (page < 1) page = 1;
    if (limit < 1) limit = 5;
    if (limit > 40) limit = 40;

    const offset = (page - 1) * limit;
    try {
      const [customers, total] = await Promise.all([
        prismaClient.customer.findMany({
          where: {
            userId,
            OR: search
              ? [
                  { tradeName: { contains: search, mode: "insensitive" } },
                  { companyName: { contains: search, mode: "insensitive" } },
                  { cnpj: { contains: search, mode: "insensitive" } },
                ]
              : undefined,
          },
          skip: offset,
          take: limit,
          orderBy: { [order_by]: order },
        }),
        prismaClient.customer.count({
          where: {
            userId,
            OR: search
              ? [
                  { tradeName: { contains: search, mode: "insensitive" } },
                  { companyName: { contains: search, mode: "insensitive" } },
                  { cnpj: { contains: search, mode: "insensitive" } },
                ]
              : undefined,
          },
        }),
      ]);

      return paginate(customers, total, limit, page);
    } catch (error) {
      throw error;
    }
  }
  async getAll(
    userId: string,
    { search, limit = 10 }: { search: string; limit?: number }
  ) {
    try {
      const customers = await prismaClient.customer.findMany({
        where: {
          userId,
          tradeName: {
            contains: search,
            mode: "insensitive",
          },
        },
        take: Number(limit),
        select: {
          id: true,
          tradeName: true,
        },
      });
      return customers;
    } catch (error) {
      console.log(error);
    }
  }
}
