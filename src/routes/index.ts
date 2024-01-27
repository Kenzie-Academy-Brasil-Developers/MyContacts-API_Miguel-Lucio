import { Router } from "express";
import { userRouter } from "./user.route";

export const routes: Router = Router();

routes.use("/user", userRouter);
