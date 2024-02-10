import { z } from "zod";
import { loginReturnSchema, loginScchema } from "../schemas/login.schema";

type TLoginRequest = z.infer<typeof loginScchema>;

type TLoginReturn = z.infer<typeof loginReturnSchema>;

export { TLoginRequest, TLoginReturn };
