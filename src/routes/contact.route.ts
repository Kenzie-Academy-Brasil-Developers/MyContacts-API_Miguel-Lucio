import { Request, Response, Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import {
  contactCreateSchema,
  contactUpdateSchema,
} from "../schemas/contact.schema";
import { verifyUserExists } from "../middlewares/verifyUserExists.middleware";
import { verifyContactEmail } from "../middlewares/verifyContactEmail.middleware";
import { contactController } from "../controllers";
import { verifyOwnerContact } from "../middlewares/verifyOwnerContact.middleware";

export const contactRouter = Router();

contactRouter.use("/", verifyToken, verifyUserExists);
contactRouter.post(
  "/",
  validateBody(contactCreateSchema),
  verifyContactEmail,
  (req: Request, res: Response) => contactController.create(req, res)
);
contactRouter.get("/", (req: Request, res: Response) =>
  contactController.read(req, res)
);

contactRouter.use("/:id", verifyToken, verifyUserExists, verifyOwnerContact);
contactRouter.patch(
  "/:id",
  validateBody(contactUpdateSchema),
  verifyContactEmail,
  (req: Request, res: Response) => contactController.update(req, res)
);
contactRouter.delete("/:id", (req: Request, res: Response) =>
  contactController.remove(req, res)
);
