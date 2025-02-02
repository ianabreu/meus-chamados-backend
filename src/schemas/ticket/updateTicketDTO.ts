import { z } from "zod";

enum STATUS {
  Aberto = "Aberto",
  Atendido = "Atendido",
  Progresso = "Progresso",
}

const updateTicketSchema = z.object({
  topic: z.string().optional(),
  status: z.enum([STATUS.Aberto, STATUS.Atendido, STATUS.Progresso]).optional(),
  complement: z.string().optional(),
  customerId: z.string().optional(),
});

type UpdateTicketDTO = z.infer<typeof updateTicketSchema>;

export { updateTicketSchema, UpdateTicketDTO };
