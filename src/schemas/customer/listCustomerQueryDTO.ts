import { z } from "zod";
import { Customer } from "@prisma/client";
export const listCustomerQuerySchema = z.object({
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
    .enum(["created_at", "tradeName", "cnpj", "companyName", "updated_at"], {
      errorMap: () => ({
        message:
          'Order by must be one of "created_at", "tradeName", "cnpj", "companyName", "updated_at"',
      }),
    })
    .optional(),
  order: z.enum(["asc", "desc"]).optional(),
});

export type listCustomerQueryDTO = z.infer<typeof listCustomerQuerySchema>;
