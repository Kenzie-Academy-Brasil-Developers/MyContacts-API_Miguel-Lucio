import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/AppError.error";
import { TUserCreate, TUserReturn } from "../interfaces/user.interface";
import { userReturnSchema } from "../schemas/user.schema";

export class UserService {
  async create(data: TUserCreate): Promise<TUserReturn> {
    const userRepository = AppDataSource.getRepository(User);
    const foundUser = await userRepository.findOneBy({ email: data.email });

    if (foundUser) throw new AppError("Email already exists.");

    const newUser = userRepository.create(data);
    await userRepository.save(newUser);

    return userReturnSchema.parse(newUser);
  }
}
