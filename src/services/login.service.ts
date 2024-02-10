import { compare } from "bcryptjs";
import { AppError } from "../errors/AppError.error";
import { TLoginRequest, TLoginReturn } from "../interfaces/login.interface";
import { userRepository } from "../repositories";
import { sign } from "jsonwebtoken";
import { loginReturnSchema } from "../schemas/login.schema";

export class LoginService {
  async generateToken(data: TLoginRequest): Promise<TLoginReturn> {
    const { email, password } = data;

    const foundUser = await userRepository.findOne({
      where: { email },
      relations: ["contacts"],
    });
    if (!foundUser) throw new AppError("Invalid credentials.", 401);

    const matchPassword = await compare(password, foundUser.password);
    if (!matchPassword) throw new AppError("Invalid credentials.", 401);

    const token: string = sign(
      { admin: foundUser.admin },
      process.env.SECRET_KEY!,
      {
        subject: foundUser.id,
        expiresIn: process.env.EXPIRES_IN!,
      }
    );

    return loginReturnSchema.parse({ token, user: foundUser });
  }
}
