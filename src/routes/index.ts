import { Router } from "express";
import { userRouter } from "./user.route";
import { loginRouter } from "./login.route";
import { contactRouter } from "./contact.route";
import { profileRouter } from "./profile.route";

export const routes: Router = Router();

routes.use("/users", userRouter);
routes.use("/login", loginRouter);
routes.use("/profile", profileRouter);
routes.use("/contacts", contactRouter);
