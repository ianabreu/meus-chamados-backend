import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";
import { authUserSchema } from "../../schemas/user/AuthUserDTO";

export class AuthUserController {
  async handle(request: Request, response: Response) {
    const data = authUserSchema.parse(request.body);
    const authService = new AuthUserService();
    const auth = await authService.execute(data);

    response.status(200).json(auth);
  }
}
