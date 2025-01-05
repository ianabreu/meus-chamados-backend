import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

const CreateProductController = {
  handle: async (request: Request, response: Response) => {
    const { category_id, description, name, price } = request.body as {
      name: string;
      price: string;
      description: string;
      category_id: string;
    };

    if (!request.file) {
      throw new Error("error upload file");
    } else {
      const { filename: banner } = request.file;

      const product = await CreateProductService.execute({
        banner,
        category_id,
        description,
        name,
        price: parseFloat(price),
      });
      return response.status(201).json(product);
    }
  },
};

export { CreateProductController };
