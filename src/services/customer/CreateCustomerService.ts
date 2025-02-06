import prismaClient from "../../prisma";
import { CreateCustomerDTO } from "../../schemas/customer/createCustomerDTO";

export class CreateCustomerService {
  async execute({
    address,
    cnpj,
    companyName,
    tradeName,
    userId,
  }: CreateCustomerDTO & { userId: string }) {
    const alreadyExists = await prismaClient.customer.findUnique({
      where: { userId, cnpj },
    });
    if (alreadyExists) throw new Error("CNPJ já cadastrado.");

    const customer = await prismaClient.customer.create({
      data: {
        userId,
        address,
        cnpj,
        companyName,
        tradeName,
      },
    });
    return customer;
  }
}
