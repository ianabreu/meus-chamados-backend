import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";
import { createUserSchema } from "../../schemas/user/createUserDTO";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const data = createUserSchema.parse(request.body);
    const userService = new CreateUserService();
    const user = await userService.execute(data);

    return response.status(201).json(user);
  }
}
