import { Request, Response, Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { contactCreateSchema } from "../schemas/contact.schema";
import { verifyUserExists } from "../middlewares/verifyUserExists.middleware";
import { verifyContactEmail } from "../middlewares/verifyContactEmail.middleware";
import { contactController } from "../controllers";

export const contactRouter = Router();

contactRouter.post(
  "/",
  verifyToken,
  verifyUserExists,
  validateBody(contactCreateSchema),
  verifyContactEmail,
  (req: Request, res: Response) => contactController.create(req, res)
);
