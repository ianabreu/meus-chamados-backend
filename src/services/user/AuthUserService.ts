import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AuthUserDTO } from "../../schemas/user/AuthUserDTO";

export class AuthUserService {
  async execute({ email, password }: AuthUserDTO) {
    const secretOrPrivateKey = process.env.SECRET_JWT;
    if (!secretOrPrivateKey) {
      throw new Error("JWT secret is not defined");
    }

    const user = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });
    if (!user) throw new Error("Credenciais inválidas");

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error("Credenciais inválidas");

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      secretOrPrivateKey,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar_url: user.avatar_url,
      token: token,
    };
  }
}
