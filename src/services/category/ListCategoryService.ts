import prismaClient from "../../prisma";

const ListCategoryService = {
  execute: async () => {
    const category = await prismaClient.category.findMany({
      select: {
        id: true,
        name: true,
      },
      orderBy: {
        name: "asc",
      },
    });
    return category;
  },
};

export { ListCategoryService };
