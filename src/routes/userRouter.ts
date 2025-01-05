import { Router } from "express";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { AuthUserController } from "../controllers/user/AuthUserController";
import { DetailUserController } from "../controllers/user/DetailUserController";
import { isAuthenticated } from "../middlewares/isAuthenticated";
const userRouter = Router();

userRouter.post("/users", new CreateUserController().handle);
userRouter.post("/session", new AuthUserController().handle);
// userRouter.get("/me", isAuthenticated, DetailUserController.handle);

export { userRouter };
