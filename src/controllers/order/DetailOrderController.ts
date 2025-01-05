import { Request, Response } from "express";
import prismaClient from "../../prisma";
import { DetailOrderService } from "../../services/order/DetailOrderService";

interface OrderRequest {
  order_id: string;
}
const DetailOrderController = {
  handle: async (request: Request, response: Response) => {
    const order_id = request.query.order_id as string;
    const listItems = await DetailOrderService.execute({ order_id });

    return response.status(200).json(listItems);
  },
};
export { DetailOrderController };
