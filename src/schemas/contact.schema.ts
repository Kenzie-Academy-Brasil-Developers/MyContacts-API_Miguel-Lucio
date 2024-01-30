import { z } from "zod";

const contactSchema = z.object({
  id: z.string(),
  fullName: z.string().max(120).min(2),
  email: z.string().max(50).email(),
  phone: z.string().max(20),
  registeredAt: z.string(),
});

const contactCreateSchema = contactSchema.omit({
  id: true,
  registeredAt: true,
});

const contactUpdateSchema = contactCreateSchema.partial();

const contactListSchema = contactSchema.array();

export {
  contactSchema,
  contactCreateSchema,
  contactUpdateSchema,
  contactListSchema,
};
