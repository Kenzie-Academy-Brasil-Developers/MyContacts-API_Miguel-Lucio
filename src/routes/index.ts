import { Router } from "express";
import { userRouter } from "./user.route";
import { loginRouter } from "./login.route";
import { contactRouter } from "./contact.route";

export const routes: Router = Router();

routes.use("/users", userRouter);
routes.use("/login", loginRouter);
routes.use("/contacts", contactRouter);
