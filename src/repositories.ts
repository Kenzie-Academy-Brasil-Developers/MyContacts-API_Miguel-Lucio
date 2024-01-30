import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { Contact } from "./entities/contact.entity";
import { AppDataSource } from "./data-source";

const userRepository: Repository<User> = AppDataSource.getRepository(User);
const contactRepository: Repository<Contact> =
  AppDataSource.getRepository(Contact);

export { userRepository, contactRepository };
