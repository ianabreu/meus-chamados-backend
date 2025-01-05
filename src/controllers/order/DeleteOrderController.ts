import { Request, Response } from "express";
import { DeleteOrderService } from "../../services/order/DeleteOrderService";

const DeleteOrderController = {
  handle: async (request: Request, response: Response) => {
    const order_id = request.query.order_id as string;

    const removeOrder = await DeleteOrderService.execute({ order_id });
    return response.status(200).json(removeOrder);
  },
};
export { DeleteOrderController };
