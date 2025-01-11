import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

export class DetailUserController {
  async handle(request: Request, response: Response) {
    const user_id = request.user_id;

    const detailUserService = new DetailUserService();
    const user = await detailUserService.execute(user_id);

    return response.status(200).json(user);
  }
}
