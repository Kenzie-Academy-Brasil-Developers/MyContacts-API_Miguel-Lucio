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
  const uuidRegex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;

  if (uuidRegex.test(id)) {
    const foundContact = await contactRepository.findOne({
      where: { user: foundUser, id },
    });
    if (!foundContact)
      throw new AppError("User does not have this contact", 404);

    res.locals = { ...res.locals, foundContact };
  } else {
    throw new AppError("User does not have this contact", 404);
  }

  return next();
};
