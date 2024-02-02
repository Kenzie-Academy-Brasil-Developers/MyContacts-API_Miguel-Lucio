import { Contact } from "../entities/contact.entity";
import { User } from "../entities/user.entity";
import {
  TContact,
  TContactCreate,
  TContactList,
  TContactUpdate,
} from "../interfaces/contact.interface";
import { contactRepository } from "../repositories";
import { contactListSchema, contactSchema } from "../schemas/contact.schema";

export class ContactService {
  async create(data: TContactCreate, user: User): Promise<TContact> {
    const newContact = contactRepository.create({ ...data, user });
    await contactRepository.save(newContact);

    return contactSchema.parse(newContact);
  }

  async read(user: User): Promise<TContactList> {
    const contacts = await contactRepository.find({ where: { user } });
    return contactListSchema.parse(contacts);
  }

  async update(contact: Contact, data: TContactUpdate): Promise<TContact> {
    const contactUpdated = contactRepository.create({ ...contact, ...data });
    await contactRepository.save(contactUpdated);

    return contactSchema.parse(contactUpdated);
  }

  async remove(contact: Contact): Promise<void> {
    await contactRepository.remove(contact);
  }
}
