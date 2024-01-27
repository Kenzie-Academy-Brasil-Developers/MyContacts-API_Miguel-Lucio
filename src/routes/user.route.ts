import { Request, Response, Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { userCreateSchema } from "../schemas/user.schema";
import { userController } from "../controllers";

export const userRouter = Router();

userRouter.post(
  "/",
  validateBody(userCreateSchema),
  (req: Request, res: Response) => userController.create(req, res)
);
