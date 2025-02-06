import { Router } from "express";
import { userRouter } from "./userRouter";
import { customerRouter } from "./customerRouter";
import { ticketRouter } from "./ticketRouter";

const router = Router();
router.use(userRouter);
router.use(customerRouter);
router.use(ticketRouter);

export { router };
