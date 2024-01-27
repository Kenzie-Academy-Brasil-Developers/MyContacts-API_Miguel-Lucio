import { Request, Response, Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { userCreateSchema } from "../schemas/user.schema";
import { userController } from "../controllers";
import { verifyEmail } from "../middlewares/verifyEmail.middleware";

export const userRouter = Router();

userRouter.post(
  "/",
  validateBody(userCreateSchema),
  verifyEmail,
  (req: Request, res: Response) => userController.create(req, res)
);
