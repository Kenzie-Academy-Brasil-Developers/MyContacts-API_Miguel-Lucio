import { z } from "zod";
import { loginScchema } from "../schemas/login.schema";

type TLoginRequest = z.infer<typeof loginScchema>;

type TLoginReturn = {
  token: string;
};

export { TLoginRequest, TLoginReturn };
