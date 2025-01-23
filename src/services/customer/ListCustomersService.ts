import prismaClient from "../../prisma";

export class ListCustomersService {
  async execute({ userId }: { userId: string }) {
    const customers = await prismaClient.customer.findMany({
      where: { userId: userId },
      orderBy: [{ tradeName: "asc" }],
    });
    return customers;
  }
}
