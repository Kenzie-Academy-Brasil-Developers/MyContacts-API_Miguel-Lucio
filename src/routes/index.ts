import { Router } from "express";
import { userRouter } from "./user.route";
import { loginRouter } from "./login.route";

export const routes: Router = Router();

routes.use("/users", userRouter);
routes.use("/login", loginRouter);
