import { z } from "zod";

export const querySchema = z.object({
  name: z
    .string()
    .min(3, "The name should contain atleast 3 characters")
    .max(50, "The maximum 50 characters are allowed"),
  email: z
    .string()
    .min(5, "The email should contain atleast 5 characters")
    .max(50, "The maximum 50 characters are allowed"),
  message: z
    .string()
    .min(10, "The message should contain atleast 10 characters"),
});


