import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError.error";
import { contactRepository } from "../repositories";

export const verifyContactEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { foundUser } = res.locals;
  const { email } = req.body;
  if (!email) return next();

  console.log(foundUser);
  const contact = await contactRepository.findOne({
    where: { email, user: foundUser },
  });

  console.log(contact);

  if (contact) throw new AppError("There is contact with this email.");

  return next();
};
