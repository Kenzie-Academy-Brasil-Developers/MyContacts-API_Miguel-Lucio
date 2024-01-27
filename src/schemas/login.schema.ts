import { z } from "zod";

export const loginScchema = z.object({
  email: z.string(),
  password: z.string(),
});
