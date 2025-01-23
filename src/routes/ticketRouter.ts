import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { CreateTicketController } from "../controllers/ticket/CreateTicketController";
import { ListTicketController } from "../controllers/ticket/ListTicketController";
const ticketRouter = Router();

ticketRouter.post(
  "/tickets",
  isAuthenticated,
  new CreateTicketController().handle
);
ticketRouter.get(
  "/tickets",
  isAuthenticated,
  new ListTicketController().handle
);

export { ticketRouter };
