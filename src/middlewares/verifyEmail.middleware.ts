import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repositories";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError.error";

export const verifyEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;
  if (!email) return next();

  const foundUser: User | null = await userRepository.findOneBy({ email });
  if (foundUser) throw new AppError("Email already exists");

  return next();
};
