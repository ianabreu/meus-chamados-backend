import { z } from "zod";

const authUserSchema = z.object({
  email: z
    .string({ message: "email is required" })
    .email("Invalid email format"),
  password: z
    .string({ message: "password is required" })
    .min(6, "Password must be at least 6 characters long"),
});

type AuthUserDTO = z.infer<typeof authUserSchema>;

export { authUserSchema, AuthUserDTO };
