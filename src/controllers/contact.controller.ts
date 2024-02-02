import { Request, Response } from "express";
import { ContactService } from "../services/contact.service";

export class ContactController {
  constructor(private contactService: ContactService) {}

  async create(req: Request, res: Response) {
    const { foundUser } = res.locals;
    const newContact = await this.contactService.create(req.body, foundUser);
    return res.status(201).json(newContact);
  }

  async read(req: Request, res: Response) {
    const { foundUser } = res.locals;
    const contacts = await this.contactService.read(foundUser);
    return res.json(contacts);
  }

  async update(req: Request, res: Response) {
    const { foundContact } = res.locals;

    const contactUpdated = await this.contactService.update(
      foundContact,
      req.body
    );
    return res.json(contactUpdated);
  }

  async remove(req: Request, res: Response) {
    const { foundContact } = res.locals;

    await this.contactService.remove(foundContact);
    return res.status(204).json();
  }
}
