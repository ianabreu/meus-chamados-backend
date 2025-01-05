import { Router } from "express";

import { isAuthenticated } from "../middlewares/isAuthenticated";
import { CreateCategoryController } from "../controllers/category/CreateCategoryController";
import { ListCategoryController } from "../controllers/category/ListCategoryController";
const categoryRouter = Router();

categoryRouter.post(
  "/category",
  isAuthenticated,
  CreateCategoryController.handle
);
categoryRouter.get("/category", isAuthenticated, ListCategoryController.handle);

export { categoryRouter };
