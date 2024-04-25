import { z } from "zod";

export const questionSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 5 characters.",
  }),
  explaination: z.string().min(50).max(400),
  tags: z.array(z.string().min(1).max(20)).min(1).max(15),
});
