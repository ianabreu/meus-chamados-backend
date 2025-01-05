import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

const CreateCategoryController = {
  handle: async (request: Request, response: Response) => {
    const name = request.body.name as string;
    if (!name) throw new Error("name invalid");
    const category = await CreateCategoryService.execute({ name: name.trim() });
    return response.status(201).send();
  },
};

export { CreateCategoryController };
