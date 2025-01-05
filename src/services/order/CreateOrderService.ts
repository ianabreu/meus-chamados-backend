import prismaClient from "../../prisma";

interface OrderRequest {
  table: number;
  name?: string;
}
const CreateOrderService = {
  execute: async ({ table, name }: OrderRequest) => {
    const order = await prismaClient.order.create({
      data: {
        table,
        name,
      },
    });
    return order;
  },
};
export { CreateOrderService };
