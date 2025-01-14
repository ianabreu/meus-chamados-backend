import { Router } from "express";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { AuthUserController } from "../controllers/user/AuthUserController";
import { DetailUserController } from "../controllers/user/DetailUserController";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { UpdateUserController } from "../controllers/user/UpdateUserController";
const userRouter = Router();

userRouter.post("/users", new CreateUserController().handle);
userRouter.post("/session", new AuthUserController().handle);
userRouter.get("/me", isAuthenticated, new DetailUserController().handle);
userRouter.put("/users", isAuthenticated, new UpdateUserController().handle);

export { userRouter };
