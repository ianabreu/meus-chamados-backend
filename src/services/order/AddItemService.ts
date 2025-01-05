import prismaClient from "../../prisma";

interface ItemRequest {
  order_id: string;
  product_id: string;
  amount: number;
}
const AddItemService = {
  execute: async ({ amount, order_id, product_id }: ItemRequest) => {
    const order = await prismaClient.item.create({
      data: {
        amount: amount,
        product_id: product_id,
        order_id: order_id,
      },
    });
    return order;
  },
};

export { AddItemService };
