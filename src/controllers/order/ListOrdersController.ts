import { Request, Response } from "express";
import { ListOrdersService } from "../../services/order/ListOrdersService";

const ListOrdersController = {
  handle: async (request: Request, response: Response) => {
    const listOrders = await ListOrdersService.execute();

    return response.status(200).json(listOrders);
  },
};
export { ListOrdersController };
