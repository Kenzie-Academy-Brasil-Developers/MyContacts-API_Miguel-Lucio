import { User } from "../entities/user.entity";
import { TContactCreate } from "../interfaces/contact.interface";
import { contactRepository } from "../repositories";
import { contactSchema } from "../schemas/contact.schema";

export class ContactService {
  async create(data: TContactCreate, user: User) {
    const newContact = contactRepository.create({ ...data, user });
    await contactRepository.save(newContact);

    return contactSchema.parse(newContact);
  }
}
