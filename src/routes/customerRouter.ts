import { Router } from "express";
import { CreateCustomerController } from "../controllers/customer/CreateCustomerController";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { ListCustomersController } from "../controllers/customer/ListCustomersController";
const customerRouter = Router();

customerRouter.post(
  "/customers",
  isAuthenticated,
  new CreateCustomerController().handle
);
customerRouter.get(
  "/customers",
  isAuthenticated,
  new ListCustomersController().handle
);

export { customerRouter };
