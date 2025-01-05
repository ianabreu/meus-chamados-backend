import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

const DetailUserController = {
  handle: async (request: Request, response: Response) => {
    const user_id = request.user_id;

    const user = await DetailUserService.execute(user_id);

    return response.status(200).json(user);
  },
};
export { DetailUserController };
