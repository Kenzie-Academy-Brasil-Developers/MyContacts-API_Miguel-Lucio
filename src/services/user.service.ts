import { User } from "../entities/user.entity";
import {
  TUserCreate,
  TUserList,
  TUserReturn,
  TUserUpdate,
} from "../interfaces/user.interface";
import { userRepository } from "../repositories";
import { userListSchema, userReturnSchema } from "../schemas/user.schema";

export class UserService {
  async create(data: TUserCreate): Promise<TUserReturn> {
    const newUser = userRepository.create(data);
    await userRepository.save(newUser);

    return userReturnSchema.parse(newUser);
  }

  async read(): Promise<TUserList> {
    const users = await userRepository.find();
    return userListSchema.parse(users);
  }

  async update(user: User, data: TUserUpdate): Promise<TUserReturn> {
    const updateUser = userRepository.create({ ...user, ...data });
    await userRepository.save(updateUser);

    return userReturnSchema.parse(updateUser);
  }

  async remove(user: User): Promise<void> {
    await userRepository.remove(user);
  }
}
