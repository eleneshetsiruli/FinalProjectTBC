import { z } from "zod";

export const schema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email address"),

  question: z
    .string()
    .min(5, "Question must be at least 5 characters")
    .nonempty("Question is required"),
});
