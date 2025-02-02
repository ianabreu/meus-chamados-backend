import { Router } from "express";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { CreateTicketController } from "../controllers/ticket/CreateTicketController";
import { ListTicketController } from "../controllers/ticket/ListTicketController";
import { GetTicketByIdController } from "../controllers/ticket/GetTicketByIdController";
import { UpdateTicketController } from "../controllers/ticket/UpdateTicketController";
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
ticketRouter.put(
  "/tickets/:id",
  isAuthenticated,
  new UpdateTicketController().handle
);

export { ticketRouter };
