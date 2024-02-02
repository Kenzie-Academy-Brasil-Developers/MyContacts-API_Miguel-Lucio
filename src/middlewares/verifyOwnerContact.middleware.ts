import { NextFunction, Request, Response } from "express";
import { contactRepository } from "../repositories";
import { AppError } from "../errors/AppError.error";

export const verifyOwnerContact = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { foundUser } = res.locals;
  const { id } = req.params;

  const foundContact = await contactRepository.findOne({
    where: { user: foundUser, id },
  });

  if (!foundContact) throw new AppError("User does not have this contact", 404);

  res.locals = { ...res.locals, foundContact };

  return next();
};
