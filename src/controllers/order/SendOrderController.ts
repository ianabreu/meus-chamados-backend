import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrderService";

const SendOrderController = {
  handle: async (request: Request, response: Response) => {
    const { order_id } = request.body;
    const sendOrder = await SendOrderService.execute({ order_id });
    return response.status(200).json(sendOrder);
  },
};
export { SendOrderController };
