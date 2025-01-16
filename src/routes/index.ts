import { Request, Response, Router } from "express";
import { userRouter } from "./userRouter";
import { customerRouter } from "./customerRouter";

const router = Router();
router.get("/", (request: Request, response: Response) => {
  return response.json({ massage: "Not Authorized" });
});

router.use(userRouter);
router.use(customerRouter);

export { router };
