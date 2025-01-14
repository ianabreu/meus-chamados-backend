import axios, { AxiosError } from "axios";
import prismaClient from "../../prisma";

interface UpdateExecuteProps {
  user_id: string;
  name?: string;
  avatarUrl?: string;
  avatarDeleteHash?: string;
}
export class UpdateUserService {
  async uploadImage(bufferImage: Buffer, title: string, user_id: string) {
    const previowsData = await prismaClient.user.findUnique({
      where: { id: user_id },
      select: { avatarDeleteHash: true },
    });

    const response = await axios.post(
      "https://api.imgur.com/3/image",
      {
        image: bufferImage.toString("base64"),
        type: "base64",
        title: title,
      },
      {
        headers: {
          Authorization: `Client-ID ${process.env.CLIENT_ID}`,
        },
      }
    );

    if (previowsData !== null && previowsData?.avatarDeleteHash !== null) {
      axios
        .delete(
          `https://api.imgur.com/3/image/${previowsData.avatarDeleteHash}`,
          {
            headers: {
              Authorization: `Client-ID ${process.env.CLIENT_ID}`,
            },
          }
        )
        .catch((e) => {
          if (e instanceof AxiosError) {
            console.log(e.response?.data);
          } else {
            console.log("Erro geral ao deletar imagem: ", e);
          }
        });
    }

    if (response.data.success) {
      return response.data;
    }
  }
  async execute({
    user_id,
    name,
    avatarUrl,
    avatarDeleteHash,
  }: UpdateExecuteProps) {
    const updatedUser = await prismaClient.user.update({
      where: { id: user_id },
      data: {
        ...(name && { name }),
        ...(avatarUrl && { avatarUrl }),
        ...(avatarUrl && { avatarDeleteHash }),
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatarUrl: true,
      },
    });
    return updatedUser;
  }
}
