import { Router } from "express";
import { CreateCustomerController } from "../controllers/customer/CreateCustomerController";
import { isAuthenticated } from "../middlewares/isAuthenticated";
const customerRouter = Router();

customerRouter.post(
  "/customers",
  isAuthenticated,
  new CreateCustomerController().handle
);
// customerRouter.post("/session", new AuthUserController().handle);
// customerRouter.get("/me", isAuthenticated, new DetailUserController().handle);
// customerRouter.put("/users", isAuthenticated, new UpdateUserController().handle);

export { customerRouter };
