import { Request, Response, Router } from "express";
import { userRouter } from "./userRouter";

const router = Router();
router.get("/", (request: Request, response: Response) => {
  return response.json({ massage: "Not Authorized" });
});

router.use(userRouter);

export { router };
