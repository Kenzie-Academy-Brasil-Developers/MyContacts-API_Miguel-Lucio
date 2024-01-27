import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  fullName: z.string().max(120).min(2),
  email: z.string().max(50).email(),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  phone: z.string().max(20),
  registeredAt: z.string(),
});

const userCreateSchema = userSchema.omit({ id: true, registeredAt: true });

const userAdminOmitSchema = userCreateSchema.omit({ admin: true });
const userUpdateSchema = userAdminOmitSchema.partial();

const userReturnSchema = userSchema.omit({ password: true });
const userListSchema = userReturnSchema.array();

export {
  userCreateSchema,
  userAdminOmitSchema,
  userUpdateSchema,
  userReturnSchema,
  userListSchema,
};
