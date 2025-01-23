import { z } from "zod";

export const ListTicketQuerySchema = z.object({
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
    .enum(["created_at", "status", "topic", "tradeName"], {
      errorMap: () => ({
        message:
          "Order by must be one of 'created_at', 'status', 'topic' or 'tradeName'",
      }),
    })
    .optional(),
  order: z.enum(["asc", "desc"]).optional(),
});

export type ListTicketQueryDTO = z.infer<typeof ListTicketQuerySchema>;
