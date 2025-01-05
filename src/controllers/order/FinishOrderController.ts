import { Request, Response } from "express";
import { FinishOrderService } from "../../services/order/FinishOrderService";

const FinishOrderController = {
  handle: async (request: Request, response: Response) => {
    const order_id = request.body.order_id as string;
    const order = await FinishOrderService.execute({ order_id });
    return response.status(200).json(order);
  },
};
export { FinishOrderController };
