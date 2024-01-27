import { Request, Response, Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { userCreateSchema } from "../schemas/user.schema";
import { userController } from "../controllers";
import { verifyEmail } from "../middlewares/verifyEmail.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyAdimn } from "../middlewares/verifyAdmin.middleware";

export const userRouter = Router();

userRouter.post(
  "/",
  validateBody(userCreateSchema),
  verifyEmail,
  (req: Request, res: Response) => userController.create(req, res)
);

userRouter.get("/", verifyToken, verifyAdimn, (req: Request, res: Response) =>
  userController.read(req, res)
);
