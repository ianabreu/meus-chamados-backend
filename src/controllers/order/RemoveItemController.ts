import { Request, Response } from "express";
import { RemoveItemService } from "../../services/order/RemoveItemService";

const RemoveItemController = {
  handle: async (request: Request, response: Response) => {
    const item_id = request.query.item_id as string;
    const removeItem = await RemoveItemService.execute({
      item_id,
    });
    return response.status(200).json(removeItem);
  },
};
export { RemoveItemController };
