import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
import { CreateUserDTO } from "../../schemas/user/CreateUserDTO";

export class CreateUserService {
  async execute({ name, email, password }: CreateUserDTO) {
    const emailLowerCase = email.toLowerCase().trim();
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: emailLowerCase,
      },
    });

    if (userAlreadyExists) throw new Error("Credenciais inválidas");

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name,
        email: emailLowerCase,
        password: passwordHash,
        avatarUrl: null,
        avatarDeleteHash: null,
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatarUrl: true,
      },
    });
    return user;
  }
}
