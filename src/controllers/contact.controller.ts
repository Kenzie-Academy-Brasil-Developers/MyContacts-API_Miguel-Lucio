import { Request, Response } from "express";
import { ContactService } from "../services/contact.service";

export class ContactController {
  constructor(private contactService: ContactService) {}

  async create(req: Request, res: Response) {
    const { foundUser } = res.locals;
    const newContact = await this.contactService.create(req.body, foundUser);
    return res.status(201).json(newContact);
  }
}
