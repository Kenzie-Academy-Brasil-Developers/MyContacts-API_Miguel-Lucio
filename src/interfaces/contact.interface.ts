import { z } from "zod";
import {
  contactCreateSchema,
  contactListSchema,
} from "../schemas/contact.schema";
import { DeepPartial } from "typeorm";

type TContactCreate = z.infer<typeof contactCreateSchema>;
type TContactUpdate = DeepPartial<TContactCreate>;
type TContactList = z.infer<typeof contactListSchema>;

export { TContactCreate, TContactUpdate, TContactList };
