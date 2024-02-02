import { z } from "zod";
import {
  contactCreateSchema,
  contactListSchema,
  contactSchema,
} from "../schemas/contact.schema";
import { DeepPartial } from "typeorm";

type TContact = z.infer<typeof contactSchema>;
type TContactCreate = z.infer<typeof contactCreateSchema>;
type TContactUpdate = DeepPartial<TContactCreate>;
type TContactList = z.infer<typeof contactListSchema>;

export { TContact, TContactCreate, TContactUpdate, TContactList };
