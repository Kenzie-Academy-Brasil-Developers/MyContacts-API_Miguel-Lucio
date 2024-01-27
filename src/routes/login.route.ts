import { Request, Response, Router } from "express";
import { loginController } from "../controllers";
import { validateBody } from "../middlewares/validateBody.middleware";
import { loginScchema } from "../schemas/login.schema";

export const loginRouter = Router();

loginRouter.post(
  "/",
  validateBody(loginScchema),
  (req: Request, res: Response) => loginController.login(req, res)
);
