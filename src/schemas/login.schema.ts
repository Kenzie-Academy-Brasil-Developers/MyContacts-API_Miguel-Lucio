import { string, z } from "zod";
import { userReturnSchema } from "./user.schema";
import { contactListSchema } from "./contact.schema";

export const loginScchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const loginReturnSchema = z.object({
  token: z.string(),
  user: userReturnSchema.extend({ contacts: contactListSchema }),
});
