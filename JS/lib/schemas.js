import { z } from "zod";

export const candidateSchema = z.object({
  firstName: z
    .string()
    .min(5, "First name should be min 5 characters")
    .max(25, "First name cannot be more than 25 characters"),
  lastName: z
    .string()
    .min(3, "Last name should be min 3 characters")
    .max(15, "Last name cannot be more than 55 characters"),
  location: z.string().min(1, "Location is required"),
  jobProfile: z
    .string()
    .min(10, "Job profile should be min 10 characters")
    .max(255, "Job profile cannot be more than 255 characters"),
});
