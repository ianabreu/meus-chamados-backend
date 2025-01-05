import multer from "multer";
import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { CreateProductController } from "../controllers/product/CreateProductController";
import uploadConfig from "../config/multer";
import { ListByCategoryController } from "../controllers/product/ListByCategoryController";

const upload = multer(uploadConfig.upload("tmp"));

const productRouter = Router();

productRouter.post(
  "/product",
  isAuthenticated,
  upload.single("banner"),
  CreateProductController.handle
);
productRouter.get(
  "/category/product",
  isAuthenticated,
  ListByCategoryController.handle
);

export { productRouter };
