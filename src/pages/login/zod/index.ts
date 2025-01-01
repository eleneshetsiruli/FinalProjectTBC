import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(6, "must be at least 6 characters long")
    .nonempty("Password is required"),
});
