import prismaClient from "../../prisma";

export class GetCustomerByIdService {
  async execute(customerId: string) {
    try {
      const customer = await prismaClient.customer.findUnique({
        where: { id: customerId },
      });
      return customer;
    } catch (error) {
      return null;
    }
  }
}
