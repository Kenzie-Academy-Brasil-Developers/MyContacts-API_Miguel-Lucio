import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repositories";
import { AppError } from "../errors/AppError.error";

export const verifyId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const foundUser = await userRepository.findOneBy({ id });
  if (!foundUser) throw new AppError("User not found.", 404);

  res.locals = { ...res.locals, foundUser };

  return next();
};
