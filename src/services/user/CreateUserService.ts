import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
import { CreateUserDTO } from "../../schemas/user/createUserDTO";

export class CreateUserService {
  async execute({ name, email, password }: CreateUserDTO) {
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) throw new Error("user already exists");

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return user;
  }
}
