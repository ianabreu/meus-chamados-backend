import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

const ListCategoryController = {
  handle: async (request: Request, response: Response) => {
    const category = await ListCategoryService.execute();
    return response.status(200).json(category);
  },
};

export { ListCategoryController };
