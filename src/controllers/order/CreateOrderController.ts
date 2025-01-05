import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

const CreateOrderController = {
  handle: async (request: Request, response: Response) => {
    const { table, name } = request.body;

    const order = await CreateOrderService.execute({ table, name });
    return response.status(201).json(order);
  },
};
export { CreateOrderController };
