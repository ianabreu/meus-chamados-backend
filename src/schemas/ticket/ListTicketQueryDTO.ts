import { z } from "zod";

export const listTicketQuerySchema = z.object({
  search: z.string().optional(),
  page: z
    .string()
    .regex(/^\d+$/, "Page must be a positive integer")
    .transform((value) => parseInt(value))
    .optional(),
  limit: z
    .string()
    .regex(/^\d+$/, "Limit must be a positive integer")
    .transform((value) => parseInt(value))
    .optional(),
  order_by: z
    .enum(
      ["created_at", "status", "topic", "tradeName", "companyName", "cnpj"],
      {
        errorMap: () => ({
          message:
            "Order by must be one of 'created_at', 'status', 'topic', 'tradeName', 'companyName' or 'cnpj'",
        }),
      }
    )
    .optional(),
  order: z.enum(["asc", "desc"]).optional(),
});

export type ListTicketQueryDTO = z.infer<typeof listTicketQuerySchema>;
