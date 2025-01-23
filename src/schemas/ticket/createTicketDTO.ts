import { z } from "zod";

enum STATUS {
  Aberto = "Aberto",
  Atendido = "Atendido",
  Progresso = "Progresso",
}

const createTicketSchema = z.object({
  topic: z.string().nonempty("O assunto é obrigatório"),
  status: z
    .enum([STATUS.Aberto, STATUS.Atendido, STATUS.Progresso])
    .default(STATUS.Aberto),
  complement: z.string().optional(),
  customerId: z.string().nonempty("O id do cliente é obrigatório."),
});

type CreateTicketDTO = z.infer<typeof createTicketSchema>;

export { createTicketSchema, CreateTicketDTO };
