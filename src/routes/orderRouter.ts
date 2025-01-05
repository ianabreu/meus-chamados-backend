import { Router } from "express";

import { isAuthenticated } from "../middlewares/isAuthenticated";
import { CreateOrderController } from "../controllers/order/CreateOrderController";
import { DeleteOrderController } from "../controllers/order/DeleteOrderController";
import { AddItemController } from "../controllers/order/AddItemController";
import { RemoveItemController } from "../controllers/order/RemoveItemController";
import { SendOrderController } from "../controllers/order/SendOrderController";
import { ListOrdersController } from "../controllers/order/ListOrdersController";
import { DetailOrderController } from "../controllers/order/DetailOrderController";
import { FinishOrderController } from "../controllers/order/FinishOrderController";

const orderRouter = Router();

orderRouter.post("/order", isAuthenticated, CreateOrderController.handle);
orderRouter.delete("/order", isAuthenticated, DeleteOrderController.handle);

orderRouter.post("/order/add", isAuthenticated, AddItemController.handle);
orderRouter.delete(
  "/order/remove",
  isAuthenticated,
  RemoveItemController.handle
);
orderRouter.put("/order/send", isAuthenticated, SendOrderController.handle);
orderRouter.get("/orders", isAuthenticated, ListOrdersController.handle);
orderRouter.get("/order/detail", isAuthenticated, DetailOrderController.handle);
orderRouter.put("/order/finish", isAuthenticated, FinishOrderController.handle);

export { orderRouter };
