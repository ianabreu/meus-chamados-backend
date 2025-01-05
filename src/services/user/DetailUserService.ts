import prismaClient from "../../prisma";

const DetailUserService = {
  execute: async (user_id: string) => {
    const user = prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return user;
  },
};
export { DetailUserService };
