import { Request, Response, Router } from "express";
import { userRouter } from "./userRouter";
import { customerRouter } from "./customerRouter";
import { ticketRouter } from "./ticketRouter";

const router = Router();
router.get("/", (request: Request, response: Response) => {
  return response.json({ massage: "Not Authorized" });
});

router.use(userRouter);
router.use(customerRouter);
router.use(ticketRouter);

export { router };
