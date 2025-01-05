import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

const AddItemController = {
  handle: async (request: Request, response: Response) => {
    const { amount, order_id, product_id } = request.body;
    const addItem = await AddItemService.execute({
      amount,
      order_id,
      product_id,
    });
    return response.status(201).json(addItem);
  },
};
export { AddItemController };
