import { Request, Response } from "express";
import busboy, { Busboy, FileInfo } from "busboy";
import { Readable } from "stream";
import { UpdateUserService } from "../../services/user/UpdateUserService";

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const userId = request.user_id;
    const bb: Busboy = busboy({ headers: request.headers });

    let name: string | undefined;
    let avatarBuffer: Buffer | undefined;
    let info: FileInfo | undefined;

    bb.on("file", (fieldname: string, file: Readable, fileInfo: FileInfo) => {
      if (fieldname === "avatar") {
        const buffers: Buffer[] = [];
        info = fileInfo;

        file.on("data", (data: Buffer) => {
          buffers.push(data);
        });
        file.on("end", () => {
          avatarBuffer = Buffer.concat(buffers);
        });
      }
    });

    bb.on("field", (fieldname, val) => {
      if (fieldname === "name") {
        name = val;
      }
    });

    bb.on("finish", async () => {
      try {
        const updateUserService = new UpdateUserService();
        if (!avatarBuffer) {
          const updatedUser = await updateUserService.execute({
            user_id: userId,
            name: name,
          });

          return response.status(200).json(updatedUser);
        } else {
          const res = await updateUserService.uploadImage(
            avatarBuffer,
            `mycallings-profile-${userId}`,
            userId
          );
          const image = res.data as {
            link: string | undefined;
            deletehash: string | undefined;
          };

          const updatedUser = await updateUserService.execute({
            user_id: userId,
            name: name,
            avatarUrl: image.link,
            avatarDeleteHash: image.deletehash,
          });

          response.status(200).json(updatedUser);
        }
      } catch (error: any) {
        if (error.response) {
          // Erro de resposta HTTP
          console.error("Erro na resposta:", error.response.data);
          console.error("Status:", error.response.status);
        } else if (error.request) {
          // Erro na requisição
          console.error("Erro na requisição:", error.request);
        }
        console.error("Erro ao repassar o arquivo:");
        response
          .status(500)
          .send("Erro ao repassar o arquivo para a outra API.");
      }
    });

    request.pipe(bb);
  }
}
