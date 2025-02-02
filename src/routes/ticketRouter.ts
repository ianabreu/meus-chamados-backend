import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { CreateTicketController } from "../controllers/ticket/CreateTicketController";
import { ListTicketController } from "../controllers/ticket/ListTicketController";
import { GetTicketByIdController } from "../controllers/ticket/GetTicketByIdController";
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
ticketRouter.get(
  "/tickets/:id",
  isAuthenticated,
  new GetTicketByIdController().handle
);

export { ticketRouter };
