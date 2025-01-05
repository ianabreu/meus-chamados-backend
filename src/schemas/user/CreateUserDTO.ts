import { z } from "zod";

const createUserSchema = z.object({
  name: z.string({ message: "name is required" }).min(1, "name is required"),
  email: z
    .string({ message: "email is required" })
    .email("Invalid email format"),
  password: z
    .string({ message: "password is required" })
    .min(6, "Password must be at least 6 characters long"),
});

type CreateUserDTO = z.infer<typeof createUserSchema>;

export { createUserSchema, CreateUserDTO };
