import { z } from "zod";
import {
  userCreateSchema,
  userAdminOmitSchema,
  userReturnSchema,
  userListSchema,
} from "../schemas/user.schema";
import { DeepPartial } from "typeorm";

type TUserCreate = z.infer<typeof userCreateSchema>;
type TUserAdminOmit = z.infer<typeof userAdminOmitSchema>;
type TUserUpdate = DeepPartial<TUserAdminOmit>;
type TUserReturn = z.infer<typeof userReturnSchema>;
type TUserList = z.infer<typeof userListSchema>;

export { TUserCreate, TUserUpdate, TUserReturn, TUserList };
