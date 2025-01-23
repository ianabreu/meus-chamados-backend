import prismaClient from "../../prisma";
import { CreateTicketDTO } from "../../schemas/ticket/createTicketDTO";
import { GetCustomerByIdService } from "../customer/GetCustomerByIdService";

export class CreateTicketService {
  async execute({
    topic,
    status,
    complement,
    userId,
    customerId,
  }: CreateTicketDTO & { userId: string }) {
    const customer = await new GetCustomerByIdService().execute(customerId);
    if (!customer) {
      throw new Error("Cliente não cadastrado");
    }
    const ticket = await prismaClient.ticket.create({
      data: {
        userId,
        status,
        complement,
        topic,
        customerId: customer.id,
      },
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
